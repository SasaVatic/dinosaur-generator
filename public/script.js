async function getDinoName() {
    const response = await fetch('/dinoname');
    const data = await response.json();
    let dinoName = data[0].join(' ');
    document.querySelector('#dinoName').textContent = dinoName;
}

async function getDinoImage() {
    const response = await fetch('/dinoimage');
    const data = await response.json();

    const index = (Math.floor(Math.random() * data.value.length));
    const imageUrl = data.value[index].thumbnailUrl;
    const imageAlt = data.value[index].name;

    let image = document.querySelector('#dinoImg');
    if(image) {
        image.remove();
    }

    image = document.createElement('img');
    image.src = imageUrl;
    image.id = 'dinoImg';
    const generator = document.querySelector('.generator');
    generator.appendChild(image);

    const dinoName = document.querySelector('#dinoName');
    dinoName.style.padding = '0.25rem';
}

const btnLoad = document.querySelector('#btnLoad');

btnLoad.addEventListener('click', () => {
    getDinoName();
    getDinoImage();
});