// Modal contact

(() => {
  const refs = {
    openModalBtn: document.querySelector('[contact-modal-open]'),
    closeModalBtn: document.querySelector('[contact-modal-close]'),
    openStoreModalBtn: document.querySelector('[store-contact-modal-open]'),
    modal: document.querySelector('[contact-data-modal]')
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openStoreModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
