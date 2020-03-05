/*!

* Coded by Gregory Moncayo

=========================================================

* The above is copyright by ToUpper LLC.

*/
import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";
var routes = [
  {
    path: "/overview",
    name: "Overview",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/android",
    name: "Android Apps",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/iPhone",
    name: "iPhone Apps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/websites",
    name: "Websites",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/contact",
    name: "Contact",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  }
];
export default routes;
