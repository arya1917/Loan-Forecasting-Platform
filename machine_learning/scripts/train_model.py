from sklearn.ensemble import RandomForestRegressor
import joblib

model = RandomForestRegressor(n_estimators=100)
model.fit(X, y)

joblib.dump(model, 'models/income_forecast_model.pkl')
