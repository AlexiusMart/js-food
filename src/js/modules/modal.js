
function openModal(modalSelector) {
    modalSelector.style.display = 'block';
    document.body.style.overflow = 'hidden';
    clearTimeout(modalTimerId);
}

function closeModal(modalSelector) {
    modalSelector.style.display = 'none';
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector) {
    const modalOpen = document.querySelectorAll(triggerSelector),
          modalWindow = document.querySelector(modalSelector);

    modalOpen.forEach(item => {
        item.addEventListener('click', () => openModal(modalSelector));
    });

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.style.display === 'block') {
            closeModal(modalSelector);
        }
    });

    const modalTimerId = setTimeout(openModal, 50000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    
}

export default modal;
export {openModal, closeModal};