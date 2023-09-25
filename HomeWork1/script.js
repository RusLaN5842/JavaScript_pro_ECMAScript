//Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = 1, 5, 7, 9;
const minNum = Math.min.apply(null, arr).spread();
console.log(minNum);
//Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter() {
    let counter = 0;
    return {
        increment: function () {
            counter++;
        },
        decrement: function () {
            counter--;
        }
    };
}
//Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// примеры вызова функции
//console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
//console.log(factorial(0)); // выводит 1 (по определению факториала)
function factorial(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}