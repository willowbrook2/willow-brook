// Willow Brook · landingspagina

// Header krijgt een achtergrond zodra je scrolt
const topbar = document.querySelector('.topbar');
const zetTopbar = () => topbar.classList.toggle('is-gescrold', window.scrollY > 40);
zetTopbar();
window.addEventListener('scroll', zetTopbar, { passive: true });

// Hero-video: pauzeknop, en niet afspelen bij "minder beweging"
const video = document.querySelector('.hero__video');
const pauze = document.querySelector('[data-pauze]');
const minderBeweging = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (video) {
  if (minderBeweging) video.pause();
  const zetKnop = () => {
    pauze.setAttribute('aria-label', video.paused ? 'Video afspelen' : 'Video pauzeren');
    pauze.firstElementChild.textContent = video.paused ? '▶' : '❙❙';
  };
  pauze.addEventListener('click', () => { video.paused ? video.play() : video.pause(); });
  video.addEventListener('play', zetKnop);
  video.addEventListener('pause', zetKnop);
  zetKnop();
}

// Sfeervideo's (zonder geluid) spelen alleen af als ze in beeld zijn
const sfeervideos = document.querySelectorAll('.sfeervideo');
if ('IntersectionObserver' in window && !minderBeweging) {
  const vo = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) item.target.play().catch(() => {});
      else item.target.pause();
    });
  }, { threshold: 0.25 });
  sfeervideos.forEach((v) => vo.observe(v));
}

// Secties verschijnen rustig bij het scrollen
const blokken = document.querySelectorAll(
  '.verhaal__beeld, .verhaal__tekst, .sectiekop, .stap, .kaart, .smaken__feit, .inschrijven__tekst, .inschrijven__form'
);
if ('IntersectionObserver' in window && !minderBeweging) {
  const io = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add('is-zichtbaar');
        io.unobserve(item.target);
      }
    });
  }, { threshold: 0.15 });
  blokken.forEach((el) => { el.classList.add('verschijn'); io.observe(el); });
}

// Voorbeeldformulier: alleen actief zolang de MailerLite-code nog niet geplakt is.
// Het controleert de velden en toont de bedankmelding, maar verstuurt niets.
const embed = document.getElementById('mailerlite-form');
const form = document.getElementById('voorbeeld-form');
const bedankt = document.querySelector('.form__bedankt');

if (embed && embed.children.length > 0 && form) {
  // MailerLite staat erin: voorbeeldformulier verbergen
  form.remove();
  bedankt?.remove();
} else if (form) {
  const fout = form.querySelector('.form__fout');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const naam = form.naam.value.trim();
    const email = form.email.value.trim();
    let melding = '';
    if (!naam) melding = 'Vul je voornaam in.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) melding = 'Vul een geldig e-mailadres in.';
    else if (!form.optin.checked) melding = 'Vink het vakje aan, dan weten we dat je onze e-mails wil ontvangen.';

    if (melding) {
      fout.textContent = melding;
      fout.hidden = false;
      return;
    }
    fout.hidden = true;
    form.hidden = true;
    bedankt.hidden = false;
    bedankt.focus();
  });
}
