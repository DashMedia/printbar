import './printbar.scss';

export default function printbar() {
  'use strict';

  const qr = "https://chart.googleapis.com/chart?cht=qr&chs=80x80&chl=" + document.URL + "&choe=UTF-8";
  const pageTitle = document.querySelector("h1");
  let title = '';
  if(pageTitle){
    title = pageTitle.innerText;
  }
  const printBlock = '<div class="printbar"><span class="heading">' + title + '</span><span>' + document.URL + '</span></div>';

  document.head.insertAdjacentHTML("afterbegin", "<style>.printbar:before{z-index:100;position:relative;float:left;content:url(" + qr + ");padding:1px;width:80px;height:80px;background-width:100%;background-height:100%;} .printbar{max-width:100%;visibility:hidden; position:absolute;overflow:hidden;}@media only print{.printbar {visibility:visible;position:relative;background-color:#ffffff;border:3px solid #cccccc;margin-bottom:1px;font-family:helvetica, arial, sans-serif;} .printbar span{z-index:101;padding:1px;text-shadow:none;display:block;text-align:left;color:#cccccc;line-height:1em;margin: 3px 15px 10px 15px;} .printbar span.heading{font-weight:bold;font-size:35px;line-height:1em;margin:10px 15px 3px 15px}h1{display:none !important;}</style>"),
  document.body.insertAdjacentHTML('afterbegin', printBlock);
};
