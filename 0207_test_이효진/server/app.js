require('dotenv').config({ path: './db/dbSetting.env' });
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(4000, () => {
    console.log('Server Start, http://localhost:4000');
});

// 전체 조회
app.get('/boards', async (req, res) => {
    let list = await mysql.executeQuery('boardList');
    res.json(list);
});

// 단건 조회
app.get('/boards/:no', async (req, res) => {
    let boardNo = req.params.no;
    let info = (await mysql.executeQuery('boardInfo', boardNo))[0]; // 배열을 객체로
    res.json(info);
})

// 등록
app.post('/boards', async (req, res) => {
    let data = req.body.param; // 객체
    let result = await mysql.executeQuery('boardInsert', data);
    res.json(result);
});

// 수정
app.put('/boards/:no', async (req, res) => {
    let result = await updateInfo(req);
    res.json(result);
});

async function updateInfo(request) {
    let data = [...getInfo(request.body.param), request.params.no];
    let result = await mysql.executeQuery('boardUpdateInfo', data);
    return result;
}

function getInfo(obj) {
    let getData = ["title", "writer", "content", "created_date"];
    let newAry = [];
    for (let target of getData) {
        for (let field in obj) {
            if (field == target) {
                newAry.push(obj[field]);
                break;
            }
        }
    }
    return newAry;
}