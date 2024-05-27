const BASE_URL = 'https://jsonplaceholder.typicode.com/photos';
const nextButton = document.querySelector("#nextBtn");
const prevButton = document.querySelector("#prevBtn");

const getImages = () => {
    axios
      .get(`${BASE_URL}?_limit=5`)
      .then(response => {
        const images = response.data
        showImages(images)
      })
      .catch(error => console.error(error))
}

getImages();

const showImages = (images) => {
    let currentId = 0;
    prevButton.disabled=true;
    const itemImage = document.querySelector("#image");
    itemImage.src = images[currentId].url;

    const nextBtnHandler = () => {
        if (currentId != images.length - 1) {
            prevButton.disabled=false;
            currentId++;
            itemImage.src = images[currentId].url;
        }
        if (currentId == images.length-1) {
            nextButton.disabled=true;
        }
    }

    const prevBtnHandler = () => {
        if (currentId != 0) {
            nextButton.disabled=false
            currentId--;
            itemImage.src = images[currentId].url;
        }
        if (currentId == 0) {
            prevButton.disabled=true;
        }
    }
    
    nextButton.addEventListener("click", nextBtnHandler);
    prevButton.addEventListener("click", prevBtnHandler);
}