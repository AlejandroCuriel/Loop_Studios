// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

window.addEventListener("DOMContentLoaded", function(){
    console.log("op")
    let navegationTag = document.getElementById('nav');
    addScrollEvent(navegationTag);
})

function addScrollEvent(navegationTag){
    window.addEventListener("scroll", function(){
        if(window.scrollY > 100){
            navegationTag.classList.add("nav-scroll");
            navegationTag.classList.add("content-scroll");

        }else{
            navegationTag.classList.remove("nav-scroll");
            navegationTag.classList.add("content-scroll");

        }
    })
}

