# Imports
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder, StandardScaler

# Object inits
le = LabelEncoder()
s = StandardScaler()
log = LogisticRegression()

#%%

# Split dataset into train and test data
columns = dataset.columns
trainData = dataset.loc[dataset["Type"] == "Train"]
testData = dataset.loc[dataset["Type"] == "Test"]

labeled_train = pd.DataFrame()
labeled_test = pd.DataFrame()
for column in columns:
    labeled_train[column] = le.fit_transform(trainData[column])
    labeled_test[column] = le.fit_transform(testData[column])

y = labeled_train["BikeBuyer"]

feats = ["Age", "MaritalStatus", "Gender", "YearlyIncome", "TotalChildren", \
               "NumberChildrenAtHome", "Education", "Occupation", "NumberCarsOwned"]
X = labeled_train[feats]
X = s.fit_transform(X)

# Create LogisticRegression model, train and test it
log.fit(X,y)

X_test = labeled_test[feats]
X_test = s.fit_transform(X_test)
y_prediction = log.predict(X_test)

testData["BikeBuyer (prediction)"] = y_prediction
testData["BikeBuyer (prediction)"].replace({0:"Not Buyer", 1:"Buyer"}, inplace=True)
