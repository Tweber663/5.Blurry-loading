"use strict";
const bg = document.querySelector('.photoBox');
const percentage = document.querySelector('.loading-text');
let count = 0;
const increasement = () => {
    count++;
    if (count == 100)
        clearInterval(counting);
    percentage.innerText = String(`${count}%`);
    percentage.style.opacity = String(scale(count, [0, 100], [1, 0]));
    bg.style.filter = `blur(${String(scale(count, [0, 100], [30, 0]))}px)`;
};
const scale = (number, [inMin, inMax], [outMin, outMax]) => {
    return (number - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
};
const counting = setInterval(increasement, 10);
//# sourceMappingURL=app.js.map