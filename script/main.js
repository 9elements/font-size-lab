const range = document.getElementById('font-size-control');
const result = document.getElementById('percent');
const liquid = document.getElementById('fill');
const surface = document.getElementById('surface');
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
  liquid.setAttribute("y", 190 - range.value);
  surface.setAttribute("cy", 190 - range.value);
  pxLiquid.setAttribute("y", range.value * 1 + 65);
  pxSurface.setAttribute("cy", range.value * 1 + 65);
  pxSurface.setAttribute("rx", range.value * 48 / 170 + 27);
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
  var percent = (range.value * 10 / 17).toFixed(0);
  var fluid = (fontsize * percent / 100).toFixed(0)
  var fixed = fontsize - fluid;
  var calcFluid = (fluid / resolution * 100).toFixed(2);
  var cssResult = "calc(" + fixed + "px + " + calcFluid + "vw)";
  result.innerHTML = percent + "%";
  calc.innerHTML = cssResult;
  resultFrame.postMessage(cssResult, "http://localhost:8000/");
};

window.onload = function () {
  update();
  liquid.setAttribute("y", 190 - range.value);
  surface.setAttribute("cy", 190 - range.value);
  pxLiquid.setAttribute("y", range.value * 1 + 65);
  pxSurface.setAttribute("cy", range.value * 1 + 65);
  pxSurface.setAttribute("rx", range.value * 48 / 170 + 27);
};
