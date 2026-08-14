// ========================================
// ❤️ CONTADOR DO NOSSO RELACIONAMENTO
// ========================================

const startDate = new Date(2025, 8, 13, 7, 30, 0);


function updateCounter() {

    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();

    let months = now.getMonth() - startDate.getMonth();

    let days = now.getDate() - startDate.getDate();

    let hours = now.getHours() - startDate.getHours();

    let minutes = now.getMinutes() - startDate.getMinutes();

    let seconds = now.getSeconds() - startDate.getSeconds();


    // ========================================
    // SEGUNDOS
    // ========================================

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }


    // ========================================
    // MINUTOS
    // ========================================

    if (minutes < 0) {
        minutes += 60;
        hours--;
    }


    // ========================================
    // HORAS
    // ========================================

    if (hours < 0) {
        hours += 24;
        days--;
    }


    // ========================================
    // DIAS
    // ========================================

    if (days < 0) {

        months--;

        const lastDayOfPreviousMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        ).getDate();

        days += lastDayOfPreviousMonth;
    }


    // ========================================
    // MESES
    // ========================================

    if (months < 0) {
        months += 12;
        years--;
    }


    // ========================================
    // MOSTRAR NA PÁGINA
    // ========================================

    document.getElementById("years").textContent =
        years;

    document.getElementById("months").textContent =
        months;

    document.getElementById("days").textContent =
        days;

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// Inicia
updateCounter();


// Atualiza a cada segundo
setInterval(updateCounter, 1000);

const music = document.getElementById("music");
const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {
    music.play();
});