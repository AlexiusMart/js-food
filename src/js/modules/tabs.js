function tabs(tabsSelector, tabsContent, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContents = document.querySelectorAll(tabsContent),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabsContents.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i) {
        tabsContents[i].classList.add('show', 'fade');
        tabsContents[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
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