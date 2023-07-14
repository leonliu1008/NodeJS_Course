const fs = require('fs');       //1. 導入fs 模組


//2. 非同步讀取
// fs.readFile('./readFile.txt', (err, data)=>{
//     if(err){
//         console.log('讀取失敗:',err);
//         return;
//     }
//     console.log(data.toString());
// });


//3. 同步讀取
const data = fs.readFileSync('./readFile.txt')

console.log(data.toString());