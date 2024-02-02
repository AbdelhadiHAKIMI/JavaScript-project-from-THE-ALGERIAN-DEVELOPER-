var arrayslid = [
  {
    img: "/images/banner2.png",
    title: "Basic template",
    countent:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktoppublishing packages and",
  },
  {
    img: "/images/banner3.jpg",
    title: "second template",
    countent:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktoppublishing packages and",
  },
  {
    img: "/images/banner4.jpg",
    title: "third template ",
    countent:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktoppublishing packages and",
  },
];
var myimge = document.querySelector(".parentimg");
var mytitle = document.querySelector(".firstitle");
var mycontent = document.querySelector(".firspar");
var i = 0;
function slidshownext() {
  myimge.src = arrayslid[i].img;
  mytitle.textContent = arrayslid[i].title;
  mycontent.textContent = arrayslid[i].countent;

  if (i < arrayslid.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

function slidshowprevies() {
  myimge.src = arrayslid[i].img;
  mytitle.textContent = arrayslid[i].title;
  mycontent.textContent = arrayslid[i].countent;

  if (i > 0) {
    i--;
  } else {
    i = arrayslid.length - 1;
  }
}
var download = [
  {
    img: "/images/banner2.png",
  },
  {
    img: "/images/banner2.png",
  },
];
var downimg = document.querySelector(".downimg");
var i = 0;
function downimgshonext() {
  downimg.src = download[i].img;
  if (i < download.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
