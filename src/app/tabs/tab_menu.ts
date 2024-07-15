// implement interface for meu list which contains name,icon,childsubmenu
//
export interface tab_list {
    name?: string;
    icon?: string;
    tab?: string;
}
//#implemenet data for history, complines,Referral,about us,settings,help& support, logout
export const tab: tab_list[] = [
    {
        name: "Home",
        icon: "home",
        tab: "home",
    },
    {
        name: "Favorite",
        icon: "heart",
        tab: "favorite",
    },
    {
        name: "History",
        icon: "history",
        tab: "history",
    },
    {
        name: "Profile",
        icon: "person",
        tab: "profile",
    },
]


