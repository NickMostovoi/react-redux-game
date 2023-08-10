export const setEscapeButton = (event, counter) => {
    const random = (min, max) => {
        const randomNumber = min + Math.random() * (max - min + 1);
        return Math.floor(randomNumber);
    };

    if (counter !== 100) {
        event.target.style.left = `${random(-40, 50)}%`;
        event.target.style.top = `${random(15, 85)}%`;
        event.target.style.transform = `rotate(${random(-40, 40)}deg)`;
    }
};