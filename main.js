(() => {
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const MOB = matchMedia('(max-width: 767px)');
const fx = () => !RM && !MOB.matches;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lang = () => document.documentElement.lang === 'en' ? 'en' : 'sr';
const tr = (sr, en) => lang() === 'en' ? en : sr;

// POPUNJAVA KLIJENT – zauzeti datumi u formatu GGGG-MM-DD (dole su samo primeri)
const ZAUZETO = ["2027-05-15", "2027-05-29", "2027-06-12", "2027-06-26", "2027-07-10", "2027-08-21", "2027-09-04", "2027-09-18"];
const WEB3FORMS_KEY = "OVDE_KLJUC"; // Web3Forms access key

const TEL = 'tel:+381614420009', TEL2 = 'tel:+381614430009', VIBER = 'viber://chat?number=%2B381614420009', WA = 'https://wa.me/381614420009';
const svg = d => `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
const I = {
  phone: svg('M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z'),
  chat: svg('M21 11.5a8.4 8.4 0 0 1-9 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8z'),
  arrow: svg('M5 12h14M13 6l6 6-6 6'), close: svg('M6 6l12 12M18 6 6 18'), left: svg('M15 6l-6 6 6 6'), right: svg('M9 6l6 6-6 6')
};
window.GC_ICONS = I;
const contact = () => `<div class="btns"><a class="btn" href="${TEL}">${I.phone}<span data-en="Call">Pozovi</span></a><a class="btn btn-o" href="${VIBER}">${I.chat}Viber</a><a class="btn btn-o" href="${WA}">${I.chat}WhatsApp</a></div>`;

/* ---------- chrome: nav, menu, footer, fab ---------- */
const here = location.pathname.split('/').pop() || 'index.html';
const PAGES = [['sala.html', 'Sala', 'The Hall'], ['proslave.html', 'Proslave', 'Celebrations'], ['smestaj.html', 'Smeštaj', 'Accommodation'], ['galerija.html', 'Galerija', 'Gallery'], ['upit.html', 'Upit', 'Enquiry']];
const cur = p => p === here ? ' aria-current="page"' : '';
document.body.insertAdjacentHTML('afterbegin', `<a class="skip" href="#main" data-en="Skip to content">Preskoči na sadržaj</a>
<header class="nav"><div class="wrap nav-in">
<a class="logo" href="index.html" aria-label="Garden Concept">GARDEN <em>Concept</em></a>
<nav class="nav-links" aria-label="Glavni meni">${PAGES.slice(0, 4).map(p => `<a href="${p[0]}"${cur(p[0])} data-en="${p[2]}">${p[1]}</a>`).join('')}</nav>
<div class="nav-r"><div class="lang" role="group" aria-label="Jezik / Language"><button type="button" data-l="sr">SR</button><span aria-hidden="true">/</span><button type="button" data-l="en">EN</button></div>
<a class="btn nav-cta" href="datumi.html" data-en="Check a date">Proveri datum</a>
<button class="burger" type="button" aria-expanded="false" aria-controls="menu" aria-label="Meni"><i></i><i></i></button></div>
</div></header>
<div class="menu" id="menu" role="dialog" aria-modal="true" aria-label="Sadržaj" hidden>
<div class="menu-top"><a class="logo" href="index.html">GARDEN <em>Concept</em></a><button class="ib menu-x" type="button" aria-label="Zatvori / Close">${I.close}</button></div>
<p class="lab" data-en="Contents">Sadržaj</p>
<ol>${PAGES.map((p, i) => `<li><a href="${p[0]}"${cur(p[0])}><span class="lab">0${i + 1}</span><span data-en="${p[2]}">${p[1]}</span></a></li>`).join('')}</ol>
${contact()}
</div>`);
document.body.insertAdjacentHTML('beforeend', `<footer class="foot dark"><div class="wrap">
<div class="foot-hero"><h2 class="h1" data-en="Your <em>I do</em> deserves the front page.">Vaše <em>DA</em> zaslužuje naslovnu stranu.</h2><a class="btn" href="datumi.html" data-en="Check an available date">Proveri slobodan datum</a></div>
<div class="foot-cols">
<div><p class="lab" data-en="Contact">Kontakt</p><ul><li><a href="${TEL}">061 442 0009</a></li><li><a href="${TEL2}">061 443 0009</a></li><li><a href="${VIBER}">Viber</a></li><li><a href="${WA}">WhatsApp</a></li></ul></div>
<div><p class="lab" data-en="Address">Adresa</p><p>Đure Dukića [BROJ]<br>36000 Kraljevo</p><a href="https://maps.google.com/?q=Garden+Concept+Kraljevo" target="_blank" rel="noopener" data-en="Open map">Otvori mapu</a></div>
<div><p class="lab" data-en="Follow us">Pratite nas</p><ul><li><a href="https://www.instagram.com/garden.concept.kv/" target="_blank" rel="noopener">Instagram</a></li><li><a href="https://www.facebook.com/svecana.sala.garden/" target="_blank" rel="noopener">Facebook</a></li></ul></div>
<div><p class="lab" data-en="Pages">Stranice</p><ul><li><a href="index.html" data-en="Home">Naslovna</a></li><li><a href="datumi.html" data-en="Dates">Datumi</a></li>${PAGES.map(p => `<li><a href="${p[0]}" data-en="${p[2]}">${p[1]}</a></li>`).join('')}</ul></div>
</div>
<div class="foot-bot lab"><span>© Garden Concept · Kraljevo</span><span><span data-en="Photo &amp; video:">Foto i video:</span> SOUTH WEST MULTIMEDIA HOUSE [PROVERITI DA LI ŽELE POTPIS]</span><span><span data-en="Website by">Izrada:</span> <a href="https://avellagency.online" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;min-height:44px">Avella Agency</a></span></div>
</div></footer>
<a class="fab" href="${TEL}">${I.phone}<span data-en="Call">Pozovi</span></a>`);
$$('[data-contact]').forEach(el => el.innerHTML = contact());

/* ---------- SR / EN ---------- */
function setLang(l) {
  document.documentElement.lang = l;
  try { localStorage.setItem('gc-lang', l); } catch (e) {}
  $$('[data-en]').forEach(el => { if (el.dataset.sr == null) el.dataset.sr = el.innerHTML; el.innerHTML = l === 'en' ? el.dataset.en : el.dataset.sr; });
  $$('[data-en-ph]').forEach(el => { if (el.dataset.srPh == null) el.dataset.srPh = el.placeholder; el.placeholder = l === 'en' ? el.dataset.enPh : el.dataset.srPh; });
  $$('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.l === l));
  document.dispatchEvent(new Event('gc-lang'));
}
let saved = 'sr'; try { saved = localStorage.getItem('gc-lang') || 'sr'; } catch (e) {}
setLang(saved);
$$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.l)));

/* ---------- nav hide + menu ---------- */
const nav = $('.nav'), menu = $('#menu'), burger = $('.burger');
let lastY = scrollY;
nav.addEventListener('focusin', () => nav.classList.remove('hide'));
const openMenu = o => {
  menu.hidden = !o; burger.setAttribute('aria-expanded', o); document.body.classList.toggle('lock', o);
  (o ? $('.menu-x') : burger).focus();
};
burger.addEventListener('click', () => openMenu(true));
$('.menu-x').addEventListener('click', () => openMenu(false));
menu.addEventListener('keydown', e => {
  if (e.key === 'Escape') openMenu(false);
  if (e.key === 'Tab') {
    const f = $$('a,button', menu), a = f[0], z = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
    else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
  }
});

/* ---------- headlines: line-by-line from mask ---------- */
function split(el) {
  const walk = node => [...node.childNodes].forEach(n => {
    if (n.nodeType === 3) {
      const frag = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(t => {
        if (!t) return;
        if (/^\s+$/.test(t)) return frag.append(t);
        const o = document.createElement('span'), i = document.createElement('span');
        o.className = 'wm'; i.className = 'wi'; i.textContent = t; o.append(i); frag.append(o);
      });
      n.replaceWith(frag);
    } else if (n.nodeType === 1) walk(n);
  });
  walk(el);
  let top = null, line = -1;
  $$('.wi', el).forEach(w => { const t = w.parentNode.offsetTop; if (t !== top) { top = t; line++; } w.style.transitionDelay = line * .1 + 's'; });
}
if (!RM && 'IntersectionObserver' in window) {
  document.fonts.ready.then(() => {
    const hs = $$('main .h1, main .h2, .foot .h1').filter(h => !h.closest('.hero'));
    hs.forEach(split);
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('split-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    hs.forEach(h => io.observe(h));
  });
}

/* ---------- #1 hero masthead zoom ---------- */
let heroTick = () => {};
const hero = $('.hero');
if (hero) {
  const mast = $('.mast', hero), d = $('.d', mast), line = $('.cover-line', hero), fill = $('.hero-fill', hero);
  const origin = () => mast.style.transformOrigin = `${d.offsetLeft + d.offsetWidth * .24}px ${d.offsetTop + d.offsetHeight * .55}px`;
  document.fonts.ready.then(origin); addEventListener('resize', origin);
  heroTick = () => {
    if (!fx()) { mast.style.transform = line.style.opacity = fill.style.opacity = ''; fill.classList.add('on'); return; }
    const r = hero.getBoundingClientRect(), p = clamp(-r.top / (hero.offsetHeight - innerHeight)), t = clamp(p / .85);
    mast.style.transform = `scale(${1 + 7 * t * t * t})`;
    line.style.opacity = 1 - clamp(p * 5);
    fill.style.opacity = clamp((p - .55) / .3);
    fill.classList.toggle('on', p > .86);
  };
}

/* ---------- #3 stacked cards ---------- */
const cards = $$('.card-p');
const stackTick = () => cards.forEach((c, i) => {
  const n = cards[i + 1];
  if (!fx() || !n || n.parentNode !== c.parentNode) { c.style.transform = c.style.filter = ''; return; }
  const top = parseFloat(getComputedStyle(c).top) || 0;
  const p = clamp(1 - (n.getBoundingClientRect().top - top) / c.offsetHeight);
  c.style.transform = `scale(${1 - .06 * p})`; c.style.filter = `brightness(${1 - .25 * p})`;
});

/* ---------- parallax inside frames ---------- */
const pxs = $$('[data-px] img');
const pxTick = () => pxs.forEach(img => {
  if (!fx()) { img.style.transform = ''; return; }
  const r = img.parentNode.getBoundingClientRect();
  if (r.bottom < 0 || r.top > innerHeight) return;
  const c = clamp((r.top + r.height / 2 - innerHeight / 2) / innerHeight, -1, 1);
  img.style.transform = `translate3d(0,${(c * -5).toFixed(2)}%,0) scale(1.14)`;
});

let raf = 0;
const tick = () => { raf = 0; heroTick(); stackTick(); pxTick(); };
addEventListener('scroll', () => {
  const y = scrollY;
  nav.classList.toggle('hide', y > lastY && y > 160 && menu.hidden);
  lastY = y;
  if (!raf) raf = requestAnimationFrame(tick);
}, { passive: true });
addEventListener('resize', tick); tick();

/* ---------- #2 LED podijum ---------- */
$$('.led').forEach(sec => {
  const g = $('.led-grid', sec), S = 58; let cols = 0, cells = [], vis = false;
  const build = () => {
    cols = Math.ceil(sec.offsetWidth / S); const rows = Math.ceil(sec.offsetHeight / S);
    if (cells.length === cols * rows) return;
    g.style.gridTemplateColumns = `repeat(${cols},56px)`; g.innerHTML = '<i></i>'.repeat(cols * rows); cells = [...g.children];
  };
  build(); new ResizeObserver(() => requestAnimationFrame(build)).observe(sec);
  if (RM) return;
  const lit = c => { if (!c) return; c.classList.add('on'); setTimeout(() => c.classList.remove('on'), 60); };
  sec.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    const r = sec.getBoundingClientRect(), x = Math.floor((e.clientX - r.left) / S), y = Math.floor((e.clientY - r.top) / S);
    if (x >= 0 && x < cols) lit(cells[y * cols + x]);
  });
  new IntersectionObserver(es => vis = es[0].isIntersecting).observe(sec);
  if (!matchMedia('(hover: hover)').matches) setInterval(() => vis && lit(cells[Math.floor(Math.random() * cells.length)]), 420);
});

/* ---------- datumi ---------- */
const MS = ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'];
const ME = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MSS = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'];
const MES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DS = ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'];
const DE = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DSS = ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'], DES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const toDate = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const fmtDate = (s, l = lang()) => { const t = toDate(s), d = t.getDate(), m = t.getMonth(), y = t.getFullYear(); return l === 'en' ? `${DE[t.getDay()]}, ${d} ${ME[m]} ${y}` : `${DS[t.getDay()]}, ${d}. ${MS[m]} ${y}.`; };
const iso = (y, m, d) => `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
const Q = new URLSearchParams(location.search);
const qDate = /^\d{4}-\d{2}-\d{2}$/.test(Q.get('datum') || '') ? Q.get('datum') : '';
let picked = qDate;
const busy = new Set(ZAUZETO);

$$('.dates').forEach(w => {
  const Y = 2027;
  let mode = Q.get('tip') === 'radni-dan' ? 'wd' : 'sat';
  let month = qDate.startsWith(Y + '-') ? +qDate.slice(5, 7) - 1 : 4;
  w.innerHTML = `<div class="tog" role="group"><button type="button" data-m="sat"></button><button type="button" data-m="wd"></button></div><div class="months" role="group"></div><ul class="days" aria-live="polite"></ul><p class="legend lab"><span></span><span></span></p>`;
  const tog = $$('.tog button', w), mon = $('.months', w), days = $('.days', w), leg = $$('.legend span', w);
  const labels = () => {
    const en = lang() === 'en';
    tog[0].textContent = en ? 'Saturdays' : 'Subote'; tog[1].textContent = en ? 'Weekdays' : 'Radni dani';
    $('.tog', w).setAttribute('aria-label', en ? 'Day type' : 'Vrsta dana');
    mon.setAttribute('aria-label', en ? 'Months 2027' : 'Meseci 2027');
    mon.innerHTML = MSS.map((m, i) => `<button type="button" data-mo="${i}" aria-label="${en ? ME[i] : MS[i]} ${Y}">${en ? MES[i] : m}</button>`).join('');
    leg[0].textContent = en ? 'Available' : 'Slobodno'; leg[1].textContent = en ? 'Booked' : 'Zauzeto';
    state();
  };
  const state = () => {
    tog.forEach(b => b.setAttribute('aria-pressed', b.dataset.m === mode));
    $$('button', mon).forEach(b => b.setAttribute('aria-pressed', +b.dataset.mo === month));
  };
  const render = anim => {
    const en = lang() === 'en', n = new Date(Y, month + 1, 0).getDate(); let html = '', k = 0;
    for (let d = 1; d <= n; d++) {
      const dow = new Date(Y, month, d).getDay();
      if (mode === 'sat' ? dow !== 6 : (dow === 0 || dow === 6)) continue;
      const s = iso(Y, month, d), dl = (en ? DES : DSS)[dow], st = `style="animation-delay:${(k++ * .04).toFixed(2)}s"`;
      html += busy.has(s)
        ? `<li><span class="day busy" ${st} aria-label="${fmtDate(s)} – ${en ? 'booked' : 'zauzeto'}"><small>${dl}</small><b>${d}</b></span></li>`
        : `<li><a class="day${s === picked ? ' sel' : ''}" ${st} href="upit.html?datum=${s}" data-d="${s}" aria-label="${fmtDate(s)} – ${en ? 'available' : 'slobodno'}"><small>${dl}</small><b>${d}</b></a></li>`;
    }
    days.classList.toggle('noanim', !anim);
    days.innerHTML = html;
  };
  w.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.m) mode = b.dataset.m;
    if (b.dataset.mo != null) month = +b.dataset.mo;
    state(); render(true);
  });
  document.addEventListener('gc-lang', () => { labels(); render(false); });
  document.addEventListener('gc-pick', () => render(false));
  labels(); render(true);
});

/* ---------- forma upita ---------- */
const form = $('#upit-form');
if (form) {
  const VRSTE = { vencanje: 'Venčanje', punoletstvo: 'Punoletstvo', krstenje: 'Krštenje', korporativna: 'Korporativna', ispracaj: 'Ispraćaj', drugo: 'Drugo' };
  const dIn = form.datum, hint = $('#datum-txt'), btn = $('button[type=submit]', form), status = $('#status');
  const showD = () => hint.textContent = dIn.value ? fmtDate(dIn.value) : '';
  const tip = Q.get('tip');
  if (qDate) dIn.value = qDate;
  if (VRSTE[tip]) form.vrsta.value = tip;
  if (tip === 'smestaj') { form.smestaj.value = 'da'; form.poruka.value = tr('Zanima me smeštaj u apartmanima.', 'I am interested in staying in the apartments.'); }
  if (tip === 'radni-dan') form.poruka.value = tr('Zanima me ponuda za proslavu radnim danom.', 'I am interested in the weekday celebration offer.');
  showD();
  document.addEventListener('gc-lang', () => { showD(); $$('[aria-invalid="true"]', form).forEach(check); });
  dIn.addEventListener('change', () => { picked = dIn.value; showD(); check(dIn); document.dispatchEvent(new Event('gc-pick')); });
  document.addEventListener('click', e => {
    const a = e.target.closest('a.day'); if (!a) return;
    e.preventDefault();
    dIn.value = picked = a.dataset.d; showD(); check(dIn);
    document.dispatchEvent(new Event('gc-pick'));
    if (MOB.matches) scrollTo({ top: dIn.getBoundingClientRect().top + scrollY - 120, behavior: RM ? 'auto' : 'smooth' });
    dIn.focus({ preventScroll: !MOB.matches });
  });
  function check(el) {
    let m = '';
    const v = el.value.trim();
    if (el.required && !v) m = tr('Obavezno polje.', 'This field is required.');
    else if (el.type === 'email' && v && el.validity.typeMismatch) m = tr('Unesite ispravnu email adresu.', 'Please enter a valid email address.');
    else if (el.name === 'telefon' && v.replace(/\D/g, '').length < 6) m = tr('Unesite ispravan broj telefona.', 'Please enter a valid phone number.');
    else if (el.name === 'gosti' && !(+v > 0)) m = tr('Unesite broj gostiju.', 'Please enter the number of guests.');
    el.setAttribute('aria-invalid', !!m);
    const er = $('#' + el.id + '-err'); if (er) er.textContent = m;
    return !m;
  }
  const fields = $$('#ime,#telefon,#email,#vrsta,#datum,#gosti', form);
  fields.forEach(f => f.addEventListener('blur', () => f.getAttribute('aria-invalid') && check(f)));
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const bad = fields.filter(f => !check(f));
    if (bad.length) { bad[0].focus(); return; }
    const old = btn.innerHTML;
    btn.disabled = true; btn.textContent = tr('Šalje se…', 'Sending…'); status.textContent = ''; status.className = 'status';
    const fd = Object.fromEntries(new FormData(form));
    const vrsta = VRSTE[fd.vrsta] || fd.vrsta, datum = fmtDate(fd.datum, 'sr');
    const body = {
      access_key: WEB3FORMS_KEY, subject: `Novi upit – Garden Concept – ${vrsta} – ${datum}`, from_name: 'Garden Concept – sajt',
      name: fd.ime, phone: fd.telefon, email: fd.email || '', vrsta_proslave: vrsta, datum, broj_gostiju: fd.gosti,
      smestaj: fd.smestaj === 'da' ? 'Da' : 'Ne', poruka: fd.poruka || '', jezik: lang(), botcheck: fd.botcheck || ''
    };
    try {
      const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.success) throw new Error('fail');
      status.textContent = tr('Hvala! Upit je primljen – javljamo se u najkraćem roku.', 'Thank you! Your enquiry has been received – we will get back to you shortly.');
      form.reset(); picked = ''; showD(); document.dispatchEvent(new Event('gc-pick'));
    } catch (err) {
      status.className = 'status bad';
      status.textContent = tr('Slanje nije uspelo – pozovite nas na 061 442 0009.', 'Sending failed – please call us at +381 61 442 0009.');
    }
    btn.disabled = false; btn.innerHTML = old; status.focus();
  });
}

/* ---------- #5 galerija ---------- */
const items = $$('.gi, .zoom');
if (items.length) {
  if (!$('#lb')) document.body.insertAdjacentHTML('beforeend', `<dialog class="lb" id="lb" aria-label="Fotografija"><div class="lb-bar"><span class="lab lb-cnt"></span><button type="button" class="ib lb-x" aria-label="Zatvori / Close">${I.close}</button></div><div class="lb-stage"><img alt=""></div><div class="lb-bar"><button type="button" class="ib lb-prev" aria-label="Prethodna / Previous">${I.left}</button><span class="lab lb-cap"></span><button type="button" class="ib lb-next" aria-label="Sledeća / Next">${I.right}</button></div></dialog>`);
  const fbtn = $$('.filters button');
  fbtn.forEach(b => b.addEventListener('click', () => {
    fbtn.forEach(x => x.setAttribute('aria-pressed', x === b));
    items.forEach(it => it.hidden = b.dataset.f !== 'sve' && it.dataset.cat !== b.dataset.f);
  }));
  if (!RM && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    items.filter(it => it.classList.contains('gi')).forEach(it => { it.classList.add('reveal'); io.observe(it); });
  }
  const lb = $('#lb'), img = $('.lb-stage img', lb), cap = $('.lb-cap', lb), cnt = $('.lb-cnt', lb);
  let list = [], i = 0, x0 = null;
  const show = () => {
    const it = list[i], src = $('img', it);
    img.src = src.src; img.alt = src.alt; cap.textContent = $('figcaption', it).textContent;
    cnt.textContent = `${String(i + 1).padStart(2, '0')} / ${String(list.length).padStart(2, '0')}`;
  };
  const go = d => { i = (i + d + list.length) % list.length; show(); };
  items.forEach(it => $('button', it).addEventListener('click', () => {
    list = items.filter(x => !x.hidden); i = list.indexOf(it); show(); lb.showModal(); document.body.classList.add('lock');
  }));
  $('.lb-prev', lb).addEventListener('click', () => go(-1));
  $('.lb-next', lb).addEventListener('click', () => go(1));
  $('.lb-x', lb).addEventListener('click', () => lb.close());
  lb.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') go(-1); if (e.key === 'ArrowRight') go(1); });
  lb.addEventListener('touchstart', e => x0 = e.touches[0].clientX, { passive: true });
  lb.addEventListener('touchend', e => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1); x0 = null; });
  lb.addEventListener('close', () => { document.body.classList.remove('lock'); const b = list[i] && $('button', list[i]); b && b.focus(); });
}
})();
