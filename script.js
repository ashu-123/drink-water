const remaining = document.getElementById('remaining');
const percentFilled = document.getElementById('percent-filled');
const litres = document.getElementById('litres');
const glasses = document.querySelectorAll('.glass');

updateWaterLevelInJar();

glasses.forEach((glass, index) => {
    glass.addEventListener('click', () => changeWaterLevelInGlass(index))
});

function changeWaterLevelInGlass(index) {
    if(index==7 && glasses[index].classList.contains("full")) index--;
    else if(glasses[index].classList.contains("full") && !glasses[index].nextElementSibling.classList.contains("full")) index--;

    glasses.forEach((glass, idx) => {
        if(idx<=index) {
            glass.classList.add('full');
        }
        else {
            glass.classList.remove('full');
        }
    });
    updateWaterLevelInJar();
}

function updateWaterLevelInJar() {
    const noOfGlassesFull = document.querySelectorAll('.glass.full').length;
    const totalGlasses = glasses.length;

    if(noOfGlassesFull===0) {
        percentFilled.style.visibility = `hidden`;
        percentFilled.style.height = 0;
    }
    else {
        percentFilled.style.visibility = `visible`;
        percentFilled.style.height = `${noOfGlassesFull/totalGlasses *330}px`;
        percentFilled.innerText = `${noOfGlassesFull/totalGlasses*100}%`;
    }

    if(noOfGlassesFull==totalGlasses) {
        remaining.style.visibility = `hidden`;
        remaining.style.height = 0;
    }
    else {
        remaining.style.visibility = `visible`;
        litres.innerText = `${2 - (250*noOfGlassesFull/1000)}L`;
    }
}