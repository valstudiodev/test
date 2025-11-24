(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();console.log("Script js works!!!");const s=document.querySelector(".link");document.addEventListener("click",()=>{s?s.classList.add("active"):s.classList.remove("active")});const o=`<header class="header">\r
   <div class="header__container">\r
      <h1 class="title">header</h1>\r
      <nav class="header__menu">\r
         <ul class="header__list">\r
            <li class="header__item">\r
               <a href="#" class="header__link">Home</a>\r
            </li>\r
            <li class="header__item">\r
               <a href="./pages/about/about.html" target="_blank" class="header__link">About</a>\r
            </li>\r
            <li class="header__item">\r
               <a href="./pages/contacts/contacts.html" target="_blank" class="header__link">Contacts</a>\r
            </li>\r
         </ul>\r
      </nav>\r
   </div>\r
</header>\r
`;document.getElementById("header-container").innerHTML=o;console.log("Main JS is working");
