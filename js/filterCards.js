window.onload = () => {
    const tabSwitchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tabSwitchers.length; i++) {
        const tabSwitcher = tabSwitchers[i];
        const tabType = tabSwitcher.dataset.tab;

        tabSwitcher.addEventListener('click', () => {
            document.querySelector('.btn.active').classList.remove('active');
            tabSwitcher.classList.add('active');

            invokeCards(tabType);
        });
    }
}

function invokeCards(tabType) {
    const filterCards = (tabType == 'all') ? removeCards() : removeCards() + addCards();

    function removeCards() {
        const allLabels = document.querySelectorAll('.d-none');

        for (let i = 0; i < allLabels.length; i++) {
            const labelVisible = allLabels[i];
            labelVisible.classList.remove('d-none');
        }
    }

    function addCards() {
        const selectedLabels = document.querySelectorAll(`[data-label]:not([data-label="${tabType}"])`);

        for (let i = 0; i < selectedLabels.length; i++) {
            const labelInvisible = selectedLabels[i];
            labelInvisible.classList.add('d-none');
        }
    }
}