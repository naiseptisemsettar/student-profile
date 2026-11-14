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
====================================
       Student Profile
====================================
الاسم الكامل: ${fullName}
العمر: ${age} سنة
البلد: ${country}
التخصص: ${major}
هل أنا طالبة حالياً؟: ${isStudent}
هل أعمل حالياً؟: ${isWorking}
------------------------------------
سنة الميلاد التقريبية: ${birthYear}
العمر بعد 5 سنوات: ${ageAfter5Years} سنة
السنوات المتبقية لعمر 30: ${yearsTo30} سنة
====================================
`);

// 6. فحص أنواع البيانات باستخدام typeof
console.log("--- أنواع البيانات (Data Types) ---");
console.log("نوع الاسم:", typeof fullName);
console.log("نوع العمر:", typeof age);
console.log("نوع حالة الدراسة:", typeof isStudent);
console.log("نوع مشروع التخرج:", typeof graduationProject);
console.log("نوع العمل السابق:", typeof previousJob);