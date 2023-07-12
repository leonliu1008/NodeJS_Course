//1. 導入 fs 模組
const fs = require('fs');

//2. 調用 appendFile
// fs.appendFile('./座右銘.txt',',我來寫檔案囉!!!', err=>{
//     if(err){
//         console.log('寫入失敗');
//         return;
//     }
//     console.log('追加寫入成功');
// });


//同步寫法
// fs.appendFileSync('./座右銘.txt','\r\n我來寫檔案囉!!!')     //  \r\n:換行



//正常寫法也可以追加
fs.writeFile('./座右銘.txt', 'QQQQQQQQQ',{flag:'a'}, err =>{
    if(err){
        console.log('寫入失敗');
        return;
    }
    console.log('寫入成功');
})