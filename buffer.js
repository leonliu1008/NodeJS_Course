//.1 .alloc
const buf = Buffer.alloc(10);
//console.log(buf);


//.2 .allocUnsafe
const buf2 = Buffer.allocUnsafe(10);
//console.log(buf2);


//.3 from
const buf3 = Buffer.from('hello');
//console.log(buf3);


//buffer 字串的轉換
const buf4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
//console.log(buf4.toString());


//轉二進制
const buf5 = Buffer.from('hello');
//console.log(buf5[0].toString(2));


//溢出
const buf6 = Buffer.from('hello');
buf6[0] = 361;  //捨棄高位元數字 0001 0110 1001 => 0110 1001
//console.log(buf6);


//中文
const buf7 = Buffer.from('你好');
console.log(buf7);