const noButton = document.getElementById("No-Button");
const mainImage = document.getElementById("MainImage");
const banner = document.getElementById("Banner")



noButton.addEventListener("click", function() {
    mainImage.src="./images/cat-meme-cat-with-gun.gif";
    banner.innerHTML="I am not dealing with funny business here, pick the right answer."
});
