//Задание 1: ""Управление персоналом компании""
//Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
//Свойство name (имя) - строка, имя сотрудника.
//Метод displayInfo() - выводит информацию о сотруднике (имя).
//Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
//Свойство department (отдел) - строка, отдел, в котором работает менеджер.
//Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee {
    constructor(name) {
        this.name = name;
    }

    displayInfo() {
        console.log("Имя: " + this.name);
        console.log("Отдел: " + this.department);
    }
}

class Manager extends Employee {
    constructor() {
        super(...arguments);
        this.department = "менеджер";
    }

    displayInfo() {
        console.log("Имя: " + this.name);
        console.log("Отдел: " + this.department);
    }
}

let employee1 = new Employee("Иван");
employee1.displayInfo(); // выведет: Имя: Иван Отдел: менеджер

let employee2 = new Employee("Мария");
employee2.displayInfo(); // выведет: Имя: Мария Отдел: магистр

let manager1 = new Manager("менеджер");
manager1.displayInfo(); // выведет: Имя: менеджер Отел: отдел Менеджер: Иван

//Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
//Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
//Свойство products (продукты) - массив, содержащий список продуктов в заказе.
//Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
//Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Order {
    constructor(number) {
        this.number = number;
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.products.length; i++) {
            totalPrice += parseFloat(this.productsi.price);
        }
        return totalPrice;
    }
}

let order = new Order(12345);

console.log(order.getTotalPrice()); // Вывод: 600

//Задача: Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл". Класс должен иметь методы для установки и получения значений свойств,
// а также метод для вывода информации о студенте.

class Student {
    private name;
    private age;
    private averageGrade;

    constructor(name, age, averageGrade) {
        this.name = name;
        this.age = age;
        this.averageGrade = averageGrade;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    setAverageGrade(averageGrade) {
        this.averageGrade = averageGrade;
    }

    displayInfo() {
        console.log("Имя: " + this.name);
        console.log("Возраст: " + this.age);
        console.log("Средний балл: " + this.averageGrade);
    }
}

let student = new Student("Пётр", 20, 85);
student.setName("Алексей");
student.setAge(25);
student.setAverageGrade(90);
student.displayInfo(); // выведет: Имя: Пётр Возраст: 25 Средний балл: 90