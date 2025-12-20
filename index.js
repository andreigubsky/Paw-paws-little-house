import{A as W,a as L,i as A,S as I,N,P as X,K as V,b as U}from"./assets/vendor-D86FYx7F.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Z="data:image/svg+xml,%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%202%20L20.32%2010.76%20L30%2012.16%20L23%2019%20L24.64%2028.64%20L16%2024.1%20L7.36%2028.64%20L9%2019%20L2%2012.16%20L11.68%2010.76%20Z'%20fill='%23000000'/%3e%3c/svg%3e",z="data:image/svg+xml,%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cclipPath%20id='half-clip'%3e%3crect%20x='0'%20y='0'%20width='16'%20height='32'%20/%3e%3c/clipPath%3e%3c/defs%3e%3cpath%20d='M16%202%20L20.32%2010.76%20L30%2012.16%20L23%2019%20L24.64%2028.64%20L16%2024.1%20L7.36%2028.64%20L9%2019%20L2%2012.16%20L11.68%2010.76%20Z'%20fill='none'%20stroke='%23000000'%20stroke-width='2'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M16%202%20L20.32%2010.76%20L30%2012.16%20L23%2019%20L24.64%2028.64%20L16%2024.1%20L7.36%2028.64%20L9%2019%20L2%2012.16%20L11.68%2010.76%20Z'%20fill='%23000000'%20clip-path='url(%23half-clip)'%20stroke='none'%20/%3e%3c/svg%3e",K="data:image/svg+xml,%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%202%20L20.32%2010.76%20L30%2012.16%20L23%2019%20L24.64%2028.64%20L16%2024.1%20L7.36%2028.64%20L9%2019%20L2%2012.16%20L11.68%2010.76%20Z'%20fill='none'%20stroke='%23000000'%20stroke-width='2'/%3e%3c/svg%3e",D="/Paw-paws-little-house/assets/sprite-B4MSrLYj.svg#icon-close";function Y(e){return`
    <li class="pet-category-item">
      <button class="pet-category-btn" data-category="${e._id}">
        ${e.name}
      </button>
    </li>
  `}function F(e){return`
    <li class="pet-category-item ">
      <button class="pet-category-btn" data-category="all">
        Всі
      </button>
    </li>
  `+e.map(Y).join("")}function G(e){const t=e.categories.map(n=>`<li class="pet-card__group">${n.name}</li>`).join("");return W.init({duration:1500,once:!1}),`
  <li class="pet-card" data-aos="fade-up">
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
  `}function v(e){return e.map(G).join("")}function Q(e){return`
    <div class="pet-modal" data-aos="zoom-in">
      <button
        type="button"
        class="pet-modal-close js-modal-close"
        aria-label="Close modal"
      >
        <svg width="24" height="24">
            <use href="${D}" width="24" height="24"></use>
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
  `}function J(e,t,n=5){e.innerHTML="";const s=Math.round(t*2)/2;for(let o=1;o<=n;o++){const a=document.createElement("img");a.className="icon-star",a.alt="star rating",s>=o?a.src=Z:s>=o-.5?a.src=z:a.src=K,e.appendChild(a)}}function ee(e){const t=e.rate,n=e.description,s=e.author;return`
    <div class="swiper-slide review-card">
      <div class="review-rating">
          <div class="rating-container" data-score="${t}"></div>
      </div>
      <p class="review-text">${n}</p>
      <div class="review-author-wrap">
        <h3 class="review-author">${s}</h3>
      </div>
    </div>
  `}const te="https://paw-hut.b.goit.study/api/animals",ne={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value",mode:"no-cors"}};async function T(e,t,n){try{const s=`${te}/?categoryId=${e}&page=${t}&limit=${n}`,o=await L(`${s}`,ne);if(!o.data)throw new Error(`HTTP error! Status: ${o.status}`);return o.data}catch(s){throw console.error(s),s}}//!================================================
async function B(e=1,t=8){const o=`https://paw-hut.b.goit.study/api/animals?page=${e}&limit=${t}`;return(await L.get(o)).data}const se="https://paw-hut.b.goit.study/api/categories",oe={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value",mode:"no-cors"}};async function ae(){try{const e=await L(se,oe);if(!e.data)throw new Error(`HTTP error! Status: ${e.status}`);return e.data}catch(e){throw console.error(e),e}}function ie(e,t,n=1){if(t<=1)return[1];const s=[1],o=Math.max(2,e-n),a=Math.min(t-1,e+n);o>2&&s.push("...");for(let r=o;r<=a;r++)s.push(r);return a<t-1&&s.push("..."),s.push(t),s}function P({container:e,current:t,total:n}){if(n<=1){e.innerHTML="";return}if(n===2){e.innerHTML=`
      <button type="button" data-page="1" class="${t===1?"is-active":""}">1</button>
      <button type="button" data-page="2" class="${t===2?"is-active":""}">2</button>
    `;return}const s=ie(t,n,1);e.innerHTML=`
    <button type="button" data-nav="prev" ${t===1?"disabled":""}>←</button>

    ${s.map(o=>o==="..."?'<span class="dots">…</span>':`<button type="button" data-page="${o}" class="${o===t?"is-active":""}">${o}</button>`).join("")}

    <button type="button" data-nav="next" ${t===n?"disabled":""}>→</button>
  `}function re(){return window.innerWidth>=1440?82:74}function R(e){if(!e)return;const t=e.getBoundingClientRect().top+window.pageYOffset-re();window.scrollTo({top:t,behavior:"smooth"})}function h(e){A.show({message:e,position:"topRight",backgroundColor:"rgb(255, 215, 163)"})}function ce(e){A.show({message:e,position:"topRight",backgroundColor:"rgba(164, 255, 163, 1)"})}const p=[],i={showMoreBtn:document.querySelector(".js-pet-show-more-btn"),petList:document.querySelector(".js-pet-list"),petCategories:document.querySelector(".js-pet-categories"),showDetailsBtn:document.querySelector(".js-more-info"),pagination:document.querySelector(".js-pet-pagination")};i.showMoreBtn.disabled=!0;function y(){return window.innerWidth>=1440?9:8}function q(){return window.innerWidth<768}let l=1,d=y(),g="all",f=1;document.addEventListener("DOMContentLoaded",async()=>{const e=await ae();d=y(),i.petCategories.innerHTML=F(e.sort().reverse()),i.petCategories.querySelector('[data-category="all"]').closest(".pet-category-item").classList.add("is-active")});document.addEventListener("DOMContentLoaded",async()=>{try{const e=await B(l,d);p.length=0,p.push(...e.animals),i.petList.innerHTML=v(e.animals),i.showMoreBtn.disabled=e.animals.length<d,i.petList.innerHTML=v(e.animals),f=Math.ceil(e.totalItems/e.limit),q()?(i.showMoreBtn.disabled=e.animals.length<d,i.pagination.innerHTML=""):(i.showMoreBtn.classList.add("is-hidden"),i.showMoreBtn.disabled=!0,P({container:i.pagination,current:l,total:f}))}catch{h("Не вдалося завантажити тварин. Спробуйте ще раз."),console.error(err)}});i.petCategories.addEventListener("click",async e=>{if(e.target.nodeName!=="BUTTON")return;i.petCategories.querySelectorAll(".pet-category-item").forEach(n=>n.classList.remove("is-active")),e.target.closest(".pet-category-item").classList.add("is-active"),g=e.target.dataset.category,l=1,d=y(),i.showMoreBtn.disabled=!1;let t;g==="all"?t=await B(l,d):t=await T(g,l,d),p.length=0,p.push(...t.animals),i.petList.innerHTML=v(t.animals),f=Math.ceil(t.totalItems/t.limit),q()?(i.showMoreBtn.classList.remove("is-hidden"),i.showMoreBtn.disabled=t.animals.length<d,i.pagination.innerHTML=""):(i.showMoreBtn.classList.add("is-hidden"),i.showMoreBtn.disabled=!0,P({container:i.pagination,current:l,total:f}),R(i.petCategories))});i.showMoreBtn.addEventListener("click",async()=>{if(!q())return;l+=1,d=y();let e;g==="all"?e=await B(l,d):e=await T(g,l,d),p.push(...e.animals),i.petList.insertAdjacentHTML("beforeend",v(e.animals)),e.animals.length<d&&(i.showMoreBtn.disabled=!0,h("Це всі тваринки в цій категорії")),le()});function le(){const e=document.querySelector(".js-pet-list div.pet-card__container");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t,behavior:"smooth"})}i.pagination.addEventListener("click",async e=>{const t=e.target.closest("button");if(!t||t.hasAttribute("disabled"))return;let n=l;if(t.dataset.page&&(n=Number(t.dataset.page)),t.dataset.nav==="prev"&&(n=l-1),t.dataset.nav==="next"&&(n=l+1),!Number.isFinite(n)||n<1||n>f||n===l)return;l=n,d=y();const s=g==="all"?await B(l,d):await T(g,l,d);p.length=0,p.push(...s.animals),i.petList.innerHTML=v(s.animals),f=Math.ceil(s.totalItems/s.limit),P({container:i.pagination,current:l,total:f}),R(i.petCategories)});const de="https://paw-hut.b.goit.study/api/orders";async function ue(e){var t;try{return(await L.post(de,e,{headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value"}})).data}catch(n){throw console.error("Помилка запиту:",((t=n.response)==null?void 0:t.data)||n.message),n}}const w=document.querySelector(".js-modal-order-overlay"),x=document.querySelector(".modal-close-btn"),u=document.querySelector(".modal-order-form");let $=null;function pe(e){$=e,w.classList.add("is-open"),document.body.classList.add("modal-open")}function E(){w.classList.remove("is-open"),document.body.classList.remove("modal-open"),u.reset(),$=null}w&&x&&u&&(x.addEventListener("click",E),u.addEventListener("input",e=>{e.target.closest(".field")&&k(e.target)}),w.addEventListener("click",e=>{e.target===w&&E()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&w.classList.contains("is-open")&&E()}),u.addEventListener("submit",async e=>{var _;e.preventDefault();const t=u.elements["user-name"].value.trim(),s=u.elements.phone.value.replace(/\D/g,""),o=u.elements["user-comment"].value.trim(),a=u.elements["user-name"],r=u.elements.phone,j=u.elements["user-comment"];k(a),k(r),k(j);let b=!1;if(t||(C(a,"Введіть імʼя"),b=!0,h("Введіть імʼя")),/^\d{12}$/.test(s)||(C(r,"Формат: 380XXXXXXXXX"),b=!0,h("Неправильна кількість цифер. Перевірте введений номер.")),o||(C(j,"Напишіть коментар"),b=!0,h("Будь ласка, залиште коментар")),b||!$)return;const S={name:t,phone:s,comment:o,animalId:$};console.log(S);try{await ue(S),ce(`${S.name}, Ваш запит відправлено успішно. Ми зв'яжемось з Вами найближчим часом`),E()}catch(M){h("Щось пішло не так. Спробуйте ще раз"),console.error("Помилка запиту:",((_=M==null?void 0:M.response)==null?void 0:_.data)||M.message)}}));const m=document.getElementById("phone");m&&(m.addEventListener("focus",()=>{m.value||(m.value="+38(0")}),m.addEventListener("input",()=>{let e=m.value.replace(/\D/g,"");e.startsWith("380")||(e="380"),e=e.slice(0,12);let t="+38(0";e.length>3&&(t+=e.slice(3,5)),e.length>5&&(t+=") "+e.slice(5,8)),e.length>8&&(t+="-"+e.slice(8,10)),e.length>10&&(t+="-"+e.slice(10,12)),m.value=t}));function C(e,t){const n=e.closest(".field");if(!n)return;n.classList.add("is-error");const s=n.querySelector(".field-error");s&&(s.textContent=t)}function k(e){const t=e.closest(".field");if(!t)return;t.classList.remove("is-error");const n=t.querySelector(".field-error");n&&(n.textContent="")}const c={petList:null,backdrop:null,modalWindow:null};document.addEventListener("DOMContentLoaded",()=>{if(c.petList=document.querySelector(".js-pet-list"),c.backdrop=document.querySelector(".js-backdrop"),c.modalWindow=document.querySelector(".js-modal-window"),!c.petList||!c.backdrop||!c.modalWindow)return;function e(n){n.key==="Escape"&&(c.backdrop.classList.remove("is-open"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",e))}c.petList.addEventListener("click",n=>{const s=n.target.closest(".js-more-info");if(!s)return;const o=s.dataset.id,a=p.find(r=>String(r._id)===String(o));a&&(c.modalWindow.innerHTML=Q(a),c.backdrop.classList.add("is-open"),document.body.classList.add("modal-open"))});function t(){!c.backdrop||!c.modalWindow||(c.backdrop.classList.remove("is-open"),document.body.classList.remove("modal-open"),c.modalWindow.innerHTML="")}c.backdrop.addEventListener("click",n=>{(n.target===c.backdrop||n.target.closest(".js-modal-close"))&&t()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&c.backdrop.classList.contains("is-open")&&(t(),document.removeEventListener("keydown",e))}),document.addEventListener("click",n=>{const s=n.target.closest(".js-takehome-btn");if(!s)return;const o=s.dataset.id;o&&(t(),pe(o))})});const me="https://paw-hut.b.goit.study/api/feedbacks";async function ge(){try{const e=await L.get(me);return e.data.feedbacks||e.data||[]}catch{return[]}}const O=document.querySelector(".about-us-slider .mySwiper")||document.querySelector(".mySwiper");O&&new I(O,{modules:[N,X,V],slidesPerView:1,spaceBetween:30,speed:700,keyboard:{enabled:!0},pagination:{el:".about-us-slider .swiper-pagination",clickable:!0},navigation:{nextEl:".about-us-slider .swiper-button-next",prevEl:".about-us-slider .swiper-button-prev"}});const fe="/Paw-paws-little-house/assets/sprite-B4MSrLYj.svg#icon-add";AOS.init({duration:1500,once:!0});new U(".accordion-container",{duration:400,showMultiple:!1,onOpen:e=>{const t=e.querySelector(".faq-icon-use");t.href.baseVal=D},onClose:e=>{const t=e.querySelector(".faq-icon-use");t.href.baseVal=fe}});document.addEventListener("DOMContentLoaded",()=>{var a;const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("#mobilemenu")};e.openMenuBtn&&e.menu&&e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn&&e.menu&&e.closeMenuBtn.addEventListener("click",n);function t(r){r.key==="Escape"&&(e.menu.classList.remove("is-open"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",t))}function n(){const r=e.menu.classList.contains("is-open");e.menu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll"),r?document.removeEventListener("keydown",t):document.addEventListener("keydown",t)}(a=e.menu)==null||a.addEventListener("click",r=>{r.target.tagName==="A"&&(e.menu.classList.remove("is-open"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",t))});const s={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};s.openModalBtn&&s.modal&&s.openModalBtn.addEventListener("click",o),s.closeModalBtn&&s.modal&&s.closeModalBtn.addEventListener("click",o);function o(){s.modal.classList.toggle("is-open")}});const H=document.getElementById("feedbacks-list");async function he(){if(!H)return;const e=await ge();if(!e.length)return;H.innerHTML=e.map(ee).join(""),document.querySelectorAll(".rating-container").forEach(n=>{const s=Number(n.dataset.score)||0;J(n,s,5)}),new I(".reviews-swiper",{modules:[N,X],speed:700,spaceBetween:16,slidesPerView:1,grabCursor:!0,pagination:{el:".reviews-slider .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},navigation:{nextEl:".reviews-slider .swiper-button-next",prevEl:".reviews-slider .swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:2,spaceBetween:28}}})}document.addEventListener("DOMContentLoaded",he);
//# sourceMappingURL=index.js.map
