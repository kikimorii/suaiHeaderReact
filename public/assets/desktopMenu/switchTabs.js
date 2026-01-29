document.querySelectorAll('.btn-header').forEach(link => {
    link.addEventListener('click', function () {

        document.querySelectorAll('.btn-header').forEach(link => {
            link.classList.remove('active');
        });

        document.querySelectorAll('.header-menu_list.wrapper').forEach(menu => {
            menu.classList.remove('active');
        });

        this.classList.add('active');

        const linkId = this.id.split('-')[1];
        document.getElementById(`desktopMenuNode-${linkId}`).classList.add('active');
    });
});