const sidebar = document.querySelectorAll('.sidebar')[0]
const overlay = document.querySelectorAll('.overlay')[0]

function toggleSidebar() {
    sidebar.classList.toggle('sidebar-opened')

    if(sidebar.classList.contains('sidebar-opened')) {
        overlay.style.display = 'block'
    } else {
        overlay.style.display = 'none'
    }
}

function hideSidebar() {
    if(sidebar.classList.contains('sidebar-opened')) {
        sidebar.classList.remove('sidebar-opened')
        overlay.style.display = 'none'
    }
}