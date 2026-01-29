export const updateYear = (element) => {
    if (element == null) return
    
    const nowYear = new Date().getFullYear();
    const elementYear = parseInt(element.textContent);

    if (Number.isNaN(elementYear) || elementYear !== nowYear) {
        element.textContent = nowYear;
    }
}