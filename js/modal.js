(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    modalBody: document.querySelector('[data-modal-body]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('scroll-lock');
    refs.modal.classList.toggle('is-hidden');
    refs.modalBody.classList.toggle('is-hidden');
  }
})();
