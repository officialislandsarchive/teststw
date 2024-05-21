var modal = document.getElementById('myModal');

function openModal(category) {
    modal.style.display = "block";
    var items = {
        "crops": [
            { name: "Wheat", value: "10" },
            { name: "Tomato", value: "15" },
            { name: "Carrot", value: "20" },
            { name: "Berry", value: "25" },
            { name: "Onion", value: "30" },
            { name: "Red Flowers", value: "35" },
            { name: "Yellow Flowers", value: "40" },
            { name: "Blue Flowers", value: "45" },
            { name: "Tall Grass", value: "50" }
        ],
        // Add the rest of your item categories here
    };

    var list = document.getElementById("modalItems");
    list.innerHTML = "";
    items[category].forEach(function(item) {
        var itemBox = document.createElement("div");
        itemBox.classList.add("item-box");

        var itemName = document.createElement("span");
        itemName.classList.add("item-name");
        itemName.textContent = item.name;

        var coinValue = document.createElement("span");
        coinValue.classList.add("coin-value");
        coinValue.textContent = "Coin Value: " + item.value;

        itemBox.appendChild(itemName);
        itemBox.appendChild(coinValue);
        list.appendChild(itemBox);
    });
    document.getElementById("modalTitle").textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize first letter
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function searchItems() {
    var input, filter, ul, li, span, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("modalItems");
    li = ul.getElementsByClassName('item-box');
    for (i = 0; i < li.length; i++) {
        span = li[i].getElementsByClassName("item-name")[0];
        txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Populate items directly on the main page
document.addEventListener("DOMContentLoaded", function() {
    var itemsContainer = document.getElementById("itemsContainer");
    itemsContainer.innerHTML = "";
    Object.keys(items).forEach(function(category) {
        var categoryTitle = document.createElement("h3");
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        itemsContainer.appendChild(categoryTitle);
        var itemList = document.createElement("ul");
        items[category].forEach(function(item) {
            var listItem = document.createElement("li");
            listItem.textContent = item.name + " - Coin Value: " + item.value;
            itemList.appendChild(listItem);
        });
        itemsContainer.appendChild(itemList);
    });
});
