/**
 * Created by Alvin on 2016/9/26.
 */

/*
{  // let声明的变量只在代码块内有效
    let a = 1;
    var b = 5;
}

console.log(b);  //5
console.log(a);  //报错*/


/*
for (let i = 0; i < 5; i++) {  // for循环的计数器，就很适合使用let命令。
    console.log(i)
}
console.log(i); // 报错*/

/*var arr = [];
for (var i = 0; i < 10; i++) {
    arr[i] = function () {
        console.log(i);
    };
}
arr[6]();

var arr1 = [];
for (let k = 0; k < 10; k++) {
    arr1[k] = function () {
        console.log(k);
    };
}
arr1[6]();*/

/*
// 不会变量提升
console.log(m);
console.log(n); //报错

var m = 5;
let n = 6;*/


// 暂时性死区
// ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。
// 凡是在声明之前就使用这些变量，就会报错。
// 暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，
// 只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

/*var temp = 123;

if (true) {
    typeof temp; //typeof操作也会报错
    temp = 456;
    let temp;
}*/

// 隐蔽性的死区
/*
function foo ( x = y, y = 2 ) {
    return [x, y];
}
foo();*/

// 不允许在相同作用域内重复声明同一个变量
