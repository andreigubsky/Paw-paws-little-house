import{a as L,i as w,S as I,N as A,P as N,K as W,A as D}from"./assets/vendor-Dm-paIVB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const R="data:image/svg+xml,%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%202%20L20.32%2010.76%20L30%2012.16%20L23%2019%20L24.64%2028.64%20L16%2024.1%20L7.36%2028.64%20L9%2019%20L2%2012.16%20L11.68%2010.76%20Z'%20fill='%23000000'/%3e%3c/svg%3e",V="data:image/svg+xml,%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cclipPath%20id='half-clip'%3e%3crect%20x='0'%20y='0'%20width='16'%20height='32'%20/%3e%3c/clipPath%3e%3c/defs%3e%3cpath%20d='M16%202%20L20.32%2010.76%20L30%2012.16%20L23%2019%20L24.64%2028.64%20L16%2024.1%20L7.36%2028.64%20L9%2019%20L2%2012.16%20L11.68%2010.76%20Z'%20fill='none'%20stroke='%23000000'%20stroke-width='2'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M16%202%20L20.32%2010.76%20L30%2012.16%20L23%2019%20L24.64%2028.64%20L16%2024.1%20L7.36%2028.64%20L9%2019%20L2%2012.16%20L11.68%2010.76%20Z'%20fill='%23000000'%20clip-path='url(%23half-clip)'%20stroke='none'%20/%3e%3c/svg%3e",U="data:image/svg+xml,%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%202%20L20.32%2010.76%20L30%2012.16%20L23%2019%20L24.64%2028.64%20L16%2024.1%20L7.36%2028.64%20L9%2019%20L2%2012.16%20L11.68%2010.76%20Z'%20fill='none'%20stroke='%23000000'%20stroke-width='2'/%3e%3c/svg%3e";function Z(e){return`
    <li class="pet-category-item">
      <button class="pet-category-btn" data-category="${e._id}">
        ${e.name}
      </button>
    </li>
  `}function K(e){return`
    <li class="pet-category-item ">
      <button class="pet-category-btn" data-category="all">
        Всі
      </button>
    </li>
  `+e.map(Z).join("")}function z(e){const t=e.categories.map(n=>`<li class="pet-card__group">${n.name}</li>`).join("");return`
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
  `}function v(e){return e.map(z).join("")}function F(e){return`
    <div class="pet-modal">
      <button
        type="button"
        class="pet-modal-close js-modal-close"
        aria-label="Close modal"
      >
        <svg width="24" height="24">
            <use href="img/sprite.svg#icon-close" width="24" height="24"></use>
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
  `}function G(e,t,n=5){e.innerHTML="";const s=Math.round(t*2)/2;for(let o=1;o<=n;o++){const a=document.createElement("img");a.className="icon-star",a.alt="star rating",s>=o?a.src=R:s>=o-.5?a.src=V:a.src=U,e.appendChild(a)}}const Q="https://paw-hut.b.goit.study/api/animals",Y={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value",mode:"no-cors"}};async function C(e,t,n){try{const s=`${Q}/?categoryId=${e}&page=${t}&limit=${n}`,o=await L(`${s}`,Y);if(!o.data)throw new Error(`HTTP error! Status: ${o.status}`);return w.show("Success send"),o.data}catch(s){throw w.show("Error send"),console.error(s),s}}//!================================================
async function S(e=1,t=8){const o=`https://paw-hut.b.goit.study/api/animals?page=${e}&limit=${t}`;return(await L.get(o)).data}const J="https://paw-hut.b.goit.study/api/categories",ee={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value",mode:"no-cors"}};async function te(){try{const e=await L(J,ee);if(!e.data)throw new Error(`HTTP error! Status: ${e.status}`);return w.show("Success send"),e.data}catch(e){throw w.show("Error send"),console.error(e),e}}function ne(e,t,n=1){if(t<=1)return[1];const s=[1],o=Math.max(2,e-n),a=Math.min(t-1,e+n);o>2&&s.push("...");for(let c=o;c<=a;c++)s.push(c);return a<t-1&&s.push("..."),s.push(t),s}function T({container:e,current:t,total:n}){if(n<=1){e.innerHTML="";return}if(n===2){e.innerHTML=`
      <button type="button" data-page="1" class="${t===1?"is-active":""}">1</button>
      <button type="button" data-page="2" class="${t===2?"is-active":""}">2</button>
    `;return}const s=ne(t,n,1);e.innerHTML=`
    <button type="button" data-nav="prev" ${t===1?"disabled":""}>←</button>

    ${s.map(o=>o==="..."?'<span class="dots">…</span>':`<button type="button" data-page="${o}" class="${o===t?"is-active":""}">${o}</button>`).join("")}

    <button type="button" data-nav="next" ${t===n?"disabled":""}>→</button>
  `}function se(){return window.innerWidth>=1440?72:64}function X(e){if(!e)return;const t=e.getBoundingClientRect().top+window.pageYOffset-se();window.scrollTo({top:t,behavior:"smooth"})}const p=[],i={showMoreBtn:document.querySelector(".js-pet-show-more-btn"),petList:document.querySelector(".js-pet-list"),petCategories:document.querySelector(".js-pet-categories"),showDetailsBtn:document.querySelector(".js-more-info"),pagination:document.querySelector(".js-pet-pagination")};i.showMoreBtn.disabled=!0;function y(){return window.innerWidth>=1440?9:8}function q(){return window.innerWidth<768}let r=1,d=y(),g="all",f=1;document.addEventListener("DOMContentLoaded",async()=>{const e=await te();d=y(),i.petCategories.innerHTML=K(e.sort().reverse()),i.petCategories.querySelector('[data-category="all"]').closest(".pet-category-item").classList.add("is-active")});document.addEventListener("DOMContentLoaded",async()=>{const e=await S(r,d);p.length=0,p.push(...e.animals),i.petList.innerHTML=v(e.animals),i.showMoreBtn.disabled=e.animals.length<d,i.petList.innerHTML=v(e.animals),f=Math.ceil(e.totalItems/e.limit),q()?(i.showMoreBtn.disabled=e.animals.length<d,i.pagination.innerHTML=""):(i.showMoreBtn.classList.add("is-hidden"),i.showMoreBtn.disabled=!0,T({container:i.pagination,current:r,total:f}))});i.petCategories.addEventListener("click",async e=>{if(e.target.nodeName!=="BUTTON")return;i.petCategories.querySelectorAll(".pet-category-item").forEach(n=>n.classList.remove("is-active")),e.target.closest(".pet-category-item").classList.add("is-active"),g=e.target.dataset.category,r=1,d=y(),i.showMoreBtn.disabled=!1;let t;g==="all"?t=await S(r,d):t=await C(g,r,d),p.length=0,p.push(...t.animals),i.petList.innerHTML=v(t.animals),f=Math.ceil(t.totalItems/t.limit),q()?(i.showMoreBtn.classList.remove("is-hidden"),i.showMoreBtn.disabled=t.animals.length<d,i.pagination.innerHTML=""):(i.showMoreBtn.classList.add("is-hidden"),i.showMoreBtn.disabled=!0,T({container:i.pagination,current:r,total:f}),X(i.petCategories))});i.showMoreBtn.addEventListener("click",async()=>{if(!q())return;r+=1,d=y();let e;g==="all"?e=await S(r,d):e=await C(g,r,d),p.push(...e.animals),i.petList.insertAdjacentHTML("beforeend",v(e.animals)),e.animals.length<d&&(i.showMoreBtn.disabled=!0),oe()});function oe(){const e=document.querySelector(".js-pet-list div.pet-card__container");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t,behavior:"smooth"})}i.pagination.addEventListener("click",async e=>{const t=e.target.closest("button");if(!t||t.hasAttribute("disabled"))return;let n=r;if(t.dataset.page&&(n=Number(t.dataset.page)),t.dataset.nav==="prev"&&(n=r-1),t.dataset.nav==="next"&&(n=r+1),!Number.isFinite(n)||n<1||n>f||n===r)return;r=n,d=y();const s=g==="all"?await S(r,d):await C(g,r,d);p.length=0,p.push(...s.animals),i.petList.innerHTML=v(s.animals),f=Math.ceil(s.totalItems/s.limit),T({container:i.pagination,current:r,total:f}),X(i.petCategories)});const ae="https://paw-hut.b.goit.study/api/orders";async function ie(e){var t;try{const n=await L.post(ae,e,{headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value"}});return w.show("Success send"),n.data}catch(n){throw w.show("Error send"),console.error("Помилка запиту:",((t=n.response)==null?void 0:t.data)||n.message),n}}const h=document.querySelector(".js-modal-order-overlay"),x=document.querySelector(".modal-close-btn"),u=document.querySelector(".modal-order-form");let B=null;function re(e){B=e,h.classList.add("is-open"),document.body.classList.add("modal-open")}function E(){h.classList.remove("is-open"),document.body.classList.remove("modal-open"),u.reset(),B=null}h&&x&&u&&(x.addEventListener("click",E),u.addEventListener("input",e=>{e.target.closest(".field")&&$(e.target)}),h.addEventListener("click",e=>{e.target===h&&E()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&h.classList.contains("is-open")&&E()}),u.addEventListener("submit",async e=>{var _;e.preventDefault();const t=u.elements["user-name"].value.trim(),s=u.elements.phone.value.replace(/\D/g,""),o=u.elements["user-comment"].value.trim(),a=u.elements["user-name"],c=u.elements.phone,P=u.elements["user-comment"];$(a),$(c),$(P);let b=!1;if(t||(k(a,"Введіть імʼя"),b=!0),/^\d{12}$/.test(s)||(k(c,"Формат: 380XXXXXXXXX"),b=!0),o||(k(P,"Напишіть коментар"),b=!0),b||!B)return;const j={name:t,phone:s,comment:o,animalId:B};console.log(j);try{await ie(j),E()}catch(M){console.error("Помилка запиту:",((_=M==null?void 0:M.response)==null?void 0:_.data)||M.message)}}));const m=document.getElementById("phone");m&&(m.addEventListener("focus",()=>{m.value||(m.value="+38(0")}),m.addEventListener("input",()=>{let e=m.value.replace(/\D/g,"");e.startsWith("380")||(e="380"),e=e.slice(0,12);let t="+38(0";e.length>3&&(t+=e.slice(3,5)),e.length>5&&(t+=") "+e.slice(5,8)),e.length>8&&(t+="-"+e.slice(8,10)),e.length>10&&(t+="-"+e.slice(10,12)),m.value=t}));function k(e,t){const n=e.closest(".field");if(!n)return;n.classList.add("is-error");const s=n.querySelector(".field-error");s&&(s.textContent=t)}function $(e){const t=e.closest(".field");if(!t)return;t.classList.remove("is-error");const n=t.querySelector(".field-error");n&&(n.textContent="")}const l={petList:null,backdrop:null,modalWindow:null};document.addEventListener("DOMContentLoaded",()=>{if(l.petList=document.querySelector(".js-pet-list"),l.backdrop=document.querySelector(".js-backdrop"),l.modalWindow=document.querySelector(".js-modal-window"),!l.petList||!l.backdrop||!l.modalWindow)return;l.petList.addEventListener("click",t=>{const n=t.target.closest(".js-more-info");if(!n)return;const s=n.dataset.id,o=p.find(a=>String(a._id)===String(s));o&&(l.modalWindow.innerHTML=F(o),l.backdrop.classList.add("is-open"),document.body.classList.add("modal-open"))});function e(){!l.backdrop||!l.modalWindow||(l.backdrop.classList.remove("is-open"),document.body.classList.remove("modal-open"),l.modalWindow.innerHTML="")}l.backdrop.addEventListener("click",t=>{(t.target===l.backdrop||t.target.closest(".js-modal-close"))&&e()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&l.backdrop.classList.contains("is-open")&&e()}),document.addEventListener("click",t=>{const n=t.target.closest(".js-takehome-btn");if(!n)return;const s=n.dataset.id;s&&(e(),re(s))})});const H=document.querySelector(".about-us-slider .mySwiper")||document.querySelector(".mySwiper");H&&new I(H,{modules:[A,N,W],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".about-us-slider .swiper-pagination",clickable:!0},navigation:{nextEl:".about-us-slider .swiper-button-next",prevEl:".about-us-slider .swiper-button-prev"}});new D(".accordion-container",{duration:400,showMultiple:!1,onOpen:e=>{const t=e.querySelector(".faq-icon-use");t.href.baseVal="./img/sprite.svg#icon-close"},onClose:e=>{const t=e.querySelector(".faq-icon-use");t.href.baseVal="./img/sprite.svg#icon-add"}});document.addEventListener("DOMContentLoaded",()=>{var a;const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("#mobilemenu")};e.openMenuBtn&&e.menu&&e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn&&e.menu&&e.closeMenuBtn.addEventListener("click",n);function t(c){c.key==="Escape"&&(e.menu.classList.remove("is-open"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",t))}function n(){const c=e.menu.classList.contains("is-open");e.menu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll"),c?document.removeEventListener("keydown",t):document.addEventListener("keydown",t)}(a=e.menu)==null||a.addEventListener("click",c=>{c.target.tagName==="A"&&(e.menu.classList.remove("is-open"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",t))});const s={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};s.openModalBtn&&s.modal&&s.openModalBtn.addEventListener("click",o),s.closeModalBtn&&s.modal&&s.closeModalBtn.addEventListener("click",o);function o(){s.modal.classList.toggle("is-open")}});const ce="https://paw-hut.b.goit.study/api/feedbacks",O=document.getElementById("feedbacks-list");async function le(){try{const e=await L.get(ce);return e.data.feedbacks||e.data||[]}catch{return[]}}function de(e){const t=e.rate,n=e.description,s=e.author;return`
    <div class="swiper-slide review-card">
      <div class="review-rating">
          <div class="rating-container" data-score="${t}"></div>
      </div>
      <p class="review-text">${n}</p>
      <div class="review-author-wrap">
        <h3 class="review-author">${s}</h3>
      </div>
    </div>
  `}async function ue(){if(!O)return;const e=await le();if(!e.length)return;O.innerHTML=e.map(de).join(""),document.querySelectorAll(".rating-container").forEach(n=>{const s=Number(n.dataset.score)||0;G(n,s,5)}),new I(".reviews-swiper",{modules:[A,N],speed:500,spaceBetween:16,slidesPerView:1,grabCursor:!0,pagination:{el:".reviews-slider .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},navigation:{nextEl:".reviews-slider .swiper-button-next",prevEl:".reviews-slider .swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:2,spaceBetween:28}}})}document.addEventListener("DOMContentLoaded",ue);
//# sourceMappingURL=index.js.map
