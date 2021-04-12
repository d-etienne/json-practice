import {menu , addGridImageContent} from 'script.js'


homeGrid = document.getElementsByClassName("imgGrid");

function setTitles(treat){
    title = treat.getElementsByClassName("title");
    title[0].innerText = menu[0]["pastry_type"];

}