const sidebar = document.getElementById('sidebar');
const burgerBtn = document.getElementById('burgerBtn');
const dashboardContainer = document.querySelector('.dashboard-container');
const courseContainer = document.querySelector('.course-container');
const profileContainer = document.querySelector('.profile-container')
const closeBtn = document.getElementById('closeBtn');
const courseBtn = document.getElementById('courseBtn');
const dashboardBtn = document.getElementById('dashboardBtn');
const overlay = document.getElementById('overlay');

burgerBtn.addEventListener('click', function () {
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('block');
    if (overlay.classList.contains('hidden')) {
        overlay.classList.remove('hidden');
    } else {
        overlay.classList.add('hidden');
    }
});

closeBtn.addEventListener('click', function () {
    sidebar.classList.add('hidden');
    sidebar.classList.remove('block');
    overlay.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-items');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuItems.forEach(i => {
                i.classList.remove('text-color-pallet-denary');
                i.classList.add('text-color-pallet-quinary');
            });
            this.classList.remove('text-color-pallet-quinary');
            this.classList.add('text-color-pallet-denary');
        });
    });
});

courseBtn.addEventListener('click', function () {
    dashboardContainer.classList.add('hidden');
    profileContainer.classList.add('lg:hidden')
    courseContainer.classList.remove('hidden');
});

dashboardBtn.addEventListener('click', function () {
    courseContainer.classList.add('hidden');
    dashboardContainer.classList.remove('hidden');
    profileContainer.classList.remove('lg:hidden')
});