document.addEventListener("DOMContentLoaded", () => {

    const productModalElement = document.getElementById("productModal");
    const productModal = new bootstrap.Modal(productModalElement);

    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");

    const detailButtons = document.querySelectorAll(".btn.btn-primary[data-bs-toggle='modal']");

    detailButtons.forEach(button => {
        button.addEventListener("click", () => {
            const card = button.closest(".card");

            if (card) {
                const img = card.querySelector(".card-img-top").src;
                const title = card.querySelector(".card-title").textContent;
                const description = card.querySelector(".product-card__description").textContent;
                const price = card.querySelector(".card-text.fw-bold.fs-5").textContent;


                modalImage.src = img;
                modalTitle.textContent = title;
                modalDescription.textContent = description;
                modalPrice.textContent = price;

                productModal.show();
            }
        });
    });
});