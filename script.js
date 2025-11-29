const container = document.getElementById("container");
const cards = document.querySelectorAll("#container .card");

const data = [];

for (let n = 0; n < cards.length; n++) {
  cards[n].addEventListener("click", () => {
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove("bg-red-300");
    }
    cards[n].classList.add("bg-red-300");
    const name = cards[n].querySelector("h1").innerText;
    const image = cards[n].querySelector("img").getAttribute("src");
    let price = cards[n].querySelector(".price").innerText;

    const information = { name: name, image: image, price: price };
    data.unshift(information);

    const historyDiv = document.getElementById("historyDiv");

    const historyNew = document.createElement("div");
    historyNew.innerHTML = `<div
              class="bg-cyan-200 p-4 rounded-lg flex justify-between items-center"
            >
              <img class="w-[100px]" src='${data[0].image}' alt="" />
              <div>
                <h1 class="font-bold text-[20px]">${data[0].name}</h1>
                <p class="text-gray-400 text-[20px]">${data[0].price}</p>
              </div>
            </div>`;
    historyDiv.appendChild(historyNew);

    let totalPrice = document.getElementById("totalPrice");
    let discountPrice = document.getElementById("discount");
    let finalPrice = document.getElementById("afterDiscount");
    // console.log(finalPrice.innerText);

    let priceInNumber = parseFloat(totalPrice.innerText);
    let eachCardPrice = data[0].price;
    let eachPriceInNumber = parseFloat(eachCardPrice);
    let total = priceInNumber + eachPriceInNumber;
    let discount = (total * 0.1).toFixed(2);
    discountPrice.innerText = `${discount}TK`;
    totalPrice.innerText = `${total}TK`;

    let netPrice = (total - discount).toFixed(2);
    finalPrice.innerText = `${netPrice}TK`;
  });
}
