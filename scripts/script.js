let menu = [
    {
        "pastry_type" : "COOKIES",
        "name" : ["Sugar", "SnickerDoodle", "Chocolate Chip","Macadamia Nut","Peanut Butter", "Red Velvet", "Oatmeal Raisin"],
        "images": ["images/sugarCookies.jpg", "images/snickerdoodles.jpg", "images/chocolateChip.jpg", "images/macademiaNut.webp", "images/peanutButter.jpg", "images/redVelvet.jpg", "images/oatmealcookie.jpg"],
        "size" : [ "12 count" , "24 count" , "28 count"],
        "price": ["12C : $7.50" , " 24C : $15", "28C : $30"]
    }
    ,
    {
        "pastry_type" : "CAKES",
        "name" : ["Vanilla", "Chocolate", "Red Velvet", "Funfetti", "Marble"],
        "images":["images/Vanilla-Cake.jpg", "images/chocolateCake.jpg", "images/redVelvetCake.jpg", "images/funfetti-cake.jpg", "images/marbleCake.jpg"],
        "size" : [ "small", "medium", "large"],
        "price": ["S : $20" , "M : $40", "L : $80"]
    }
    ,
    {
        "pastry_type" : "PASTRIES",
        "name" : ["Sandwich Bread", "Brioche", "Corn Bread", "Sweet Potato Bread", "Banana Bread", "Monkey Bread"],
        "images": ["images/sandwhichBread.jpg","images/brioche.jpg", "images/cornbread.jpg", "images/sweetPotatoBread.jpg", "images/bananaBread.jpg", "images/monkeyBread.jpg"],
        "size" : ["Fixed"],
        "price" : ["$15", "$15", "$10" , "$15", "$15", "$20"]
    }
];


//menu script

let treats = document.getElementsByClassName("treat");

for (var idx = 0; idx < treats.length; idx++) {
    let newTitle = document.createElement("div");
    newTitle.innerText = menu[idx]["pastry_type"];
    newTitle.classList.add("title");
    
    treats[idx].appendChild(newTitle);

    let newSubtitle = document.createElement("div");
    let sizeLine = document.createElement("p");
    sizeLine.innerText = "We offer our " + menu[idx]["pastry_type"].toLowerCase() + 
    " in the following sizes: \r";
    let sizeList = document.createElement("ul");
    newSubtitle.appendChild(sizeLine);
    newSubtitle.appendChild(sizeList);
    for (var i = 0; i < menu[idx]["size"].length; i++){
        let newSizeListElem = document.createElement("li");
        newSizeListElem.innerText = menu[idx]["size"][i];
        sizeList.appendChild(newSizeListElem);
    }
    let priceLine = document.createElement("p");
    priceLine.innerText = "The prices can be found when you hover over the image of the " + menu[idx]["pastry_type"].toLowerCase() + " that you want.";
    
    newSubtitle.appendChild(priceLine);
    newSubtitle.classList.add("subtitle");
    
    treats[idx].appendChild(newSubtitle);

    let newGrid = document.createElement("div");
    newGrid.classList.add("gridContainer");
    treats[idx].appendChild(newGrid);


    let newImgGrid = document.createElement("div");
    newImgGrid.classList.add("grid");
    addGridImageContent(newImgGrid, idx);

    newGrid.appendChild(newImgGrid);

    let newTxtGrid = document.createElement("div");
    newTxtGrid.classList.add("grid");
    newTxtGrid.classList.add("txtGrid");
    addGridTextContent(newTxtGrid, idx);

    newGrid.appendChild(newTxtGrid);
}

//homepage script

let homeGrid = document.getElementsByClassName("imgGrid");

for (var idx = 0; idx < menu.length; idx++){
    addGridImageContent(homeGrid[0], idx);
} 



// adds images to the grid

function addGridImageContent(grid, menuIdx) {
    for (var idx = 0; idx < menu[menuIdx]["images"].length; idx++) {
        let newGridImage = document.createElement("img");
        newGridImage.classList.add("gridImage");
        newGridImage.src = menu[menuIdx]["images"][idx];
        grid.appendChild(newGridImage);
    }
    
}

// adds text to the grid
function addGridTextContent(grid, menuIdx) {
    console.log(menuIdx);
    for (var idx = 0; idx < menu[menuIdx]["name"].length; idx++) {
        let newGridText = document.createElement("div");
        newGridText.classList.add("gridTxt");
        let newNameTag = document.createElement("p");
        newNameTag.innerText = menu[menuIdx]["name"][idx];
        newGridText.appendChild(newNameTag);

        // adds price list for all treats other than pastries
        if (menuIdx < 2){
            let newPriceList = document.createElement("div");
            newGridText.appendChild(newPriceList);
            for (var i = 0; i < menu[menuIdx]["price"].length; i++){
                    let newPriceElem = document.createElement("div");
                    newPriceElem.innerText = menu[menuIdx]["price"][i];
                    newPriceList.appendChild(newPriceElem);
            }
        }
        // adds prices for pastries
        else{
            let newPriceTag = document.createElement("p");
            newPriceTag.innerText = menu[menuIdx]["price"][idx];
            newGridText.appendChild(newPriceTag);
        }
        grid.appendChild(newGridText);
    }
}



