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
    if (dashboardContainer.classList.contains('w-2/3')) {
        dashboardContainer.classList.remove('w-2/3');
        dashboardContainer.classList.add('w-10/12');
    } else {
        dashboardContainer.classList.remove('w-10/12');
        dashboardContainer.classList.add('w-2/3');
    }
});