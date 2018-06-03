
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function menuFunction() {
    document.getElementById("dropdown_menu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it

window.onclick = function(event) {
    if (!event.target.matches('.dropdown_menu')) {
        let dropdowns = document.getElementsByClassName("dropdown_content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}