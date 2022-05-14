let num1: number = 7;
let num2: number = 6;
let num3: number = 4;

if (num1 > num2 && num1 > num3) {
  console.log(num1, "es el mayor");
} else {
  if (num2 > num1 && num2 > num3) {
    console.log(num2, "es el mayor");
  } else {
    console.log(num3, "es el mayor");
  }
}
