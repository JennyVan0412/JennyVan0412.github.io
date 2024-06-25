const cutout = document.querySelectorAll(".cutout");

let z = 1;

cutout.forEach((cutout) => {
  const corner = cutout.querySelector(".corner");
  cutout.addEventListener("mousedown", () => {
    z = z + 1;
    cutout.style.zIndex = z;
  });
  cutout.addEventListener("mousedown", (event) => {
    cutout.classList.add("is-selected");

    let l = cutout.offsetLeft;
    let t = cutout.offsetTop;

    let startX = event.pageX;
    let startY = event.pageY;

    const drag = (event) => {
      event.preventDefault();
      cutout.style.left = l + (event.pageX - startX) + "px";
      cutout.style.top = t + (event.pageY - startY) + "px";
    };
    const mouseup = () => {
      cutout.classList.remove("is-selected");

      document.removeEventListener("mousemove", drag);
      document.removeEventListener("mouseup", mouseup);
    };

    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", mouseup);
  });

  corner.addEventListener("mousedown", (event) => {
    let w = cutout.clientWidth;
    let h = cutout.clientHeight;

    let startX = event.pageX;
    let startY = event.pageY;

    const drag = (event) => {
      event.preventDefault();
      cutout.style.width = w + (event.pageX - startX) + "px";
      cutout.style.height = h + (event.pageY - startY) + "px";
    };
    const mouseup = () => {
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("mouseup", mouseup);
    };

    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", mouseup);
  });
});
/*
image_array = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
];

function get_random_image() {
  random_index = Math.floor(Math.random() * image_array.length);

  selected_image = image_array[random_index];

  document.getElementById("icon_generator").src = "./images/${selected_image}";
}
*/
