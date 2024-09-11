const bg = document.querySelector('.photoBox') as HTMLDivElement; 
const percentage = document.querySelector('.loading-text') as HTMLDivElement; 

let count = 0; 
const increasement = () => {
    count++)
    if(count == 100) clearInterval(counting);
    percentage.innerText = String(`${count}%`);
    percentage.style.opacity = String(scale(count, [0, 100], [1, 0]));
    bg.style.filter = `blur(${String(scale(count, [0, 100], [30, 0]))}px)`; 
}; 

const scale = (number: number, [inMin, inMax]: number[], [outMin, outMax]: number[]) => {
    return (number - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
}


const counting = setInterval(increasement, 10); 

