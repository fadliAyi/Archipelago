## Answer Question

### Basic Question
The system allows users to upload photos, which are stored in a Pending state and sent to a review queue (e.g., RabbitMQ or Redis). Moderators review the photos via a dashboard, approve or reject them, and provide feedback. Approved photos are published to a public directory, while rejected ones notify users with reasons for rejection.

The backend is built with Node.js, Laravel, or Django, with PostgreSQL/MySQL for metadata storage and AWS S3 for photo storage. A message queue handles review tasks, and optional AI tools like AWS Rekognition can assist with pre-screening content. The system is scalable, leveraging cloud storage, CDNs, and load balancers to handle growing traffic.

### SQL Answer Question
1. Level 1
``` 
SELECT COUNT(CustomerID) AS CustomerCount
FROM Customers
WHERE Country = 'Germany';
```
2. Level 2
``` 
SELECT COUNT(CustomerID) AS CustomerCount, Country
FROM Customers
GROUP BY Country
HAVING COUNT([CustomerID]) >= 5
ORDER BY COUNT(CustomerID) DESC;
```

3. Level 3
``` 
SELECT 
    c.CustomerName,
    COUNT(o.OrderID) AS OrderCount,
    MIN(o.OrderDate) AS FirstOrder,
    MAX(o.OrderDate) AS LastOrder
FROM 
    Customers c
JOIN 
    Orders o
ON 
    c.CustomerID = o.CustomerID
GROUP BY 
    c.CustomerName
ORDER BY 
    OrderCount DESC, FirstOrder ASC;
```

### How to run real time chat websocket
1. run websocket server first in real-time-chat folder with command ``` npx ts-node src/app.ts ```
2. run frontend server in real-time-chat-frontend folder with command ``` npm run serve ```