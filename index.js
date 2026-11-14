// 1. تعريف شخصي
const fullName = "eptisem naes";   
let age = 24;                              
const country = "syria";                    
let major = "programer";              

// 2. الحالة الدراسية والعملية
let isStudent = true;   
let isWorking = false;  

// 3. Undefined و Null
let graduationProject;  
let previousJob = null; 

// 4. العمليات الحسابية
const currentYear = 2026;
const birthYear = currentYear - age; 
const ageAfter5Years = age + 5;      
const yearsTo30 = 30 - age;         


console.log(`

       Student Profile

الاسم الكامل: ${fullName}
العمر: ${age} سنة
البلد: ${country}
التخصص: ${major}
هل أنا طالبة حالياً؟: ${isStudent}
هل أعمل حالياً؟: ${isWorking}

سنة الميلاد التقريبية: ${birthYear}
العمر بعد 5 سنوات: ${ageAfter5Years} سنة
السنوات المتبقية لعمر 30: ${yearsTo30} سنة

`);

// 6. typeof
console.log( fullName);
console.log( age);
console.log(isStudent);
console.log( graduationProject);
console.log( previousJob);
