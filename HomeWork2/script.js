//Задание 1: ""Управление библиотекой книг""

//Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

//Свойство title (название) - строка, название книги.
//Свойство author (автор) - строка, имя автора книги.
//Свойство pages (количество страниц) - число, количество страниц в книге.
//Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log("Название: " + this.title);
        console.log("Автор: " + this.author);
        console.log("Количество страниц: " + this.pages);
    }
}

let book1 = new Book("Мастер и Маргарита", "Михаил Булгаков", 12);
book1.displayInfo(); // выведет: Название: Мастер и Маргарита Автор: Михаил Булгаков Количество страниц: 12

let book2 = new Book("Алиса в стране чудес", "Льюис Кэрролл", 20);
book2.displayInfo(); // выведет: Название: Алиса в стране чудес Автор: Льюис Кэрролл Количество страниц: 20

//Задание 2: ""Управление списком студентов""
//Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

//Свойство name (имя) - строка, имя студента.
//Свойство age (возраст) - число, возраст студента.
//Свойство grade (класс) - строка, класс, в котором учится студент.
//Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
//javascript

// Пример использования класса
//const student1 = new Student(""John Smith"", 16, ""10th grade"");
//student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

//const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
//student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade"
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        console.log("Имя: " + this.name);
        console.log("Возраст: " + this.age);
        console.log("Класс: " + this.grade);
    }
}

let student1 = new Student("Иван", 25, "бакалавр");
student1.displayInfo(); // выведет: Имя: Иван Возраст: 25 Класс: бакалавр

let student2 = new Student("Мария", 30, "магистр");
student2.displayInfo(); // выведет: Имя: Мария Возраст: 30 Класс: магистр

//Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы
//для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.

class Bank {
    constructor() {
        this.clients = ;
        this.accounts = ;
    }

    addClient(client) {
        this.clients.push(client);
    }

    openAccount(client) {
        this.accounts.push(client);
    }

    withdrawMoney(amount) {
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accountsi.balance > amount) {
                this.withdrawMoney(amount - this.accountsi.balance);
            }
        }
    }

    depositMoney(amount) {
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clientsi.balance < amount) {
                this.depositMoney(amount - this.clientsi.balance);
            }
        }
    }

    checkBalance() {
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clientsi.balance !== 0) {
                return true;
            }
        }
        return false;
    }
}

let bank = new Bank();
bank.addClient("Петя");
bank.openAccount("Вася");
bank.withdrawMoney(1000);
bank.depositMoney(2000);
bank.checkBalance(); // true
bank.closeAccount("Вася");
bank.closeAccount("Петя");
