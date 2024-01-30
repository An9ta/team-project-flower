// Modal thank

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-thank-modal-open]'),
    closeModalBtn: document.querySelector('[data-thank-modal-close]'),
    modal: document.querySelector('[data-thank-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
