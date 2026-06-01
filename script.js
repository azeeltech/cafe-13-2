/* ================================================================
   CAFE 13 — MASTER LEVEL SCRIPTS
   ================================================================ */
'use strict';

/* ── MENU DATA ── */
const MENU = {
  coffee: [
    { name:'Cappuccino', price:180, desc:'Rich double espresso topped with velvety steamed milk and a dusting of artisan cocoa powder.', veg:true, badge:'Bestseller', tag:'Hot Brew', img:'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80&fit=crop' },
    { name:'Latte Macchiato', price:190, desc:'Micro-foam milk marked with a single premium organic espresso — delicate, silky, unforgettable.', veg:true, badge:null, tag:'Hot Brew', img:'https://images.unsplash.com/photo-1598802585562-f705a6ab4301?w=600&q=80&fit=crop' },
    { name:'Flat White', price:210, desc:'Double ristretto blended with thin-textured whole milk preserving the bold aromatic espresso punch.', veg:true, badge:null, tag:'Hot Brew', img:'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&q=80&fit=crop' },
    { name:'Iced Caramel Latte', price:230, desc:'Cold brew espresso layered over whole milk, ice, and house-made caramel drizzle. Summer in a glass.', veg:true, badge:'Summer Hit', tag:'Cold Brew', img:'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80&fit=crop' },
    { name:'Cold Brew', price:220, desc:'18-hour steeped single-origin cold brew — smooth, bold, zero bitterness. Black or with oat milk.', veg:true, badge:null, tag:'Cold Brew', img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80&fit=crop' },
    { name:'Espresso Tonic', price:200, desc:'Double espresso poured over Indian tonic water and ice — citrusy, effervescent, absolutely addictive.', veg:true, badge:'Unique', tag:'Cold', img:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80&fit=crop' },
  ],
  shakes: [
    { name:'KitKat Premium Shake', price:220, desc:'Double-churned vanilla ice cream blended with crispy KitKat, topped with fresh whipped cream and fudge.', veg:true, badge:'Must Try', tag:'Cold', img:'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&q=80&fit=crop' },
    { name:'Classic Chocolate Shake', price:200, desc:'Smooth thick shake with house cocoa paste, premium vanilla cream, and Callebaut chocolate savings.', veg:true, badge:null, tag:'Cold', img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80&fit=crop' },
    { name:'Oreo Blast', price:220, desc:'Crushed Oreos blended thick with heavy cream, vanilla, chocolate drizzle lining on the glass.', veg:true, badge:'Kids Fav', tag:'Cold', img:'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80&fit=crop' },
    { name:'Hazelnut Indulgence', price:240, desc:'Premium hazelnut paste whipped with cold milk, dark chocolate chunks, and vanilla cream base.', veg:true, badge:'Chef Choice', tag:'Cold', img:'https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=600&q=80&fit=crop' },
  ],
  pizza: [
    { name:'Classic Margherita', price:290, desc:'San Marzano tomatoes, fresh buffalo mozzarella, garden basil, extra virgin olive oil on hand-tossed crust.', veg:true, badge:'Woodfired', tag:'Artisanal', img:'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600&q=80&fit=crop' },
    { name:'Farmhouse Garden', price:340, desc:'Green bell peppers, red onions, mushrooms, golden corn, olives, and rich mozzarella on a crispy base.', veg:true, badge:'Healthy', tag:'Handtossed', img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80&fit=crop' },
    { name:'Double Cheese Margherita', price:320, desc:'A decadent layer of liquid cheese beneath bubbling mozzarella and fresh organic herbs.', veg:true, badge:'Cheese Blast', tag:'Artisanal', img:'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&q=80&fit=crop' },
    { name:'Fiery Paneer Tikka', price:360, desc:'Spiced paneer, red paprika, coriander, sliced onions, and mint-mayo dressing on a thin crust.', veg:true, badge:'Indi Twist', tag:'Artisanal', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&fit=crop' },
  ],
  pasta: [
    { name:'Penne Arrabiata', price:280, desc:'Al dente penne in fiery hot tomato marinara with roasted garlic, chili, and virgin olive oil.', veg:true, badge:'Bestseller', tag:'Gourmet', img:'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80&fit=crop' },
    { name:'Penne Alfredo Cream', price:300, desc:'Rich white sauce with Parmesan, fresh butter, sliced mushrooms, and garlic on perfectly cooked penne.', veg:true, badge:'Chef Special', tag:'Gourmet', img:'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600&q=80&fit=crop' },
    { name:'Pesto Penne', price:320, desc:'Aromatic home-blend basil pine nut pesto, cream toppings, and black olive wheels on classic penne.', veg:true, badge:null, tag:'Gourmet', img:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80&fit=crop' },
    { name:'Pink Sauce Fusion', price:310, desc:'The perfect harmony of tangy marinara and creamy Alfredo with baby corn, capsicum, and olives.', veg:true, badge:'Bestseller', tag:'Fusion', img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80&fit=crop' },
  ],
  breakfast: [
    { name:'English Butter Toast', price:120, desc:'Four slices of crisp golden toast served with premium salted butter and organic mixed fruit preserve.', veg:true, badge:null, tag:'Quick', img:'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80&fit=crop' },
    { name:'Veg Cheese Sandwich', price:160, desc:'Grilled sandwich packed with cucumber, tomatoes, green peppers, onions, and melting cheese sheets.', veg:true, badge:'Cozy Pick', tag:'Grilled', img:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80&fit=crop' },
    { name:'Masala Omelette Toast', price:140, desc:'Fluffy egg omelette with onion, tomato, green chilli, and coriander served on toasted brown bread.', veg:false, badge:null, tag:'Egg', img:'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80&fit=crop' },
  ],
  lunch: [
    { name:'Garlic Bread Toasties', price:180, desc:'Baguette slices rubbed with rich garlic butter, topped with mozzarella and baked to golden perfection.', veg:true, badge:'Bestseller', tag:'Sides', img:'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=600&q=80&fit=crop' },
    { name:'Chilli Chicken Dry', price:290, desc:'Crispy fried chicken tossed with diced onions, bell peppers, dark soy sauce, and fiery green chillies.', veg:false, badge:'Spicy', tag:'Indo-Chinese', img:'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80&fit=crop' },
    { name:'Veg Burger Supreme', price:220, desc:'Crispy veggie patty with jalapeños, caramelized onions, chipotle mayo, and fresh iceberg in a brioche bun.', veg:true, badge:null, tag:'American', img:'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80&fit=crop' },
  ],
  dinner: [
    { name:'Paneer Butter Masala', price:320, desc:'Rich cottage cheese gravy served with 2 pieces of soft butter laccha parathas, onions, and mint chutney.', veg:true, badge:'Classic', tag:'Indian', img:'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&q=80&fit=crop' },
    { name:'Kadai Chicken Combo', price:350, desc:'Spiced thick chicken gravy cooked with capsicum and onions in kadai masala, served with parathas.', veg:false, badge:'Spicy', tag:'Indian', img:'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80&fit=crop' },
  ],
  drinks: [
    { name:'Mint Mojito Classic', price:180, desc:'Squeezed lime, fresh crushed mint leaves, cane sugar syrup, topped with sparkling club soda.', veg:true, badge:'Must Try', tag:'Mocktail', img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80&fit=crop' },
    { name:'Blue Lagoon', price:190, desc:'Blue curacao syrup, fresh lemon juice, sparkling soda, ice, and mint — stunning and refreshing.', veg:true, badge:null, tag:'Mocktail', img:'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600&q=80&fit=crop' },
    { name:'Virgin Sangria', price:200, desc:'House-blend grape juice with orange slices, apple, berries, cinnamon, and a splash of soda.', veg:true, badge:'Seasonal', tag:'Mocktail', img:'https://images.unsplash.com/photo-1506802913710-8b73f97d9da9?w=600&q=80&fit=crop' },
  ],
  desserts: [
    { name:'Sizzling Fudge Brownie', price:240, desc:'Warm chocolate fudge brownie with premium vanilla ice cream and hot chocolate syrup. A Cafe 13 signature.', veg:true, badge:'Signature', tag:'Warm', img:'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&q=80&fit=crop' },
    { name:'Choco Lava Cake', price:180, desc:'Warm chocolate mini-cake with a molten cocoa core, served with vanilla ice cream and berry coulis.', veg:true, badge:'Bestseller', tag:'Baked', img:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80&fit=crop' },
    { name:'Tiramisu', price:220, desc:'Authentic Italian layers of espresso-soaked ladyfingers and mascarpone cream, dusted with fine cocoa.', veg:true, badge:'Italian', tag:'Cold', img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80&fit=crop' },
  ],
  snacks: [
    { name:'Peri Peri Crispy Fries', price:160, desc:'Double-fried fries tossed in African bird-eye pepper seasoning dust — spicy, crispy, irresistible.', veg:true, badge:'Spicy', tag:'Quick', img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80&fit=crop' },
    { name:'Cheesy Nachos', price:190, desc:'Crispy tortilla chips loaded with cheddar cheese sauce, jalapeños, sour cream, and fresh salsa.', veg:true, badge:null, tag:'Sharing', img:'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600&q=80&fit=crop' },
    { name:'Paneer Tikka Skewers', price:240, desc:'Marinated cottage cheese chunks grilled in a tandoor with bell peppers and served with mint chutney.', veg:true, badge:'Popular', tag:'Grilled', img:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80&fit=crop' },
  ]
};

/* ── DOM READY ── */
document.addEventListener('DOMContentLoaded', () => {

  /* PRELOADER */
  const preloader = document.getElementById('preloader');
  const progressEl = document.getElementById('preloader-progress');
  const textEl = document.getElementById('preloader-text');
  const messages = ['Brewing something special…','Warming the oven…','Setting the swing seats…','Almost ready…'];
  let pct = 0;
  let msgIdx = 0;
  const pInterval = setInterval(() => {
    pct = Math.min(pct + Math.random() * 18, 100);
    if (progressEl) progressEl.style.width = pct + '%';
    if (pct > 25 && msgIdx < 1) { msgIdx = 1; if(textEl) textEl.textContent = messages[1]; }
    if (pct > 55 && msgIdx < 2) { msgIdx = 2; if(textEl) textEl.textContent = messages[2]; }
    if (pct > 80 && msgIdx < 3) { msgIdx = 3; if(textEl) textEl.textContent = messages[3]; }
    if (pct >= 100) {
      clearInterval(pInterval);
      setTimeout(() => {
        preloader.classList.add('done');
        initHeroReveal();
      }, 400);
    }
  }, 120);

  /* CUSTOM CURSOR */
  const cursorOuter = document.getElementById('cursor-outer');
  const cursorInner = document.getElementById('cursor-inner');
  let mx = 0, my = 0, ox = 0, oy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  const animateCursor = () => {
    ox += (mx - ox) * 0.12;
    oy += (my - oy) * 0.12;
    if (cursorOuter) { cursorOuter.style.left = ox + 'px'; cursorOuter.style.top = oy + 'px'; }
    if (cursorInner) { cursorInner.style.left = mx + 'px'; cursorInner.style.top = my + 'px'; }
    requestAnimationFrame(animateCursor);
  };
  if (window.innerWidth > 1024) animateCursor();

  const attachCursorHovers = () => {
    document.querySelectorAll('a,button,.seat-card,.mt,.gm-item,.menu-card,.exp-card').forEach(el => {
      el.addEventListener('mouseenter', () => cursorOuter && cursorOuter.classList.add('hovered'));
      el.addEventListener('mouseleave', () => cursorOuter && cursorOuter.classList.remove('hovered'));
    });
  };
  attachCursorHovers();

  /* NAVBAR */
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scroll-progress');
  const backTop = document.getElementById('back-to-top');
  const navLinks = document.querySelectorAll('.nm-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (navbar) navbar.classList.toggle('scrolled', scrollY > 60);
    if (scrollProgress) scrollProgress.style.width = (scrollY / maxScroll * 100) + '%';
    if (backTop) backTop.classList.toggle('show', scrollY > 500);

    // Active section spy
    const sections = document.querySelectorAll('section[id],header[id]');
    let current = '';
    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  });

  if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* MOBILE DRAWER */
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerBackdrop = document.getElementById('drawer-backdrop');

  const openDrawer = () => { drawer.classList.add('open'); drawerBackdrop.classList.add('show'); document.body.style.overflow = 'hidden'; };
  const closeDrawer = () => { drawer.classList.remove('open'); drawerBackdrop.classList.remove('show'); document.body.style.overflow = ''; };
  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);
  document.querySelectorAll('.dn-link').forEach(l => l.addEventListener('click', closeDrawer));

  /* SMOOTH SCROLL */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  /* HERO SLIDES */
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hsd');
  let currentSlide = 0;
  const changeSlide = (idx) => {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = idx;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  };
  dots.forEach((dot, i) => dot.addEventListener('click', () => changeSlide(i)));
  setInterval(() => changeSlide((currentSlide + 1) % slides.length), 5500);

  /* HERO CANVAS PARTICLES */
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.5 - 0.2,
      a: Math.random()
    }));
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.a * 0.35})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy; p.a += (Math.random() - 0.5) * 0.02;
        if (p.y < 0) { p.y = canvas.height; p.x = Math.random() * canvas.width; }
        if (p.a < 0) p.a = 0; if (p.a > 1) p.a = 1;
      });
      requestAnimationFrame(drawParticles);
    };
    drawParticles();
  }

  /* HERO REVEAL */
  function initHeroReveal() {
    // Wrap each ht-line text
    document.querySelectorAll('.ht-line').forEach(line => {
      const text = line.innerHTML;
      line.innerHTML = `<span class="ht-line-inner">${text}</span>`;
    });
    setTimeout(() => { document.querySelectorAll('.ht-line').forEach((l, i) => { setTimeout(() => l.classList.add('revealed'), i * 150); }); }, 100);
    setTimeout(() => document.querySelector('.hero-rating-pill')?.classList.add('revealed'), 200);
    setTimeout(() => document.querySelector('.hero-sub')?.classList.add('revealed'), 550);
    setTimeout(() => document.querySelector('.hero-actions')?.classList.add('revealed'), 700);
    setTimeout(() => document.querySelector('.hero-stats')?.classList.add('revealed'), 850);

    // Count-up
    setTimeout(() => {
      document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = Math.floor(current).toLocaleString('en-IN');
          if (current >= target) clearInterval(timer);
        }, 24);
      });
    }, 900);
  }

  /* SCROLL REVEAL */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        if (entry.target.classList.contains('exp-card')) {
          entry.target.style.transitionDelay = entry.target.style.getPropertyValue('--stagger') || '0s';
        }
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-reveal],.exp-card,.ap-item').forEach(el => revealObserver.observe(el));

  /* MENU */
  const menuGrid = document.getElementById('menu-grid');
  const cart = {};

  const buildCard = (item) => {
    const badge = item.badge ? `<span class="mc-badge">${item.badge}</span>` : '';
    const dot = item.veg ? '<span class="veg-dot"></span>Veg' : '<span class="nveg-dot"></span>Non-Veg';
    return `
      <div class="menu-card">
        <div class="mc-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy">
          ${badge}
        </div>
        <div class="mc-body">
          <div class="mc-title-row"><h3 class="mc-name">${item.name}</h3><span class="mc-price">₹${item.price}</span></div>
          <p class="mc-desc">${item.desc}</p>
          <div class="mc-footer">
            <div class="mc-tags"><span>${dot}</span><span>${item.tag}</span></div>
            <button class="mc-add" data-name="${item.name}" data-price="${item.price}"><i class="fas fa-plus"></i> Add</button>
          </div>
        </div>
      </div>`;
  };

  const updateCartUI = () => {
    const dock = document.getElementById('cart-dock');
    const itemsEl = document.getElementById('cd-items');
    const totalEl = document.getElementById('cd-total');
    let items = 0, total = 0;
    Object.values(cart).forEach(v => { items += v.qty; total += v.qty * v.price; });
    if (itemsEl) itemsEl.textContent = `${items} item${items !== 1 ? 's' : ''}`;
    if (totalEl) totalEl.textContent = `₹${total.toLocaleString('en-IN')}`;
    if (dock) dock.classList.toggle('show', items > 0);
  };

  const loadCategory = (cat) => {
    if (!menuGrid) return;
    menuGrid.style.opacity = '0';
    setTimeout(() => {
      menuGrid.innerHTML = (MENU[cat] || []).map(buildCard).join('');
      menuGrid.style.opacity = '1';
      menuGrid.querySelectorAll('.mc-add').forEach(btn => {
        btn.addEventListener('click', function() {
          const name = this.dataset.name, price = parseInt(this.dataset.price);
          cart[name] = cart[name] ? { ...cart[name], qty: cart[name].qty + 1 } : { price, qty: 1 };
          this.classList.add('added');
          const orig = this.innerHTML;
          this.innerHTML = '<i class="fas fa-check"></i> Added';
          setTimeout(() => { this.innerHTML = orig; this.classList.remove('added'); }, 1000);
          updateCartUI();
        });
      });
      attachCursorHovers();
    }, 300);
  };

  document.querySelectorAll('.mt').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.mt').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      loadCategory(this.dataset.cat);
    });
  });
  loadCategory('coffee');

  /* GALLERY LIGHTBOX */
  const galleryItems = document.querySelectorAll('.gm-item');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCaption = document.getElementById('lb-caption');
  let currentLb = 0;
  const galleryData = Array.from(galleryItems).map(el => ({
    src: el.querySelector('img').src,
    caption: el.querySelector('.gm-overlay span').textContent
  }));

  const openLb = (idx) => {
    currentLb = idx;
    lbImg.src = galleryData[idx].src;
    lbCaption.textContent = galleryData[idx].caption;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeLb = () => { lightbox.classList.remove('open'); document.body.style.overflow = ''; };
  const navLb = (dir) => {
    currentLb = (currentLb + dir + galleryData.length) % galleryData.length;
    lbImg.style.opacity = '0';
    setTimeout(() => {
      lbImg.src = galleryData[currentLb].src;
      lbCaption.textContent = galleryData[currentLb].caption;
      lbImg.style.opacity = '1';
    }, 250);
  };

  galleryItems.forEach((item, i) => item.addEventListener('click', () => openLb(i)));
  document.getElementById('lb-close')?.addEventListener('click', closeLb);
  document.getElementById('lb-prev')?.addEventListener('click', () => navLb(-1));
  document.getElementById('lb-next')?.addEventListener('click', () => navLb(1));
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLb(); });
  document.addEventListener('keydown', e => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowRight') navLb(1);
    if (e.key === 'ArrowLeft') navLb(-1);
  });

  /* SWIPER REVIEWS */
  if (typeof Swiper !== 'undefined') {
    new Swiper('.reviews-swiper', {
      slidesPerView: 1, spaceBetween: 30, loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      breakpoints: { 768: { slidesPerView: 2, spaceBetween: 36 } }
    });
  }

  /* RESERVATION FORM */
  const seatCards = document.querySelectorAll('.seat-card');
  const seatTypeInput = document.getElementById('seat-type');
  seatCards.forEach(c => c.addEventListener('click', function() {
    seatCards.forEach(s => s.classList.remove('active'));
    this.classList.add('active');
    if (seatTypeInput) seatTypeInput.value = this.dataset.seat;
  }));

  // Date min
  const dateInput = document.getElementById('rf-date');
  if (dateInput) {
    const d = new Date();
    dateInput.min = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  const validate = (input, errId, condition, msg) => {
    const field = input.closest('.rf-field');
    const err = document.getElementById(errId);
    field.classList.toggle('invalid', !condition);
    if (err) { err.textContent = condition ? '' : msg; err.style.display = condition ? 'none' : 'block'; }
    return condition;
  };

  const resForm = document.getElementById('res-form');
  const resSuccess = document.getElementById('res-success');
  const rfSubmit = document.getElementById('rf-submit');

  if (resForm) {
    resForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('rf-name');
      const phone = document.getElementById('rf-phone');
      const email = document.getElementById('rf-email');
      const guests = document.getElementById('rf-guests');
      const date = document.getElementById('rf-date');
      const time = document.getElementById('rf-time');

      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRe = /^[6-9]\d{9}$/;
      const [h, m] = (time.value || '').split(':').map(Number);
      const timeMin = h * 60 + m;

      const valid = [
        validate(name, 'err-name', name.value.trim().length >= 2, 'Please enter your full name'),
        validate(phone, 'err-phone', phoneRe.test(phone.value.trim()), 'Enter a valid 10-digit Indian mobile number'),
        validate(email, 'err-email', emailRe.test(email.value.trim()), 'Enter a valid email address'),
        validate(guests, 'err-guests', guests.value >= 1 && guests.value <= 25, 'Guests must be between 1 and 25'),
        validate(date, 'err-date', date.value !== '', 'Please select a reservation date'),
        validate(time, 'err-time', timeMin >= 540 && timeMin <= 1290, 'Please select a time between 9:00 AM and 9:30 PM'),
      ].every(Boolean);

      if (!valid) return;

      rfSubmit.disabled = true;
      rfSubmit.querySelector('.rfs-text').style.display = 'none';
      rfSubmit.querySelector('.rfs-spinner').style.display = 'inline';

      setTimeout(() => {
        rfSubmit.disabled = false;
        rfSubmit.querySelector('.rfs-text').style.display = 'inline';
        rfSubmit.querySelector('.rfs-spinner').style.display = 'none';
        const seatNames = { couple: 'Couple Seating', family: 'Family Seating', group: 'Group Lounge/Swing', work: 'Work Desk' };
        document.getElementById('rs-summary').innerHTML = `
          <div class="rss-row"><span>Name</span><strong>${name.value.trim()}</strong></div>
          <div class="rss-row"><span>Date & Time</span><strong>${date.value} at ${time.value}</strong></div>
          <div class="rss-row"><span>Guests</span><strong>${guests.value}</strong></div>
          <div class="rss-row"><span>Seating</span><strong>${seatNames[seatTypeInput.value] || 'Standard'}</strong></div>
        `;
        resSuccess.classList.add('show');
      }, 1800);
    });
  }

  document.getElementById('rs-done')?.addEventListener('click', () => {
    resSuccess?.classList.remove('show');
    resForm?.reset();
    seatCards.forEach(c => c.classList.remove('active'));
    seatCards[0]?.classList.add('active');
    if (seatTypeInput) seatTypeInput.value = 'couple';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* NEWSLETTER */
  document.getElementById('nl-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerHTML = '<i class="fas fa-check"></i>';
    btn.style.background = '#4caf50';
    setTimeout(() => { e.target.reset(); btn.innerHTML = '<i class="fas fa-paper-plane"></i>'; btn.style.background = ''; }, 3000);
  });

  /* SECTION SCROLL REVEAL */
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-anim="stagger"]').forEach((el, i) => {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, i * 120);
        });
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-section').forEach(s => {
    s.querySelectorAll('[data-anim="stagger"]').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    });
    sectionObserver.observe(s);
  });

});
