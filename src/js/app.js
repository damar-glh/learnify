const sidebar = document.getElementById('sidebar');
const minimizeBtn = document.getElementById('minimizeBtn');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const dashboardContainer = document.querySelector('.dashboard-container');
const courseContainer = document.querySelector('.course-container');
const profileContainer = document.querySelector('.profile-container');
const courseBtn = document.getElementById('courseBtn');
const dashboardBtn = document.getElementById('dashboardBtn');

minimizeBtn.addEventListener('click', function () {
    sidebar.classList.toggle('lg:w-20');
    sidebar.classList.toggle('w-1/6');
    const spans = sidebar.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('hidden'));
    leftArrow.classList.toggle('hidden');
    rightArrow.classList.toggle('hidden');
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