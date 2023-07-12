/*
*   需求:
*   新建一個檔案,座右銘.txt, 寫入內容, 三人行,必有我師煙
*
*/

//1. 導入 fs module
const fs = require('fs');

//2. 寫入檔案
fs.writeFile('./座右銘.txt', '三人行,必有我師煙', err =>{
    if(err){
        console.log('寫入失敗');
        return;
    }
    console.log('寫入成功!');
});