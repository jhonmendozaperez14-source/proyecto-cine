// ======================================
// SCROLL A PROMOCIONES
// ======================================

function scrollToPromotions() {

    const section =
        document.getElementById("promotions");

    section.scrollIntoView({
        behavior: "smooth"
    });
}


// ======================================
// MOSTRAR DETALLES
// ======================================

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


// ======================================
// CERRAR MODAL
// ======================================

function closeModal() {

    const modal =
        document.getElementById("modal");

    modal.classList.remove("active");

}


// ======================================
// CERRAR MODAL AL HACER CLICK FUERA
// ======================================

document
    .getElementById("modal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeModal();

        }

    });


// ======================================
// FILTRAR PROMOCIONES
// ======================================

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
