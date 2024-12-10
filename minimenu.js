   function toggleSubmenus() {
    // Toggle the visibility of training and wins submenus
    var trainingSubmenu = document.getElementById('training_submenu');
    var winsSubmenu = document.getElementById('wins_submenu');

    if (trainingSubmenu.style.display === 'none') {
        trainingSubmenu.style.display = 'block';
        winsSubmenu.style.display = 'block';

    } else {
        trainingSubmenu.style.display = 'none';
        winsSubmenu.style.display = 'none';
    }
}

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos === 0) {
        // At the top of the page
        document.querySelector('.menu-con').style.opacity = '1';
        document.querySelector('.mini-menu-con').style.opacity = '0';
    } else if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        // document.querySelector('.menu-con').style.opacity = '1';
        if (currentScrollPos === 0) {
            document.querySelector('.mini-menu-con').style.opacity = '0';
        }
    } else {
        // Scrolling down
        document.querySelector('.menu-con').style.opacity = '0'; // Adjust this value based on your design
        document.querySelector('.mini-menu-con').style.opacity = '1';
    }

    prevScrollPos = currentScrollPos;
}


function changeImage(newSrc) {
    document.querySelector('.userimg').src = newSrc;
}

function changeImage2(newSrc) {
    document.querySelector('.userimg-mini').src = newSrc;
}
