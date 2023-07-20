const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/', (req, res) => {
    const data = req.body;
    console.log("Received data:", data);

    // 在這裡進行資料處理或其他操作
    // ...

    res.send("Node.js 收到");
});

app.listen(port, '172.16.16.62', () => {
    console.log(`Server is running on http://172.16.16.62:${port}`);
});