(()=>{const e={openModalBtn:document.querySelector("[contact-modal-open]"),closeModalBtn:document.querySelector("[contact-modal-close]"),modal:document.querySelector("[contact-data-modal]"),thankYouModal:document.querySelector("[thank-data-modal]"),contactForm:document.querySelector("#contact-form")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.contactForm.addEventListener("submit",(function(o){o.preventDefault();(function(){const e=document.getElementById("user-name"),t=document.getElementById("email");let o=!0;e.checkValidity()?e.classList.remove("is-invalid"):(o=!1,e.classList.add("is-invalid"));t.checkValidity()?t.classList.remove("is-invalid"):(o=!1,t.classList.add("is-invalid"));return o})()&&(t(),e.thankYouModal.classList.remove("is-hidden"))}))})(),(()=>{const e={openModalBtn:document.querySelector("[follow-modal-open]"),closeModalBtn:document.querySelector("[follow-modal-close]"),modal:document.querySelector("[follow-data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("[thank-modal-open]"),closeModalBtn:document.querySelector("[thank-modal-close]"),modal:document.querySelector("[thank-data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=index.df4046f8.js.map
