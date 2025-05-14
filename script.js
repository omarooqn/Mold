// دالة لتوليد رقم عشوائي يبدأ ب 15 ويتكون من 7 أرقام
function generateRandomNumber() {
    // الجزء الثابت (15)
    const prefix = "15";
    
    // توليد 5 أرقام عشوائية (لأن 15 مكون من رقمين + 5 أرقام = 7 أرقام)
    const randomPart = Math.floor(10000 + Math.random() * 90000);
    
    // دمج الجزء الثابت مع الجزء العشوائي
    const randomNumber = prefix + randomPart;
    
    // عرض الرقم في الصفحة
    document.getElementById("randomNumber").textContent = randomNumber;
}

// توليد رقم عند تحميل الصفحة لأول مرة
window.onload = generateRandomNumber;