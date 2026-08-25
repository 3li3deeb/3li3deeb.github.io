// التاريخ الحالي
const days = ["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"];
const today = new Date();
document.getElementById("date-today").textContent =
    days[today.getDay()] + " - " + today.toLocaleDateString("ar-IQ");

// أخبار عاجلة متغيرة
const breakingNews = [
    "الدينار العراقي يستقر مقابل الدولار في أسواق بغداد",
    "المنتخب العراقي يستعد لمباراته القادمة في التصفيات",
    "إطلاق منصة عراقية جديدة للخدمات الرقمية",
    "نشرة الطقس: معتدل في بغداد وحار في البصرة"
];

let i = 0;
function rotateBreaking() {
    document.getElementById("breaking-text").textContent = breakingNews[i];
    i = (i + 1) % breakingNews.length;
}
rotateBreaking();
setInterval(rotateBreaking, 5000);

// زر العودة للأعلى
window.onscroll = function() {
    document.getElementById("topBtn").style.display =
        window.scrollY > 400 ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
