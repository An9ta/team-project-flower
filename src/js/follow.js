// Modal follow

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-follow-modal-open]'),
    closeModalBtn: document.querySelector('[data-follow-modal-close]'),
    modal: document.querySelector('[data-follow-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
