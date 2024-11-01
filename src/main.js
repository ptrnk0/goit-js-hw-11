import fetchImages from './js/pixabay-api';
import renderImages from './js/render-functions';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const form = document.querySelector('form');
const imagesList = document.querySelector('ul');

form.addEventListener('submit', event => {
    event.preventDefault();

    if (!event.target.elements.search.value) {
        return;
    }

    imagesList.innerHTML = '';
    document.querySelector('.loader').style.display = 'block';
    fetchImages(event.target.elements.search.value)
        .then(data => {
            if (!data.total) {
                iziToast.warning({
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
                return;
            }

            const imagesMarkup = renderImages(data);
            imagesList.innerHTML = imagesMarkup;

            const gallery = new SimpleLightbox('.list-item a', {
                captionsData: 'alt',
                captionDelay: 250,
            });
            gallery.refresh();
        })
        .finally(() => {
            document.querySelector('.loader').style.display = 'none';
        });
});
