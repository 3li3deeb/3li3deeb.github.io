// انتظر تحميل الصفحة ثم أضف حدث النقر على الزر
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('alertBtn');
    if (button) {
        button.addEventListener('click', function() {
            alert('مرحباً بك في موقع IRAQdot! 🎉');
        });
    }
});
