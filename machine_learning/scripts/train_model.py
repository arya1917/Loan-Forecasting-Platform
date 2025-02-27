# Import necessary libraries
import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor

# Load the dataset
df = pd.read_csv('machine_learning\data\hiring.csv') 

# Check if dataset loaded properly
print("Dataset Loaded Successfully. First 5 Rows:")
print(df.head())

# Drop missing values
df = df.dropna()

# Convert categorical variables into numeric using one-hot encoding
df = pd.get_dummies(df, drop_first=True)

# Define features (X) and target variable (y)
X = df.drop(columns=['salary($)'])  # Features (input)
y = df['salary($)']  # Target variable (output)

# Split dataset into training (80%) and testing (20%)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standardize features using StandardScaler
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Initialize and train the model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train_scaled, y_train)

# Save the trained model
joblib.dump(model, 'income_forecast_model.pkl')

print("Model training complete. Model and scaler saved.")
