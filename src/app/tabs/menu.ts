// implement interface for meu list which contains name,icon,childsubmenu
//
export interface menu_list {
    name?: string;
    icon?: string;
    route?: string;
    child?: menu_list[];
}
//#implemenet data for history, complines,Referral,about us,settings,help& support, logout
export const menu: menu_list[] = [
    {
        name: "Profile",
        icon: "person",
        route: "tabs/Profile",
    },
    {
        name: "History",
        icon: "home",
        route: "tabs/History",
    },
    {
        name: "Complain",
        icon: "compline",
        route: "tabs/Compline",
    },
    {
        name: "Referral",
        icon: "referral",
        route: "tabs/Referral",
    },
    {
        name: "About US",
        icon: "about",
        route: "tabs/About",
    },
    {
        name: "Settings",
        icon: "settings",
        route: "tabs/Settings",
    },
    
    {
        name: "Help and Support",
        icon: "help",
        route: "tabs/Help",
    },
    {
        name: "Logout",
        icon: "logout",
        route: "tabs/Logout",
    },
]


