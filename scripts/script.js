let infoJSON = {
    "name" : "The Bake Shop",
    "logo" : "bakeryLogo.png",
    "address" : "1001 Faries Lane Wappapello, MO 63966",
    "slogan" : "welcome to your local bake shop, with your favorite baked goods"
};

let menu = [
    {
        "pastry_type" : "Cookies",
        "name" : ["Sugar", "SnickerDoodle", "Chocolate Chip", "Macadamia Nut",
               "Peanut Butter", "Red Velvet", "Oatmeal Raisin"],
        "images": ["Sugar", "SnickerDoodle", "Chocolate Chip", "Macadamia Nut",
        "Peanut Butter", "Red Velvet", "Oatmeal Raisin"],
        "size" : [ "12 count" , "24 count" , "28 count"],
        "price": [7.50 , 15, 30]
    }
    ,
    {
        "pastry_type" : "Cakes",
        "name" : ["Vanilla", "Chocolate", "Red Velvet", "Funfetti", "Marble"],
        "images":["Vanilla", "Chocolate", "Red Velvet", "Funfetti", "Marble"],
        "size" : [ "small", "medium", "large"],
        "price": [20 , 40, 80]
    }
    ,
    {
        "pastry_type" : "Pastries",
        "name" : ["Sandwich Bread", "Brioche", "Corn Bread", "Sweet Potato Bread", "Banana Bread", "Monkey Bread"],
        "images": ["Sandwich Bread", "Brioche", "Corn Bread", "Sweet Potato Bread", "Banana Bread", "Monkey Bread"],
        "size" : ["Fixed"],
        "price" : [15, 15, 10 , 15, 15, 20]
    }
];



/*

homepage script

let homeGrid = document.getElementsByClassName("imgGrid");

for (var idx = 0; idx < menu.length; idx++){
    addGridImageContent(homeGrid[0], menu[idx]);
} 

*/


/*

menu script

let treats = document.getElementsByClassName("treat");

for (var idx = 0; idx < treats.length; idx++) {
    let newTitle = document.createElement("div");
    newTitle.innerText = menu[idx]["pastry_type"];
    newTitle.classList.add("title");
    
    treats[idx].appendChild(newTitle);

    let newSubtitle = document.createElement("div");
    newSubtitle.innerText = menu[idx]["size"];
    newSubtitle.classList.add("subtitle");
    
    treats[idx].appendChild(newSubtitle);

    let newGrid = document.createElement("div");
    newGrid.classList.add("gridContainer");
    treats[idx].appendChild(newGrid);


    let newImgGrid = document.createElement("div");
    newImgGrid.classList.add("grid");
    addGridImageContent(newImgGrid, menu[idx]);

    newGrid.appendChild(newImgGrid);

    let newTxtGrid = document.createElement("div");
    newTxtGrid.classList.add("grid");
    newTxtGrid.classList.add("txtGrid");
    addGridTextContent(newTxtGrid, menu[idx]);

    newGrid.appendChild(newTxtGrid);
}

*/

let informationBox = document.getElementById("info");
informationBox.innerText = infoJSON["address"] + "\r" + infoJSON["slogan"];




function addGridImageContent(grid, imgArr) {
    for (var idx = 0; idx < imgArr["images"].length; idx++) {
        let newGridImage = document.createElement("div");
        newGridImage.classList.add("gridImage");
        // newGridImage.src = imgGrid["images"][idx];
        grid.appendChild(newGridImage);
    }
}

function addGridTextContent(grid, txtArr) {
    for (var idx = 0; idx < txtArr["name"].length; idx++) {
        let newGridText = document.createElement("div");
        newGridText.classList.add("gridTxt");
        newGridText.innerText = txtArr["name"][idx];
        grid.appendChild(newGridText);
    }
}



