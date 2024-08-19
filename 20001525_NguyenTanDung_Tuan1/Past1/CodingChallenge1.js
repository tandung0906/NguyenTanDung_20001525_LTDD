// Dữ liệu 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;
// Dữ liệu 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;
// Tính chỉ số BMI cho Dữ liệu 1
let markBMI1 = markMass1 / (markHeight1 ** 2);
let johnBMI1 = johnMass1 / (johnHeight1 ** 2);
// Tính chỉ số BMI cho Dữ liệu 2
let markBMI2 = markMass2 / (markHeight2 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 ** 2);
// Biến Boolean để kiểm tra liệu BMI của Mark có cao hơn của John không
let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(`Dữ liệu 1: BMI của Mark: ${markBMI1.toFixed(2)}, BMI của John: ${johnBMI1.toFixed(2)}`);
console.log(`BMI của Mark có cao hơn của John trong Dữ liệu 1 không? ${markHigherBMI1}`);
console.log(`Dữ liệu 2: BMI của Mark: ${markBMI2.toFixed(2)}, BMI của John: ${johnBMI2.toFixed(2)}`);
console.log(`BMI của Mark có cao hơn của John trong Dữ liệu 2 không? ${markHigherBMI2}`);