const init = () => {
    const BASE_URL = 'https://jsonplaceholder.typicode.com/photos';
    const slider = document.getElementById("slider");
    const content = document.getElementById("content");
    const next = document.getElementById("nextBtn");
    const prev = document.getElementById("prevBtn");

    const getImages = () => {
        axios
        .get(`${BASE_URL}?_limit=15`)
        .then(response => {
            const images = response.data
            showImages(images)
        })
        .catch(error => console.error(error))
    }

    getImages();

    const showImages = (images) => {
        for (let i = 0; i < images.length; i++) {
            const img = document.createElement("img");
            img.id = "image";
            img.className = "slider__image";
            content.appendChild(img);
            img.src = images[i].url;
        }
    }
    const gap = 16;

    let width = slider.offsetWidth;
    window.addEventListener("resize", e => (width = slider.offsetWidth));

    nextBtn.addEventListener("click", e => {
        slider.scrollBy(width + gap, 0);
        if (slider.scrollWidth !== 0) {
            prev.disabled=false;
        }
        if (content.scrollWidth - width - gap <= slider.scrollLeft + width) {
            next.disabled=true;
        }
    });
    prev.addEventListener("click", e => {
        slider.scrollBy(-(width + gap), 0);
        if (slider.scrollLeft - width - gap <= 0) {
            prev.disabled=true;
        }
        if (!content.scrollWidth - width - gap <= slider.scrollLeft + width) {
            next.disabled=false;
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    init();
});