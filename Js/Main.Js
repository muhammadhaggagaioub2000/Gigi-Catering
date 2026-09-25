// البيانات المستخرجة مباشرة وحصرياً من ملف منيو جيجي كاترنج PDF مع إضافة صور عالية الجودة تناسب كل طبق
const menuItems = [
    // --- قسم أطباق الدواجن والطيور ---
    { id: 1, title: "كفتة فراخ", category: "poultry", price: 300, unit: "طبق", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80", desc: "كفتة فراخ طازجة بيتي متتبلة بالبهارات الخاصة" },
    { id: 2, title: "فرخة مشوية فرن", category: "poultry", price: 350, unit: "الفرخة", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=500&q=80", desc: "فرخة كاملة مشوية في الفرن بتتبيلة خطيرة" },
    { id: 3, title: "تشيكن كاري", category: "poultry", price: 375, unit: "الكيلو", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80", desc: "شرائح الفراخ بصوص الكاري الغني" },
    { id: 4, title: "فاهيتا فراخ", category: "poultry", price: 375, unit: "الكيلو", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80", desc: "فاهيتا فراخ بالفلفل الألوان والمشروم" },
    { id: 5, title: "تشيكن ليمون", category: "poultry", price: 375, unit: "الكيلو", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=500&q=80", desc: "صدور فراخ بصوص الليمون والزبدة" },
    { id: 6, title: "تشيكن استربس", category: "poultry", price: 300, unit: "الكيلو", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80", desc: "أصابع دجاج مقرمشة طازجة" },
    { id: 7, title: "دبابيس كرانشي", category: "poultry", price: 300, unit: "الكيلو", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=80", desc: "دبابيس دجاج مقرمشة بالتتبيلة الخاصة" },
    { id: 8, title: "فراخ مسحب مخلية", category: "poultry", price: 350, unit: "الفرخة", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80", desc: "دجاج مالي تماماً من العظام ومتبل" },
    { id: 9, title: "فراخ مكرملة", category: "poultry", price: 380, unit: "الفرخة", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=500&q=80", desc: "دجاج بالبصل المكرمل والصوص المميز" },
    { id: 10, title: "شاورما فراخ", category: "poultry", price: 340, unit: "الكيلو", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=500&q=80", desc: "شاورما فراخ بتتبيلة الشاورما الأصيلة" },
    { id: 11, title: "فراخ بانيه", category: "poultry", price: 280, unit: "الكيلو", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80", desc: "بانيه دجاج مقرمش وذهبي" },
    { id: 12, title: "كوردن بلو", category: "poultry", price: 450, unit: "الكيلو", image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=500&q=80", desc: "صدور دجاج محشية جبنة وروزبيف" },
    { id: 13, title: "شيش طاووق (6 أسياخ)", category: "poultry", price: 320, unit: "الطلب", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80", desc: "أسياخ شيش طاووق متبلة ومشتوية" },
    { id: 14, title: "فرخة محمرة", category: "poultry", price: 320, unit: "الفرخة", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=500&q=80", desc: "فرخة بلدي/بيضاء محمرة بالسمن البلدي" },
    { id: 15, title: "فرخة بلدي محشية", category: "poultry", price: 380, unit: "الفرخة", image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=500&q=80", desc: "دجاج بلدي محشي أرز أو فريك" },

    // --- قسم اللحوم المميزة ---
    { id: 16, title: "كفتة لحم بلدي", category: "meat", price: 495, unit: "الكيلو", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=500&q=80", desc: "كفتة لحم بلدي مشوية طازجة" },
    { id: 17, title: "كفتة داوود باشا", category: "meat", price: 500, unit: "الكيلو", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80", desc: "رات كفتة في صوص الطماطم الأحمر" },
    { id: 18, title: "لحمة عصاج", category: "meat", price: 450, unit: "الكيلو", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80", desc: "لحم بلدي مفروم ومعصج جاهز" },
    { id: 19, title: "ستيك ليمون", category: "meat", price: 750, unit: "الكيلو", image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80", desc: "شرائح لحم ستيك بصوص الليمون والزبدة" },
    { id: 20, title: "فاهيتا لحم", category: "meat", price: 650, unit: "الكيلو", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80", desc: "فاهيتا لحم بلدي مع خضار مكرمل" },
    { id: 21, title: "اسكالوب لحم", category: "meat", price: 750, unit: "الكيلو", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80", desc: "بوفتيك اسكالوب بلدي مقرمش" },
    { id: 22, title: "بيكاتا لحم", category: "meat", price: 750, unit: "الكيلو", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80", desc: "شرائح لحم بلدي بصوص المشروم" },
    { id: 23, title: "كبده اسكندراني", category: "meat", price: 550, unit: "الكيلو", image: "https://images.unsplash.com/photo-1514944298341-9880e65a852e?auto=format&fit=crop&w=500&q=80", desc: "كبده بلدي بالفلفل والثوم والفلفل الحار" },
    { id: 24, title: "شاورما لحم", category: "meat", price: 750, unit: "الكيلو", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=500&q=80", desc: "شاورما لحم بلدي بتتبيلة ممتازة" },
    { id: 25, title: "ورقة لحمة (تكفي 4 أفراد)", category: "meat", price: 650, unit: "الصينية", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80", desc: "لحم بلدي بالخضروات والبهارات بالفرن" },

    // --- قسم المحاشي والطيور المحشية ---
    { id: 26, title: "محشي كرنب", category: "stuffed", price: 160, unit: "الكيلو", image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=500&q=80", desc: "محشي كرنب بيتي بخلطة المحشي الجبارة" },
    { id: 27, title: "ورق عنب", category: "stuffed", price: 180, unit: "الكيلو", image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=500&q=80", desc: "ورق عنب ملفوف بدقة بالدبس والليمون" },
    { id: 28, title: "محشي مشكل", category: "stuffed", price: 160, unit: "الكيلو", image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=500&q=80", desc: "كوسة، باذنجان، وفلفل بخلطة الرز" },
    { id: 29, title: "جوز حمام محشي (أرز/فريك)", category: "stuffed", price: 320, unit: "الجوز", image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=500&q=80", desc: "حمام جامبو محشي أرز أو فريك ومحمر" },
    { id: 30, title: "فرد حمام كذاب", category: "stuffed", price: 100, unit: "القطعة", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80", desc: "وراك فراخ مخلية ومحشية أرز وفريك" },

    // --- قسم الطواجن والصواني ---
    { id: 31, title: "طاجن تورلي باللحم البلدي", category: "casseroles", price: 480, unit: "الطاجن", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80", desc: "خضار مشكل باللحم البلدي في الفرن" },
    { id: 32, title: "مسقعة باللحمة المفرومة", category: "casseroles", price: 300, unit: "الطاجن", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=500&q=80", desc: "باذنجان ولحم مفروم بلدي بصلصة الطماطم" },
    { id: 33, title: "مسقعة بالبشاميل", category: "casseroles", price: 285, unit: "الصينية", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=500&q=80", desc: "مسقعة بيتي بطبقة بشاميل غنية" },
    { id: 34, title: "كباب حلة (نصف كيلو)", category: "casseroles", price: 350, unit: "الطبق", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80", desc: "قطع لحم بلدي بالبصل المكرمل" },
    { id: 35, title: "صينية فراخ بالبطاطس (4 أفراد)", category: "casseroles", price: 450, unit: "الصينية", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=500&q=80", desc: "دجاج مع شرائح البطاطس في الفرن" },
    { id: 36, title: "طاجن لسان عصفور باللحمة", category: "casseroles", price: 480, unit: "الطاجن", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80", desc: "لسان عصفور باللحم البلدي محمر بالفرن" },
    { id: 37, title: "طاجن باميه بالحمه", category: "casseroles", price: 450, unit: "الطاجن", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80", desc: "لسان عصفور باللحم البلدي محمر بالفرن" },
    { id: 38, title: "طاجن لحمه بالبصل", category: "casseroles", price: 450, unit: "الطاجن", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80", desc: "لسان عصفور باللحم البلدي محمر بالفرن" },

    // --- قسم الباستا والبشاميل ---
    { id: 39, title: "مكرونة بشاميل (6-7 أفراد)", category: "pasta", price: 400, unit: "الصينية", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80", desc: "صينية مكرونة بشاميل باللحم المفروم البلدي" },
    { id: 40, title: "كوسة بشاميل (4-5 أفراد)", category: "pasta", price: 350, unit: "الصينية", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=500&q=80", desc: "شرائح الكوسة الطازجة بالبشاميل واللحم" },
    { id: 41, title: "لازانيا لحم (4-5 أفراد)", category: "pasta", price: 450, unit: "الصينية", image: "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=500&q=80", desc: "طبقات اللازانيا باللحم البلدي والجبن" },
    { id: 42, title: "نجرسكو دجاج (4-5 أفراد)", category: "pasta", price: 380, unit: "الصينية", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80", desc: "نجرسكو بالدجاج والمشروم والصوص الأبيض" },

    // --- قسم الأرز والأرز المعمر --
    { id: 43, title: "أرز بالشعرية", category: "rice", price: 100, unit: "السرفيس", image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=500&q=80", desc: "أرز مفلفل بالسمن البلدي والشعرية" },
    { id: 44, title: "أرز بسمتي بالمكسرات", category: "rice", price: 280, unit: "السرفيس", image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=500&q=80", desc: "أرز بسمتي مبهر ومزين بالمكسرات" },
    { id: 45, title: "أرز معمر سادة (4-5 أفراد)", category: "rice", price: 250, unit: "الطاجن", image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=500&q=80", desc: "طاجن أرز معمر فلاحي بالقشطة والحليب" },
    { id: 46, title: "أرز معمر بالفراخ (4-5 أفراد)", category: "rice", price: 450, unit: "الطاجن", image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=500&q=80", desc: "طاجن معمر محشي قطع الدجاج الطازجة" },
    { id: 47, title: "أرز معمر باللحمة (4-5 أفراد)", category: "rice", price: 550, unit: "الطاجن", image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=500&q=80", desc: "طاجن معمر محشي قطع اللحم البلدي" },
    { id: 48, title: "فتة باللحمة (3-4 أفراد)", category: "rice", price: 490, unit: "السرفيس", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80", desc: "فتة مصرية بالثوم والخل واللحم البلدي" }
];

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    renderMenu(menuItems);
    setupFilters();
    setupCart();
    setupMobileNav();
    setupForm();
});

// Render Cards
function renderMenu(items) {
    const grid = document.getElementById("menuGrid");
    grid.innerHTML = "";

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-item-card";
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="menu-item-content">
                <h3 class="menu-item-title">${item.title}</h3>
                <p class="menu-item-desc">${item.desc}</p>
                <div class="menu-item-bottom">
                    <span class="menu-item-price">${item.price} ج.م <small>(${item.unit})</small></span>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                        <i class="fa-solid fa-plus"></i> إضافة
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filters
function setupFilters() {
    const btns = document.querySelectorAll(".filter-btn");
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            btns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const category = btn.dataset.filter;
            if (category === "all") {
                renderMenu(menuItems);
            } else {
                const filtered = menuItems.filter(i => i.category === category);
                renderMenu(filtered);
            }
        });
    });
}

// Cart Logic
function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    const inCart = cart.find(i => i.id === id);

    if (inCart) {
        inCart.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    updateCartUI();
}

function updateQty(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const countEl = document.getElementById("cartCount");
    const itemsEl = document.getElementById("cartItems");
    const totalEl = document.getElementById("cartTotal");

    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    countEl.innerText = totalCount;
    totalEl.innerText = `${totalPrice} ج.م`;

    if (cart.length === 0) {
        itemsEl.innerHTML = `<p class="empty-msg">السلة فارغة حالياً. قم بتبضع أطباقك المفضلة من القائمة!</p>`;
        return;
    }

    itemsEl.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <h4>${item.title}</h4>
                <small>${item.price} ج.م لكل ${item.unit}</small>
            </div>
            <div>
                <button class="cart-item-qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                <span>${item.qty}</span>
                <button class="cart-item-qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                <strong style="margin-right: 10px;">${item.price * item.qty} ج.م</strong>
            </div>
        </div>
    `).join("");
}

// Cart Drawer Events
function setupCart() {
    const btn = document.getElementById("cartBtn");
    const modal = document.getElementById("cartModal");
    const close = document.getElementById("closeCart");
    const send = document.getElementById("sendCartWhatsapp");

    
    btn.addEventListener("click", () => modal.classList.add("open"));
    close.addEventListener("click", () => modal.classList.remove("open"));
    send.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("السلة فارغة!");
            return;
        }
        let message = "مرحباً جيجي كاترينج، أرغب في طلب الأطباق التالية من المنيو:\n\n";
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.title} - الكمية: ${item.qty} (${item.unit}) - السعر: ${item.price * item.qty} ج.م\n`;
        });
        const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        message += `\nإجمالي الطلب التقديري: ${total} ج.م`;
        window.open(`https://wa.me/201111451649?text=${encodeURIComponent(message)}`, "_blank");
    });
}

// Mobile Navbar Toggle
function setupMobileNav() {
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("navMenu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
}

// Custom Order Form Setup
function setupForm() {
    const form = document.getElementById("customOrderForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("custName").value;
        const phone = document.getElementById("custPhone").value;
        const details = document.getElementById("custDetails").value;

        const msg = `مرحباً جيجي كاترينج،\nاسم العميل: ${name}\nرقم الهاتف: ${phone}\nتفاصيل الطلب أو العزومة:\n${details}`;
        window.open(`https://wa.me/201111451649?text=${encodeURIComponent(msg)}`, "_blank");
    });
}