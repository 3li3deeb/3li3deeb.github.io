* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}

/* ===== الهيدر ===== */
header {
    background-color: #101820;
    padding: 15px 5%;
    position: sticky;
    top: 0;
    z-index: 100;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.logo {
    color: #fff;
    font-size: 1.6rem;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #ce1126; /* أحمر العلم العراقي */
}

/* ===== القسم الرئيسي ===== */
.hero {
    text-align: center;
    padding: 110px 20px;
    background: linear-gradient(135deg, #000000, #ce1126, #007a3d);
    color: #fff;
}

.hero h2 {
    font-size: 2.6rem;
    margin-bottom: 15px;
}

.hero p {
    font-size: 1.2rem;
}

.hero button {
    margin-top: 30px;
    padding: 14px 40px;
    font-size: 1.1rem;
    border: none;
    border-radius: 10px;
    background-color: #fff;
    color: #ce1126;
    cursor: pointer;
    transition: transform 0.2s;
}

.hero button:hover {
    transform: scale(1.08);
}

/* ===== الخدمات ===== */
#services {
    max-width: 1000px;
    margin: 60px auto;
    padding: 0 20px;
    text-align: center;
}

#services h2 {
    margin-bottom: 35px;
    color: #101820;
}

.cards {
    display: flex;
    gap: 25px;
    justify-content: center;
    flex-wrap: wrap;
}

.card {
    background: #fff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    width: 280px;
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-8px);
}

.card h3 {
    margin-bottom: 12px;
    color: #ce1126;
}

/* ===== من نحن والتواصل ===== */
#about, #contact {
    max-width: 800px;
    margin: 50px auto;
    padding: 30px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

#about h2, #contact h2 {
    color: #007a3d;
    margin-bottom: 15px;
}

#contact a {
    color: #ce1126;
}

/* ===== الفوتر ===== */
footer {
    text-align: center;
    padding: 22px;
    background-color: #101820;
    color: #fff;
}
