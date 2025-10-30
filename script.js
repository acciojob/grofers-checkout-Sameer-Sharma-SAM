        const getSumBtn = document.createElement("button");
        getSumBtn.append("Get Total Price");
        document.body.appendChild(getSumBtn);


        const getSum = () => {
            let total = 0;
            const allPrice = document.querySelectorAll('.price');
            allPrice.forEach(ele => {
                const val = parseFloat(ele.textContent) || 0;
                total += val;
            });

            const totalRow = document.createElement("tr");
            const totalCell = document.createElement("td");
            const totalAmount = document.createElement("td");

            totalCell.textContent="Total Amount"
            totalAmount.textContent=total;

            totalRow.appendChild(totalCell);
            totalRow.appendChild(totalAmount);
            document.querySelector("table").appendChild(totalRow);

            // console.log(total);
        };
        getSumBtn.addEventListener("click", getSum);

