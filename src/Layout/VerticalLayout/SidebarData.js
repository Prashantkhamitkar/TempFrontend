const SidebarData = [
  {
    label: "Menu",
    isMainMenu: true,
  },
  {
    label: "Dashboard",
    icon: "mdi mdi-home-variant-outline",
    url: "/dashboard",
    issubMenubadge: true,
    bgcolor: "bg-primary",
    badgeValue: "3",
  },
  {
    label: "Customers",
    icon: "mdi mdi-account-group-outline",
    url: "/mspcustomer",
   
    issubMenubadge: true,
    bgcolor: "bg-primary",
    badgeValue: "130",
  },
  {
    label: "Helpdesk",
    icon: "mdi mdi-handshake",
    subItem: [
      { sublabel: "Tickets", link: "/ticket" },
      {
        sublabel: "Technicians",
        link: "/technician",
      },
    ],
  },
];
export default SidebarData;