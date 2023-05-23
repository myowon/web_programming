// clock function을 만들고 그 function을 호출하면 되겠죠?

function clock(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const time = `${hours}:${minutes}:${seconds}`;
    document.querySelector("#clock").textContent = time;

    setTimeout(clock, 1000);
}

clock();