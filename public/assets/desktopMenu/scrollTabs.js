const desktopMenuTabs = document.querySelector("#desktopMenuTabs");
const tabsList = Array.from(desktopMenuTabs.querySelectorAll("button.btn-header"));
const tabsPrev = desktopMenuTabs.querySelector("#tabsPrev");
const tabsNext = desktopMenuTabs.querySelector("#tabsNext");
const reserveWidth = 150;
let copyActiveTabIntex;
let displayTabs;

export const scrollTabsRender = (containerWidth) => {
    if (!tabsList.length) return;
    tabsList.forEach(tab => tab.classList.remove("d-none"));
    tabsNext.classList.add('d-none');
    tabsPrev.classList.add('d-none');

    const tabsWidths = tabsList.map(el => parseFloat(getComputedStyle(el).width));

    const rawGap = getComputedStyle(desktopMenuTabs).gap;
    const tabsGap = parseFloat(rawGap) || 0;

    const totalWidth = tabsWidths.reduce((sum, w) => sum + w, 0) + tabsGap * (tabsList.length - 1);

    if (totalWidth + reserveWidth < containerWidth) {
        return;
    }

    const activeTabIndex = tabsList.findIndex(el => el.classList.contains("active"));
    copyActiveTabIntex = activeTabIndex;
    if (activeTabIndex === -1) return;
    tabsList[activeTabIndex].classList.remove("d-none");

    displayTabs = (activeTabIndex) => {
        let contentWidth = reserveWidth;
        contentWidth += tabsWidths[activeTabIndex];
        tabsPrev.classList.add('d-none');
        tabsNext.classList.add('d-none');
        for (let i = 1; i < tabsList.length; i++) {
            const leftIndex = activeTabIndex - i;
            const rightIndex = activeTabIndex + i;

            if (leftIndex >= 0) {
                if (containerWidth >= contentWidth + tabsWidths[leftIndex] + tabsGap) {
                    contentWidth += tabsWidths[leftIndex] + tabsGap;
                    tabsList[leftIndex].classList.remove("d-none");
                } else {
                    tabsList[leftIndex].classList.add("d-none");
                    if (tabsPrev.classList.contains('d-none')) tabsPrev.classList.remove('d-none');
                }
            }

            if (rightIndex < tabsList.length) {
                if (containerWidth >= contentWidth + tabsWidths[rightIndex] + tabsGap) {
                    contentWidth += tabsWidths[rightIndex] + tabsGap;
                    tabsList[rightIndex].classList.remove("d-none");
                } else {
                    tabsList[rightIndex].classList.add("d-none");
                    if (tabsNext.classList.contains('d-none')) tabsNext.classList.remove('d-none');
                }
            }
        }
    }
    displayTabs(activeTabIndex);
};

tabsNext.addEventListener('click', () => {
    if (copyActiveTabIntex <= 1) {
        copyActiveTabIntex += 3;
    } else {
        copyActiveTabIntex += 1;
    }
    displayTabs(copyActiveTabIntex);
});


tabsPrev.addEventListener('click', () => {
    if (copyActiveTabIntex >= tabsList.length - 2) {
        copyActiveTabIntex -= 3;
    } else {
        copyActiveTabIntex -= 1;
    }
    displayTabs(copyActiveTabIntex);
});