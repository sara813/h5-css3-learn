var fs = require('fs');

// console.log("准备打开文件");

// fs.open('input.txt', 'r+', function(err, fd){
//     if(err) {
//         return console.error(err);
//     }
//     console.log("文件打开成功！"); 
// });


fs.writeFile('input.txt', '我是通过fs.writeFile写入文件内容', function(err){
    if(err){
        return console.log(err);
    }

    fs.readFile('input.txt', function(err, data){
        console.log(data.toString());
    })
});