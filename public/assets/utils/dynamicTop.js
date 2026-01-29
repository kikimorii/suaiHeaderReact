const HEIGHT_SPACE = 400; // дополнительно, чтоб точно ничего не вылезло
const RESIZE_DELAY = 200; // задержка через которую должен срабатывать resize

export const dynamicTop = (element) => {
    if (element == null) return;

    let elementHeight = parseInt(getComputedStyle(element).height);
    element.style.top = `-${elementHeight + HEIGHT_SPACE}px`;

    let resizeTimer;

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        
        resizeTimer = setTimeout(() => {
            elementHeight = parseInt(getComputedStyle(element).height);
            element.style.top = `-${elementHeight + HEIGHT_SPACE}px`;
        }, RESIZE_DELAY);
    });
}