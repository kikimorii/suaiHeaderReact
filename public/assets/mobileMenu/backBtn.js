const backBtn = document.querySelector('#backBtn');
const headerLogo = document.querySelector('#headerLogo');
const headerText = document.querySelector('.header_mobile-text');
const menuMobileSublists = document.querySelectorAll('.mobile-menu_sublist');

if (backBtn) {
    backBtn.addEventListener("click", function () {
        const activeLists = document.querySelectorAll(".mobile-menu_list_inner.active");

        if (activeLists.length > 0) {
            const lastActiveList = activeLists[activeLists.length - 1];
            lastActiveList.classList.remove("active");
        }

        if (document.querySelectorAll(".mobile-menu_list_inner.active").length === 0) {
            headerText.textContent = '';
            backBtn.classList.add("d-none");
            headerLogo.classList.remove("d-none");
            menuMobileSublists.forEach(list => list.classList.remove("d-none"));
        }
    });
}