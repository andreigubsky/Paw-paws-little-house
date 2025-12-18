import{a as L,S as O,N as I,P as A,K as X,A as W}from"./assets/vendor-BHpaU86b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const D="data:image/svg+xml,%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%202%20L20.32%2010.76%20L30%2012.16%20L23%2019%20L24.64%2028.64%20L16%2024.1%20L7.36%2028.64%20L9%2019%20L2%2012.16%20L11.68%2010.76%20Z'%20fill='%23000000'/%3e%3c/svg%3e",R="data:image/svg+xml,%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cclipPath%20id='half-clip'%3e%3crect%20x='0'%20y='0'%20width='16'%20height='32'%20/%3e%3c/clipPath%3e%3c/defs%3e%3cpath%20d='M16%202%20L20.32%2010.76%20L30%2012.16%20L23%2019%20L24.64%2028.64%20L16%2024.1%20L7.36%2028.64%20L9%2019%20L2%2012.16%20L11.68%2010.76%20Z'%20fill='none'%20stroke='%23000000'%20stroke-width='2'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M16%202%20L20.32%2010.76%20L30%2012.16%20L23%2019%20L24.64%2028.64%20L16%2024.1%20L7.36%2028.64%20L9%2019%20L2%2012.16%20L11.68%2010.76%20Z'%20fill='%23000000'%20clip-path='url(%23half-clip)'%20stroke='none'%20/%3e%3c/svg%3e",V="data:image/svg+xml,%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%202%20L20.32%2010.76%20L30%2012.16%20L23%2019%20L24.64%2028.64%20L16%2024.1%20L7.36%2028.64%20L9%2019%20L2%2012.16%20L11.68%2010.76%20Z'%20fill='none'%20stroke='%23000000'%20stroke-width='2'/%3e%3c/svg%3e";document.querySelector(".js-gallery"),document.querySelector(".js-loadmore-btn"),document.querySelector(".js-loader");//!================================================
function U(e){return`
    <li class="pet-category-item">
      <button class="pet-category-btn" data-category="${e._id}">
        ${e.name}
      </button>
    </li>
  `}function Z(e){return`
    <li class="pet-category-item ">
      <button class="pet-category-btn" data-category="all">
        Всі
      </button>
    </li>
  `+e.map(U).join("")}function K(e){const t=e.categories.map(n=>`<li class="pet-card__group">${n.name}</li>`).join("");return`
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
  `}function w(e){return e.map(K).join("")}//!================================================
function F(e){return`
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
  `}function G(e,t,n=5){e.innerHTML="";const o=Math.round(t*2)/2;for(let s=1;s<=n;s++){const a=document.createElement("img");a.className="icon-star",a.alt="star rating",o>=s?a.src=D:o>=s-.5?a.src=R:a.src=V,e.appendChild(a)}}const z="https://paw-hut.b.goit.study/api/animals",Q={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value",mode:"no-cors"}};async function k(e,t,n){try{const o=`${z}/?categoryId=${e}&page=${t}&limit=${n}`,s=await L(`${o}`,Q);if(!s.data)throw new Error(`HTTP error! Status: ${s.status}`);return s.data}catch(o){throw console.error(o),o}}//!================================================
async function $(e=1,t=8){const s=`https://paw-hut.b.goit.study/api/animals?page=${e}&limit=${t}`;return(await L.get(s)).data}const Y="https://paw-hut.b.goit.study/api/categories",J={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value",mode:"no-cors"}};async function ee(){try{const e=await L(Y,J);if(!e.data)throw new Error(`HTTP error! Status: ${e.status}`);return e.data}catch(e){throw console.error(e),e}}function te(e,t,n=1){if(t<=1)return[1];const o=[1],s=Math.max(2,e-n),a=Math.min(t-1,e+n);s>2&&o.push("...");for(let d=s;d<=a;d++)o.push(d);return a<t-1&&o.push("..."),o.push(t),o}function q({container:e,current:t,total:n}){if(n<=1){e.innerHTML="";return}if(n===2){e.innerHTML=`
      <button type="button" data-page="1" class="${t===1?"is-active":""}">1</button>
      <button type="button" data-page="2" class="${t===2?"is-active":""}">2</button>
    `;return}const o=te(t,n,1);e.innerHTML=`
    <button type="button" data-nav="prev" ${t===1?"disabled":""}>←</button>

    ${o.map(s=>s==="..."?'<span class="dots">…</span>':`<button type="button" data-page="${s}" class="${s===t?"is-active":""}">${s}</button>`).join("")}

    <button type="button" data-nav="next" ${t===n?"disabled":""}>→</button>
  `}function ne(){return window.innerWidth>=1440?72:64}function N(e){if(!e)return;const t=e.getBoundingClientRect().top+window.pageYOffset-ne();window.scrollTo({top:t,behavior:"smooth"})}const p=[];//!================================================
const i={showMoreBtn:document.querySelector(".js-pet-show-more-btn"),petList:document.querySelector(".js-pet-list"),petCategories:document.querySelector(".js-pet-categories"),showDetailsBtn:document.querySelector(".js-more-info"),pagination:document.querySelector(".js-pet-pagination")};i.showMoreBtn.disabled=!0;function v(){return window.innerWidth>=1440?9:8}function C(){return window.innerWidth<768}let r=1,l=v(),g="all",f=1;//!================================================
document.addEventListener("DOMContentLoaded",async()=>{const e=await ee();l=v(),i.petCategories.innerHTML=Z(e.sort().reverse()),i.petCategories.querySelector('[data-category="all"]').closest(".pet-category-item").classList.add("is-active")});document.addEventListener("DOMContentLoaded",async()=>{const e=await $(r,l);p.length=0,p.push(...e.animals),i.petList.innerHTML=w(e.animals),i.showMoreBtn.disabled=e.animals.length<l,i.petList.innerHTML=w(e.animals),f=Math.ceil(e.totalItems/e.limit),C()?(i.showMoreBtn.disabled=e.animals.length<l,i.pagination.innerHTML=""):(i.showMoreBtn.classList.add("is-hidden"),i.showMoreBtn.disabled=!0,q({container:i.pagination,current:r,total:f}))});i.petCategories.addEventListener("click",async e=>{if(e.target.nodeName!=="BUTTON")return;i.petCategories.querySelectorAll(".pet-category-item").forEach(n=>n.classList.remove("is-active")),e.target.closest(".pet-category-item").classList.add("is-active"),g=e.target.dataset.category,r=1,l=v(),i.showMoreBtn.disabled=!1;let t;g==="all"?t=await $(r,l):t=await k(g,r,l),p.length=0,p.push(...t.animals),i.petList.innerHTML=w(t.animals),f=Math.ceil(t.totalItems/t.limit),C()?(i.showMoreBtn.classList.remove("is-hidden"),i.showMoreBtn.disabled=t.animals.length<l,i.pagination.innerHTML=""):(i.showMoreBtn.classList.add("is-hidden"),i.showMoreBtn.disabled=!0,q({container:i.pagination,current:r,total:f}),N(i.petCategories))});i.showMoreBtn.addEventListener("click",async()=>{if(!C())return;r+=1,l=v();let e;g==="all"?e=await $(r,l):e=await k(g,r,l),p.push(...e.animals),i.petList.insertAdjacentHTML("beforeend",w(e.animals)),e.animals.length<l&&(i.showMoreBtn.disabled=!0),se()});//!================================================
function se(){const e=document.querySelector(".js-pet-list div.pet-card__container");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t,behavior:"smooth"})}//!================================================
i.pagination.addEventListener("click",async e=>{const t=e.target.closest("button");if(!t||t.hasAttribute("disabled"))return;let n=r;if(t.dataset.page&&(n=Number(t.dataset.page)),t.dataset.nav==="prev"&&(n=r-1),t.dataset.nav==="next"&&(n=r+1),!Number.isFinite(n)||n<1||n>f||n===r)return;r=n,l=v();const o=g==="all"?await $(r,l):await k(g,r,l);p.length=0,p.push(...o.animals),i.petList.innerHTML=w(o.animals),f=Math.ceil(o.totalItems/o.limit),q({container:i.pagination,current:r,total:f}),N(i.petCategories)});const oe="https://paw-hut.b.goit.study/api/orders";async function ae(e){var t;try{return(await L.post(oe,e,{headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value"}})).data}catch(n){throw console.error("Помилка запиту:",((t=n.response)==null?void 0:t.data)||n.message),n}}const h=document.querySelector(".js-modal-order-overlay"),_=document.querySelector(".modal-close-btn"),u=document.querySelector(".modal-order-form");let B=null;function ie(e){B=e,h.classList.add("is-open"),document.body.classList.add("modal-open")}function M(){h.classList.remove("is-open"),document.body.classList.remove("modal-open"),u.reset(),B=null}h&&_&&u&&(_.addEventListener("click",M),u.addEventListener("input",e=>{e.target.closest(".field")&&E(e.target)}),h.addEventListener("click",e=>{e.target===h&&M()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&h.classList.contains("is-open")&&M()}),u.addEventListener("submit",async e=>{var P;e.preventDefault();const t=u.elements["user-name"].value.trim(),o=u.elements.phone.value.replace(/\D/g,""),s=u.elements["user-comment"].value.trim(),a=u.elements["user-name"],d=u.elements.phone,T=u.elements["user-comment"];E(a),E(d),E(T);let y=!1;if(t||(S(a,"Введіть імʼя"),y=!0),/^\d{12}$/.test(o)||(S(d,"Формат: 380XXXXXXXXX"),y=!0),s||(S(T,"Напишіть коментар"),y=!0),y||!B)return;const j={name:t,phone:o,comment:s,animalId:B};console.log(j);try{await ae(j),M()}catch(b){console.error("Помилка запиту:",((P=b==null?void 0:b.response)==null?void 0:P.data)||b.message)}}));const m=document.getElementById("phone");m&&(m.addEventListener("focus",()=>{m.value||(m.value="+38(0")}),m.addEventListener("input",()=>{let e=m.value.replace(/\D/g,"");e.startsWith("380")||(e="380"),e=e.slice(0,12);let t="+38(0";e.length>3&&(t+=e.slice(3,5)),e.length>5&&(t+=") "+e.slice(5,8)),e.length>8&&(t+="-"+e.slice(8,10)),e.length>10&&(t+="-"+e.slice(10,12)),m.value=t}));function S(e,t){const n=e.closest(".field");if(!n)return;n.classList.add("is-error");const o=n.querySelector(".field-error");o&&(o.textContent=t)}function E(e){const t=e.closest(".field");if(!t)return;t.classList.remove("is-error");const n=t.querySelector(".field-error");n&&(n.textContent="")}const c={petList:null,backdrop:null,modalWindow:null};document.addEventListener("DOMContentLoaded",()=>{if(c.petList=document.querySelector(".js-pet-list"),c.backdrop=document.querySelector(".js-backdrop"),c.modalWindow=document.querySelector(".js-modal-window"),!c.petList||!c.backdrop||!c.modalWindow)return;c.petList.addEventListener("click",t=>{const n=t.target.closest(".js-more-info");if(!n)return;const o=n.dataset.id,s=p.find(a=>String(a._id)===String(o));s&&(c.modalWindow.innerHTML=F(s),c.backdrop.classList.add("is-open"),document.body.classList.add("modal-open"))});function e(){!c.backdrop||!c.modalWindow||(c.backdrop.classList.remove("is-open"),document.body.classList.remove("modal-open"),c.modalWindow.innerHTML="")}c.backdrop.addEventListener("click",t=>{(t.target===c.backdrop||t.target.closest(".js-modal-close"))&&e()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&c.backdrop.classList.contains("is-open")&&e()}),document.addEventListener("click",t=>{const n=t.target.closest(".js-takehome-btn");if(!n)return;const o=n.dataset.id;o&&(e(),ie(o))})});const x=document.querySelector(".about-us-slider .mySwiper")||document.querySelector(".mySwiper");x&&new O(x,{modules:[I,A,X],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".about-us-slider .swiper-pagination",clickable:!0},navigation:{nextEl:".about-us-slider .swiper-button-next",prevEl:".about-us-slider .swiper-button-prev"}});new W(".accordion-container",{duration:400,showMultiple:!1,onOpen:e=>{const t=e.querySelector(".faq-icon-use");t.href.baseVal="/img/sprite.svg#icon-close"},onClose:e=>{const t=e.querySelector(".faq-icon-use");t.href.baseVal="/img/sprite.svg#icon-add"}});document.addEventListener("DOMContentLoaded",()=>{var s;const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("#mobilemenu")};e.openMenuBtn&&e.menu&&e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn&&e.menu&&e.closeMenuBtn.addEventListener("click",t);function t(){e.menu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")}(s=e.menu)==null||s.addEventListener("click",a=>{a.target.tagName==="A"&&(e.menu.classList.remove("is-open"),document.body.classList.remove("no-scroll"))});const n={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};n.openModalBtn&&n.modal&&n.openModalBtn.addEventListener("click",o),n.closeModalBtn&&n.modal&&n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-open")}});const re="https://paw-hut.b.goit.study/api/feedbacks",H=document.getElementById("feedbacks-list");async function ce(){try{const e=await L.get(re);return e.data.feedbacks||e.data||[]}catch{return[]}}function le(e){const t=e.rate,n=e.description,o=e.author;return`
    <div class="swiper-slide review-card">
      <div class="review-rating">
          <div class="rating-container" data-score="${t}"></div>
      </div>
      <p class="review-text">${n}</p>
      <div class="review-author-wrap">
        <h3 class="review-author">${o}</h3>
      </div>
    </div>
  `}async function de(){if(!H)return;const e=await ce();if(!e.length)return;H.innerHTML=e.map(le).join(""),document.querySelectorAll(".rating-container").forEach(n=>{const o=Number(n.dataset.score)||0;G(n,o,5)}),new O(".reviews-swiper",{modules:[I,A],speed:500,spaceBetween:16,slidesPerView:1,grabCursor:!0,pagination:{el:".reviews-slider .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},navigation:{nextEl:".reviews-slider .swiper-button-next",prevEl:".reviews-slider .swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:2,spaceBetween:28}}})}document.addEventListener("DOMContentLoaded",de);
//# sourceMappingURL=index.js.map
