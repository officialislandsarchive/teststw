let modal = document.getElementById('myModal');
let searchButton = document.getElementById("search");
let searchEntry = document.getElementById("searchInput");

let items = {
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

    "blocks": [
        { name: "Stone Brick", value: "10" },
        { name: "Wood", value: "15" },
        { name: "Wood Plank", value: "20" },
        { name: "Pine Wood", value: "25" },
        { name: "Pine Wood Plank", value: "30" },
        { name: "Grass Block", value: "35" },
        { name: "Glass Pane", value: "40" },
        { name: "Glass Pane (Colored)", value: "45" },
        { name: "Clay", value: "50" },
        { name: "Clay (Colored)", value: "55" },
        { name: "Red Rug", value: "60" },
        { name: "Wood Stairs", value: "65" },
        { name: "Pine Stairs", value: "70" },
        { name: "Stone Stairs", value: "75" },
        { name: "Brick Stairs", value: "80" },
        { name: "Wood Fence", value: "85" },
        { name: "Pine Fence", value: "90" },
        { name: "Ladder", value: "95" },
        { name: "Pine Door", value: "100" }
    ],

    "totems": [
        { name: "Stone Totem", value: "10" },
        { name: "Coal Totem", value: "15" },
        { name: "Iron Totem", value: "20" },
        { name: "Clay Totem", value: "25" },
        { name: "Wheat Totem", value: "30" },
        { name: "Tomato Totem", value: "35" },
        { name: "Carrot Totem", value: "40" },
        { name: "Onion Totem", value: "45" }
    ],

    "industrial": [
        { name: "Medium Chest", value: "10" },
        { name: "Steel Rod", value: "15" },
        { name: "Conveyor Belt", value: "20" },
        { name: "Left Conveyor", value: "25" },
        { name: "Right Conveyor", value: "30" },
        { name: "Industrial Chest", value: "35" },
        { name: "Industrial Oven", value: "40" },
        { name: "Industrial Sawmill", value: "45" },
        { name: "Industrial Smelter", value: "50" }
    ],

    "stations": [
        { name: "Workbench Tier 1", value: "10" },
        { name: "Workbench Tier 2", value: "15" },
        { name: "Anvil", value: "20" },
        { name: "Sawmill", value: "25" },
        { name: "Stonecutter", value: "30" },
        { name: "Coloring Station", value: "35" },
        { name: "Campfire", value: "40" },
        { name: "Cooking Table", value: "45" },
        { name: "Floral Bench", value: "50" },
        { name: "Small Furnace", value: "55" },
        { name: "Small Chest", value: "60" }
    ],

    "cooking": [
        { name: "Dough", value: "10" },
        { name: "Berry Dough", value: "15" },
        { name: "Bread", value: "20" },
        { name: "Berry Pie", value: "25" }
    ],

    "seeds": [
        { name: "Wheat Seeds", value: "10" },
        { name: "Tomato Seeds", value: "15" },
        { name: "Carrot Seeds", value: "20" },
        { name: "Berry Seeds", value: "25" },
        { name: "Onion Seeds", value: "30" },
        { name: "Red Flower Seeds", value: "35" },
        { name: "Yellow Flower Seeds", value: "40" },
        { name: "Blue Flower Seeds", value: "45" },
        { name: "Sapling", value: "50" },
        { name: "Pine Sapling", value: "55" }
    ],

    "slimeIsland": [
        { name: "Green Slime Balls", value: "10" },
        { name: "Blue Slime Balls", value: "15" },
        { name: "Pink Slime Balls", value: "20" },
        { name: "Green Gear", value: "25" },
        { name: "Blue Gear", value: "30" },
        { name: "Pink Gear", value: "35" }
    ],

    "tools": [
        { name: "Wooden Axe", value: "10" },
        { name: "Wooden Pickaxe", value: "15" },
        { name: "Wooden Sword", value: "20" },
        { name: "Plow", value: "25" },
        { name: "Stone Axe", value: "30" },
        { name: "Stone Pickaxe", value: "35" },
        { name: "Iron Axe", value: "40" },
        { name: "Iron Pickaxe", value: "45" }
    ],

    "ore": [
        { name: "Coal", value: "10" },
        { name: "Iron Ore", value: "15" },
        { name: "Iron", value: "20" }
    ],
}

function openModal(category) {
    modal.style.display = "block";

    let list = document.getElementById("modalItems");
    list.innerHTML = "";

    items[category].forEach(function(item) {
        var itemBox = document.createElement("div");
        itemBox.classList.add("item-box");

        let itemName = document.createElement("span");
        itemName.classList.add("item-name");
        itemName.textContent = item.name;

        let coinValue = document.createElement("span");
        coinValue.classList.add("coin-value");
        coinValue.textContent = "Coin Value: " + item.value;

        itemBox.appendChild(itemName);
        itemBox.appendChild(coinValue);
        list.appendChild(itemBox);
    });

    document.getElementById("modalTitle").textContent = category.charAt(0).toUpperCase() + category.slice(1);
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function handleSearch() {
    let keyword = searchEntry.value.toLowerCase();
    let results = [];

    for (let key in items) {
        items[key].forEach(function(x) {
            x = x.name
    
            if (x.toLowerCase().includes(keyword)) {
                results.push({name: x, value: "5"});
            }
        })
    }

    openModelFromArray(results);
    console.log(results);
}

function openModelFromArray(array) {

    modal.style.display = "block";

    let list = document.getElementById("modalItems");
    list.innerHTML = "";

    array.forEach(function(item) {
        let itemBox = document.createElement("div");
        itemBox.classList.add("item-box");
    
        let itemName = document.createElement("span");
        itemName.classList.add("item-name");
        itemName.textContent = item.name;
    
        let coinValue = document.createElement("span");
        coinValue.classList.add("coin-value");
        coinValue.textContent = "Coin Value: " + getCoinValue(item.name);
    
        itemBox.appendChild(itemName);
        itemBox.appendChild(coinValue);
        list.appendChild(itemBox);
    })

    document.getElementById("modalTitle").textContent = "Results";
}

function getCoinValue(name) {
    for (let key in items) {

        items[key].forEach(function(val) {
            if (val.name.toLowerCase() == name.toLowerCase()) {
                return val.value;
            }
        })

        for (let i = 0; i < items[key].length; i++) {
            val = items[key][i];

            if (val.name == name) {
                return val.value;
            }
        }
    }
}

searchButton.onclick = handleSearch
