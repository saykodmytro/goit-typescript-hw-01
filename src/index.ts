// import { concatenation } from "./concatenation";

// const button = document.querySelector("button")!;
// const input = document.querySelector("input")!;

// if (button && input) {
//   button.addEventListener("click", () => {
//     concatenation(input.value, "hello!");
//   });
// }

// let total: number = 100;
// let name: string = "100";
// let isAct: boolean = false;
// let empty: null = null;
// let undf: undefined = undefined;

// const numbers: number[] = [1, 2, 3];

// const user: { name: string; age: number } = {
//   name: "Bob",
//   age: 12,
// };

// type User = {
//   name: string;
//   age: number;
// };

// const user: User = {
//   name: "Bob",
//   age: 12,
//   isAct: true,
// };

// user.age = 5;
// user.name = "Ivan";

// let age: any = 10;
// age = "Bob";
// age = false

// let name: unknown = 'bob';
// name = 12;
// name.toFixed();

// type size = "small" | "medium" | "large";

// enum Size {
//   small = "small",
//   medium = "mediom",
//   large = "large",
// }

// const button: size = "large";
// const button2: Size = Size.large;

// function add(num1: number, num2: number): stri ng {
//   return `${num1}` + `${num2}`;
// }

// console.log(add(2, 3));

// function add(num1: number, num2: number): void {
//   console.log(num1, num2);
// }
// add(2, 3);

// type User = {
//   name: string;
// };

// function greating(user: User): void {
//   console.log(`Hello ${user.name}`);
// }

// type User = {
//   name: string;
//   age: number;
//   hobby: string;
// };
// function userConstructor(name: string, age: number, hobby: string): User {
//   return { name, age, hobby };
// }

// type Car = {
//   color: string;
//   price: number;
//   currency: string;
//   start: (color: string) => {};
// };

// const Car = {
//   color: "red",
//   price: 1000,
//   currency: "UAH",
//   start(color) {
//     console.log("Start" + this.color);
//   },
// };
