import{S as l,N as a}from"./assets/vendor-13b3b862.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".menu-tab"),o=document.querySelector(".menu"),n=document.querySelector(".menu-mob-btn"),i=document.querySelector(".close_menu_btn"),e=document.querySelector(".mob-menu"),t=document.querySelectorAll(".mob-menu-anchor");s&&o&&(s.addEventListener("click",()=>{o.classList.toggle("is-hidden")}),o.querySelectorAll("a").forEach(r=>{r.addEventListener("click",()=>{o.classList.add("is-hidden")})})),n&&e&&n.addEventListener("click",()=>{e.classList.remove("is-hidden"),document.documentElement.classList.add("is-modal-open")}),i&&e&&i.addEventListener("click",()=>{e.classList.add("is-hidden"),document.documentElement.classList.remove("is-modal-open")}),t&&t.forEach(r=>{r.addEventListener("click",()=>{e.classList.add("is-hidden"),document.documentElement.classList.remove("is-modal-open")})})});function u({swiperContainerClass:s,navigationButtons:{prevEl:o,nextEl:n},spaceBetween:i=10,slidesPerView:e={mobile:1,tablet:2,desktop:4},...t}){return new l(`.${s}`,{keyboard:{enabled:!0,onlyInViewport:!0},modules:[a],direction:"horizontal",speed:500,navigation:{nextEl:`.${n}`,prevEl:`.${o}`},spaceBetween:i,slidesPerView:e.mobile,breakpoints:{768:{slidesPerView:e.tablet,spaceBetween:i},1440:{slidesPerView:e.desktop,spaceBetween:i}},...t})}document.addEventListener("DOMContentLoaded",()=>{const s=u({swiperContainerClass:"swiper-reviews",navigationButtons:{prevEl:"button-prev",nextEl:"button-next"},slidesPerView:{mobile:1,tablet:2,desktop:4},spaceBetween:10,loop:!1,slidesPerGroup:1});s.on("init",()=>{o(s)}),s.on("slideChange",()=>{o(s)});function o(n){n.isEnd?n.navigation.nextEl.classList.add("disabled"):n.navigation.nextEl.classList.remove("disabled"),n.isBeginning?n.navigation.prevEl.classList.add("disabled"):n.navigation.prevEl.classList.remove("disabled")}});const d=document.querySelector(".btn-scroll-to-top"),c=document.querySelector(".trigger-scroll-top-section");d.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const m={rootMargin:"0px",threshold:0},f=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting?d.classList.add("is-hidden"):d.classList.remove("is-hidden")})},m);c&&f.observe(c);
//# sourceMappingURL=commonHelpers.js.map