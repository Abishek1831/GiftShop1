/* ============================================= */
/* PRODUCT DATA - 15+ PRODUCTS                   */
/* ============================================= */

const productsData = [
    {
        id: 1, 
        name: "Premium Photo Frame - Wooden Classic",
        category: "Photo Frames",
        categoryId: "frames",
        price: 599,
        originalPrice: 899,
        discount: 33,
        description: "Beautiful handcrafted wooden photo frame with premium finish. Perfect for displaying your cherished memories. Features durable glass cover and sturdy stand.",
        shortDescription: "Handcrafted wooden frame with premium finish",
        images: [
            "https://images.woodenstreet.de/image/data/ARTFOLIO/black-set-of-3-large-wall-photo-frames/1.jpg",
            "https://tse1.mm.bing.net/th/id/OIP.3b7bipNLG49SkDQydlUrmQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            "https://images.woodenstreet.de/image/data/ARTFOLIO/black-set-of-3-large-wall-photo-frames/1.jpg"
        ],
        rating: 4.8,
        reviews: 124,
        badge: "bestseller",
        options: {
            size: ["5x7", "8x10", "10x12"],
            color: ["Natural Wood", "Dark Walnut", "White"]
        },
        features: ["Premium Wood", "Glass Cover", "Wall Mountable", "Stand Included"],
        inStock: true,
        freeDelivery: true
    },
    {
        id: 2,
        name: "Crystal Clear Photo Mug - Custom Print",
        category: "Photo Mug",
        categoryId: "mugs",
        price: 349,
        originalPrice: 499,
        discount: 30,
        description: "High-quality ceramic mug with your custom photo print. Microwave and dishwasher safe. Perfect gift for any occasion - birthdays, anniversaries, or just because!",
        shortDescription: "Premium ceramic mug with custom photo print",
        images: [
            "https://homafy.com/wp-content/uploads/2023/01/customized-mugs.jpg",
            "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
        ],
        rating: 4.6,
        reviews: 89,
        badge: "sale",
        options: {
            size: ["11 oz", "15 oz"],
            color: ["White", "Black", "Blue"]
        },
        features: ["Dishwasher Safe", "Microwave Safe", "Food Grade", "Vibrant Colors"],
        inStock: true,
        freeDelivery: true
    },
    {
        id: 3,
        name: "Custom Printed T-Shirt - Premium Cotton",
        category: "T-Shirts",
        categoryId: "tshirts",
        price: 799,
        originalPrice: 1199,
        discount: 33,
        description: "Premium quality 100% cotton t-shirt with your custom design print. Comfortable fit, breathable fabric, and vibrant long-lasting prints. Available in all sizes.",
        shortDescription: "100% cotton with vibrant custom print",
        images: [
            "https://thebanyantee.com/cdn/shop/files/Baby-Blue-Oversized-T-shirt.jpg?v=1721385792&width=1920",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600"
        ],
        rating: 4.7,
        reviews: 156,
        badge: "bestseller",
        options: {
            size: ["S", "M", "L", "XL", "XXL"],
            color: ["White", "Black", "Navy", "Red"]
        },
        features: ["100% Cotton", "Breathable", "DTG Print", "Unisex Fit"],
        inStock: true,
        freeDelivery: true
    },
    {
        id: 4,
        name: "Personalized Photo Keychain - Acrylic",
        category: "Keychains",
        categoryId: "keychains",
        price: 149,
        originalPrice: 249,
        discount: 40,
        description: "Beautiful acrylic keychain with your custom photo. Durable, lightweight, and perfect for carrying your favorite memories everywhere you go.",
        shortDescription: "Crystal clear acrylic with vibrant photo",
        images: [
            "https://coolvibe.in/wp-content/uploads/2024/03/il_1140xN.5615311145_4fhp.jpg",
            "https://img.kwcdn.com/product/fancy/42e9402b-4e68-48fe-82f3-797ec4430694.jpg?imageView2/2/w/500/q/60/format/webp",
            "https://imgcdn.floweraura.com/speaker-n-personalised-photo-keychain-combo-9796777gf-A_0.jpg"
        ],
        rating: 4.5,
        reviews: 203,
        badge: "new",
        options: {
            shape: ["Round", "Heart", "Square", "Rectangle"]
        },
        features: ["Premium Acrylic", "Lightweight", "Metal Keyring", "Shock Proof"],
        inStock: true,
        freeDelivery: true
    },
    {
        id: 5,
        name: "Custom Flex Banner - Indoor/Outdoor",
        category: "Banners",
        categoryId: "banners",
        price: 499,
        originalPrice: 799,
        discount: 38,
        description: "High-quality flex banner with vibrant custom printing. Perfect for events, shops, promotions, or celebrations. Weather-resistant and durable.",
        shortDescription: "Weather-resistant with vibrant print",
        images: [
            "https://print-on-click.in/media/catalog/product/cache/ab2b35d32b8360471efed788ee6993d8/f/r/frontlit_flex_banner_2_10.jpg",
            
        ],
        rating: 4.4,
        reviews: 67,
        badge: "",
        options: {
            size: ["3x6 ft", "4x8 ft", "5x10 ft", "Custom"],
            material: ["Glossy", "Matte"]
        },
        features: ["UV Resistant", "Waterproof", "Grommets Included", "Easy Mount"],
        inStock: true,
        freeDelivery: true
    },
    {
        id: 6,
        name: "Digital Bit Notice Board - LED Display",
        category: "Notices",
        categoryId: "notices",
        price: 1299,
        originalPrice: 1899,
        discount: 32,
        description: "Electronic LED display board for bit notices, quotes, and messages. Programmable with remote control. Perfect for shops, offices, and events.",
        shortDescription: "LED display with remote control",
        images: [
            "https://letterheadprintinginchennai.in/wp-content/uploads/2024/04/A4-size-bit-notice.png",
            
        ],
        rating: 4.3,
        reviews: 45,
        badge: "",
        options: {
            size: ["Small 32\"", "Medium 43\"", "Large 55\""],
            color: ["Red LED", "Blue LED", "Multi-color"]
        },
        features: ["Remote Control", "USB Powered", "Multiple Fonts", "Brightness Control"],
        inStock: true,
        freeDelivery: true
    },
    {
        id: 7,
        name: "Heart-Shaped Photo Frame - Valentine Special",
        category: "Photo Frames",
        categoryId: "frames",
        price: 699,
        originalPrice: 999,
        discount: 30,
        description: "Romantic heart-shaped photo frame perfect for Valentine's Day or anniversary gifts. Features elegant design with premium glass and wooden base.",
        shortDescription: "Romantic heart design with premium finish",
        images: [
            "https://www.oyegifts.com/cdn/shop/files/heart-shape-photo-frame-with-flowers-led-lamp-2.jpg?v=1773750882",
            "https://www.thesurprisegifts.com/wp-content/uploads/2024/03/heart-shaped-couple-photo-frame.jpg",
            "https://m.media-amazon.com/images/I/61zsQZEJVFL._AC_UF894,1000_QL80_.jpg"
        ],
        rating: 4.9,
        reviews: 178,
        badge: "bestseller",
        options: {
            size: ["6 inch", "8 inch", "10 inch"],
            color: ["Pink", "Red", "White"]
        },
        features: ["Heart Design", "Premium Glass", "Wooden Base", "Gift Box"],
        inStock: true,
        freeDelivery: true
    },
    {
        id: 8,
        name: "Magic Color Changing Photo Mug",
        category: "Photo Mug",
        categoryId: "mugs",
        price: 449,
        originalPrice: 699,
        discount: 36,
        description: "Amazing heat-sensitive mug that reveals your photo when hot liquid is poured! Watch in amazement as your image appears from the darkness.",
        shortDescription: "Heat-sensitive reveal technology",
        images: [
            "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600",
            "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600"
        ],
        rating: 4.8,
        reviews: 234,
        badge: "new",
        options: {
            size: ["11 oz"],
            color: ["Black (Reveals on Heat)"]
        },
        features: ["Heat Sensitive", "Revealing Effect", "Premium Ceramic", "Gift Box"],
        inStock: true,
        freeDelivery: true
    },
    {
        id: 9,
        name: "Hoodie Custom Print - Premium Blend",
        category: "T-Shirts",
        categoryId: "tshirts",
        price: 1299,
        originalPrice: 1799,
        discount: 28,
        description: "Luxurious hoodie with your custom design. Made from premium cotton-polyester blend for ultimate comfort. Perfect for all seasons.",
        shortDescription: "Premium blend with custom print design",
        images: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
            "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600",
            "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=600"
        ],
        rating: 4.7,
        reviews: 98,
        badge: "",
        options: {
            size: ["S", "M", "L", "XL", "XXL"],
            color: ["Navy", "Black", "Gray", "Maroon"]
        },
        features: ["Cotton-Poly Blend", "Warm & Cozy", "Kangaroo Pocket", "Drawstring Hood"],
        inStock: true,
        freeDelivery: true
    },
    
    
    {
        id: 12,
        name: "Acrylic Name Plate - Office/Home",
        category: "Notices",
        categoryId: "notices",
        price: 599,
        originalPrice: 899,
        discount: 33,
        description: "Elegant acrylic name plate with laser-cut lettering. Perfect for office doors, home entrances, or desk identification. Modern and professional look.",
        shortDescription: "Laser-cut acrylic with elegant finish",
        images: [
            "https://bbdgifts.com/cdn/shop/files/bbdgifts_nephrologist_table_top.jpg?v=1767880867",
                        "https://www.thegiftbaskett.com/cdn/shop/files/1.jpg?v=1711912528&width=1946"

        ],
        rating: 4.4,
        reviews: 78,
        badge: "",
        options: {
            size: ["6x2 inch", "8x3 inch", "12x4 inch"],
            finish: ["Gold Letters", "Silver Letters", "Black Letters"]
        },
        features: ["Laser Cut", "Mounting Hardware", "Premium Acrylic", "Custom Text"],
        inStock: true,
        freeDelivery: true
    },
    {
        id: 13,
        name: "Multi-Photo Collage Frame - 6 Photos",
        category: "Photo Frames",
        categoryId: "frames",
        price: 899,
        originalPrice: 1299,
        discount: 31,
        description: "Beautiful collage frame displaying 6 favorite photos together. Perfect for family moments, vacation memories, or friendship photos.",
        shortDescription: "Display 6 photos in one elegant frame",
        images: [
            "https://m.media-amazon.com/images/I/81kayoZ5UnL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81q8PwfPk1L._AC_UF894,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/I/81kayoZ5UnL._SX679_.jpg"
        ],
        rating: 4.7,
        reviews: 112,
        badge: "new",
        options: {
            layout: ["Grid 3x2", "Heart Shape", "Straight Line"],
            color: ["White", "Black", "Natural"]
        },
        features: ["6 Photo Slots", "Wall Mount", "Shatterproof", "Easy Load"],
        inStock: true,
        freeDelivery: true
    },
    {
        id: 14,
        name: "Travel Mug - Vacuum Insulated",
        category: "Photo Mug",
        categoryId: "mugs",
        price: 599,
        originalPrice: 899,
        discount: 33,
        description: "Premium stainless steel travel mug with vacuum insulation. Keeps drinks hot for 8 hours or cold for 12 hours. Custom photo print on outer surface.",
        shortDescription: "Vacuum insulated, 8hr hot/12hr cold",
        images: [
            "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600",
            "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
        ],
        rating: 4.8,
        reviews: 189,
        badge: "bestseller",
        options: {
            size: ["12 oz", "16 oz", "20 oz"],
            color: ["Silver", "Black", "Blue"]
        },
        features: ["Vacuum Insulated", "Spill Proof", "Stainless Steel", "Car Cup Holder"],
        inStock: true,
        freeDelivery: true
    },
    {
        id: 15,
        name: " Couple Combo - Matching T-Shirts",
        category: "T-Shirts",
        categoryId: "tshirts",
        price: 1399,
        originalPrice: 1999,
        discount: 30,
        description: "Perfect couple combo with matching custom printed t-shirts. Express your love with coordinating designs. Premium cotton, comfortable fit for both.",
        shortDescription: "Matching couple combo with custom prints",
        images: [
            "https://www.giftify.in/cdn/shop/products/image227.jpg?v=1680712833&width=1445",
            "https://m.media-amazon.com/images/I/71TAbVz2SnL._AC_SR175,263_QL70_.jpg",
            "https://printgen.in/wp-content/uploads/2025/04/Matching-Couple-T-Shirts-with-Custom-Names.webp"
        ],
        rating: 4.9,
        reviews: 267,
        badge: "bestseller",
        options: {
            size: ["S-S", "M-M", "L-L", "XL-XL", "Custom Pair"],
            color: ["White-White", "Black-Black", "Mixed"]
        },
        features: ["2 T-Shirts", "Matching Design", "Premium Cotton", "Gift Wrapped"],
        inStock: true,
        freeDelivery: true
    },
    
    {
        id: 17,
        name: "Backdrop Banner - Event Photography",
        category: "Banners",
        categoryId: "banners",
        price: 1499,
        originalPrice: 2199,
        discount: 32,
        description: "Large photography backdrop banner perfect for birthday parties, baby showers, and events. High-quality print with vivid colors.",
        shortDescription: "Event backdrop with high-quality print",
        images: [
            "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600",
            "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600"
        ],
        rating: 4.6,
        reviews: 67,
        badge: "",
        options: {
            size: ["5x7 ft", "8x10 ft", "10x12 ft", "Custom"],
            finish: ["With Grommets", "With Pole Pockets"]
        },
        features: ["High Resolution", "Vivid Colors", "Wrinkle Resistant", "Easy Setup"],
        inStock: true,
        freeDelivery: true
    },
    
];

/* ============================================= */
/* CUSTOMER REVIEWS DATA                        */
/* ============================================= */

const customerReviews = [
    {
        id: 1,
        name: "Priya Sharma",
        location: "Chennai, Tamil Nadu",
        rating: 5,
        text: "Amazing quality! The photo frame I ordered exceeded my expectations. The colors are vibrant and the finish is premium. Will definitely order again!",
        date: "2026-03-15",
        product: "Premium Photo Frame"
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        location: "Coimbatore, Tamil Nadu",
        rating: 5,
        text: "Ordered a custom t-shirt for my brother's birthday. The print quality is excellent and the fabric is very comfortable. Fast delivery too!",
        date: "2026-03-10",
        product: "Custom T-Shirt"
    },
    {
        id: 3,
        name: "Anitha Venkatesh",
        location: "Madurai, Tamil Nadu",
        rating: 4,
        text: "Beautiful mug with my family photo. The magic color changing effect is so cool! My kids love it. Great gift idea.",
        date: "2026-03-08",
        product: "Magic Color Changing Mug"
    },
    {
        id: 4,
        name: "Suresh Babu",
        location: "Trichy, Tamil Nadu",
        rating: 5,
        text: "Ordered banners for my shop opening. The quality is superb and the printing is very clear. Highly recommend for business purposes!",
        date: "2026-03-05",
        product: "Custom Flex Banner"
    },
    {
        id: 5,
        name: "Meena Lakshmi",
        location: "Salem, Tamil Nadu",
        rating: 5,
        text: "The couple t-shirt combo was perfect for my anniversary. My husband and I loved it! Great quality and fast delivery.",
        date: "2026-02-28",
        product: "Couple Combo T-Shirts"
    },
    {
        id: 6,
        name: "Karthik Raja",
        location: "Erode, Tamil Nadu",
        rating: 4,
        text: "Good quality keychain with LED lights. The photo quality could be a bit better, but overall satisfied with the product.",
        date: "2026-02-25",
        product: "LED Photo Keychain"
    },
    {
        id: 7,
        name: "Divya Narayanan",
        location: "Vellore, Tamil Nadu",
        rating: 5,
        text: "Bought the heart-shaped frame for Valentine's Day. It's absolutely beautiful! The packaging was also very secure.",
        date: "2026-02-20",
        product: "Heart Photo Frame"
    },
    {
        id: 8,
        name: "Arun Prasad",
        location: "Tirunelveli, Tamil Nadu",
        rating: 5,
        text: "Excellent service! The name plate I ordered for my office looks very professional. Easy to install and great quality.",
        date: "2026-02-15",
        product: "Acrylic Name Plate"
    }
];

/* ============================================= */
/* BUSINESS INFORMATION                          */
/* ============================================= */

const businessInfo = {
    name: "Gift Customization Shop",
    tagline: "Custom Gifts for Every Occasion",
    address: "Serapattu Main Road, Pudupattu (Post), Vanapuram (TK), Kallakurichi (DT), Tamil Nadu - 606402",
    phone: "+91 9047408078",
    whatsapp: "919047408078",
    email: "info@giftcustomshop.com",
    hours: "Mon - Sat: 9:00 AM - 8:00 PM",
    social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
        whatsapp: "https://wa.me/919047408078"
    }
};

/* ============================================= */
/* CART MANAGEMENT                               */
/* ============================================= */

class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('giftShopCart')) || [];
        this.updateCartCount();
    }

    addItem(product, quantity = 1, options = {}) {
        const existingItem = this.items.find(item => 
            item.id === product.id && 
            JSON.stringify(item.options) === JSON.stringify(options)
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                category: product.category,
                quantity: quantity,
                options: options
            });
        }

        this.save();
        this.updateCartCount();
        this.showToast('success', 'Added to Cart', `${product.name} has been added to your cart`);
    }

    removeItem(productId, options = {}) {
        this.items = this.items.filter(item => 
            !(item.id === productId && JSON.stringify(item.options) === JSON.stringify(options))
        );
        this.save();
        this.updateCartCount();
    }

    updateQuantity(productId, quantity, options = {}) {
        const item = this.items.find(item => 
            item.id === productId && 
            JSON.stringify(item.options) === JSON.stringify(options)
        );

        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId, options);
            } else {
                item.quantity = quantity;
                this.save();
                this.updateCartCount();
            }
        }
    }

    clearCart() {
        this.items = [];
        this.save();
        this.updateCartCount();
    }

    getItems() {
        return this.items;
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    getSubtotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getTotal() {
        const subtotal = this.getSubtotal();
        const delivery = subtotal > 500 ? 0 : 50;
        return {
            subtotal: subtotal,
            delivery: delivery,
            total: subtotal + delivery
        };
    }

    save() {
        localStorage.setItem('giftShopCart', JSON.stringify(this.items));
    }

    updateCartCount() {
        const cartCountElements = document.querySelectorAll('.cart-count');
        const totalItems = this.getTotalItems();
        
        cartCountElements.forEach(el => {
            el.textContent = totalItems;
            el.style.display = totalItems > 0 ? 'flex' : 'none';
        });
    }

    showToast(type, title, message) {
        const container = document.querySelector('.toast-container') || this.createToastContainer();
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const iconClass = type === 'success' ? 'fa-check' : type === 'error' ? 'fa-times' : 'fa-info';
        const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
        
        toast.innerHTML = `
            <div class="toast-icon"><i class="fas ${iconClass}"></i></div>
            <div class="toast-content">
                <h4>${title}</h4>
                <p>${message}</p>
            </div>
        `;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    createToastContainer() {
        const container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
        return container;
    }
}

const cart = new Cart();

/* ============================================= */
/* PRODUCT RENDERING FUNCTIONS                   */
/* ============================================= */

function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<span class="star">★</span>';
        } else if (i - 0.5 <= rating) {
            stars += '<span class="star">★</span>';
        } else {
            stars += '<span class="star empty">★</span>';
        }
    }
    return stars;
}

function createProductCard(product) {
    const badgeClass = product.badge === 'bestseller' ? 'bestseller' : 
                      product.badge === 'new' ? 'new' : 
                      product.badge === 'sale' ? 'sale' : '';
    
    const badgeText = product.badge === 'bestseller' ? '⭐ Bestseller' : 
                     product.badge === 'new' ? '✨ New' : 
                     product.badge === 'sale' ? '🔥 Sale' : '';

    return `
        <div class="product-card" data-product-id="${product.id}">
            ${badgeText ? `<div class="product-badge ${badgeClass}">${badgeText}</div>` : ''}
            <button class="product-wishlist" onclick="toggleWishlist(${product.id})">
                <i class="far fa-heart"></i>
            </button>
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                <div class="product-overlay">
                    <div class="product-quick-actions">
                        <button class="quick-action-btn" onclick="quickView(${product.id})" title="Quick View">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="quick-action-btn" onclick="addToCartFromCard(${product.id})" title="Add to Cart">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">
                    <a href="product.html?id=${product.id}">${product.name}</a>
                </h3>
                <p class="product-description">${product.shortDescription}</p>
                <div class="product-rating">
                    <div class="stars">${renderStars(product.rating)}</div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="price-current">₹${product.price}</span>
                    <span class="price-original">₹${product.originalPrice}</span>
                    <span class="price-discount">${product.discount}% OFF</span>
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary btn-sm" onclick="addToCartFromCard(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <a href="product.html?id=${product.id}" class="btn btn-outline btn-sm">
                        View Details
                    </a>
                </div>
            </div>
        </div>
    `;
}

function renderProducts(products, containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const productsToRender = limit ? products.slice(0, limit) : products;
    container.innerHTML = productsToRender.map(product => createProductCard(product)).join('');
}

/* ============================================= */
/* FILTER AND SORT FUNCTIONS                    */
/* ============================================= */

let currentFilters = {
    category: 'all',
    sort: 'default',
    search: ''
};

function filterProducts(products) {
    let filtered = [...products];

    if (currentFilters.category !== 'all') {
        filtered = filtered.filter(p => p.categoryId === currentFilters.category);
    }

    if (currentFilters.search) {
        const searchTerm = currentFilters.search.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm)
        );
    }

    switch (currentFilters.sort) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'discount':
            filtered.sort((a, b) => b.discount - a.discount);
            break;
        default:
            break;
    }

    return filtered;
}

function applyFilters() {
    const filtered = filterProducts(productsData);
    renderProducts(filtered, 'products-grid');
    updateResultsCount(filtered.length);
}

function updateResultsCount(count) {
    const countElement = document.getElementById('results-count');
    if (countElement) {
        countElement.textContent = `Showing ${count} products`;
    }
}

/* ============================================= */
/* CART FUNCTIONS                                */
/* ============================================= */

function addToCartFromCard(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product) {
        cart.addItem(product, 1);
    }
}

function quickView(productId) {
    window.location.href = `product.html?id=${productId}`;
}

function toggleWishlist(productId) {
    const btn = document.querySelector(`.product-card[data-product-id="${productId}"] .product-wishlist`);
    btn.classList.toggle('active');
    
    const icon = btn.querySelector('i');
    if (btn.classList.contains('active')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        cart.showToast('success', 'Added to Wishlist', 'Product saved to your wishlist');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
    }
}

/* ============================================= */
/* RENDER CART ITEMS                             */
/* ============================================= */

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmptyContainer = document.getElementById('cart-empty');
    const cartContentContainer = document.getElementById('cart-content');
    
    if (!cartItemsContainer) return;

    const items = cart.getItems();

    if (items.length === 0) {
        if (cartEmptyContainer) cartEmptyContainer.style.display = 'block';
        if (cartContentContainer) cartContentContainer.style.display = 'none';
        return;
    }

    if (cartEmptyContainer) cartEmptyContainer.style.display = 'none';
    if (cartContentContainer) cartContentContainer.style.display = 'grid';

    cartItemsContainer.innerHTML = items.map(item => `
        <div class="cart-item" data-item-id="${item.id}">
            <div class="cart-item-product">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.category}</p>
                    ${Object.keys(item.options).length > 0 ? 
                        `<p class="cart-item-options">${Object.values(item.options).join(', ')}</p>` : ''}
                </div>
            </div>
            <div class="cart-item-price">₹${item.price}</div>
            <div class="cart-item-quantity">
                <div class="quantity-selector">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1}, ${JSON.stringify(item.options).replace(/"/g, '&quot;')})">−</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" readonly>
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1}, ${JSON.stringify(item.options).replace(/"/g, '&quot;')})">+</button>
                </div>
            </div>
            <div class="cart-item-total">₹${item.price * item.quantity}</div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id}, ${JSON.stringify(item.options).replace(/"/g, '&quot;')})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    updateCartSummary();
}

function updateCartQuantity(productId, quantity, options = {}) {
    cart.updateQuantity(productId, quantity, options);
    renderCartItems();
}

function removeFromCart(productId, options = {}) {
    cart.removeItem(productId, options);
    renderCartItems();
    cart.showToast('success', 'Removed from Cart', 'Product removed from your cart');
}

function updateCartSummary() {
    const summarySubtotal = document.getElementById('summary-subtotal');
    const summaryDelivery = document.getElementById('summary-delivery');
    const summaryTotal = document.getElementById('summary-total');
    const summaryDiscount = document.getElementById('summary-discount');

    if (!summarySubtotal) return;

    const totals = cart.getTotal();
    const originalTotal = cart.getItems().reduce((sum, item) => {
        const product = productsData.find(p => p.id === item.id);
        return sum + (product ? product.originalPrice * item.quantity : 0);
    }, 0);

    summarySubtotal.textContent = `₹${totals.subtotal}`;
    summaryDelivery.textContent = totals.delivery === 0 ? 'FREE' : `₹${totals.delivery}`;
    summaryTotal.textContent = `₹${totals.total}`;
    summaryDiscount.textContent = `-₹${originalTotal - totals.subtotal}`;
}

/* ============================================= */
/* WHATSAPP INTEGRATION                          */
/* ============================================= */

function generateWhatsAppMessage(orderDetails) {
    const { customer, items, totals } = orderDetails;
    
    let message = `🛒 *NEW ORDER*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${customer.name}\n`;
    message += `Phone: ${customer.phone}\n`;
    message += `Address: ${customer.address}\n\n`;
    message += `*Order Items:*\n`;
    
    items.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   Quantity: ${item.quantity}\n`;
        message += `   Price: ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
        if (Object.keys(item.options).length > 0) {
            message += `   Options: ${Object.values(item.options).join(', ')}\n`;
        }
        message += `\n`;
    });
    
    message += `─────────────────\n`;
    message += `*Order Summary:*\n`;
    message += `Subtotal: ₹${totals.subtotal}\n`;
    message += `Delivery: ${totals.delivery === 0 ? 'FREE' : '₹' + totals.delivery}\n`;
    message += `*Total: ₹${totals.total}*\n`;
    message += `─────────────────\n\n`;
    message += `Payment Method: ${orderDetails.paymentMethod}\n\n`;
    message += `_Order placed from ${businessInfo.name}_`;
    
    return encodeURIComponent(message);
}

function sendToWhatsApp(orderDetails) {
    const message = generateWhatsAppMessage(orderDetails);
    const whatsappURL = `https://wa.me/${businessInfo.whatsapp}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

/* ============================================= */
/* CHECKOUT SCRIPT                               */
/* ============================================= */

function generateOrderId() {
    return `ORD-${Date.now()}`;
}

function saveOrderLocally(order) {
    const existing = JSON.parse(localStorage.getItem('giftShopOrders') || '[]');
    existing.push(order);
    localStorage.setItem('giftShopOrders', JSON.stringify(existing));
}

function processCheckout(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.querySelector('#name')?.value.trim() || '';
    const phone = form.querySelector('#phone')?.value.trim() || '';
    const email = form.querySelector('#email')?.value.trim() || '';
    const address = form.querySelector('#address')?.value.trim() || '';
    const city = form.querySelector('#city')?.value.trim() || '';
    const pincode = form.querySelector('#pincode')?.value.trim() || '';
    const notes = form.querySelector('#notes')?.value.trim() || '';
    const paymentMethod = form.querySelector('input[name="payment"]:checked')?.value || 'cod';

    if (!name || !phone || !address || !city || !pincode) {
        cart.showToast('error', 'Missing Information', 'Please fill in all required fields');
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        cart.showToast('error', 'Invalid Phone', 'Please enter a valid 10-digit phone number');
        return;
    }

    if (!/^[0-9]{6}$/.test(pincode)) {
        cart.showToast('error', 'Invalid Pincode', 'Please enter a valid 6-digit pincode');
        return;
    }

    if (cart.getItems().length === 0) {
        cart.showToast('error', 'Cart Empty', 'Please add items to your cart before checkout');
        return;
    }

    const paymentMeta = {};
    let paymentStatus = 'Paid';
    let paymentMethodLabel = 'Online Payment';

    if (paymentMethod === 'upi') {
        const upiId = form.querySelector('#upi-id')?.value.trim() || '';
        if (!/^[\w.\-]{2,}@[A-Za-z]{2,}$/.test(upiId)) {
            cart.showToast('error', 'Invalid UPI ID', 'Enter a valid UPI ID like name@bank');
            return;
        }
        paymentMeta.upiId = upiId;
        paymentMethodLabel = 'UPI';
    } else if (paymentMethod === 'card') {
        const cardNumberRaw = (form.querySelector('#card-number')?.value || '').replace(/\s+/g, '');
        const cardExpiry = form.querySelector('#card-expiry')?.value.trim() || '';
        const cardCVV = form.querySelector('#card-cvv')?.value.trim() || '';
        const cardName = form.querySelector('#card-name')?.value.trim() || '';

        if (!/^[0-9]{14,19}$/.test(cardNumberRaw)) {
            cart.showToast('error', 'Invalid Card', 'Card number should be 14-19 digits');
            return;
        }

        if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(cardExpiry)) {
            cart.showToast('error', 'Invalid Expiry', 'Use MM/YY format');
            return;
        }

        if (!/^[0-9]{3,4}$/.test(cardCVV)) {
            cart.showToast('error', 'Invalid CVV', 'CVV should be 3-4 digits');
            return;
        }

        if (!cardName) {
            cart.showToast('error', 'Name Required', 'Enter the name on the card');
            return;
        }

        paymentMeta.card = {
            last4: cardNumberRaw.slice(-4),
            brand: 'Card',
            name: cardName
        };
        paymentMethodLabel = 'Card';
    } else if (paymentMethod === 'cod') {
        paymentStatus = 'Pending - Cash on Delivery';
        paymentMethodLabel = 'Cash on Delivery';
    }

    const orderId = generateOrderId();
    const totals = cart.getTotal();

    const orderDetails = {
        id: orderId,
        createdAt: new Date().toISOString(),
        customer: { name, phone, email, address, city, pincode },
        items: cart.getItems(),
        totals,
        notes,
        paymentMethod: paymentMethodLabel,
        paymentStatus,
        paymentMeta
    };

    cart.showToast('info', 'Processing Payment', 'Please wait while we confirm your order...');
    saveOrderLocally(orderDetails);
    cart.clearCart();

    sessionStorage.setItem('latestOrderId', orderId);
    sessionStorage.setItem('latestOrderTotal', `₹${totals.total}`);
    sessionStorage.setItem('latestPaymentStatus', paymentStatus);

    setTimeout(() => {
        window.location.href = `checkout.html?order=success&orderId=${orderId}`;
    }, 800);
}

/* ============================================= */
/* PRODUCT DETAIL PAGE                           */
/* ============================================= */

function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId) {
        window.location.href = 'products.html';
        return;
    }

    const product = productsData.find(p => p.id === productId);

    if (!product) {
        window.location.href = 'products.html';
        return;
    }

    document.title = `${product.name} | ${businessInfo.name}`;

    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = product.images[0];
        mainImage.alt = product.name;
    }

    const thumbnailGallery = document.getElementById('thumbnail-gallery');
    if (thumbnailGallery) {
        thumbnailGallery.innerHTML = product.images.map((img, index) => `
            <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
                <img src="${img}" alt="${product.name} thumbnail ${index + 1}">
            </div>
        `).join('');
    }

    const productCategory = document.getElementById('product-category');
    if (productCategory) productCategory.textContent = product.category;

    const productName = document.getElementById('product-name');
    if (productName) productName.textContent = product.name;

    const productRating = document.getElementById('product-rating');
    if (productRating) {
        productRating.innerHTML = `
            <div class="stars">${renderStars(product.rating)}</div>
            <span>${product.rating} (${product.reviews} reviews)</span>
        `;
    }

    const productPrice = document.getElementById('product-price');
    if (productPrice) {
        productPrice.innerHTML = `
            <span class="detail-price-current">₹${product.price}</span>
            <span class="detail-price-original">₹${product.originalPrice}</span>
            <span class="detail-price-discount">${product.discount}% OFF</span>
        `;
    }

    const productDescription = document.getElementById('product-description');
    if (productDescription) productDescription.textContent = product.description;

    const productFeatures = document.getElementById('product-features');
    if (productFeatures) {
        productFeatures.innerHTML = product.features.map(feature => `
            <div class="product-feature">
                <i class="fas fa-check-circle"></i>
                <span>${feature}</span>
            </div>
        `).join('');
    }

    renderProductOptions(product);

    setupAddToCart(product);
}

function changeMainImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
    
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

function renderProductOptions(product) {
    const optionsContainer = document.getElementById('product-options');
    if (!optionsContainer || !product.options) return;

    let optionsHTML = '';

    for (const [optionName, optionValues] of Object.entries(product.options)) {
        optionsHTML += `
            <div class="option-group">
                <label class="option-label">Select ${optionName.charAt(0).toUpperCase() + optionName.slice(1)}:</label>
                <div class="option-buttons">
                    ${optionValues.map((value, index) => `
                        <button class="option-btn ${index === 0 ? 'selected' : ''}" 
                                data-option="${optionName}" 
                                data-value="${value}"
                                onclick="selectOption(this)">
                            ${value}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    optionsContainer.innerHTML = optionsHTML;
}

function selectOption(button) {
    const optionName = button.dataset.option;
    const buttons = button.parentElement.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}

function setupAddToCart(product) {
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const buyNowBtn = document.getElementById('buy-now-btn');
    const quantityInput = document.getElementById('quantity-input');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value) || 1;
            const options = getSelectedOptions();
            cart.addItem(product, quantity, options);
        });
    }

    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value) || 1;
            const options = getSelectedOptions();
            cart.addItem(product, quantity, options);
            window.location.href = 'cart.html';
        });
    }

    const minusBtn = document.getElementById('quantity-minus');
    const plusBtn = document.getElementById('quantity-plus');

    if (minusBtn) {
        minusBtn.addEventListener('click', () => {
            let qty = parseInt(quantityInput.value) || 1;
            if (qty > 1) quantityInput.value = qty - 1;
        });
    }

    if (plusBtn) {
        plusBtn.addEventListener('click', () => {
            let qty = parseInt(quantityInput.value) || 1;
            quantityInput.value = qty + 1;
        });
    }
}

function getSelectedOptions() {
    const options = {};
    document.querySelectorAll('.option-btn.selected').forEach(btn => {
        options[btn.dataset.option] = btn.dataset.value;
    });
    return options;
}

/* ============================================= */
/* SEARCH FUNCTIONALITY                          */
/* ============================================= */

function setupSearch() {
    const searchInputs = document.querySelectorAll('.search-bar input');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', debounce((e) => {
            const searchTerm = e.target.value.trim().toLowerCase();
            
            if (searchTerm.length >= 2) {
                currentFilters.search = searchTerm;
                
                if (document.getElementById('products-grid')) {
                    applyFilters();
                }
            } else if (searchTerm.length === 0) {
                currentFilters.search = '';
                if (document.getElementById('products-grid')) {
                    applyFilters();
                }
            }
        }, 300));

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const searchTerm = input.value.trim().toLowerCase();
                if (searchTerm) {
                    window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`;
                }
            }
        });
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* ============================================= */
/* HERO SLIDER                                   */
/* ============================================= */

class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.hero-slide');
        this.dots = document.querySelectorAll('.hero-dot');
        this.currentSlide = 0;
        this.autoplayInterval = null;
        this.init();
    }

    init() {
        if (this.slides.length === 0) return;

        this.slides[0].classList.add('active');
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        this.startAutoplay();
        
        document.querySelector('.hero').addEventListener('mouseenter', () => this.stopAutoplay());
        document.querySelector('.hero').addEventListener('mouseleave', () => this.startAutoplay());
    }

    goToSlide(index) {
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        
        this.currentSlide = index;
        
        if (this.currentSlide >= this.slides.length) this.currentSlide = 0;
        if (this.currentSlide < 0) this.currentSlide = this.slides.length - 1;
        
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        this.goToSlide(this.currentSlide + 1);
    }

    startAutoplay() {
        this.stopAutoplay();
        this.autoplayInterval = setInterval(() => this.nextSlide(), 5000);
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
    }
}

/* ============================================= */
/* NAVIGATION AND UI                            */
/* ============================================= */

function setupNavbar() {
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu-link, .mobile-nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

function setupScrollTop() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

/* ============================================= */
/* FEEDBACK AND REVIEWS                         */
/* ============================================= */

function setupFeedbackForm() {
    const form = document.getElementById('feedback-form');
    if (!form) return;

    const ratingStars = document.querySelectorAll('.rating-star');
    let selectedRating = 0;

    ratingStars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.dataset.rating);
            updateRatingStars(selectedRating);
        });

        star.addEventListener('mouseenter', () => {
            const rating = parseInt(star.dataset.rating);
            highlightStars(rating);
        });

        star.addEventListener('mouseleave', () => {
            highlightStars(selectedRating);
        });
    });

    function updateRatingStars(rating) {
        ratingStars.forEach(star => {
            const starRating = parseInt(star.dataset.rating);
            if (starRating <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    function highlightStars(rating) {
        ratingStars.forEach(star => {
            const starRating = parseInt(star.dataset.rating);
            if (starRating <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('#feedback-name').value.trim();
        const message = form.querySelector('#feedback-message').value.trim();

        if (!name || !selectedRating || !message) {
            cart.showToast('error', 'Missing Information', 'Please fill in all fields and select a rating');
            return;
        }

        cart.showToast('success', 'Thank You!', 'Your feedback has been submitted successfully');
        form.reset();
        selectedRating = 0;
        updateRatingStars(0);
    });
}

function renderReviews() {
    const reviewsContainer = document.getElementById('reviews-grid');
    if (!reviewsContainer) return;

    reviewsContainer.innerHTML = customerReviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="review-avatar">${review.name.charAt(0)}</div>
                <div class="review-meta">
                    <h4>${review.name}</h4>
                    <p>${review.location}</p>
                </div>
            </div>
            <div class="review-rating">
                ${renderStars(review.rating)}
            </div>
            <p class="review-text">"${review.text}"</p>
        </div>
    `).join('');
}

/* ============================================= */
/* PROMO CODE                                    */
/* ============================================= */

const promoCodes = {
    'FIRST10': { discount: 10, type: 'percent' },
    'GIFT20': { discount: 20, type: 'percent' },
    'SAVE50': { discount: 50, type: 'flat' }
};

function applyPromoCode() {
    const promoInput = document.getElementById('promo-code');
    const code = promoInput?.value.trim().toUpperCase();

    if (!code) {
        cart.showToast('error', 'Error', 'Please enter a promo code');
        return;
    }

    if (promoCodes[code]) {
        cart.showToast('success', 'Promo Applied!', `You got ${promoCodes[code].discount}% off!`);
        promoInput.value = '';
    } else {
        cart.showToast('error', 'Invalid Code', 'The promo code you entered is invalid');
    }
}

/* ============================================= */
/* INITIALIZATION                                */
/* ============================================= */

document.addEventListener('DOMContentLoaded', () => {
    setupNavbar();
    setupSearch();
    setupScrollTop();
    setupFeedbackForm();
    setupScrollReveal();
    cart.updateCartCount();

    if (document.querySelector('.hero-slider')) {
        new HeroSlider();
    }

    if (document.getElementById('reviews-grid')) {
        renderReviews();
    }

    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.get('order') === 'success') {
        cart.showToast('success', 'Order Successful!', 'Thank you for your order');
        history.replaceState({}, document.title, window.location.pathname);
    }

    if (urlParams.get('search')) {
        currentFilters.search = urlParams.get('search');
        if (document.getElementById('search-input')) {
            document.getElementById('search-input').value = currentFilters.search;
        }
    }

    if (urlParams.get('category')) {
        currentFilters.category = urlParams.get('category');
    }
});

/* ============================================= */
/* SCROLL REVEAL ANIMATION                      */
/* ============================================= */

function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.product-card, .category-card, .feature-card, .testimonial-card, .offer-card, .section-header, .section-title');
    
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                el.classList.add('scroll-reveal', 'visible');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
}

/* ============================================= */
/* EXPORT FOR GLOBAL USE                         */
/* ============================================= */

window.productsData = productsData;
window.customerReviews = customerReviews;
window.businessInfo = businessInfo;
window.cart = cart;
window.currentFilters = currentFilters;
window.applyFilters = applyFilters;
window.renderProducts = renderProducts;
window.renderCartItems = renderCartItems;
window.loadProductDetail = loadProductDetail;
window.processCheckout = processCheckout;
window.generateWhatsAppMessage = generateWhatsAppMessage;
window.sendToWhatsApp = sendToWhatsApp;
