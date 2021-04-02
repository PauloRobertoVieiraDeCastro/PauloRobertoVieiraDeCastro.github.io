import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import math
import seaborn as sns
from sklearn.preprocessing import MinMaxScaler, StandardScaler
from keras.models import Sequential
from keras.layers import Dense, Dropout, LSTM
import warnings
warnings.filterwarnings("ignore")
import statsmodels.api as sm
import statsmodels.formula.api as smf
import yfinance as yf
import pandas_datareader as data
from pandas_datareader import data as wb
import matplotlib.dates as mdates
from scipy.stats import norm
#from mplfinance import candlestick_ohlc
import plotly.express as px
import datetime as dt
import mplfinance as mpf
from statsmodels.tsa.seasonal import seasonal_decompose
from pmdarima.arima import auto_arima
from sklearn.metrics import mean_absolute_error
#from fbprophet import Prophet
import streamlit as st
from PIL import Image
from pyti.bollinger_bands import upper_bollinger_band as bb_up
from pyti.bollinger_bands import middle_bollinger_band as bb_mid
from pyti.bollinger_bands import lower_bollinger_band as bb_low
st.set_option('deprecation.showPyplotGlobalUse', False)

st.markdown("<h2 style='margin-top: -40px; font-family: Helvetica; font-weight:bold; margin-left: 140px'>Análise descritiva</h2>", unsafe_allow_html=True)
#st.beta_set_page_config(page_title='your_title', page_icon = favicon, layout = 'wide', initial_sidebar_state = 'auto')
#st.title("""Análise descritiva""")
#image = Image.open("C:/Users/rober/Desktop/Python/Mercado Financeiro/acoes.jpg")
#st.image(image,use_column_width=True)

#---------------sidebar---------------------------------------------------------------------------------------------------------------------------------------


st.sidebar.header("Dados de entrada")
acao = st.sidebar.selectbox('Selecione a ação',
                              ( 'PETR3.SA', 'PETR4.SA','CSAN3.SA','BRKM5.SA','UGPA3.SA',"EQTL3.SA","BBAS3.SA",'BBSE3.SA','BBDC3.SA','BBDC4.SA','ITSA4.SA',
                                'ABEV3.SA','VIVT3.SA','OIBR4.SA','MGLU3.SA','LAME4.SA','LREN3.SA','RENT3.SA','GGBR4.SA','CCRO3.SA','EMBR3.SA','SBSP3.SA',
                                'MRVE3.SA','IBOVESPA','BRENT','DÓLAR',"EURO"))


if(acao == 'IBOVESPA'):
    acao = '^BVSP'
if(acao == 'BRENT'):
    acao = 'BZ=F'
if(acao == 'DÓLAR'):
    acao = 'BRL=X'
if(acao == 'EURO'):
    acao = 'EURBRL=X'
    
modelo = st.sidebar.selectbox('Selecione o modelo preditivo',
                              ('ARIMA','Monte Carlo'))

x = np.arange(1,41)
tempo = st.sidebar.select_slider('Selecione o tempo de predição em semanas',options=list(x))
col1, col2, col3 = st.sidebar.beta_columns(3)


submit = col2.button('Calcular')

#--------------------------------------ANALISE ESTATISTICA BASICA-----------------------------------------------------------------------------------------------

df = data.DataReader(name = acao, data_source='yahoo', start='2018-06-06', end=dt.datetime.now())
st.header("Estatística descritiva da ação "+acao)
st.write(df.describe())
figura = px.line()
figura2 = px.line(title="")
st.header("Histórico de fechamento da "+acao)
figura.add_scatter(x=df['Adj Close'].index,y=df['Adj Close'],name=acao)
figura.update_layout(autosize=True,
                  width=800, height=450,
                  margin=dict(l=40, r=40, b=40, t=40))
figura2.add_scatter(x=df['Volume'].index,y=df['Volume'],name=acao)
figura2.update_layout(autosize=True,
                  width=800, height=450,
                  margin=dict(l=40, r=40, b=40, t=40))
st.plotly_chart(figura,use_container_width=False)
st.header("Histórico de volumes da "+acao)
st.plotly_chart(figura2,use_container_width=False)

col10, col20, col30 = st.sidebar.beta_columns(3)

kk = f"**{round(df['Adj Close'].tail(1)[0],2)}**"
kk1 = f"**{round(100*(df['Adj Close'].iloc[-1] - df['Adj Close'].iloc[-2])/(df['Adj Close'].iloc[-1]),2)}**"
#st.sidebar.markdown('<p class="big-font">f"**{round(df["Adj Close"].tail(1)[0],2)}**"</p>', unsafe_allow_html=True)
st.sidebar.write("Valor de fechamento autalizado da "+acao+": "+kk)
st.sidebar.write("Variação diária de: "+kk1+"%")
#st.sidebar.write("{.:2f}".format(df['Adj Close'].tail(1)[0]))


#-------------------------------------ANALISE DE TENDENCIAS BASICA-----------------------------------------------------------------------------------------------

#---bandas de bollinger
st.markdown("<hr style='margin-bottom: 40px'>", unsafe_allow_html=True)
st.markdown("<h2 style='margin-top: -40px; font-family: Helvetica; font-weight:bold; margin-left: 140px'>Análise de tendências</h2>", unsafe_allow_html=True)

dff = df['2020-12-12':]
st.header("Tendência de evolução da "+acao+" pelas bandas de Bollinger - Período de 21 dias")
data = dff['Close'].values.tolist()
period = 21
bb_up = bb_up(data,period)
bb_mid = bb_mid(data,period)
bb_low = bb_low(data,period)
dff['bb_up'] = bb_up
dff['bb_mid'] = bb_mid
dff['bb_low'] = bb_low
apd = mpf.make_addplot(dff[['bb_up', 'bb_mid', 'bb_low']])
bollinger = mpf.plot(dff, type='candle', addplot=apd, volume=False)
st.pyplot(bollinger)


#-------ifr
stock = pd.DataFrame(df['Adj Close'].copy())
#
stock['Variation'] = stock['Adj Close'].diff()
stock = stock[1:] # remove first row once it does not have a variation
stock['Gain'] = np.where(stock['Variation'] > 0, stock['Variation'], 0) 
stock['Loss'] = np.where(stock['Variation'] < 0, stock['Variation'], 0)
n = 14 # define window interval
simple_avg_gain = stock['Gain'].rolling(n).mean()
simple_avg_loss = stock['Loss'].abs().rolling(n).mean()
# start off of simple average series
classic_avg_gain = simple_avg_gain.copy()
classic_avg_loss = simple_avg_loss.copy()

# iterate over the new series but only change values after the nth element
for i in range(n, len(classic_avg_gain)):
    classic_avg_gain[i] = (classic_avg_gain[i - 1] * (n - 1) + stock['Gain'].iloc[i]) / n
    classic_avg_loss[i] = (classic_avg_loss[i - 1] * (n - 1) + stock['Loss'].abs().iloc[i]) / n
stock['Simple RS'] = simple_avg_gain / simple_avg_loss
stock['Classic RS'] = classic_avg_gain / classic_avg_loss
stock['Simple RSI'] = 100 - (100 / (1 + stock['Simple RS']))
stock['Classic RSI'] = 100 - (100 / (1 + stock['Classic RS']))
#stock[['Simple RS', 'Classic RS']].head(20)
#st.write(stock.tail())
#st.write(stock.iloc[:].diff())
#stock = stock[1:] # remove first row once it does not have a variation
#stock.head()
plt.title("IFR PETR4")
stock['Classic RSI'].plot()
plt.axhline(y=30, color='black', linestyle='--')
plt.axhline(y=70, color='black', linestyle='--')
plt.axhspan(30, 70, color='thistle')
plt.ylim(0, 100)

figura10 = px.line(title=" ")
st.header("Avaliação de força relativa (IFR) da "+acao)
figura10.add_scatter(x=stock.index,y=stock['Classic RSI'],name=acao)
figura10.update_layout(autosize=True,
                  width=800, height=450,
                  margin=dict(l=40, r=40, b=40, t=40))
st.plotly_chart(figura10,use_container_width=False)


#-------------------------TENDÊNCIA PELO ARIMA-----------------------------------------------------------------
st.header("Avaliação de tendência pelo algoritmo ARIMA da ação "+acao)
z = int(len(df['Adj Close'])/2)
decomposicao = seasonal_decompose(df['Adj Close'],freq=20)
tendencia = decomposicao.trend
#st.write(tendencia)
figura11 = px.line(title=" ")
figura11.add_scatter(x=tendencia.index,y=tendencia.iloc[:],name=acao)
figura11.update_layout(autosize=True,
                  width=800, height=450,
                  margin=dict(l=40, r=40, b=40, t=40))
st.plotly_chart(figura11,use_container_width=False)



#--------------------------------------MEDIDAS DE VOLATILIDADE----------------------------------------------------------------------
st.markdown("<hr style='margin-bottom: 40px'>", unsafe_allow_html=True)
st.markdown("<h2 style='margin-top: -40px; font-family: Helvetica; font-weight:bold; margin-left: 140px'>Análise de volatilidade</h2>", unsafe_allow_html=True)

st.header("Volatilidade por drawdown da ação "+acao)
data1 = pd.DataFrame(df['Adj Close'].copy())
data1["Max"] = data1['Adj Close'].cummax()
data1["Delta"] = data1["Max"] - data1["Adj Close"]
data1["Drawdown"] = 100 * (data1["Delta"] / data1["Max"])
figura12 = px.line(title=" ")
figura12.add_scatter(x=data1.index,y=data1['Drawdown'],name=acao)
figura12.update_layout(autosize=True,
                  width=800, height=450,
                  margin=dict(l=40, r=40, b=40, t=40))
st.plotly_chart(figura12,use_container_width=False)

#------------------------covariancia------------------------------------------------------------------------------------------------------------------------------
act = ('PETR3.SA', 'PETR4.SA','CSAN3.SA','BRKM5.SA','UGPA3.SA',"EQTL3.SA","BBAS3.SA",
       'BBSE3.SA','BBDC3.SA','BBDC4.SA','ITSA4.SA','ABEV3.SA','VIVT3.SA','OIBR4.SA',
       'MGLU3.SA','LAME4.SA','LREN3.SA','RENT3.SA','GGBR4.SA','CCRO3.SA','EMBR3.SA',
       'SBSP3.SA','MRVE3.SA')

if(acao in act):
    datak = pd.DataFrame()
    tickers = [acao,'^BVSP']
## Coletando os dados do Yahoo Finance no período estipulado (dados de fechamento)
    for t in tickers:
        datak[t] = wb.DataReader(t, data_source='yahoo', start='2018-06-06', end=dt.datetime.now())['Adj Close']

    retorno_log = np.log( datak / datak.shift(1) )
    cov = retorno_log.cov() * 250
    ## Covariância AMZN em relação ao mercado (linha 0 e coluna 1)
    Covariancia_Mercado = cov.iloc[0,1]
    ## Variância do mercado (desconsiderando os finais de semana)
    Variancia_Mercado = retorno_log['^BVSP'].var() * 250
    ## Calculando o Beta da AMZN
    ACAO_beta = Covariancia_Mercado/ Variancia_Mercado
    bet = f"**{round(ACAO_beta,2)}**"
    if(ACAO_beta>1):
        st.write("A ação "+acao+" é agressiva, com valor de beta: "+bet)
    elif(ACAO_beta<=0):
        st.write("A ação "+acao+" não possui nenhuma relação com o mercado")
    else:
        st.write("A ação "+acao+" é defensiva, com valor de beta: "+bet)

#-------------------taxa de retorno-----------------------------------------------------------
    TL_BRASIL = 0.068
    RISCO = 0.1
    ACAO_CAPM = f"**{round(100*(TL_BRASIL + RISCO*ACAO_beta),2)}**"
    capm = TL_BRASIL + RISCO*ACAO_beta
    st.write("A ação "+acao+" possuirá retorno (perda ou ganho) esperado de: "+ACAO_CAPM+'%')
    sharpe = (capm - 0.068) / (retorno_log[acao].std() * 250 ** 0.5)
    sharp = f"**{round(sharpe,3)}**"
    st.write("O índice Sharpe da ação "+acao+" é: "+sharp)

st.markdown("<hr style='margin-bottom: 40px'>", unsafe_allow_html=True)
st.markdown("<h2 style='margin-top: -40px; font-family: Helvetica; font-weight:bold; margin-left: 140px'>Análise preditiva</h2>", unsafe_allow_html=True)
#-------------------------------------------PREVISAO---------------------------------------------------------------------------------------------------------------
def arima(df):
    dff1 = df['Adj Close']
    train = dff1[:int(0.7*len(dff1))]
    teste = dff1[int(0.7*len(dff1)):]
    dias = len(teste)
    dia_f = teste.tail(1).index[0]
    #st.sidebar.write(dia_f)
    test = pd.date_range(dia_f, periods=int(7*tempo))#.tolist()#dff1[int(0.7*len(dff1)):]
    #st.sidebar.write(test)
    #st.sidebar.write(7*tempo)
    modelo = auto_arima(train,supress_warnings=True,error_action='ignore')
    previsao = pd.DataFrame(modelo.predict(n_periods = int(7*tempo)),index=pd.to_datetime(test,unit='D'))
    previsao.rename(columns={0:'Valor da ação'}, inplace=True)
    previsao['Dat'] = previsao.index
    def corte(x):
        y = str(x).split('T')[0]
        yy = y.split(" ")
        return yy[0]
    previsao['Data'] = previsao['Dat'].apply(lambda x: corte(x))
    previsao2 = previsao[['Data','Valor da ação']]
    previsao2.set_index('Data',inplace=True)
    st.header("Resultado do modelo preditivo por ARIMA")
    st.dataframe(previsao2.tail(int(7*tempo)))
    figura3 = px.line(title="")
    st.header("Previsão de fechamento da "+acao+" nos próximos " + str(int(7*tempo)) + " dias - Modelo ARIMA")
    figura3.add_scatter(x=previsao2.index,y=previsao2['Valor da ação'],name=acao)
    figura3.update_layout(autosize=True,
                      width=800, height=450,
                      margin=dict(l=40, r=40, b=40, t=40))    
    st.plotly_chart(figura3,use_container_width=False)

def Monte_Carlo(df):
    dff1 = df['Adj Close']
    LOG_RET = np.log(1 + dff1.pct_change()) #ajuste
    u = LOG_RET.mean() #media
    vari = LOG_RET.var() #variância
    drift = u - vari/2 #distribuição normal
    stdi = LOG_RET.std() #desvio padrão
    t_inter = int(7*tempo)+1 #dias previstos após dia mais recente 
    iteration = 10 #número de cenários
    d_r = np.exp(drift - stdi*norm.ppf(np.random.rand(t_inter,iteration))) #Modelo Browniano
    #st.write(d_r)
    price_list = np.zeros_like(d_r)
    s0 = dff1.iloc[-1] #preço da ação do dia mais recente
    price_list[0] = s0 #preço inicial para ação
    k = []
    std_min = []
    std_max = []
    for t in range(1,t_inter):
        price_list[t] = price_list[t-1]*d_r[t]
        k.append(np.mean(price_list[t]))
        std_min.append(np.mean(price_list[t]) - 2*np.std(price_list[t]))
        std_max.append(np.mean(price_list[t]) + 2*np.std(price_list[t]))
        
    temp = pd.date_range(dff1.tail(1).index[0], periods=int(7*tempo))
    previsao3 = pd.DataFrame(np.array([k,std_min,std_max]).T,index=temp)
    previsao3.rename(columns={0:'Valor médio da ação',1:'Valor mínimo da ação',2:'Valor máximo da ação'}, inplace=True)
    previsao3['Dat'] = previsao3.index
    def corte(x):
        y = str(x).split('T')[0]
        yy = y.split(" ")
        return yy[0]
    previsao3['Data'] = previsao3['Dat'].apply(lambda x: corte(x))
    previsao4 = previsao3[['Data','Valor médio da ação','Valor mínimo da ação','Valor máximo da ação']]
    previsao4.set_index('Data',inplace=True)
    st.header("Resultado do modelo preditivo por Monte Carlo")
    st.dataframe(previsao4.tail(int(7*tempo)))
    figura4 = px.line(title="")
    st.header("Previsão de fechamento da "+acao+" nos próximos " + str(int(7*tempo)) + " dias - Modelo de Monte Carlo")

    zp = ['Valor médio da ação','Valor mínimo da ação','Valor máximo da ação']

    for i in zp:
        figura4.add_scatter(x=previsao4.index,y=previsao4[i],name=i)
        
    figura4.update_layout(autosize=True,
                      width=800, height=450,
                      margin=dict(l=40, r=40, b=40, t=40))    
    st.plotly_chart(figura4,use_container_width=False)


if submit:
    if modelo == 'ARIMA':
        arima(df)
    if modelo == "Monte Carlo":
        Monte_Carlo(df)
