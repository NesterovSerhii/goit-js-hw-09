!function(){var t={startBtnEl:document.querySelector("button[data-start]"),stopBtnEl:document.querySelector("button[data-stop]"),body:document.querySelector("body")},n=null;t.stopBtnEl.disabled=!0;t.startBtnEl.addEventListener("click",(function(){t.startBtnEl.disabled=!0,t.stopBtnEl.disabled=!1,n=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.stopBtnEl.addEventListener("click",(function(){t.startBtnEl.disabled=!1,t.stopBtnEl.disabled=!0,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.bd5239ba.js.map