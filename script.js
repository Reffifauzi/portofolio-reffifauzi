/**
 * ============================================================================
 * SCRIPT PORTOFOLIO REFFI FAUZI - MINIMALIST EDITORIAL & MODERN DEV
 * Dynamic Project Renderer, Detail Modal with Image Preview, Smooth Navigation
 * ============================================================================
 */

let projectModalInstance = null;
let certModalInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProjects();
  renderCertificates();
  initNavigation();
  initContactForm();
});

/**
 * Pengaturan Mode Malam (Dark) dan Terang (Light)
 */
function initTheme() {
  const savedTheme = localStorage.getItem('reffi_theme') || 'dark';
  applyTheme(savedTheme);

  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('reffi_theme', newTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  document.documentElement.setAttribute('data-theme', theme);

  const icon = document.getElementById('themeToggleIcon');
  if (icon) {
    if (theme === 'light') {
      icon.className = 'bi bi-sun-fill text-warning';
    } else {
      icon.className = 'bi bi-moon-stars';
    }
  }
}

/**
 * Render Project Cards ke dalam Grid Editorial
 */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  if (typeof projectsData === 'undefined' || !Array.isArray(projectsData) || projectsData.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="editorial-card text-center py-4">
          <p class="text-muted mb-0 font-monospace">Belum ada data proyek yang dimuat.</p>
        </div>
      </div>
    `;
    return;
  }

  const html = projectsData.map(project => {
    // Generate Tech Badges (Monochrome Pills)
    const techBadges = project.technologies && project.technologies.length > 0
      ? `
        <div class="d-flex flex-wrap gap-2 mb-3">
          ${project.technologies.slice(0, 4).map(t => `<span class="tech-pill">${escapeHTML(t)}</span>`).join('')}
          ${project.technologies.length > 4 ? `<span class="tech-pill text-muted">+${project.technologies.length - 4}</span>` : ''}
        </div>
      `
      : '';

    // Action Links (Stop propagation agar tidak memicu click card)
    const githubLink = project.githubUrl
      ? `<a href="${escapeHTML(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="link-action" title="Lihat Source Code" onclick="event.stopPropagation()">
          <i class="bi bi-github"></i> Kode
         </a>`
      : '';
      
    const demoLink = project.demoUrl
      ? `<a href="${escapeHTML(project.demoUrl)}" target="_blank" rel="noopener noreferrer" class="link-action" title="Buka Live Demo" onclick="event.stopPropagation()">
          <i class="bi bi-arrow-up-right"></i> Demo
         </a>`
      : '';

    // Image Indicator badge jika ada gambar
    const imageCount = (Array.isArray(project.images) && project.images.length > 0)
      ? project.images.length
      : (project.image && project.image.trim() !== '' ? 1 : 0);

    const imageBadge = imageCount > 0
      ? `<span class="custom-badge custom-badge-image"><i class="bi bi-images"></i> ${imageCount} Gambar</span>` 
      : '';

    return `
      <div class="col-12 col-lg-6">
        <article class="project-card" onclick="openProjectModal('${escapeHTML(project.id)}')">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="project-category">${escapeHTML(project.category || 'PROYEK')}</span>
            <div class="d-flex gap-2 align-items-center">
              ${githubLink}
              ${demoLink}
            </div>
          </div>

          <h3 class="project-title">${escapeHTML(project.title)}</h3>
          <p class="project-description mb-3">${escapeHTML(project.description)}</p>

          ${techBadges}

          <div class="project-footer d-flex justify-content-between align-items-center">
            <button type="button" class="btn-detail-trigger">
              Lihat Detail &amp; Gambar <i class="bi bi-arrow-right ms-1"></i>
            </button>
            ${imageBadge}
          </div>
        </article>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

/**
 * Render Sertifikat & Pencapaian Cards ke dalam Grid
 */
function renderCertificates() {
  const container = document.getElementById('certificates-container');
  if (!container) return;

  if (typeof certificatesData === 'undefined' || !Array.isArray(certificatesData) || certificatesData.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="editorial-card text-center py-4">
          <p class="text-muted mb-0 font-monospace">Belum ada data sertifikat yang dimuat.</p>
        </div>
      </div>
    `;
    return;
  }

  const html = certificatesData.map(cert => {
    let certBadge = '';
    const file = (cert.file || cert.image || '').trim();
    if (file) {
      const isPdf = file.toLowerCase().endsWith('.pdf');
      const badgeIcon = isPdf ? 'bi-filetype-pdf' : 'bi-file-earmark-image';
      const badgeClass = isPdf ? 'custom-badge-pdf' : 'custom-badge-image';
      const badgeText = isPdf ? 'Dokumen PDF' : 'Gambar';
      certBadge = `<span class="custom-badge ${badgeClass}"><i class="bi ${badgeIcon}"></i> ${badgeText}</span>`;
    }

    return `
      <div class="col-12 col-md-6 col-lg-4">
        <article class="cert-card" onclick="openCertModal('${escapeHTML(cert.id)}')">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <div class="cert-badge-icon">
              <i class="bi bi-patch-check"></i>
            </div>
            <span class="tech-pill">${escapeHTML(cert.date || '')}</span>
          </div>

          <h3 class="cert-title">${escapeHTML(cert.title)}</h3>
          <div class="cert-issuer">${escapeHTML(cert.issuer)}</div>
          <p class="cert-desc">${escapeHTML(cert.description)}</p>

          <div class="cert-footer d-flex justify-content-between align-items-center">
            <button type="button" class="btn-detail-trigger">
              Lihat Sertifikat <i class="bi bi-arrow-right ms-1"></i>
            </button>
            ${certBadge}
          </div>
        </article>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

/**
 * Buka Modal Detail Sertifikat
 */
function openCertModal(certId) {
  if (typeof certificatesData === 'undefined') return;
  const cert = certificatesData.find(c => c.id === certId);
  if (!cert) return;

  const modalTitle = document.getElementById('certModalLabel');
  const modalBody = document.getElementById('certModalBody');
  const modalFooter = document.getElementById('certModalFooter');

  if (modalTitle) modalTitle.textContent = cert.title;

  const file = (cert.file || cert.image || '').trim();
  const pdfFile = (cert.file && cert.file.toLowerCase().endsWith('.pdf')) ? cert.file : '';
  const imgPreview = cert.image || (!cert.file?.toLowerCase().endsWith('.pdf') ? cert.file : '');
  let previewHTML = '';

  if (imgPreview && imgPreview.trim() !== '') {
    previewHTML = `
      <div class="mb-4 text-center">
        <img src="${escapeHTML(imgPreview)}" alt="${escapeHTML(cert.title)}" class="modal-cert-img img-fluid" onerror="this.outerHTML='<div class=\\'modal-image-placeholder\\'><i class=\\'bi bi-file-earmark-x text-muted fs-1 mb-2 d-block\\'></i><span class=\\'text-muted small font-monospace\\'>Berkas sertifikat belum ditemukan</span></div>'">
      </div>
    `;
  } else if (pdfFile) {
    previewHTML = `
      <div class="mb-4">
        <div class="d-flex justify-content-between align-items-center mb-2 px-1">
          <span class="small text-muted font-monospace"><i class="bi bi-file-earmark-pdf text-danger me-1"></i> Pratinjau Dokumen PDF</span>
          <a href="${escapeHTML(pdfFile)}" target="_blank" rel="noopener noreferrer" class="link-action" style="font-size: 0.78rem;">
            <i class="bi bi-box-arrow-up-right"></i> Buka di Tab Baru
          </a>
        </div>
        <iframe src="${escapeHTML(pdfFile)}#toolbar=1" class="modal-cert-pdf w-100" title="${escapeHTML(cert.title)}">
          <p>Browser Anda tidak mendukung preview PDF. <a href="${escapeHTML(pdfFile)}" target="_blank">Klik di sini untuk mengunduh PDF</a>.</p>
        </iframe>
      </div>
    `;
  } else {
    previewHTML = `
      <div class="modal-image-placeholder mb-4">
        <i class="bi bi-award text-muted fs-2 mb-2 d-block"></i>
        <div class="text-white small fw-semibold mb-1">Belum Ada Berkas Sertifikat Dilampirkan</div>
        <div class="text-muted small font-monospace">Anda dapat memasukkan file PDF atau Gambar ke folder images/ lalu tulis namanya di certificates-data.js</div>
      </div>
    `;
  }

  if (modalBody) {
    modalBody.innerHTML = `
      ${previewHTML}
      <div class="mb-3">
        <div class="small text-muted font-monospace mb-1">PENERBIT / LEMBAGA</div>
        <div class="text-dark fw-semibold fs-6 mb-3">${escapeHTML(cert.issuer)} <span class="custom-badge custom-badge-blue ms-2">${escapeHTML(cert.date)}</span></div>
        
        <div class="small text-muted font-monospace mb-1">DESKRIPSI &amp; KOMPETENSI</div>
        <p class="text-secondary lh-base mb-0">${escapeHTML(cert.description)}</p>
      </div>
    `;
  }

  if (modalFooter) {
    const credBtn = cert.credentialUrl && cert.credentialUrl.trim() !== ''
      ? `<a href="${escapeHTML(cert.credentialUrl)}" target="_blank" rel="noopener noreferrer" class="btn-editorial-primary">
          <i class="bi bi-box-arrow-up-right"></i> Verifikasi Kredensial
         </a>`
      : '';

    const viewTarget = pdfFile || imgPreview;
    const openFileBtn = viewTarget
      ? `<a href="${escapeHTML(viewTarget)}" target="_blank" rel="noopener noreferrer" class="btn-editorial-secondary">
          <i class="bi ${pdfFile ? 'bi-file-earmark-pdf' : 'bi-arrows-fullscreen'}"></i> ${pdfFile ? 'Buka Dokumen Asli (PDF)' : 'Buka Layar Penuh'}
         </a>`
      : '';

    modalFooter.innerHTML = `
      <div class="d-flex gap-2">
        ${credBtn}
        ${openFileBtn}
      </div>
      <button type="button" class="btn-editorial-secondary" data-bs-dismiss="modal">Tutup</button>
    `;
  }

  const modalEl = document.getElementById('certDetailModal');
  if (modalEl && typeof bootstrap !== 'undefined') {
    if (!certModalInstance) {
      certModalInstance = new bootstrap.Modal(modalEl);
    }
    certModalInstance.show();
  }
}

/**
 * Switch gambar utama di dalam modal saat thumbnail diklik
 */
window.switchModalImage = function(thumbEl, src) {
  const mainImg = document.getElementById('modalMainImg');
  if (mainImg) {
    mainImg.src = src;
    document.querySelectorAll('.modal-thumb-img').forEach(el => el.classList.remove('active'));
    if (thumbEl) thumbEl.classList.add('active');
  }
};

/**
 * Buka Modal Detail Proyek Lengkap & Gambar
 */
function openProjectModal(projectId) {
  if (typeof projectsData === 'undefined') return;
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('projectDetailModalLabel');
  const modalBody = document.getElementById('modalBody');
  const modalFooter = document.getElementById('modalFooter');

  if (modalCategory) modalCategory.textContent = project.category || 'PROYEK';
  if (modalTitle) modalTitle.textContent = project.title;

  // Render Image Preview / Gallery
  let images = [];
  if (Array.isArray(project.images) && project.images.length > 0) {
    images = project.images;
  } else if (project.image && project.image.trim() !== '') {
    images = [project.image];
  }

  let imageHTML = '';
  if (images.length > 0) {
    const mainImg = images[0];
    const thumbnailsHTML = images.length > 1
      ? `
        <div class="d-flex align-items-center gap-2 overflow-auto pb-1 mt-2">
          ${images.map((img, idx) => `
            <img src="${escapeHTML(img)}" 
                 class="modal-thumb-img ${idx === 0 ? 'active' : ''}" 
                 alt="Preview ${idx + 1}" 
                 title="Klik untuk melihat screenshot ini"
                 onclick="switchModalImage(this, '${escapeHTML(img)}')">
          `).join('')}
          <span class="small text-muted font-monospace ms-1" style="font-size: 0.75rem;">(${images.length} Gambar)</span>
        </div>
      `
      : '';

    imageHTML = `
      <div class="mb-4">
        <div class="position-relative">
          <img id="modalMainImg" src="${escapeHTML(mainImg)}" alt="${escapeHTML(project.title)}" class="modal-project-img" onerror="this.outerHTML='<div class=\\'modal-image-placeholder\\'><i class=\\'bi bi-image text-muted fs-1 mb-2 d-block\\'></i><span class=\\'text-muted small font-monospace\\'>File gambar (${escapeHTML(mainImg)}) belum ditemukan di folder proyek</span></div>'">
        </div>
        ${thumbnailsHTML}
      </div>
    `;
  } else {
    imageHTML = `
      <div class="modal-image-placeholder mb-4">
        <i class="bi bi-image text-muted fs-2 mb-2 d-block"></i>
        <div class="text-white small fw-semibold mb-1">Belum Ada Screenshot Ditambahkan</div>
        <div class="text-muted small font-monospace">Anda dapat memasukkan file gambar ke folder portofolio lalu isi nama filenya pada projects-data.js (contoh: image: "preview.png")</div>
      </div>
    `;
  }

  // Full Features List (Seluruh fitur lengkap tanpa dipotong)
  let featuresHTML = '';
  if (project.features && project.features.length > 0) {
    featuresHTML = `
      <div class="mb-4">
        <h6 class="fw-semibold text-dark text-uppercase font-monospace small mb-2">Semua Fitur Lengkap:</h6>
        <ul class="clean-list mb-0">
          ${project.features.map(f => `<li>${escapeHTML(f)}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  // Full Contribution List (Seluruh kontribusi lengkap)
  let contributionHTML = '';
  if (project.contribution && project.contribution.length > 0) {
    contributionHTML = `
      <div class="mb-4">
        <h6 class="fw-semibold text-dark text-uppercase font-monospace small mb-2">Peran &amp; Tanggung Jawab:</h6>
        <ul class="clean-list mb-0">
          ${project.contribution.map(c => `<li>${escapeHTML(c)}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  // Technologies List
  let techHTML = '';
  if (project.technologies && project.technologies.length > 0) {
    techHTML = `
      <div class="mb-2">
        <h6 class="fw-semibold text-dark text-uppercase font-monospace small mb-2">Teknologi &amp; Tools:</h6>
        <div class="d-flex flex-wrap gap-2">
          ${project.technologies.map(t => `<span class="tech-pill">${escapeHTML(t)}</span>`).join('')}
        </div>
      </div>
    `;
  }

  if (modalBody) {
    modalBody.innerHTML = `
      ${imageHTML}
      <div class="mb-4">
        <h6 class="fw-semibold text-dark text-uppercase font-monospace small mb-2">Ringkasan Proyek:</h6>
        <p class="text-secondary lh-base mb-0">${escapeHTML(project.description)}</p>
      </div>
      ${featuresHTML}
      ${contributionHTML}
      ${techHTML}
    `;
  }

  if (modalFooter) {
    const githubBtn = project.githubUrl
      ? `<a href="${escapeHTML(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn-editorial-primary">
          <i class="bi bi-github"></i> Buka Repositori
         </a>`
      : '';

    const demoBtn = project.demoUrl
      ? `<a href="${escapeHTML(project.demoUrl)}" target="_blank" rel="noopener noreferrer" class="btn-editorial-secondary">
          <i class="bi bi-arrow-up-right"></i> Live Demo
         </a>`
      : '';

    modalFooter.innerHTML = `
      <div class="d-flex gap-2">
        ${githubBtn}
        ${demoBtn}
      </div>
      <button type="button" class="btn-editorial-secondary" data-bs-dismiss="modal">Tutup</button>
    `;
  }

  const modalEl = document.getElementById('projectDetailModal');
  if (modalEl && typeof bootstrap !== 'undefined') {
    if (!projectModalInstance) {
      projectModalInstance = new bootstrap.Modal(modalEl);
    }
    projectModalInstance.show();
  }
}

/**
 * Navigation Scroll & Active Spy
 */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link-item, .nav-tab-btn');
  const sections = document.querySelectorAll('section[id]');

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          e.preventDefault();
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');

          const offsetTop = targetSection.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Scrollspy
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = '#' + section.getAttribute('id');
      }
    });

    if (current) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === current) {
          link.classList.add('active');
        }
      });
    }
  });
}

/**
 * Handle form kontak via FormSubmit AJAX
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnHTML = submitBtn.innerHTML;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      showToast('Harap lengkapi semua kolom formulir.', 'danger');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Mengirim...`;

    try {
      const response = await fetch('https://formsubmit.co/ajax/reffifauzi092@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `Pesan Portofolio Baru dari ${name}`
        })
      });

      if (response.ok) {
        showToast('Pesan berhasil terkirim. Terima kasih!');
        form.reset();
      } else {
        showToast('Gagal mengirim pesan. Silakan hubungi via WhatsApp.', 'danger');
      }
    } catch (error) {
      showToast('Terjadi gangguan jaringan. Silakan hubungi via WhatsApp.', 'danger');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHTML;
    }
  });
}

/**
 * Custom Editorial Toast Notification
 */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const iconClass = type === 'danger' ? 'bi-exclamation-circle text-danger' : 'bi-check-circle text-success';

  const toastEl = document.createElement('div');
  toastEl.className = 'toast-editorial mb-2';
  toastEl.innerHTML = `
    <i class="bi ${iconClass} fs-5"></i>
    <span class="flex-grow-1">${escapeHTML(message)}</span>
    <button type="button" class="btn-close btn-close-white ms-2" aria-label="Tutup"></button>
  `;

  const closeBtn = toastEl.querySelector('.btn-close');
  closeBtn.addEventListener('click', () => toastEl.remove());

  container.appendChild(toastEl);

  setTimeout(() => {
    toastEl.style.transition = 'opacity 0.3s ease';
    toastEl.style.opacity = '0';
    setTimeout(() => toastEl.remove(), 300);
  }, 4500);
}

/**
 * XSS Filter Helper
 */
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
