const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;
  prices.forEach(p => total += parseFloat(p.textContent));

  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: ₹${total}`;
  totalRow.appendChild(totalCell);

  document.querySelector("table").appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
