const sidebar = document.getElementById('sidebar');
const burgerBtn = document.getElementById('burgerBtn');
const dashboardContainer = document.querySelector('.dashboard-container');
const courseContainer = document.querySelector('.course-container');
const courseBtn = document.getElementById('courseBtn');
const dashboardBtn = document.getElementById('dashboardBtn');

burgerBtn.addEventListener('click', function () {
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('block');
    const spans = sidebar.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('hidden'));
});

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-items');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove the active state from all items
            menuItems.forEach(i => {
                i.classList.remove('text-color-pallet-denary');
                i.classList.add('text-color-pallet-quinary');
            });

            // Add the active state to the clicked item
            this.classList.remove('text-color-pallet-quinary');
            this.classList.add('text-color-pallet-denary');
        });
    });
});

courseBtn.addEventListener('click', function () {
    dashboardContainer.classList.add('hidden');
    courseContainer.classList.remove('hidden');
});

dashboardBtn.addEventListener('click', function () {
    courseContainer.classList.add('hidden');
    dashboardContainer.classList.remove('hidden');
});