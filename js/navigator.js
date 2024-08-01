let scrolltimeout;
let mouseheader;

function NaviEvent() {
  const header = document.querySelector("header");
  header.classList.add("show");
  clearTimeout(scrolltimeout);
  scrolltimeout = setTimeout(() => {
    header.classList.remove("show");
  }, 1500);
}
function mouseEV(event) {
  const header = document.querySelector("header");
  if (0 < event.clientY && event.clientY < 100) {
    header.classList.add("show");
    clearTimeout(scrolltimeout);
  } else {
    clearTimeout(scrolltimeout);
    scrolltimeout = setTimeout(() => {
      header.classList.remove("show");
    }, 500);
  }
}

window.addEventListener("scroll", NaviEvent);
window.addEventListener("mousemove", mouseEV);

// function NaviEvent() {
//   const header = document.querySelector("header");
//   //   header.classList.add("show");
//   //   setTimeout(() => {
//   //     header.classList.remove("show");
//   //   }, 1000);

//   window.addEventListener("scroll", () => {
//     if (isscrolling) {
//       header.classList.add("show");
//     } else {
//       header.classList.remove("show");
//     }
//   });
// }

// NaviEvent();

//  {passive:true});
//     function scrollGo(){
//         const scrollPx = window.scrollY;
//         const naviGator = document.querySelector("header")

//         if( header <= scrollPx ){
//             naviGator.classList.add("fix")
//         }
//         else{
//             naviGator.classList.remove("fix")
//         }

//     }

// }

// NaviEvent();

// function NaviEvent() {
//   const header = document.querySelector("header");
//   let lastscroll = 0;

//   function scrollmove() {
//     const nowscroll = window.scrollY;
//     if (nowscroll > lastscroll) {
//       header.classList.add("show");
//     } else {
//       header.classList.remove("show");
//     }
//     lastscroll = nowscroll;
//   }

//   window.addEventListener("scroll", debounce(scrollmove));
// }

// NaviEvent();

// // function NaviEvent() {
// //   const header = document.querySelector("header");
// //   //   header.classList.add("show");
// //   //   setTimeout(() => {
// //   //     header.classList.remove("show");
// //   //   }, 1000);

// //   window.addEventListener("scroll", () => {
// //     if (isscrolling) {
// //       header.classList.add("show");
// //     } else {
// //       header.classList.remove("show");
// //     }
// //   });
// // }

// // NaviEvent();

// //  {passive:true});
// //     function scrollGo(){
// //         const scrollPx = window.scrollY;
// //         const naviGator = document.querySelector("header")

// //         if( header <= scrollPx ){
// //             naviGator.classList.add("fix")
// //         }
// //         else{
// //             naviGator.classList.remove("fix")
// //         }

// //     }

// // }

// // NaviEvent();
