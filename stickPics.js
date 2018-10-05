var stickPicList = [
	"images/annie-spratt-777442-unsplash.jpg",
	"images/bryson-hammer-589566-unsplash.jpg",
	"images/david-boca-476117-unsplash.jpg",
	"images/foad-manghouly-8794-unsplash.jpg",
	"images/hannah-porter-256991-unsplash.jpg",
	"images/jaser-cervantes-1052644-unsplash.jpg",
	"images/kristina-flour-185602-unsplash.jpg",
	"images/lorenzo-campregher-509958-unsplash.jpg",
	"images/mords-saligumba-524103-unsplash.jpg",
	"images/noah-arsenault-237756-unsplash.jpg",
	"images/numoon-chld-754481-unsplash.jpg",
	"images/oliver-paaske-696856-unsplash.jpg",
	"images/patrick-hendry-537762-unsplash.jpg",
	"images/sead-dedic-572298-unsplash.jpg"
];

var stickPicURLs = [];

for (var i = 0; i < stickPicList.length; i++) {
	stickPicURLs.push(chrome.extension.getURL(stickPicList[i]));
}


setInterval(function(){
	var hotStick = stickPicURLs[Math.floor(Math.random() * stickPicURLs.length)];

	var notHotImages = document.getElementsByTagName("img");

	var randomImage = Math.floor(Math.random() * notHotImages.length);

	notHotImages[randomImage].src = hotStick;
	notHotImages[randomImage].srcset = "";
	notHotImages[randomImage].style.objectFit = "cover";
}, 500);