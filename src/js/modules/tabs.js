function tabs() {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContents = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContents.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i) {
        tabsContents[i].classList.add('show', 'fade');
        tabsContents[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == tabs[i]) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;