# Import necessary libraries
import joblib
import numpy as np
import pandas as pd
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

# Load the dataset
df = pd.read_csv('hiring.csv')

# Drop missing values and preprocess categorical data
df = df.dropna()
df = pd.get_dummies(df, drop_first=True)

# Define features and target variable
X = df.drop('salary($)', axis=1)
y = df['salary($)']

# Load the saved scaler and model
scaler = joblib.load('scaler.pkl')
model = joblib.load('income_forecast_model.pkl')

# Transform the dataset using the saved scaler
X_scaled = scaler.transform(X)

# Generate predictions
y_pred = model.predict(X_scaled)

# Compute evaluation metrics
mae = mean_absolute_error(y, y_pred)
mse = mean_squared_error(y, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y, y_pred)

# Print evaluation results
print("Model Evaluation Metrics:")
print(f"Mean Absolute Error (MAE): {mae:.2f}")
print(f"Mean Squared Error (MSE): {mse:.2f}")
print(f"Root Mean Squared Error (RMSE): {rmse:.2f}")
print(f"R² Score: {r2:.4f}")

# Save evaluation results to a file
evaluation_results = {
    "MAE": mae,
    "MSE": mse,
    "RMSE": rmse,
    "R2 Score": r2
}

pd.DataFrame([evaluation_results]).to_csv("../models/evaluation_metrics.csv", index=False)

print("Evaluation metrics saved to '../models/evaluation_metrics.csv'.")
