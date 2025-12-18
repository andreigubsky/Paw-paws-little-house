import{a as E,S as A,N as I,P as X,K as N,A as W}from"./assets/vendor-BHpaU86b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();document.querySelector(".js-gallery"),document.querySelector(".js-loadmore-btn"),document.querySelector(".js-loader");//!================================================
function x(e){return`
    <li class="pet-category-item">
      <button class="pet-category-btn" data-category="${e._id}">
        ${e.name}
      </button>
    </li>
  `}function D(e){return`
    <li class="pet-category-item ">
      <button class="pet-category-btn" data-category="all">
        Всі
      </button>
    </li>
  `+e.map(x).join("")}function R(e){const t=e.categories.map(n=>`<li class="pet-card__group">${n.name}</li>`).join("");return`
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
  `}function y(e){return e.map(R).join("")}//!================================================
function U(e){return`
    <div class="pet-modal">
      <button
        type="button"
        class="pet-modal-close js-modal-close"
        aria-label="Close modal"
      >
        <svg width="24" height="24">
            <use href="/img/sprite.svg#icon-close" width="24" height="24"></use>
          </svg>
      </button>

      <div class="pet-modal-content">
        <div class="pet-modal-image">
          <img src="${e.image}" alt="${e.name}" />
        </div>

        <div class="pet-modal-info">
          <p class="pet-modal-species">${e.species}</p>

          <h2 class="pet-modal-name">${e.name}</h2>

          <p class="pet-modal-meta">
            <span>${e.age}</span>
            <span>${e.gender}</span>
          </p>

          <h3>Опис:</h3>
          <p>${e.description}</p>

          <h3>Здоровʼя:</h3>
          <p>${e.healthStatus}</p>

          <h3>Поведінка:</h3>
          <p>${e.behavior}</p>

          <button class="take-home js-takehome-btn" data-id="${e._id}">
            Взяти додому
          </button>
        </div>
      </div>
    </div>
  `}const K="https://paw-hut.b.goit.study/api/animals",V={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value",mode:"no-cors"}};async function q(e,t,n){try{const s=`${K}/?categoryId=${e}&page=${t}&limit=${n}`,o=await E(`${s}`,V);if(!o.data)throw new Error(`HTTP error! Status: ${o.status}`);return o.data}catch(s){throw console.error(s),s}}//!================================================
async function S(e=1,t=8){const o=`https://paw-hut.b.goit.study/api/animals?page=${e}&limit=${t}`;return(await E.get(o)).data}const F="https://paw-hut.b.goit.study/api/categories",G={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value",mode:"no-cors"}};async function z(){try{const e=await E(F,G);if(!e.data)throw new Error(`HTTP error! Status: ${e.status}`);return e.data}catch(e){throw console.error(e),e}}function Q(e,t,n=1){if(t<=1)return[1];const s=[1],o=Math.max(2,e-n),i=Math.min(t-1,e+n);o>2&&s.push("...");for(let d=o;d<=i;d++)s.push(d);return i<t-1&&s.push("..."),s.push(t),s}function T({container:e,current:t,total:n}){if(n<=1){e.innerHTML="";return}if(n===2){e.innerHTML=`
      <button type="button" data-page="1" class="${t===1?"is-active":""}">1</button>
      <button type="button" data-page="2" class="${t===2?"is-active":""}">2</button>
    `;return}const s=Q(t,n,1);e.innerHTML=`
    <button type="button" data-nav="prev" ${t===1?"disabled":""}>←</button>

    ${s.map(o=>o==="..."?'<span class="dots">…</span>':`<button type="button" data-page="${o}" class="${o===t?"is-active":""}">${o}</button>`).join("")}

    <button type="button" data-nav="next" ${t===n?"disabled":""}>→</button>
  `}function Y(){return window.innerWidth>=1440?72:64}function O(e){if(!e)return;const t=e.getBoundingClientRect().top+window.pageYOffset-Y();window.scrollTo({top:t,behavior:"smooth"})}const p=[];//!================================================
const a={showMoreBtn:document.querySelector(".js-pet-show-more-btn"),petList:document.querySelector(".js-pet-list"),petCategories:document.querySelector(".js-pet-categories"),showDetailsBtn:document.querySelector(".js-more-info"),pagination:document.querySelector(".js-pet-pagination")};a.showMoreBtn.disabled=!0;function b(){return window.innerWidth>=1440?9:8}function j(){return window.innerWidth<768}let r=1,l=b(),g="all",f=1;//!================================================
document.addEventListener("DOMContentLoaded",async()=>{const e=await z();l=b(),a.petCategories.innerHTML=D(e.sort().reverse()),a.petCategories.querySelector('[data-category="all"]').closest(".pet-category-item").classList.add("is-active")});document.addEventListener("DOMContentLoaded",async()=>{const e=await S(r,l);p.length=0,p.push(...e.animals),a.petList.innerHTML=y(e.animals),a.showMoreBtn.disabled=e.animals.length<l,a.petList.innerHTML=y(e.animals),f=Math.ceil(e.totalItems/e.limit),j()?(a.showMoreBtn.disabled=e.animals.length<l,a.pagination.innerHTML=""):(a.showMoreBtn.classList.add("is-hidden"),a.showMoreBtn.disabled=!0,T({container:a.pagination,current:r,total:f}))});a.petCategories.addEventListener("click",async e=>{if(e.target.nodeName!=="BUTTON")return;a.petCategories.querySelectorAll(".pet-category-item").forEach(n=>n.classList.remove("is-active")),e.target.closest(".pet-category-item").classList.add("is-active"),g=e.target.dataset.category,r=1,l=b(),a.showMoreBtn.disabled=!1;let t;g==="all"?t=await S(r,l):t=await q(g,r,l),p.length=0,p.push(...t.animals),a.petList.innerHTML=y(t.animals),f=Math.ceil(t.totalItems/t.limit),j()?(a.showMoreBtn.classList.remove("is-hidden"),a.showMoreBtn.disabled=t.animals.length<l,a.pagination.innerHTML=""):(a.showMoreBtn.classList.add("is-hidden"),a.showMoreBtn.disabled=!0,T({container:a.pagination,current:r,total:f}),O(a.petCategories))});a.showMoreBtn.addEventListener("click",async()=>{if(!j())return;r+=1,l=b();let e;g==="all"?e=await S(r,l):e=await q(g,r,l),p.push(...e.animals),a.petList.insertAdjacentHTML("beforeend",y(e.animals)),e.animals.length<l&&(a.showMoreBtn.disabled=!0),J()});//!================================================
function J(){const e=document.querySelector(".js-pet-list > *");if(!e)return;const t=e.getBoundingClientRect().height*2;window.scrollBy({top:t,behavior:"smooth"})}//!================================================
a.pagination.addEventListener("click",async e=>{const t=e.target.closest("button");if(!t||t.hasAttribute("disabled"))return;let n=r;if(t.dataset.page&&(n=Number(t.dataset.page)),t.dataset.nav==="prev"&&(n=r-1),t.dataset.nav==="next"&&(n=r+1),!Number.isFinite(n)||n<1||n>f||n===r)return;r=n,l=b();const s=g==="all"?await S(r,l):await q(g,r,l);p.length=0,p.push(...s.animals),a.petList.innerHTML=y(s.animals),f=Math.ceil(s.totalItems/s.limit),T({container:a.pagination,current:r,total:f}),O(a.petCategories)});const Z="https://paw-hut.b.goit.study/api/orders";async function ee(e){var t;try{return(await E.post(Z,e,{headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value"}})).data}catch(n){throw console.error("Помилка запиту:",((t=n.response)==null?void 0:t.data)||n.message),n}}const h=document.querySelector(".js-modal-order-overlay"),P=document.querySelector(".modal-close-btn"),u=document.querySelector(".modal-order-form");let $=null;function te(e){$=e,h.classList.add("is-open"),document.body.classList.add("modal-open")}function w(){h.classList.remove("is-open"),document.body.classList.remove("modal-open"),u.reset(),$=null}h&&P&&u&&(P.addEventListener("click",w),u.addEventListener("input",e=>{e.target.closest(".field")&&M(e.target)}),h.addEventListener("click",e=>{e.target===h&&w()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&h.classList.contains("is-open")&&w()}),u.addEventListener("submit",async e=>{var _;e.preventDefault();const t=u.elements["user-name"].value.trim(),s=u.elements.phone.value.replace(/\D/g,""),o=u.elements["user-comment"].value.trim(),i=u.elements["user-name"],d=u.elements.phone,k=u.elements["user-comment"];M(i),M(d),M(k);let L=!1;if(t||(B(i,"Введіть імʼя"),L=!0),/^\d{12}$/.test(s)||(B(d,"Формат: 380XXXXXXXXX"),L=!0),o||(B(k,"Напишіть коментар"),L=!0),L||!$)return;const C={name:t,phone:s,comment:o,animalId:$};console.log(C);try{await ee(C),w()}catch(v){console.error("Помилка запиту:",((_=v==null?void 0:v.response)==null?void 0:_.data)||v.message)}}));const m=document.getElementById("phone");m&&(m.addEventListener("focus",()=>{m.value||(m.value="+38(0")}),m.addEventListener("input",()=>{let e=m.value.replace(/\D/g,"");e.startsWith("380")||(e="380"),e=e.slice(0,12);let t="+38(0";e.length>3&&(t+=e.slice(3,5)),e.length>5&&(t+=") "+e.slice(5,8)),e.length>8&&(t+="-"+e.slice(8,10)),e.length>10&&(t+="-"+e.slice(10,12)),m.value=t}));function B(e,t){const n=e.closest(".field");if(!n)return;n.classList.add("is-error");const s=n.querySelector(".field-error");s&&(s.textContent=t)}function M(e){const t=e.closest(".field");if(!t)return;t.classList.remove("is-error");const n=t.querySelector(".field-error");n&&(n.textContent="")}const c={petList:null,backdrop:null,modalWindow:null};document.addEventListener("DOMContentLoaded",()=>{if(c.petList=document.querySelector(".js-pet-list"),c.backdrop=document.querySelector(".js-backdrop"),c.modalWindow=document.querySelector(".js-modal-window"),!c.petList||!c.backdrop||!c.modalWindow)return;c.petList.addEventListener("click",t=>{const n=t.target.closest(".js-more-info");if(!n)return;const s=n.dataset.id,o=p.find(i=>String(i._id)===String(s));o&&(c.modalWindow.innerHTML=U(o),c.backdrop.classList.add("is-open"),document.body.classList.add("modal-open"))});function e(){!c.backdrop||!c.modalWindow||(c.backdrop.classList.remove("is-open"),document.body.classList.remove("modal-open"),c.modalWindow.innerHTML="")}c.backdrop.addEventListener("click",t=>{(t.target===c.backdrop||t.target.closest(".js-modal-close"))&&e()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&c.backdrop.classList.contains("is-open")&&e()}),document.addEventListener("click",t=>{const n=t.target.closest(".js-takehome-btn");if(!n)return;const s=n.dataset.id;s&&(e(),te(s))})});const H=document.querySelector(".about-us-slider .mySwiper")||document.querySelector(".mySwiper");H&&new A(H,{modules:[I,X,N],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".about-us-slider .swiper-pagination",clickable:!0},navigation:{nextEl:".about-us-slider .swiper-button-next",prevEl:".about-us-slider .swiper-button-prev"}});new W(".accordion-container",{duration:400,showMultiple:!1,onOpen:e=>{const t=e.querySelector(".faq-icon-use");t.href.baseVal="/img/sprite.svg#icon-close"},onClose:e=>{const t=e.querySelector(".faq-icon-use");t.href.baseVal="/img/sprite.svg#icon-add"}});document.addEventListener("DOMContentLoaded",()=>{var o;const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("#mobilemenu")};e.openMenuBtn&&e.menu&&e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn&&e.menu&&e.closeMenuBtn.addEventListener("click",t);function t(){e.menu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")}(o=e.menu)==null||o.addEventListener("click",i=>{i.target.tagName==="A"&&(e.menu.classList.remove("is-open"),document.body.classList.remove("no-scroll"))});const n={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};n.openModalBtn&&n.modal&&n.openModalBtn.addEventListener("click",s),n.closeModalBtn&&n.modal&&n.closeModalBtn.addEventListener("click",s);function s(){n.modal.classList.toggle("is-open")}});
//# sourceMappingURL=index.js.map
