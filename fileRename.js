const fs = require('fs');


//1. 將檔案改名
// fs.rename('./座右銘.txt', './誰的座右銘', err=>{
//     if(err){
//         console.log('更改失敗');
//         return;
//     }console.log('更改成功');
// });


//2. 移動檔案
fs.rename('./readFile.txt','./data/readFile.txt', err=>{
    if(err){
        console.log('失敗');
        return;
    }console.log('成功');
});