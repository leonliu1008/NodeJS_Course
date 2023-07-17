const fs = require('fs');


// 使用unlink 函式
// fs.unlink('./被刪除.txt', err=>{
//     if(err){
//         console.log('刪除失敗');
//         return;
//     }console.log('刪除成功');
// });


//  使用rm 的方法來刪除
fs.rm('./被刪除.txt', err=>{
    if(err){
        console.log('刪除失敗');
        return;
    }console.log('刪除成功');
});