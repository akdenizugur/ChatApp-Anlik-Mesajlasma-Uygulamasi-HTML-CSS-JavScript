const SearchBar = document.querySelector(".search input"),
    searchIcon = document.querySelector(".search button"),
    usersList = document.querySelector(".users-list");


searchIcon.onclick = () => {
    SearchBar.classList.toggle("show");
    searchIcon.classList.toggle("active");
    SearchBar.focus();
    if (SearchBar.classList.contains("active")) {
        SearchBar.value = "";
        SearchBar.classList.remove("active");
    }
}