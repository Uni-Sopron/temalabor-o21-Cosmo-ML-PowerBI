import pandas as pd
from statsmodels.tsa.holtwinters import ExponentialSmoothing

dataset = pd.read_csv("../data/Sales/Sales_alternative/international-airline-passengers.csv")

model = ExponentialSmoothing(dataset["Passengers (thousands)"], \
                             initialization_method="estimated" ,trend="mul",seasonal="mul",seasonal_periods=12).fit()
range = pd.date_range("01-01-1958",periods=36,freq='MS')
range = range.format(formatter=lambda x: x.strftime("%Y-%m-%d"))
predictions = model.forecast(36)
predictions = predictions.map(lambda x: round(x))
predictions_range = pd.DataFrame({"Passengers (thousands)":predictions,"Month":range})