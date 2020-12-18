import {FullscreenBtnCountry} from "./assets/scripts/fullscreen.js";
import {FullscreenBtnMap} from "./assets/scripts/fullscreen.js";
import {FullscreenBtnTable} from "./assets/scripts/fullscreen.js";
import {FullscreenBtnChart} from "./assets/scripts/fullscreen.js";
import {FullscreenBtnWrap} from "./assets/scripts/fullscreen.js";


/** Code for charts */
import {Chart} from "./assets/scripts/charts/chart.js";
const newChart = new Chart();
newChart.getChart();

/** To delete: */
const xxxx = document.querySelector('[data-country]')
let yyyy = 0
const arrarr = ['RU','AF', , 'AL', 'AL']
xxxx.addEventListener('click', () => {
    yyyy = (yyyy + 1) % 5
    newChart.getChart(arrarr[yyyy], 2);
})


export const wrapBtn = new FullscreenBtnWrap('[data-wrap]');
export const countryBtn = new FullscreenBtnCountry('[data-btn-country]', '[data-country]').showHideBtn().toggleFullscreen();
export const mapBtn = new FullscreenBtnMap('[data-btn-map]', '[data-map]').showHideBtn().toggleFullscreen();
export const tableBtn = new FullscreenBtnTable('[data-btn-table]', '[data-table]').showHideBtn().toggleFullscreen();
export const chartBtn = new FullscreenBtnChart('[data-btn-chart]', '[data-chart]').showHideBtn().toggleFullscreen();

