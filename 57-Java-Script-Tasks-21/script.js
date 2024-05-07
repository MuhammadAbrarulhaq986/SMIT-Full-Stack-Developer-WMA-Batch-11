// ********************************************************************************
var deleteBtns = document.querySelectorAll('.delete-btn');

deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.target.closest('tr').remove();
    });
});
// ********************************************************************************
var imageContainer = document.querySelector('.image-container');

imageContainer.addEventListener('mouseover', () => {
    var hoverImage = imageContainer.querySelector('.hover-image');
    hoverImage.style.opacity = '1';
});

imageContainer.addEventListener('mouseout', () => {
    var hoverImage = imageContainer.querySelector('.hover-image');
    hoverImage.style.opacity = '0';
});
// ********************************************************************************

var count = 0;
document.getElementById("increase").addEventListener("click", () => {
    count++;
    document.getElementById("counter").innerHTML = count;
});

document.getElementById("decrease").addEventListener("click", () => {
    count--;
    document.getElementById("counter").innerHTML = count;
});
// ********************************************************************************