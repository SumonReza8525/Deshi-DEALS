const cards = document.querySelectorAll(".card");
const cardButtons = document.querySelectorAll(".cardBtn");
const data = [];

for (let n = 0; n < cardButtons.length; n++) {
  cardButtons[n].addEventListener("click", () => {
    for (let i = 0; i < cardButtons.length; i++) {
      cards[i].classList.remove("bg-cyan-400");
    }
    cards[n].classList.add("bg-cyan-400");

    const historyDiv = document.getElementById("historyDiv");
    const newDivCreate = document.createElement("div");

    // card details
    let imageSrc = cards[n].querySelector("img").getAttribute("src");
    let name = cards[n].querySelector("h1").innerText;
    let price = cards[n].querySelector(".price").innerText;

    const cardDetails = { name: name, image: imageSrc, price: price };
    data.unshift(cardDetails);

    newDivCreate.innerHTML = `<div
              class="bg-cyan-200 p-4 rounded-lg flex justify-between items-center"
            >
              <img class="w-[100px]" src='${data[0].image}' alt="" />
              <div>
                <h1 class="font-bold text-[20px]">${data[0].name}</h1>
                <p class="text-gray-400 text-[20px]">${data[0].price}</p>
              </div>
            </div>`;
    historyDiv.appendChild(newDivCreate);

    let cardPrice = data[0].price;
    let cardPriceNumber = parseFloat(cardPrice);
    let totalPriceSpan = document.getElementById("totalPrice").innerText;
    let totalPriceSpanNumber = parseFloat(totalPriceSpan);
    let discountSpan = document.getElementById("discount");
    let priceAfterDiscount = document.getElementById("afterDiscount");

    let total = (cardPriceNumber + totalPriceSpanNumber).toFixed(2);
    let discount = (total * 0.1).toFixed(2);
    let netAmount = total - discount;

    document.getElementById("totalPrice").innerText = `${total}TK`;
    discountSpan.innerText = `${discount}TK`;
    priceAfterDiscount.innerText = `${netAmount}TK`;
  });
}
