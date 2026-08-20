
function scrollToPromotions() {

    const section =
        document.getElementById("promotions");

    section.scrollIntoView({
        behavior: "smooth"
    });
}



function showPromotion(title, description) {

    const modal =
        document.getElementById("modal");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");


    modalTitle.textContent = title;

    modalDescription.textContent = description;

    modal.classList.add("active");

}



function closeModal() {

    const modal =
        document.getElementById("modal");

    modal.classList.remove("active");

}



document
    .getElementById("modal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeModal();

        }

    });



function filterPromotions() {

    const category =
        document.getElementById("categoryFilter").value;

    const location =
        document.getElementById("locationFilter").value;


    const cards =
        document.querySelectorAll(".promotion-card");


    cards.forEach(card => {

        const cardCategory =
            card.dataset.category;

        const cardLocation =
            card.dataset.location;


        const categoryMatch =
            category === "all" ||
            cardCategory === category;


        const locationMatch =
            location === "all" ||
            cardLocation === "all" ||
            cardLocation === location;


        if (categoryMatch && locationMatch) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}
