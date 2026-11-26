/* ============================================================
   script.js — 郭奕男的个人主页脚本
   用途：JavaScript 学习练习记录，按 Block 分组
   运行方式：在 index.html 的 </body> 前用 <script src="script.js"> 引入
   查看结果：浏览器 F12 → Console（控制台）
   ============================================================ */


/* ============================================================
   Block 2  让 JS 跑起来 + 基础运算
   ============================================================ */

// ------------------------------------------------------------
// 2.1  第一行 JS：确认脚本被正确加载并执行
// 预期输出：Hello, JavaScript!
// ------------------------------------------------------------
console.log('Hello, JavaScript!');


// ------------------------------------------------------------
// 2.2  实验 1：数字运算
// 验证：+ - * / % 五种运算符
// 重点：JS 的除法不取整（10 / 4 = 2.5）；% 是取余数
// ------------------------------------------------------------
console.log(1 + 2);   // 3
console.log(10 - 3);  // 7
console.log(6 * 7);   // 42
console.log(10 / 4);  // 2.5   ← 不是 2，JS 的除法直接得小数
console.log(10 % 3);  // 1     ← 10 ÷ 3 = 3 余 1，% 求余数


// ------------------------------------------------------------
// 2.3  实验 2：字符串
// 验证：字符串用 + 号是「拼接」，不是加法
// 重点：'1' + 2 得到 '12' 而不是 3，因为 + 遇到字符串就变成拼接
// ------------------------------------------------------------
console.log('郭奕男');
console.log('前端' + '开发');            // 前端开发
console.log('我的目标是' + '一线大厂');    // 我的目标是一线大厂
console.log('1' + 2);                   // 12  ← 字符串拼接，不是 3


// ------------------------------------------------------------
// 2.4  实验 3：布尔值与比较运算
// 验证：比较运算的结果是 true / false
// 重点：永远用 ===（严格相等），不要用 ==（会先做类型转换）
// ------------------------------------------------------------
console.log(true);         // true
console.log(false);        // false
console.log(1 > 2);        // false
console.log(10 === 10);    // true   （数字 === 数字）
console.log(10 === '10');  // false  ← 类型不同，严格相等不成立


// ------------------------------------------------------------
// 2.5  实验 4：变量 + 字符串拼接的两种写法
// 验证：用 const 存值；+ 拼接 与 模板字符串 的写法对比
// 重点：模板字符串（反引号 + ${}）更清晰，实际项目优先用它
// ------------------------------------------------------------
const name = '郭奕男';
const goal = '一线大厂';

console.log(name, goal);                          // 郭奕男 一线大厂（逗号分隔多个值）
console.log('我的名字是 ' + name);                  // 我的名字是 郭奕男（用 + 拼接）
console.log(`我的名字是 ${name}，目标是 ${goal}`);   // 模板字符串（推荐写法）


// ------------------------------------------------------------
// 2.6  实验 5：typeof 查询数据类型
// 验证：typeof 返回表示类型的字符串
// 重点：typeof null 返回 'object'，这是 1995 年的历史 bug，永远不会修
// ------------------------------------------------------------
console.log(typeof 123);        // number
console.log(typeof 'abc');      // string
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object   ← 历史 bug，记住这个例外


// ------------------------------------------------------------
// 2.7  彩蛋：第一次用 JS 操作页面（DOM 操作，W6 才系统学）
// 原理：document.querySelector('h1') 用 CSS 选择器找到元素
//       .textContent 修改它的文字内容
// 注意：取消注释后，页面标题每次刷新都会变，练习完请保持注释状态
// ------------------------------------------------------------
// document.querySelector('h1').textContent = '这句话是JS写的';


/* ============================================================
   Block 3  变量 / 数据类型 / 类型转换
   ------------------------------------------------------------
   注意：本文件的代码是从上往下依次执行的。
        某一处运行时抛错，它"后面"的所有代码都不会执行。
        所以做下面的"看报错"实验时，一次只取消注释一行，
        看完立刻把注释加回去，再看下一行。
   ============================================================ */

// ------------------------------------------------------------
// 3.1  变量：const / let / var
// ------------------------------------------------------------

// --- 实验 1：const 声明后不能重新赋值 ---
// 验证：const 是"常量"，声明时锁死
// 重点：取消注释下面 myName = '别人' 那行，Console 会报
//       TypeError: Assignment to constant variable.
const myName = '郭奕男';
console.log('实验1:', myName);

// myName = '别人';        // ← 取消注释这一行 → 看 TypeError



// --- 实验 2：let 可以重新赋值 ---
// 验证：let 声明的变量可以改，这是它和 const 的唯一区别
// 结论：默认用 const，确定要改才用 let
let score = 60;
console.log('实验2 - 改之前:', score);
score = 90;
console.log('实验2 - 改之后:', score);


// --- 实验 3：var 会泄漏出代码块（它被淘汰的核心原因）---
// 验证：var 是"函数作用域"，不受 {} 约束；let 是"块级作用域"，出了 {} 就失效
// 重点：取消注释 console.log(insideLet) 那行，Console 会报
//       ReferenceError: insideLet is not defined
if (true) {
  let insideLet = 'let 声明的，出了 {} 就失效';
  var insideVar = 'var 声明的，泄漏到 {} 外面';
}
console.log('实验3 - var 能访问:', insideVar);        // ✅ 能访问
// console.log('实验3 - let 能访问:', insideLet);     // ← 取消注释 → 看 ReferenceError


// --- 实验 4：const 锁的是"绑定"，不是"内容" ---
// 验证：const 保证"变量永远指向同一个对象"，不保证对象内部不能改
// 重点：改属性 user.name 可以；重新赋值 user = {...} 不行
//       取消注释 user = { name: '新人' } 那行，会报 TypeError
const user = { name: '郭奕男' };
user.name = '改了名字';        // ✅ 改属性完全合法
console.log('实验4 - 改属性后:', user);

// user = { name: '新人' };    // ← 取消注释这一行 → 看 TypeError


// ============================================================
// 3.2  七种数据类型
// ============================================================
// 这一段不需要取消注释，直接跑就能看到结果

// --- 实验 1：用 typeof 查看每种类型 ---
// 验证：typeof 返回表示类型的小写字符串
// 重点：typeof null 是 'object'（1995 年的 bug）；数组也是 'object'
console.log('--- 3.2 基础类型 ---');
console.log('number    :', typeof 42);             // number    （整数和小数都是 number）
console.log('number    :', typeof 3.14);           // number
console.log('string    :', typeof '42');           // string    （带引号就是字符串）
console.log('boolean   :', typeof true);           // boolean
console.log('undefined :', typeof undefined);      // undefined （声明了没赋值）
console.log('null      :', typeof null);           // object    ← 历史 bug，记住这个例外
console.log('object    :', typeof {});             // object
console.log('array     :', typeof []);             // object    ← 数组也返回 object，不是 array
console.log('function  :', typeof function () {}); // function


// --- 实验 2：判断数组和 NaN 的正确工具 ---
// 验证：typeof 判断不出数组，要用 Array.isArray()
// 重点：NaN === NaN 是 false，判断 NaN 要用 Number.isNaN()
console.log('--- 3.2 判断工具 ---');
console.log('[] 是数组吗    :', Array.isArray([]));    // true
console.log('{} 是数组吗    :', Array.isArray({}));    // false
console.log('NaN 是 NaN 吗  :', Number.isNaN(NaN));    // true
console.log('NaN === NaN    :', NaN === NaN);          // false  ← 连自己都不等于自己
console.log("'abc' 是 NaN 吗 :", Number.isNaN('abc')); // false  （不是 number 类型，直接 false）


// --- 实验 3：两个经典怪事 ---
// 验证：浮点精度、undefined 与 null 的区别
console.log('--- 3.2 两个怪事 ---');
console.log('0.1 + 0.2 =', 0.1 + 0.2);                 // 0.30000000000000004 ← 浮点精度
console.log('等于 0.3 吗:', 0.1 + 0.2 === 0.3);         // false
console.log('undefined == null :', undefined == null);  // true  （== 只看值）
console.log('undefined === null:', undefined === null); // false （=== 还看类型）


// ============================================================
// 3.3  类型转换 + truthy / falsy
// ============================================================
// 这一段也不需要取消注释，直接跑

// --- 实验 1：隐式转换（JS 自动做的，最容易出坑）---
// 验证：+ 有"字符串优先"倾向，其他算术运算符都是"数字优先"
// 重点：'1' + 2 得到 '12'（拼接），'5' - 2 得到 3（转数字）
console.log('--- 3.3 隐式转换 ---');
console.log("'1' + 2       =", '1' + 2);        // 12    ← 字符串拼接，不是 3！
console.log("'5' - 2       =", '5' - 2);        // 3     ← 减号强制转数字
console.log("'5' * '2'     =", '5' * '2');      // 10
console.log("'10' / 2      =", '10' / 2);       // 5
console.log('true + 1      =', true + 1);       // 2     （true 当 1）
console.log('false + 1     =', false + 1);      // 1     （false 当 0）
console.log('null + 1      =', null + 1);       // 1
console.log('undefined + 1 =', undefined + 1);  // NaN   （undefined 没法转数字）


// --- 实验 2：显式转换（你主动调函数转）---
// 验证：Number() / String() / Boolean() / parseInt() 的用法和区别
// 重点：Number('') 是 0；Number('123abc') 是 NaN；parseInt 只解析开头能认的部分
console.log('--- 3.3 显式转换 ---');
console.log("Number('123')        =", Number('123'));        // 123
console.log("Number('123abc')     =", Number('123abc'));     // NaN   ← 有认不出的字符就全废
console.log("Number('')           =", Number(''));           // 0     ← 空字符串变 0，很反直觉
console.log("parseInt('123px')    =", parseInt('123px'));    // 123   ← 从头解析，遇到 p 停
console.log("parseFloat('3.14元') =", parseFloat('3.14元')); // 3.14
console.log("String(123)          =", String(123));          // 123（是字符串）
console.log("(123).toString()     =", (123).toString());     // 123（是字符串）
console.log("Boolean(0)           =", Boolean(0));           // false
console.log("Boolean(1)           =", Boolean(1));           // true


// --- 实验 3：⭐ truthy / falsy —— 最重要的一块 ---
// 验证：JS 里"假值"只有 7 个，其他全是"真值"
// 假值：false, 0, -0, '', null, undefined, NaN
console.log('--- 3.3 假值（falsy，共 7 个）---');
console.log('Boolean(false)     =', Boolean(false));     // false
console.log('Boolean(0)         =', Boolean(0));         // false
console.log('Boolean(-0)        =', Boolean(-0));        // false
console.log("Boolean('')        =", Boolean(''));        // false
console.log('Boolean(null)      =', Boolean(null));      // false
console.log('Boolean(undefined) =', Boolean(undefined)); // false
console.log('Boolean(NaN)       =', Boolean(NaN));       // false

console.log('--- 3.3 容易误判的真值（不是 falsy！）---');
console.log("Boolean('0')       =", Boolean('0'));      // true  ← 字符串 '0' 是真值
console.log("Boolean('false')   =", Boolean('false'));  // true  ← 字符串 'false' 也是真值
console.log('Boolean([])        =', Boolean([]));       // true  ← 空数组是真值
console.log('Boolean({})        =', Boolean({}));       // true  ← 空对象是真值
console.log('Boolean(-1)        =', Boolean(-1));       // true  ← 负数也是真值


// --- 实验 4：真实场景的坑 ---
// 场景：用户在输入框里打了 0，通过 input.value 拿到的是字符串 '0'
// 结果：if ('0') 会成立！因为它不是 falsy 的 0，而是 truthy 的 '0'
console.log('--- 3.3 真实场景的坑 ---');
const input = '0';               // 模拟从输入框拿到的值（永远是字符串）
if (input) {
  console.log('这行会执行，因为 "0" 是 truthy，不是 falsy 的 0');
}
console.log('Number("0") 的真假:', Boolean(Number('0'))); // false ← 转成数字后才是 falsy
// ===== 重讲 第1课: 变量 ====
const price = 100;
console.log('价格是:', price);
console.log('买两个要', price * 2);
console.log('打九折要', price * 0.9);

let count = 1;
count = count + 1;
console.log('count 现在是:', count);
// ===== 重讲 第2课：数字 vs 字符串 =====
const num = 42;
const str = '42';

console.log('num 的类型是', typeof num);
console.log('str 的类型是', typeof str);

console.log('数字做加法 num + 1 =', num + 1);
console.log('字符串做加法 str + 1 =', str + 1);

console.log('str 有几个字符:', str.length);
// ===== 重讲 第3课：+ 和 - 的不对称 =====
console.log("'42' + 1 =", '42' + 1);    // 421  ← 拼接
console.log("'42' - 1 =", '42' - 1);    // 41   ← 转数字
console.log("'42' * 2 =", '42' * 2);    // 84   ← 转数字

// 真实场景：从输入框拿到的永远是字符串
const userInput = '5';
console.log('直接加法:', userInput + 1);            // 51  ← 错
console.log('转换后加法:', Number(userInput) + 1);   // 6   ← 对

// 两个转换函数的区别
console.log("Number('42')     =", Number('42'));       // 42
console.log("Number('42px')   =", Number('42px'));     // NaN
console.log("parseInt('42px') =", parseInt('42px'));   // 42
// ===== 重讲 第4课：if 什么时候成立 =====

console.log('--- 7 个假值（下面全都不输出）---');
if (false)     console.log('false 是真');
if (0)         console.log('0 是真');
if ('')        console.log('空字符串 是真');
if (null)      console.log('null 是真');
if (undefined) console.log('undefined 是真');
if (NaN)       console.log('NaN 是真');
console.log('（如果上面一行都没输出，说明它们全是假值）');

console.log('--- 这些看着像假，其实是真值 ---');
if ('0')      console.log("'0' 是真值  ← 注意！");
if ('false')  console.log("'false' 是真值  ← 注意！");
if ([])       console.log('[] 是真值  ← 注意！');
if ({})       console.log('{} 是真值  ← 注意！');
if (-1)       console.log('-1 是真值  ← 注意！');

console.log('--- 真实场景：用户输入 0 ---');
const userAge = '0';          // 从输入框拿到的永远是字符串
if (userAge) {
  console.log('判断成立 —— 但用户明明输入的是 0，这个判断有问题');
}
console.log('转成数字再判断:', Boolean(Number(userAge)));   // false


/* ============================================================
   Block 4  运算符 / 条件分支 / 循环
   ------------------------------------------------------------
   4.1  比较运算符
   4.2  逻辑运算符
   4.3  短路特性（实用技巧）
   ============================================================ */

// ------------------------------------------------------------
// 4.1  比较运算符
// ------------------------------------------------------------
// 验证：比较运算返回 true / false
// 重点：永远用 === 和 !==，不要用 == 和 !=（它们会偷偷做类型转换）
console.log('--- 4.1 比较运算符 ---');
console.log('5 > 3            =', 5 > 3);             // true
console.log('5 < 3            =', 5 < 3);             // false
console.log('5 >= 5           =', 5 >= 5);            // true
console.log('5 <= 4           =', 5 <= 4);            // false
console.log("5 === 5          =", 5 === 5);           // true   （=== 严格相等：值和类型都要一样）
console.log("5 === '5'        =", 5 === '5');         // false  ← 类型不同
console.log("5 !== '5'        =", 5 !== '5');         // true   （!== 严格不等）

console.log('--- 下面三个是"别用"的写法，只为了让你看清区别 ---');
console.log("5 == '5'         =", 5 == '5');          // true   ← == 偷偷把字符串转成数字
console.log("0 == ''          =", 0 == '');           // true   ← 更离谱（空字符串转成 0）
console.log('null == undefined=', null == undefined); // true
console.log("用 === 再看一遍：");
console.log("5 === '5'        =", 5 === '5');         // false  ← 这才是你想要的
console.log("0 === ''         =", 0 === '');          // false  ← 这才是你想要的
console.log('null === undefined=', null === undefined); // false


// ------------------------------------------------------------
// 4.2  逻辑运算符
// ------------------------------------------------------------
// 验证：&& 而且 / || 或者 / ! 取反
// 重点：&& 两边都真才真；|| 有一边真就真
console.log('--- 4.2 逻辑运算符 ---');
console.log('true && true   =', true && true);    // true    （两边都真）
console.log('true && false  =', true && false);   // false   （有一个假就假）
console.log('false && true  =', false && true);   // false
console.log('true || false  =', true || false);   // true    （有一个真就真）
console.log('false || false =', false || false);  // false   （两个都假才假）
console.log('false || true  =', false || true);   // true
console.log('!true          =', !true);           // false   （取反：真变假）
console.log('!false         =', !false);          // true
console.log('!0             =', !0);              // true    （0 是假值，取反变真）

console.log('--- 组合条件（真实场景）---');
const age = 20;
console.log('是成年人吗:', age >= 18);                       // true
console.log('成年人且在退休年龄前:', age >= 18 && age < 60);  // true
console.log('未成年人或已退休:', age < 18 || age >= 60);      // false


// ------------------------------------------------------------
// 4.3  短路特性（很实用的技巧）
// ------------------------------------------------------------
// 验证：&& 遇到第一个"假"就停下；|| 遇到第一个"真"就停下
// 重点：所以 && / || 返回的不一定是 true/false，而是"那个值本身"
console.log('--- 4.3 短路 ---');
console.log("false && '右边不执行' =", false && '右边不执行');  // false   （左边假，直接返回左边）
console.log("'左边是真的' && '右边' =", '左边是真的' && '右边');  // 右边    （左边真，继续看右边）

// 实用场景：给默认值（这是实际项目里最常见的用法）
const nickname = '';                          // 用户没填昵称，空字符串是假值
const displayName = nickname || '匿名用户';     // 左边是假 → 用右边的默认值
console.log('没填昵称时显示:', displayName);      // 匿名用户

const realName = '郭奕男';
const displayName2 = realName || '匿名用户';    // 左边是真 → 用它自己
console.log('填了昵称时显示:', displayName2);     // 郭奕男


/* ============================================================
   Block 4.2  条件分支：if / else if / else
   ------------------------------------------------------------
   核心：从上往下判断，第一个成立就执行，后面的全部跳过。
   ============================================================ */

// ------------------------------------------------------------
// 实验 1：单分支 if（只有"成立时做什么"）
// ------------------------------------------------------------
const score1 = 85;
if (score1 >= 60) {
  console.log('4.2-1 及格');          // 85 >= 60 成立 → 执行
}


// ------------------------------------------------------------
// 实验 2：二分支 if...else（成立做 A，不成立做 B）
// ------------------------------------------------------------
const temp = 35;
if (temp >= 30) {
  console.log('4.2-2 很热');          // 成立 → 执行这里
} else {
  console.log('4.2-2 还行');          // 不执行
}


// ------------------------------------------------------------
// 实验 3：多分支 if...else if...else（三选一、四选一）
// ------------------------------------------------------------
const score2 = 85;
if (score2 >= 90) {
  console.log('4.2-3 85 分 → 优秀');
} else if (score2 >= 80) {
  console.log('4.2-3 85 分 → 良好');   // ← 85 >= 80 成立，执行这里，后面全跳过
} else if (score2 >= 60) {
  console.log('4.2-3 85 分 → 及格');
} else {
  console.log('4.2-3 85 分 → 不及格');
}


// ------------------------------------------------------------
// 实验 4：⚠️ 顺序陷阱（这一课最重要的一段）
// ------------------------------------------------------------
// 条件顺序写错了，结果就错了。看下面两个版本的对比。

// 版本 A：错误顺序（把"及格"写在"优秀"前面）
const score3 = 95;
if (score3 >= 60) {
  console.log('4.2-4 错误顺序 → 及格');   // 95 >= 60 成立 → 停在这里，后面不看
} else if (score3 >= 90) {
  console.log('4.2-4 错误顺序 → 优秀');   // 永远执行不到
}

// 版本 B：正确顺序（从严格到宽松：90 → 80 → 60）
const score4 = 95;
if (score4 >= 90) {
  console.log('4.2-4 正确顺序 → 优秀');   // 95 >= 90 成立 → 停在这里
} else if (score4 >= 60) {
  console.log('4.2-4 正确顺序 → 及格');
}

console.log('结论：95 分本该是"优秀"，版本 A 却输出了"及格"——因为顺序错了');


// ------------------------------------------------------------
// 实验 5：条件里可以用 && 和 ||
// ------------------------------------------------------------
const age4 = 20;
const hasTicket = true;

if (age4 >= 18 && hasTicket) {
  console.log('4.2-5 可以入场');        // 两个条件都成立
} else {
  console.log('4.2-5 不能入场');
}


// ------------------------------------------------------------
// 实验 6：if 括号里可以放任何"真/假"的值（复习 Block 3 的 falsy）
// ------------------------------------------------------------
const userName4 = '';

if (userName4) {
  console.log('4.2-6 有名字');
} else {
  console.log('4.2-6 没填名字');       // '' 是假值 → 走 else
}


/* ============================================================
   Block 4.3  for 循环
   ------------------------------------------------------------
   语法：for (起点; 继续条件; 每轮更新) { 循环体 }
   执行顺序：起点 → 判断条件 → 循环体 → 更新 → 再判断条件 → ...
   ============================================================ */

// ------------------------------------------------------------
// 例 1：打印 1 到 5（用完整写法，看得清每一步）
// ------------------------------------------------------------
for (let i = 1; i <= 5; i = i + 1) {
  console.log('4.3-1 第', i, '次');
}
// 输出：第 1 次 / 第 2 次 / 第 3 次 / 第 4 次 / 第 5 次


// ------------------------------------------------------------
// 例 2：i++ 是 i = i + 1 的简写（你会到处看到它）
// ------------------------------------------------------------
for (let i = 1; i <= 3; i++) {
  console.log('4.3-2 简写验证 i =', i);
}
// 输出：1 / 2 / 3


// ------------------------------------------------------------
// 例 3：累加求和（1 + 2 + ... + 100）
// ------------------------------------------------------------
// 思路：准备一个"累加器" sum，每轮把 i 加进去
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;          // 也可以写 sum += i
}
console.log('4.3-3 1 到 100 的和 =', sum);   // 5050


// ------------------------------------------------------------
// 例 4：FizzBuzz（经典面试题，只用循环 + if + 取余）
// ------------------------------------------------------------
// 规则：1 到 15
//   能被 3 和 5 同时整除 → FizzBuzz
//   只能被 3 整除      → Fizz
//   只能被 5 整除      → Buzz
//   都不是             → 打印数字本身
// 注意：条件顺序必须是"最严格"的 FizzBuzz 在前
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('4.3-4', 'FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('4.3-4', 'Fizz');
  } else if (i % 5 === 0) {
    console.log('4.3-4', 'Buzz');
  } else {
    console.log('4.3-4', i);
  }
}


// ------------------------------------------------------------
// 例 5：循环里嵌套 if，做统计
// ------------------------------------------------------------
// 统计 1 到 20 里有几个偶数、几个奇数
let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
console.log('4.3-5 偶数有', evenCount, '个，奇数有', oddCount, '个');   // 10 和 10


// ------------------------------------------------------------
// ⚠️ 死循环警告（这段是注释，千万别真的跑）
// ------------------------------------------------------------
// for (let i = 1; i <= 5; i = i - 1) { ... }
//   ↑ i 每次减 1，永远小于 5，条件永远成立 → 页面卡死
//
// 另外忘了写第三段也会死循环：
// for (let i = 1; i <= 5;) { console.log(i); }
//   ↑ i 永远不变 → 无限打印
//
// 写循环时一定要问自己：这个循环"什么时候会停"？