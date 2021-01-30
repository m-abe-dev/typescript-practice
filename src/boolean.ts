// Javascriptでは基本的にletで定義するとグローバル変数になるため、exportでモジュール化をする必要がある
// exportなしでlet nameを定義する別の場所で定義されたnameとかぶるためエラーとなる。そのため、モジュール化をする必要がある
export {};


let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
console.log ({ isFinished });