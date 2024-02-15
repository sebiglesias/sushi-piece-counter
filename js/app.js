document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    const addPieceButton = document.getElementById("addPiece");

    let count = parseInt(localStorage.getItem("sushiCount")) || 0;
    counter.innerText = count;

    addPieceButton.addEventListener("click", () => {
        count++;
        localStorage.setItem("sushiCount", count);
        counter.innerText = count;

        // Trigger animation
        counter.style.animation = "none";
        counter.offsetHeight; /* trigger reflow */
        counter.style.animation = null;

        counter.classList.add("pop");
        setTimeout(() => counter.classList.remove("pop"), 200);
    });
});
