/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
function BarAnimation() {
  document.getElementById('progress_bar_html').classList.add('bar_html');
  document.getElementById('progress_bar_ps').classList.add('bar_ps');
  document.getElementById('progress_bar_pp').classList.add('bar_pp');
  document.getElementById('progress_bar_bootstrap').classList.add('bar_bootstrap');
  document.getElementById('progress_bar_cms').classList.add('bar_cms');
}

// Check si l'element passé en param est affiché sur l'écran
function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

//Regarde si la div competence est affichée toutes les 250ms puis désactive l'interval
var interval = setInterval(function() {
    if ( checkVisible(document.getElementById('competences')))     {
        BarAnimation();
        clearInterval(interval); // Désactive le SetInterval
    }
}, 250);
