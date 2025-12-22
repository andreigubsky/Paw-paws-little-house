import{a as L,i as I,S as N,N as X,P as D,K as V,A as Z}from"./assets/vendor-mOY-8TUG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const z="data:image/svg+xml,%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%202%20L20.32%2010.76%20L30%2012.16%20L23%2019%20L24.64%2028.64%20L16%2024.1%20L7.36%2028.64%20L9%2019%20L2%2012.16%20L11.68%2010.76%20Z'%20fill='%23000000'/%3e%3c/svg%3e",K="data:image/svg+xml,%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cclipPath%20id='half-clip'%3e%3crect%20x='0'%20y='0'%20width='16'%20height='32'%20/%3e%3c/clipPath%3e%3c/defs%3e%3cpath%20d='M16%202%20L20.32%2010.76%20L30%2012.16%20L23%2019%20L24.64%2028.64%20L16%2024.1%20L7.36%2028.64%20L9%2019%20L2%2012.16%20L11.68%2010.76%20Z'%20fill='none'%20stroke='%23000000'%20stroke-width='2'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M16%202%20L20.32%2010.76%20L30%2012.16%20L23%2019%20L24.64%2028.64%20L16%2024.1%20L7.36%2028.64%20L9%2019%20L2%2012.16%20L11.68%2010.76%20Z'%20fill='%23000000'%20clip-path='url(%23half-clip)'%20stroke='none'%20/%3e%3c/svg%3e",F="data:image/svg+xml,%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%202%20L20.32%2010.76%20L30%2012.16%20L23%2019%20L24.64%2028.64%20L16%2024.1%20L7.36%2028.64%20L9%2019%20L2%2012.16%20L11.68%2010.76%20Z'%20fill='none'%20stroke='%23000000'%20stroke-width='2'/%3e%3c/svg%3e",G="/img/sprite.svg#icon-close";function Q(e){return`
    <li class="pet-category-item">
      <button class="pet-category-btn" data-category="${e._id}">
        ${e.name}
      </button>
    </li>
  `}function Y(e){return`
    <li class="pet-category-item ">
      <button class="pet-category-btn" data-category="all">
        Всі
      </button>
    </li>
  `+e.map(Q).join("")}function J(e){const t=e.categories.map(n=>`<li class="pet-card__group">${n.name}</li>`).join("");return`
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
  `}function w(e){return e.map(J).join("")}function ee(e){return`
    <div class="pet-modal" data-aos="zoom-in">
      <button
        type="button"
        class="pet-modal-close js-modal-close"
        aria-label="Close pet modal"
      >
        <svg width="24" height="24">
            <use href="${G}" width="24" height="24"></use>
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
  `}function te(e,t,n=5){e.innerHTML="";const s=Math.round(t*2)/2;for(let o=1;o<=n;o++){const i=document.createElement("img");i.className="icon-star",i.alt="star rating",s>=o?i.src=z:s>=o-.5?i.src=K:i.src=F,e.appendChild(i)}}function ne(e){const t=e.rate,n=e.description,s=e.author;return`
    <div class="swiper-slide review-card">
      <div class="review-rating">
          <div class="rating-container" data-score="${t}"></div>
      </div>
      <p class="review-text">${n}</p>
      <div class="review-author-wrap">
        <h3 class="review-author">${s}</h3>
      </div>
    </div>
  `}const se="https://paw-hut.b.goit.study/api/animals",oe={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value",mode:"no-cors"}};async function P(e,t,n){try{const s=`${se}/?categoryId=${e}&page=${t}&limit=${n}`,o=await L(`${s}`,oe);if(!o.data)throw new Error(`HTTP error! Status: ${o.status}`);return o.data}catch(s){throw console.error(s),s}}//!================================================
async function B(e=1,t=8){const o=`https://paw-hut.b.goit.study/api/animals?page=${e}&limit=${t}`;return(await L.get(o)).data}const ae="https://paw-hut.b.goit.study/api/categories",ie={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value",mode:"no-cors"}};async function re(){try{const e=await L(ae,ie);if(!e.data)throw new Error(`HTTP error! Status: ${e.status}`);return e.data}catch(e){throw console.error(e),e}}function ce(e,t,n=1){if(t<=1)return[1];const s=[1],o=Math.max(2,e-n),i=Math.min(t-1,e+n);o>2&&s.push("...");for(let c=o;c<=i;c++)s.push(c);return i<t-1&&s.push("..."),s.push(t),s}function q({container:e,current:t,total:n}){if(n<=1){e.innerHTML="";return}if(n===2){e.innerHTML=`
      <button type="button" data-page="1" class="${t===1?"is-active":""}">1</button>
      <button type="button" data-page="2" class="${t===2?"is-active":""}">2</button>
    `;return}const s=ce(t,n,1);e.innerHTML=`
    <button type="button" data-nav="prev" ${t===1?"disabled":""}>←</button>

    ${s.map(o=>o==="..."?'<span class="dots">…</span>':`<button type="button" data-page="${o}" class="${o===t?"is-active":""}">${o}</button>`).join("")}

    <button type="button" data-nav="next" ${t===n?"disabled":""}>→</button>
  `}function le(){return window.innerWidth>=1440?82:74}function R(e){if(!e)return;const t=e.getBoundingClientRect().top+window.pageYOffset-le();window.scrollTo({top:t,behavior:"smooth"})}function h(e){I.show({message:e,position:"topRight",backgroundColor:"rgb(255, 215, 163)"})}function de(e){I.show({message:e,position:"topRight",backgroundColor:"rgba(164, 255, 163, 1)"})}const p=[],a={showMoreBtn:document.querySelector(".js-pet-show-more-btn"),petList:document.querySelector(".js-pet-list"),petCategories:document.querySelector(".js-pet-categories"),showDetailsBtn:document.querySelector(".js-more-info"),pagination:document.querySelector(".js-pet-pagination")};a.showMoreBtn.disabled=!0;function y(){return window.innerWidth>=1440?9:8}function j(){return window.innerWidth<768}let r=1,l=y(),g="all",f=1;document.addEventListener("DOMContentLoaded",async()=>{const e=await re();l=y(),a.petCategories.innerHTML=Y(e.sort().reverse()),a.petCategories.querySelector('[data-category="all"]').closest(".pet-category-item").classList.add("is-active")});document.addEventListener("DOMContentLoaded",async()=>{try{const e=await B(r,l);p.length=0,p.push(...e.animals),a.petList.innerHTML=w(e.animals),a.showMoreBtn.disabled=e.animals.length<l,a.petList.innerHTML=w(e.animals),f=Math.ceil(e.totalItems/e.limit),j()?(a.showMoreBtn.disabled=e.animals.length<l,a.pagination.innerHTML=""):(a.showMoreBtn.classList.add("is-hidden"),a.showMoreBtn.disabled=!0,q({container:a.pagination,current:r,total:f}))}catch{h("Не вдалося завантажити тварин. Спробуйте ще раз."),console.error(err)}});a.petCategories.addEventListener("click",async e=>{if(e.target.nodeName!=="BUTTON")return;a.petCategories.querySelectorAll(".pet-category-item").forEach(n=>n.classList.remove("is-active")),e.target.closest(".pet-category-item").classList.add("is-active"),g=e.target.dataset.category,r=1,l=y(),a.showMoreBtn.disabled=!1;let t;g==="all"?t=await B(r,l):t=await P(g,r,l),p.length=0,p.push(...t.animals),a.petList.innerHTML=w(t.animals),f=Math.ceil(t.totalItems/t.limit),j()?(a.showMoreBtn.classList.remove("is-hidden"),a.showMoreBtn.disabled=t.animals.length<l,a.pagination.innerHTML=""):(a.showMoreBtn.classList.add("is-hidden"),a.showMoreBtn.disabled=!0,q({container:a.pagination,current:r,total:f}),R(a.petCategories))});a.showMoreBtn.addEventListener("click",async()=>{if(!j())return;r+=1,l=y();let e;g==="all"?e=await B(r,l):e=await P(g,r,l),p.push(...e.animals),a.petList.insertAdjacentHTML("beforeend",w(e.animals)),e.animals.length<l&&(a.showMoreBtn.disabled=!0,h("Це всі тваринки в цій категорії")),ue()});function ue(){const e=document.querySelector(".js-pet-list div.pet-card__container");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t,behavior:"smooth"})}a.pagination.addEventListener("click",async e=>{const t=e.target.closest("button");if(!t||t.hasAttribute("disabled"))return;let n=r;if(t.dataset.page&&(n=Number(t.dataset.page)),t.dataset.nav==="prev"&&(n=r-1),t.dataset.nav==="next"&&(n=r+1),!Number.isFinite(n)||n<1||n>f||n===r)return;r=n,l=y();const s=g==="all"?await B(r,l):await P(g,r,l);p.length=0,p.push(...s.animals),a.petList.innerHTML=w(s.animals),f=Math.ceil(s.totalItems/s.limit),q({container:a.pagination,current:r,total:f}),R(a.petCategories)});const pe="https://paw-hut.b.goit.study/api/orders";async function me(e){var t;try{return(await L.post(pe,e,{headers:{Accept:"application/json","Content-Type":"application/json","X-Custom-Header":"custom value"}})).data}catch(n){throw console.error("Помилка запиту:",((t=n.response)==null?void 0:t.data)||n.message),n}}const v=document.querySelector(".js-modal-order-overlay"),H=document.querySelector(".modal-close-btn"),u=document.querySelector(".modal-order-form");let k=null;function W(e){e.key==="Escape"&&$()}function ge(e){k=e,v.classList.add("is-open"),document.body.classList.add("modal-open"),document.addEventListener("keydown",W)}function $(){v.classList.remove("is-open"),document.body.classList.remove("modal-open"),u.reset(),k=null,document.removeEventListener("keydown",W)}v&&H&&u&&(H.addEventListener("click",$),u.addEventListener("input",e=>{e.target.closest(".field")&&E(e.target)}),v.addEventListener("click",e=>{e.target===v&&$()}),u.addEventListener("submit",async e=>{var x;e.preventDefault();const t=u.elements["user-name"].value.trim(),s=u.elements.phone.value.replace(/\D/g,""),o=u.elements["user-comment"].value.trim(),i=u.elements["user-name"],c=u.elements.phone,_=u.elements["user-comment"];E(i),E(c),E(_);let b=!1;if(t||(C(i,"Введіть імʼя"),b=!0,h("Введіть імʼя")),/^\d{12}$/.test(s)||(C(c,"Формат: 380XXXXXXXXX"),b=!0,h("Неправильна кількість цифер. Перевірте введений номер.")),o||(C(_,"Напишіть коментар"),b=!0,h("Будь ласка, залиште коментар")),b||!k)return;const S={name:t,phone:s,comment:o,animalId:k};console.log(S);try{await me(S),de(`${S.name}, Ваш запит відправлено успішно. Ми зв'яжемось з Вами найближчим часом`),$()}catch(M){h("Щось пішло не так. Спробуйте ще раз"),console.error("Помилка запиту:",((x=M==null?void 0:M.response)==null?void 0:x.data)||M.message)}}));const m=document.getElementById("phone");m&&(m.addEventListener("focus",()=>{m.value||(m.value="+38(0")}),m.addEventListener("input",()=>{let e=m.value.replace(/\D/g,"");e.startsWith("380")||(e="380"),e=e.slice(0,12);let t="+38(0";e.length>3&&(t+=e.slice(3,5)),e.length>5&&(t+=") "+e.slice(5,8)),e.length>8&&(t+="-"+e.slice(8,10)),e.length>10&&(t+="-"+e.slice(10,12)),m.value=t}));function C(e,t){const n=e.closest(".field");if(!n)return;n.classList.add("is-error");const s=n.querySelector(".field-error");s&&(s.textContent=t)}function E(e){const t=e.closest(".field");if(!t)return;t.classList.remove("is-error");const n=t.querySelector(".field-error");n&&(n.textContent="")}const d={petList:null,backdrop:null,modalWindow:null};function U(e){e.key==="Escape"&&T()}function fe(e){d.modalWindow.innerHTML=ee(e),d.backdrop.classList.add("is-open"),document.body.classList.add("modal-open"),document.addEventListener("keydown",U)}function T(){d.backdrop.classList.remove("is-open"),document.body.classList.remove("modal-open"),d.modalWindow.innerHTML="",document.removeEventListener("keydown",U)}document.addEventListener("DOMContentLoaded",()=>{d.petList=document.querySelector(".js-pet-list"),d.backdrop=document.querySelector(".js-backdrop"),d.modalWindow=document.querySelector(".js-modal-window"),!(!d.petList||!d.backdrop||!d.modalWindow)&&(d.petList.addEventListener("click",e=>{const t=e.target.closest(".js-more-info");if(!t)return;const n=t.dataset.id,s=p.find(o=>String(o._id)===String(n));s&&fe(s)}),d.backdrop.addEventListener("click",e=>{(e.target===d.backdrop||e.target.closest(".js-modal-close"))&&T()}),document.addEventListener("click",e=>{const t=e.target.closest(".js-takehome-btn");if(!t)return;const n=t.dataset.id;n&&(T(),ge(n))}))});const he="https://paw-hut.b.goit.study/api/feedbacks";async function ve(){try{const e=await L.get(he);return e.data.feedbacks||e.data||[]}catch{return[]}}const O=document.querySelector(".about-us-slider .mySwiper")||document.querySelector(".mySwiper");O&&new N(O,{modules:[X,D,V],slidesPerView:1,spaceBetween:30,speed:700,keyboard:{enabled:!0},pagination:{el:".about-us-slider .swiper-pagination",clickable:!0},navigation:{nextEl:".about-us-slider .swiper-button-next",prevEl:".about-us-slider .swiper-button-prev"}});const we="/img/sprite.svg#icon-add",Le="/img/sprite.svg#icon-close";new Z(".accordion-container",{duration:400,showMultiple:!1,onOpen:e=>{const t=e.querySelector(".faq-icon-use");t.href.baseVal=Le},onClose:e=>{const t=e.querySelector(".faq-icon-use");t.href.baseVal=we}});document.addEventListener("DOMContentLoaded",()=>{var i;const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("#mobilemenu")};e.openMenuBtn&&e.menu&&e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn&&e.menu&&e.closeMenuBtn.addEventListener("click",n);function t(c){c.key==="Escape"&&(e.menu.classList.remove("is-open"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",t))}function n(){const c=e.menu.classList.contains("is-open");e.menu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll"),c?document.removeEventListener("keydown",t):document.addEventListener("keydown",t)}(i=e.menu)==null||i.addEventListener("click",c=>{c.target.tagName==="A"&&(e.menu.classList.remove("is-open"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",t))});const s={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};s.openModalBtn&&s.modal&&s.openModalBtn.addEventListener("click",o),s.closeModalBtn&&s.modal&&s.closeModalBtn.addEventListener("click",o);function o(){s.modal.classList.toggle("is-open")}});const A=document.getElementById("feedbacks-list");async function ye(){if(!A)return;const e=await ve();if(!e.length)return;A.innerHTML=e.map(ne).join(""),document.querySelectorAll(".rating-container").forEach(n=>{const s=Number(n.dataset.score)||0;te(n,s,5)}),new N(".reviews-swiper",{modules:[X,D],speed:700,spaceBetween:16,slidesPerView:1,grabCursor:!0,pagination:{el:".reviews-slider .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},navigation:{nextEl:".reviews-slider .swiper-button-next",prevEl:".reviews-slider .swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:2,spaceBetween:28}}})}document.addEventListener("DOMContentLoaded",ye);
//# sourceMappingURL=index.js.map
