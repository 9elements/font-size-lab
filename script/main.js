const range = document.getElementById('font-size-control');
const result = document.getElementById('percent');
const vwLiquid = document.getElementById('fill');
const vwSurface = document.getElementById('surface');
const pxLiquid = document.getElementById('px-fill');
const pxSurface = document.getElementById('px-surface');
const calc = document.getElementById('calc');
const inputFontsize = document.getElementById('fontsize');
const inputResolution = document.getElementById('resolution');
var fontsize = inputFontsize.value;
var resolution = inputResolution.value;
const resultFrame = document.getElementById('resultframe').contentWindow;

range.addEventListener("input", function () {
  update();
  vwLiquid.setAttribute("y", 195 - range.value * 1.7);
  vwSurface.setAttribute("cy", 195 - range.value * 1.7);
  pxLiquid.setAttribute("y", range.value * 1.7 + 65);
  pxSurface.setAttribute("cy", range.value * 1.7 + 65);
  pxSurface.setAttribute("rx", range.value * 48 / 100 + 27);
}, false);

inputFontsize.addEventListener("input", function () {
  fontsize = inputFontsize.value;
  update();
}, false);

inputResolution.addEventListener("input", function () {
  resolution = inputResolution.value;
  update();
}, false);

function update() {
  var percent = range.value;
  var fluid = (fontsize * percent / 100).toFixed(0)
  var fixed = fontsize - fluid;
  var calcFluid = (fluid / resolution * 100).toFixed(2);
  var cssResult = "calc(" + fixed + "px + " + calcFluid + "vw)";
  result.innerHTML = percent + "%";
  calc.innerHTML = cssResult;
  var host = window.location.href;
  console.log(host);
  resultFrame.postMessage(cssResult, host);
};

window.onload = function () {
  update();
  vwLiquid.setAttribute("y", 195 - range.value * 1.7);
  vwSurface.setAttribute("cy", 195 - range.value * 1.7);
  pxLiquid.setAttribute("y", range.value * 1.7 + 65);
  pxSurface.setAttribute("cy", range.value * 1.7 + 65);
  pxSurface.setAttribute("rx", range.value * 48 / 100 + 27);
};
