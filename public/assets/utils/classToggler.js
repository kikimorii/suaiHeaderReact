export const classToggler = (elements, className) => {
    if (Array.isArray(elements)) {
        elements.forEach((element) => element.classList.toggle(className));
    } else {
        elements.classList.toggle(className);
    }
}