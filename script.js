// script.js — loads projects.json and handles small UI interactions

document.addEventListener('DOMContentLoaded', () => {
  // current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // load projects from json
  fetch('projects.json')
    .then(r => r.ok ? r.json() : Promise.reject(r.statusText))
    .then(renderProjects)
    .catch(err => {
      console.error('Failed to load projects.json', err);
      document.getElementById('projects-grid').innerHTML = '<p class="muted">No projects to show.</p>';
    });

  // mobile menu basic toggle
  const mobileBtn = document.querySelector('.mobile-menu');
  const nav = document.querySelector('.nav');
  mobileBtn?.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
});

function renderProjects(projects){
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';
  projects.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <h3><a href="${escapeHtml(p.live || p.repo)}" target="_blank" rel="noopener">${escapeHtml(p.title)}</a></h3>
      <p>${escapeHtml(p.description)}</p>
      <p style="margin-top:8px;font-size:0.9rem;color:var(--muted)">
        ${p.tech?.join(' · ') || ''}
      </p>
      <p style="margin-top:10px">
        ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener" class="btn outline" style="padding:6px 10px">Repo</a>` : ''}
        ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="btn" style="padding:6px 10px;margin-left:8px">Live</a>` : ''}
      </p>
    `;
    grid.appendChild(card);
  });
}

function escapeHtml(s){
  if(!s) return '';
  return String(s)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#39;');
}

// contact form: open mailto with prefilled body (fallback to mailto action)
function sendMail(e){
  e.preventDefault();
  const form = e.currentTarget;
  const name = form.querySelector('input[name="subject"]').value.trim();
  const body = form.querySelector('textarea[name="body"]').value.trim();
  const mail = 'Rabbanishaik882@gmail.com'; // changed to your email
  const subject = encodeURIComponent(`Message from ${name}`);
  const mailBody = encodeURIComponent(body);
  const mailto = `mailto:${mail}?subject=${subject}&body=${mailBody}`;
  window.location.href = mailto;
  return false;
}
