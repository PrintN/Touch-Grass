document.addEventListener("DOMContentLoaded", function () {
    const muteButton = document.getElementById("muteButton");
    const settingsMenu = document.getElementById("settingsMenu");
    const cursorButton1 = document.getElementById("cursorButton1");
    const cursorButton2 = document.getElementById("cursorButton2");
    const cursorDropdown = document.getElementById("cursorDropdown");
    const historyButton = document.getElementById("history");


    const hoverSound = new Audio();
    hoverSound.loop = true;
    hoverSound.src = "forest.mp3";
    hoverSound.play();

    const savedCursor = localStorage.getItem("cursorPreference");

    if (savedCursor === "hand2") {
        changeCursor2();
    } else {
        changeCursor1();
    }

    function toggleHistoryMenu() {
        const historyMenu = document.getElementById("historyMenu");
        historyMenu.style.display = historyMenu.style.display === "none" ? "block" : "none";
    }
    
    historyButton.addEventListener("click", toggleHistoryMenu);
    
    const savedMute = localStorage.getItem("mutePreference");

    if (savedMute === "true") {
        hoverSound.muted = true;
        muteButton.className = "fa-solid fa-volume-xmark fa-2xl";
    } else {
        hoverSound.muted = false;
        muteButton.className = "fa-solid fa-volume-high fa-2xl";
    }

    document.getElementById("settings").addEventListener("click", function() {
        settingsMenu.style.display = settingsMenu.style.display === "none" ? "block" : "none";
    });

    function toggleMute(event) {
        event.stopPropagation();

        hoverSound.muted = !hoverSound.muted;

        if (hoverSound.muted) {
            muteButton.className = "fa-solid fa-volume-xmark fa-2xl"; 
            localStorage.setItem("mutePreference", "true"); 
        } else {
            muteButton.className = "fa-solid fa-volume-high fa-2xl"; 
            localStorage.setItem("mutePreference", "false"); 
        }
    }

    muteButton.addEventListener("click", toggleMute);

    function changeCursor1() {
        document.body.style.cursor = "url('/img/hand.cur'), auto";
        cursorDropdown.classList.remove("active"); 
        localStorage.setItem("cursorPreference", "hand1"); 
    }

    function changeCursor2() {
        document.body.style.cursor = "url('/img/hand2.cur'), auto";
        cursorDropdown.classList.remove("active"); 
        localStorage.setItem("cursorPreference", "hand2"); 
    }

    cursorButton1.addEventListener("click", changeCursor1);
    cursorButton2.addEventListener("click", changeCursor2);

    cursorDropdown.addEventListener("click", function(event) {
        event.stopPropagation();
        cursorDropdown.classList.toggle("active");
    });

    window.addEventListener("click", function() {
        cursorDropdown.classList.remove("active");
    });
});