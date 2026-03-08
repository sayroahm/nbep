function goToPage(page: string): void {
    window.location.href = page;
}

function setupCards(): void {
    const consultCard = document.getElementById("consultCard");

    if (consultCard) {
        consultCard.addEventListener("click", () => {
            goToPage("consult.html");
        });
    }
}

document.addEventListener("DOMContentLoaded", setupCards);
