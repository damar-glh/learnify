const sidebar = document.getElementById('sidebar');
const minimizeBtn = document.getElementById('minimizeBtn');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const dashboardContainer = document.querySelector('.dashboard-container')

minimizeBtn.addEventListener('click', function () {
    sidebar.classList.toggle('lg:w-20');
    sidebar.classList.toggle('w-1/6');
    const spans = sidebar.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('hidden'));
    leftArrow.classList.toggle('hidden');
    rightArrow.classList.toggle('hidden');
    if (dashboardContainer.classList.contains('lg:w-2/3')) {
        dashboardContainer.classList.remove('lg:w-2/3');
        dashboardContainer.classList.add('w-full');
    } else {
        dashboardContainer.classList.remove('lg:w-2/3');
        dashboardContainer.classList.add('w-2/3');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-items');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
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