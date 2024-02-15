document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    const addPieceButton = document.getElementById("addPiece");
    const clearScoreButton = document.getElementById('clearScore');
    const sushiImage = document.getElementById('sushiImage');

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

        // Trigger sushi image animation
        sushiImage.classList.add('animate');
        setTimeout(() => sushiImage.classList.remove('animate'), 300); // Adjust timing as needed
    })

    clearScoreButton.addEventListener('click', () => {
        count = 0; // Reset count
        localStorage.setItem('sushiCount', count); // Update localStorage
        counter.innerText = count; // Update display
    });
});
