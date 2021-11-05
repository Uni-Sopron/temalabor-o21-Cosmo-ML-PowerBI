 #%%
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder, StandardScaler

dataset = pd.read_csv("./supermarket_sales.csv")

le = LabelEncoder()
dataset["Invoice ID"] = le.fit_transform(dataset["Invoice ID"])
dataset["Gender"] = le.fit_transform(dataset["Gender"])
dataset["Branch"] = le.fit_transform(dataset["Branch"])
dataset["City"] = le.fit_transform(dataset["City"])
dataset["Customer type"] = le.fit_transform(dataset["Customer type"])
dataset["Gender"] = le.fit_transform(dataset["Gender"])
dataset["Product line"] = le.fit_transform(dataset["Product line"])
dataset["Payment"] = le.fit_transform(dataset["Payment"])
dataset["Date"] = le.fit_transform(dataset["Date"])
dataset["Time"] = le.fit_transform(dataset["Time"])
 #%%
 
y = dataset["Customer type"]
features = ["Invoice ID", "Branch", "City", \
           "Product line","Payment", "Date", "Time"]
X = dataset[features]

 #%%

s = StandardScaler()
X = s.fit_transform(X)

X_train, X_test, Y_train, Y_test = train_test_split(X,y)

 #%%

log = LogisticRegression()
log.fit(X_train, Y_train)
y_pred = log.predict(X)
y_prob = log.predict_proba(X)[:,1]

dataset["Predictions on Customer type"] = y_pred
dataset["Probability on Customer type"] = y_prob