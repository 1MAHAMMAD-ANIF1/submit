const text = '{ "page1":"http://18.224.23.171/images/magazine/p1.jpg", "page2":"http://18.224.23.171/images/magazine/p2.jpg", "page3":"http://18.224.23.171/images/magazine/p3.jpg", "page4":"http://18.224.23.171/images/magazine/p4.jpg", "page5":"http://18.224.23.171/images/magazine/p5.jpg", "page6":"http://18.224.23.171/images/magazine/p6.jpg", "page7":"http://18.224.23.171/images/magazine/p7.jpg", "page8":"http://18.224.23.171/images/magazine/p8.jpg", "page9":"http://18.224.23.171/images/magazine/p9.jpg", "page10":"http://18.224.23.171/images/magazine/p10.jpg" }';

const obj = JSON.parse(text);

Object.entries(obj).forEach(([key, value]) => {
    document.getElementById("demo").insertAdjacentHTML('beforeEnd', "<div style='background-image:url(" + value + ")'></div>");
});
/*
//  ----------------------------------------------
 const xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
    var obj= JSON.parse(this.responseText);
  }
 };
 xmlhttp.open("GET", "http://18.224.23.171/images/magazine/getImages.json", true);
 xmlhttp.send();

// -------------------------------------- */
