To run the new payment-service, you need to:

1. Obviously, fetch the new code from paymentControllers.js and paymentRoutes.js.

2. Change the database by running this query:

```sh
ALTER TABLE payments ADD COLUMN expires_at TIMESTAMP WITHOUT TIME ZONE;
```

   (it adds a column called "expires_at" in the payments table so after running it, check that the column was added. the        table should have 4 columns now.)

3. Delete the contents of the payments table (optional, just for it to be clear and comprehensible):

```sh
TRUNCATE TABLE payments;
```

4. From a new terminal:

   to purchase credits:

```sh
Invoke-RestMethod -Uri http://localhost:3002/api/purchase-credits -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"amount": 50.00}'
```
   (change the amount to whatevs)


   to consume credits:

```sh
Invoke-RestMethod -Uri http://localhost:3002/api/consume-credits -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"amountToUse": 10.00}'
```
   (change the amount to whatevs)

   to see the available credits:

```sh
Invoke-RestMethod -Uri http://localhost:3002/api/available-credits -Method GET -Headers @{"Content-Type"="application/json"}
   



```
Invoke-RestMethod -Uri "http://localhost:5000/solve?problem_id=123" -Method GET -Headers @{"Content-Type"="application/json"}
```