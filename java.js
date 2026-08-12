```javascript
// ========================================
// BOTÃO "ENTRAR"
// ========================================

const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {

    document.getElementById("content").scrollIntoView({
        behavior: "smooth"
    });

});


// ========================================
// CONTADOR DO RELACIONAMENTO
// ========================================

// MUDE A DATA ABAIXO PARA A DATA EM QUE
// VOCÊS COMEÇARAM A NAMORAR.
//
// Formato:
// ANO, MÊS - 1, DIA, HORA, MINUTO, SEGUNDO

const startDate = new Date(
    2025,
    0,
    1,
    0,
    0,
    0
);


function updateCounter() {

    const now = new Date();

    const difference = now - startDate;


    const seconds = Math.floor(
        difference / 1000
    );


    const minutes = Math.floor(
        seconds / 60
    );


    const hours = Math.floor(
        minutes / 60
    );


    const days = Math.floor(
        hours / 24
    );


    document.getElementById("days").textContent =
        days.toLocaleString("pt-BR");


    document.getElementById("hours").textContent =
        hours % 24;


    document.getElementById("minutes").textContent =
        minutes % 60;


    document.getElementById("seconds").textContent =
        seconds % 60;

}


updateCounter();

setInterval(updateCounter, 1000);
```
