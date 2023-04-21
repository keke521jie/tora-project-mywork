

function setRem() {
    const baseWidth = 375 // 设计图基准宽度
    const maxWidth = baseWidth * 1.6 // 最大屏幕宽度，超过此宽度不再增加 font-size
    const minWidth = baseWidth * 0.8 // 最小屏幕宽度，低于此宽度不再减小 font-size
  
    const docEl = document.documentElement
    const screenWidth = docEl.clientWidth
    let ratio = screenWidth / baseWidth
    if (screenWidth > maxWidth) {
      ratio = maxWidth / baseWidth
    } else if (screenWidth < minWidth) {
      ratio = minWidth / baseWidth
    }
    docEl.style.fontSize = `${ratio}px` // 1rem=1px
  }
  
  window.addEventListener('resize', setRem)
  setRem()


// (function (doc, win) {
//     var docEl = doc.documentElement,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         recalc = function () {
//             var clientWidth = docEl.clientWidth;
//             if (!clientWidth) return;
//             if (clientWidth >= 750) {
//                 docEl.style.fontSize = '100px';
//             } else {
//                 docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
//             }
//         };

//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);     // 100px = 1rem