const routes = {
    "/register": "https://docs.google.com/forms/d/e/1FAIpQLSfzXgtHzSsLtYlgnOLDQG4kZvqEnZRIHKf_uHD7VchQyWrmiQ/viewform?usp=sf_link",
    "/resources": "https://github.com/ECX-Unilag/Learning-path",
    "/slack": "https://join.slack.com/t/ecxunilag/shared_invite/zt-1116iknia-s4iVcOpd2V9g3VKIoIV6lw",
    "/setup-guide": "https://docs.google.com/document/d/1-MWc8_CX85QhyPplzGXrygCZLnl1qc8Ppr1RxHv25nM/edit?usp=drivesdk",
    "/meeting-links": "https://docs.google.com/document/d/1_tIs1gcewE-OYRJ_Iw9X1p0kCyHkh1YnUU6ira5Kn0E/edit?usp=sharing",
};

let path = ("/" + location.pathname.split("/").pop()).toLowerCase();
if (routes[path]) {
    location.replace(routes[path]);
} else {
    console.log(path);
}