document.getElementById('down-arrow').addEventListener('click', function() {
    var pfpElement = document.getElementById("pfp");
    var vhToPixels = window.innerHeight * 0.01;
    var yOffset = -17 * vhToPixels;
    var yPosition = pfpElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: yPosition});
});
