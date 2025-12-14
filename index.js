import{a as p,S as h,N as w,P as b,K as L}from"./assets/vendor-CufGE6K3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();const $="https://paw-hut.b.goit.study/api/animals",_={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value",mode:"no-cors"}};async function f(e,t,r){try{const i=`${$}/?categoryId=${e}&page=${t}&limit=${r}`,a=await p(`${i}`,_);if(!a.data)throw new Error(`HTTP error! Status: ${a.status}`);return a.data}catch(i){throw console.error(i),i}}//!================================================
async function m(e=1,t=8){const a=`https://paw-hut.b.goit.study/api/animals?page=${e}&limit=${t}`;return(await p.get(a)).data}const v="https://paw-hut.b.goit.study/api/categories",S={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value",mode:"no-cors"}};async function B(){try{const e=await p(v,S);if(!e.data)throw new Error(`HTTP error! Status: ${e.status}`);return e.data}catch(e){throw console.error(e),e}}document.querySelector(".js-gallery"),document.querySelector(".js-loadmore-btn"),document.querySelector(".js-loader");//!================================================
function T(e){return`
    <li class="pet-category-item">
      <button class="pet-category-btn" data-category="${e._id}">
        ${e.name}
      </button>
    </li>
  `}function j(e){return`
    <li class="pet-category-item ">
      <button class="pet-category-btn" data-category="all">
        Всі
      </button>
    </li>
  `+e.map(T).join("")}function P(e){const t=e.categories.map(r=>`<li class="pet-card__group">${r.name}</li>`).join("");return`
  <li class="pet-card">
    <div class="pet-card__container">
        <img class="pet-card__image" src="${e.image}" alt="${e.name}" loading="lazy"/>
      
        <p class="pet-card__species">${e.species}</p>

        <h2 class="pet-card__name">${e.name}</h2>

        <ul class="pet-card__groups">
          ${t}
        </ul>
      
        <p class="pet-card__meta">
          <span class="pet-card__meta-item">${e.age}</span>
          <span class="pet-card__meta-item">${e.gender}</span>
        </p>
    
        <p class="pet-card__description">
          ${e.shortDescription}
        </p>
      
        <button class="pet-card__button js-more-info" data-id="${e._id}">
          Дізнатись більше
        </button>
    </div>
  </li>
  `}function g(e){return e.map(P).join("")}//!================================================
const y=document.querySelector(".about-us-slider .mySwiper")||document.querySelector(".mySwiper");y&&new h(y,{modules:[w,b,L],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".about-us-slider .swiper-pagination",clickable:!0},navigation:{nextEl:".about-us-slider .swiper-button-next",prevEl:".about-us-slider .swiper-button-prev"}});//!================================================
const o={showMoreBtn:document.querySelector(".js-pet-show-more-btn"),petList:document.querySelector(".js-pet-list"),petCategories:document.querySelector(".js-pet-categories"),showDetailsBtn:document.querySelector(".js-more-info")};o.showMoreBtn.disabled=!0;function d(){return window.innerWidth>=1440?9:8}let c=1,n=d(),l="all";//!================================================
document.addEventListener("DOMContentLoaded",async()=>{const e=await B();n=d();const t=j(e.sort().reverse());o.petCategories.innerHTML=t,o.petCategories.querySelector('[data-category="all"]').closest(".pet-category-item").classList.add("is-active")});document.addEventListener("DOMContentLoaded",async e=>{const t=await m(c,n),r=g(t.animals);o.petList.innerHTML=r,o.showMoreBtn.disabled=t.animals.length<n});o.petCategories.addEventListener("click",async e=>{if(e.target.nodeName!=="BUTTON")return;o.petCategories.querySelectorAll(".pet-category-item").forEach(r=>r.classList.remove("is-active")),e.target.closest(".pet-category-item").classList.add("is-active"),l=e.target.dataset.category,c=1,n=d(),o.showMoreBtn.disabled=!1;let t;l==="all"?t=await m(c,n):t=await f(l,c,n),o.petList.innerHTML=g(t.animals),o.showMoreBtn.disabled=t.animals.length<n});//!================================================
o.showMoreBtn.addEventListener("click",async()=>{c+=1,n=d();let e;l==="all"?e=await m(c,n):e=await f(l,c,n),o.petList.insertAdjacentHTML("beforeend",g(e.animals)),e.animals.length<n&&(o.showMoreBtn.disabled=!0),C()});//!================================================
function C(){const e=document.querySelector(".js-pet-list > *");if(!e)return;const r=e.getBoundingClientRect().height*2;window.scrollBy({top:r,behavior:"smooth"})}//!================================================
//# sourceMappingURL=index.js.map
