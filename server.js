// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ミドルウェアとしてpublicフォルダを使用
app.use(express.static(path.join(__dirname, 'public')));

// FizzBuzzロジックを実行するエンドポイント
app.get('/api/fizzbuzz', (req, res) => {
    const limit = 100;
    const result = [];

    for (let i = 1; i <= limit; i++) {
        if (i % 15 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }

    res.json({ result });
});

// サーバーの起動
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
