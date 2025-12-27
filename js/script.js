// DATA PRODUK
const productsData = [
    // Blouse (3 produk)
    {
        id: 1,
        name: "Blouse Lavender",
        category: "blouse",
        price: 150000,
        image: "assets/img1.jpg",
        description: "Blouse pastel lembut dengan bahan adem dan jatuh cantik."
    },
    {
        id: 2,
        name: "Blouse Sakura",
        category: "blouse",
        price: 165000,
        image: "assets/img2.jpg",
        description: "Motif floral lembut dan feminin dengan bahan premium."
    },
    {
        id: 3,
        name: "Blouse Ruffle Pink",
        category: "blouse",
        price: 175000,
        image: "assets/img3.jpg",
        description: "Detail ruffle manis dan elegan untuk tampilan yang anggun."
    },
    // Gamis (3 produk)
    {
        id: 4,
        name: "Gamis Abaya Sage",
        category: "gamis",
        price: 285000,
        image: "assets/img4.jpg",
        description: "Gamis abaya warna sage yang elegan dengan bahan flowy."
    },
    {
        id: 5,
        name: "Gamis Kaftan Maroon",
        category: "gamis",
        price: 320000,
        image: "assets/img5.jpg",
        description: "Kaftan maroon mewah dengan detail bordir yang indah."
    },
    {
        id: 6,
        name: "Gamis Maxi Floral",
        category: "gamis",
        price: 275000,
        image: "https://images.unsplash.com/photo-1692220438343-d054c8b7d7c0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Gamis maxi dengan motif floral yang cerah dan ceria."
    },
    // Rok (2 produk)
    {
        id: 7,
        name: "Rok A-Line Denim",
        category: "rok",
        price: 195000,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop",
        description: "Rok denim A-line yang stylish dan nyaman dipakai."
    },
    {
        id: 8,
        name: "Rok Plisket Navy",
        category: "rok",
        price: 185000,
        image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=500&fit=crop",
        description: "Rok plisket navy blue dengan bahan yang jatuh sempurna."
    },
    // Outwear (2 produk)
    {
        id: 9,
        name: "Cardigan Oversize",
        category: "outwear",
        price: 210000,
        image: "https://plus.unsplash.com/premium_photo-1695339146408-093b2b8ddc90?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Cardigan oversize yang hangat dan cocok untuk berbagai outfit."
    },
    {
        id: 10,
        name: "Blazer Modern",
        category: "outwear",
        price: 350000,
        image: "https://plus.unsplash.com/premium_photo-1698339570890-b4af61b23c1c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Blazer modern dengan potongan yang rapi dan elegan."
    },
    // Hijab (2 produk)
    {
        id: 11,
        name: "Kerudung Ivory",
        category: "hijab",
        price: 85000,
        image: "assets/img6.jpg",
        description: "Kerudung ivory dengan bahan jersey yang adem dan tidak mudah luntur."
    },
    {
        id: 12,
        name: "Hijab Segi Empat Katun",
        category: "hijab",
        price: 75000,
        image: "https://images.unsplash.com/photo-1765691893444-8623b46581ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Hijab segi empat dari katun berkualitas tinggi."
    },
    // Atasan (2 produk)
    {
        id: 13,
        name: "Kaos Oversize Graphic",
        category: "atasan",
        price: 125000,
        image: "https://images.unsplash.com/photo-1661110546797-d86cc72a2765?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Kaos oversize dengan print graphic yang trendy."
    },
    {
        id: 14,
        name: "Tunik Bordir",
        category: "atasan",
        price: 180000,
        image: "https://images.unsplash.com/photo-1693987263090-9db764295654?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Tunik dengan bordir tangan yang cantik dan unik."
    },
    // Kulot (2 produk)
    {
        id: 15,
        name: "Kulot Kain Twill",
        category: "kulot",
        price: 195000,
        image: "https://images.unsplash.com/photo-1638396637969-956ca903df87?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Kulot dari kain twill yang nyaman dan tidak mudah kusut."
    },
    {
        id: 16,
        name: "Kulot Wide Leg",
        category: "kulot",
        price: 210000,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
        description: "Kulot wide leg dengan potongan yang fashionable."
    }
];

// KERANJANG BELANJA
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'all';

// FORMAT MATA UANG
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// UPDATE KERANJANG
function updateCart() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = cartCount;
    localStorage.setItem('cart', JSON.stringify(cart));
}

// TAMPILKAN PRODUK
function displayProducts(category = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    const categoryTitle = document.getElementById('categoryTitle');
    const productCount = document.getElementById('productCount');
    
    // Filter produk berdasarkan kategori
    let filteredProducts = productsData;
    if (category !== 'all') {
        filteredProducts = productsData.filter(product => product.category === category);
    }
    
    // Update judul dan jumlah
    const categoryNames = {
        'all': 'Semua Produk',
        'blouse': 'Blouse',
        'gamis': 'Gamis',
        'rok': 'Rok',
        'outwear': 'Outwear',
        'hijab': 'Hijab',
        'atasan': 'Atasan',
        'kulot': 'Kulot'
    };
    
    categoryTitle.textContent = categoryNames[category];
    productCount.textContent = filteredProducts.length;
    
    // Generate produk
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category.toUpperCase()}</span>
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatCurrency(product.price)}</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Tambah
                    </button>
                    <button class="view-details-btn">
                        <i class="fas fa-eye"></i> Detail
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Tambahkan event listeners untuk tombol tambah ke keranjang
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(button.dataset.id);
            addToCart(productId);
        });
    });
    
    // Tambahkan event listener untuk klik produk
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productId = parseInt(card.dataset.id);
            const product = productsData.find(p => p.id === productId);
            alert(`Detail Produk:\n\nNama: ${product.name}\nHarga: ${formatCurrency(product.price)}\nKategori: ${product.category}\nDeskripsi: ${product.description}`);
        });
    });
}

// TAMBAH KE KERANJANG
function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`${product.name} telah ditambahkan ke keranjang!`);
}

// TAMPILKAN NOTIFIKASI
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50, #8BC34A);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// TAMPILKAN KERANJANG
function showCart() {
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotalItems = document.getElementById('cartTotalItems');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <p>Keranjang belanja masih kosong</p>
                <small>Tambahkan produk untuk melihatnya di sini</small>
            </div>
        `;
    } else {
        let totalPrice = 0;
        cartItems.innerHTML = cart.map(item => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;
            
            return `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${formatCurrency(item.price)}</div>
                        <div class="cart-item-actions">
                            <div class="quantity-control">
                                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                                <span class="quantity-value">${item.quantity}</span>
                                <button class="quantity-btn plus" data-id="${item.id}">+</button>
                            </div>
                            <button class="remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i> Hapus
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        // Tambahkan event listeners untuk kontrol kuantitas
        document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                updateQuantity(id, -1);
            });
        });
        
        document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                updateQuantity(id, 1);
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                removeFromCart(id);
            });
        });
    }
    
    // Update summary
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartTotalItems.textContent = `${totalItems} item`;
    cartTotalPrice.textContent = formatCurrency(total);
    checkoutTotal.textContent = total.toLocaleString('id-ID');
    
    // Tampilkan modal
    cartModal.style.display = 'flex';
}

// UPDATE KUANTITAS
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCart();
        showCart();
    }
}

// HAPUS DARI KERANJANG
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showCart();
}

// SEARCH FUNCTIONALITY
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchBtn = document.getElementById('searchBtn');
    
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        const filtered = productsData.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
        
        if (filtered.length > 0) {
            searchResults.innerHTML = filtered.map(product => `
                <div class="search-result-item" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">${formatCurrency(product.price)}</div>
                    </div>
                </div>
            `).join('');
            
            searchResults.style.display = 'block';
            
            // Tambahkan event listener untuk hasil pencarian
            document.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const productId = parseInt(item.dataset.id);
                    const product = productsData.find(p => p.id === productId);
                    
                    // Filter berdasarkan kategori produk yang diklik
                    const categoryList = document.querySelectorAll('#categoryList li');
                    categoryList.forEach(li => li.classList.remove('active'));
                    document.querySelector(`[data-category="${product.category}"]`).classList.add('active');
                    document.querySelector('[data-category="all"]').classList.remove('active');
                    
                    currentCategory = product.category;
                    displayProducts(currentCategory);
                    
                    // Reset search
                    searchInput.value = '';
                    searchResults.style.display = 'none';
                    
                    // Scroll ke produk
                    setTimeout(() => {
                        document.querySelector('.products-section').scrollIntoView({
                            behavior: 'smooth'
                        });
                    }, 100);
                });
            });
        } else {
            searchResults.innerHTML = '<div class="search-result-item">Produk tidak ditemukan</div>';
            searchResults.style.display = 'block';
        }
    });
    
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase().trim();
        if (query) {
            // Filter semua produk berdasarkan query
            currentCategory = 'all';
            const categoryList = document.querySelectorAll('#categoryList li');
            categoryList.forEach(li => li.classList.remove('active'));
            document.querySelector('[data-category="all"]').classList.add('active');
            
            displayProducts('all');
            searchResults.style.display = 'none';
            
            // Scroll ke produk
            setTimeout(() => {
                document.querySelector('.products-section').scrollIntoView({
                    behavior: 'smooth'
                });
            }, 100);
        }
    });
    
    // Hide results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

// AUTH MODAL FUNCTIONALITY
function setupAuthModal() {
    const loginModal = document.getElementById('loginModal');
    const loginBtn = document.getElementById('loginBtn');
    const closeButtons = document.querySelectorAll('.close-modal');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const authForms = document.querySelectorAll('.auth-form');
    const switchToRegister = document.querySelector('.switch-to-register');
    const switchToLogin = document.querySelector('.switch-to-login');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const authSuccess = document.getElementById('authSuccess');
    const successMessage = document.getElementById('successMessage');
    const authOkBtn = document.querySelector('.auth-ok-btn');
    const btnContinue = document.querySelector('.btn-continue');
    
    // Buka modal login
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });
    
    // Tutup modal
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            loginModal.style.display = 'none';
            document.getElementById('cartModal').style.display = 'none';
        });
    });
    
    // Switch tabs
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            
            // Update active tab
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show corresponding form
            authForms.forEach(form => {
                form.classList.remove('active');
                if (form.id === `${tab}Form`) {
                    form.classList.add('active');
                }
            });
            
            // Hide success message
            authSuccess.style.display = 'none';
        });
    });
    
    // Switch to register
    switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        tabButtons.forEach(b => b.classList.remove('active'));
        document.querySelector('[data-tab="register"]').classList.add('active');
        authForms.forEach(form => form.classList.remove('active'));
        registerForm.classList.add('active');
        authSuccess.style.display = 'none';
    });
    
    // Switch to login
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        tabButtons.forEach(b => b.classList.remove('active'));
        document.querySelector('[data-tab="login"]').classList.add('active');
        authForms.forEach(form => form.classList.remove('active'));
        loginForm.classList.add('active');
        authSuccess.style.display = 'none';
    });
    
    // Login form submit
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Simulasi login
        setTimeout(() => {
            authForms.forEach(form => form.style.display = 'none');
            successMessage.textContent = `Selamat datang kembali! Anda berhasil login dengan email: ${email}`;
            authSuccess.style.display = 'block';
            
            // Update button text
            loginBtn.textContent = 'Keluar';
            loginBtn.onclick = () => {
                loginBtn.textContent = 'Login / Register';
                alert('Anda telah logout');
                loginBtn.onclick = () => loginModal.style.display = 'flex';
            };
        }, 1000);
    });
    
    // Register form submit
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;
        
        // Validasi
        if (password !== confirmPassword) {
            alert('Password dan konfirmasi password tidak cocok!');
            return;
        }
        
        if (password.length < 8) {
            alert('Password minimal 8 karakter!');
            return;
        }
        
        // Simulasi registrasi
        setTimeout(() => {
            authForms.forEach(form => form.style.display = 'none');
            successMessage.textContent = `Selamat ${name}! Akun Anda dengan email ${email} berhasil dibuat.`;
            authSuccess.style.display = 'block';
            
            // Update button text
            loginBtn.textContent = 'Keluar';
            loginBtn.onclick = () => {
                loginBtn.textContent = 'Login / Register';
                alert('Anda telah logout');
                loginBtn.onclick = () => loginModal.style.display = 'flex';
            };
        }, 1000);
    });
    
    // OK button
    authOkBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        
        // Reset forms
        loginForm.reset();
        registerForm.reset();
        authForms.forEach(form => form.style.display = 'block');
        document.querySelector('[data-tab="login"]').classList.add('active');
        document.querySelector('[data-tab="register"]').classList.remove('active');
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        authSuccess.style.display = 'none';
    });
    
    // Continue shopping button
    btnContinue.addEventListener('click', () => {
        document.getElementById('cartModal').style.display = 'none';
    });
}

// CAROUSEL FUNCTIONALITY
function setupCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const dots = Array.from(document.querySelectorAll('.dot'));
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    
    const totalSlides = slides.length;
    let currentIndex = 0;
    let autoSlideInterval;
    
    // Update carousel
    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        const gap = 30;
        const offset = -(currentIndex * (slideWidth + gap));
        
        track.style.transform = `translateX(${offset}px)`;
        
        // Update active classes
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
        
        // Update dots
        updateDots();
    }
    
    // Update dot indicators
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Move to next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }
    
    // Move to previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // Move to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    // Auto slide every 3 seconds
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }
    
    // Stop auto slide
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });
    
    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            goToSlide(index);
            startAutoSlide();
        });
    });
    
    // Pause auto slide on hover
    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);
    
    // Handle window resize
    window.addEventListener('resize', updateCarousel);
    
    // Initialize
    updateCarousel();
    startAutoSlide();
}

// SETUP KATEGORI
function setupCategories() {
    const categories = document.querySelectorAll('#categoryList li');
    
    categories.forEach(category => {
        category.addEventListener('click', () => {
            // Update active class
            categories.forEach(cat => cat.classList.remove('active'));
            category.classList.add('active');
            
            // Get category
            const categoryType = category.dataset.category;
            currentCategory = categoryType;
            
            // Display products
            displayProducts(categoryType);
            
            // Scroll to products section
            setTimeout(() => {
                document.querySelector('.products-section').scrollIntoView({
                    behavior: 'smooth'
                });
            }, 100);
        });
    });
}

// SETUP CHECKOUT
function setupCheckout() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Keranjang belanja masih kosong!');
            return;
        }
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        const confirmCheckout = confirm(
            `Konfirmasi Checkout:\n\n` +
            `Total Item: ${itemCount}\n` +
            `Total Harga: ${formatCurrency(total)}\n\n` +
            `Apakah Anda ingin melanjutkan checkout?`
        );
        
        if (confirmCheckout) {
            alert('Checkout berhasil! Terima kasih telah berbelanja di Siti\'s Collection.\n\nPesanan Anda akan diproses dalam 1x24 jam.');
            
            // Clear cart
            cart = [];
            updateCart();
            document.getElementById('cartModal').style.display = 'none';
        }
    });
}

// INITIALIZE EVERYTHING
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart
    updateCart();
    
    // Display all products initially
    displayProducts('all');
    
    // Setup all functionalities
    setupCarousel();
    setupCategories();
    setupSearch();
    setupAuthModal();
    setupCheckout();
    
    // Cart icon click
    document.getElementById('cartIcon').addEventListener('click', showCart);
    
    // Close modal when clicking outside
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Add CSS for notification animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});
