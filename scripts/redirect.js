const routes = {
  "/register": "https://docs.google.com/forms/d/e/1FAIpQLSfzXgtHzSsLtYlgnOLDQG4kZvqEnZRIHKf_uHD7VchQyWrmiQ/viewform?usp=sf_link",
  "/resources": "https://github.com/ECX-Unilag/Learning-path",
  "/slack": "https://join.slack.com/t/ecxunilag/shared_invite/zt-1116iknia-s4iVcOpd2V9g3VKIoIV6lw",
  "setup-guide": "https://docs.google.com/document/d/1ICTviuLTaWu3RAIikdzkonuhgsJ9p40NtgwiqUi_Zxg/edit?usp=drivesdk"
};

const path = "/" + location.pathname.split("/").pop().toLowerCase();

if (routes[path]) {
  location.replace(routes[path]);
}