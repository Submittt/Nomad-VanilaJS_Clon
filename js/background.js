const images = ["001.jpg", 
"002.jpg",  
"003.jpg", 
"004.jpg",
];
  
  const pickedImageNumber = Math.floor(Math.random() * images.length);
  document.body.style.backgroundImage = `url(img/${images[pickedImageNumber]})`;

// const chosenImage =  images[Math.floor(Math.random() * images.length)];

// //const bgImage = document.createElement("img");

// //bgImage.src = `img/${chosenImage}`;

// //document.body.appendChild(bgImage);

// //bgImage.id = "bgImage";
