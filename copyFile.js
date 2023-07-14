const fs = require('fs');
const process = require('process');


/**
 * 功能:
 *      複製檔案
 */
// // 方式一
// // 1.讀取檔案
// const data = fs.readFileSync('./data/奶胖想吃東西.mp4');

// // 2. 將data寫入檔案(複製)
// fs.writeFileSync('./data/奶胖想吃東西2.mp4', data);
// console.log(process.memoryUsage());     // rss 消耗了多少的記憶體(46M)


//方式二 流式操作
// 建立讀取
const rs = fs.createReadStream('./data/奶胖想吃東西.mp4');
// 建立寫入
const ws = fs.createWriteStream('./data/奶胖想吃東西3.mp4');


//綁定 data 事件
rs.on('data', chunk =>{
    ws.write(chunk);
});

rs.on('end',()=>{
    console.log(process.memoryUsage());     // rss 消耗了多少的記憶體(39M)
});