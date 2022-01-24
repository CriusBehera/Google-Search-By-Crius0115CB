function google_search_button_open() {
    var search_google_url = "https://www.google.com/search?q=";
    var get_result = document .getElementById("search_google").value;
    var search = search_google_url + get_result;

    window.open(search,"_Blank");
    console.log(get_result)
}