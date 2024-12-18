import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../../css/styles.css';

export function renderImages(images, clearGallery = false) {
  const gallery = document.querySelector('.gallery');

  // Clear the gallery only if clearGallery is true
  if (clearGallery) {
    gallery.innerHTML = '';
  }

  images.forEach(image => {
    const card = document.createElement('a');
    card.href = image.largeImageURL;
    card.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;
    img.classList.add('image');

    const info = document.createElement('div');
    info.classList.add('image-info');
    info.innerHTML = `
      <p class="paragraf-text"><span class="span-text">Likes:</span> ${image.likes}</p>
      <p class="paragraf-text"><span class="span-text">Views:</span> ${image.views}</p>
      <p class="paragraf-text"><span class="span-text">Comments:</span> ${image.comments}</p>
      <p class="paragraf-text"><span class="span-text">Downloads:</span> ${image.downloads}</p>
    `;

    card.appendChild(img);
    card.appendChild(info);
    gallery.appendChild(card);
  });

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

export function renderError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
    timeout: 5000,
  });
}

export function showLoadingIndicator() {
  document.querySelector('.loading-indicator').style.display = 'flex';
}

export function hideLoadingIndicator() {
  document.querySelector('.loading-indicator').style.display = 'none';
}

export function showLoadMoreButton() {
  const loadMoreButton = document.querySelector('.js-load-more');
  loadMoreButton.classList.remove('load-more-hiden');

  // const EndLoadText = document.querySelector('.no-more-images-message');
  // EndLoadText.classList.classList.add('load-more-hiden');
}

export function hideLoadMoreButton() {
  const loadMoreButton = document.querySelector('.js-load-more');
  loadMoreButton.classList.add('load-more-hiden');
}
