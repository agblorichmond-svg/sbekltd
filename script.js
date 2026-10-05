const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
menuBtn.addEventListener('click', () => mainNav.classList.toggle('open'));
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => mainNav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

const imageViewer = document.getElementById('imageViewer');
const imageViewerPhoto = document.getElementById('imageViewerPhoto');
const imageViewerCaption = document.getElementById('imageViewerCaption');
document.querySelectorAll('.photo-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const photo = trigger.querySelector('img');
    imageViewerPhoto.src = photo.src;
    imageViewerPhoto.alt = photo.alt;
    imageViewerCaption.textContent = photo.alt;
    imageViewer.showModal();
  });
});
document.querySelector('.image-viewer-close').addEventListener('click', () => imageViewer.close());
imageViewer.addEventListener('click', event => {
  if (event.target === imageViewer) imageViewer.close();
});
