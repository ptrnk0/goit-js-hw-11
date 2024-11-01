function createParams(imagesTag) {
    const searchParams = new URLSearchParams({
        key: '46823434-044aaff3f806d325c686b1cda',
        q: imagesTag,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    return searchParams;
}

export default function fetchImages(imagesTag) {
    return fetch(`https://pixabay.com/api/?${createParams(imagesTag)}`).then(
        response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        }
    );
}
