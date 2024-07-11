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
    isHasArrow: true,
  },
  {
    label: "Helpdesk",
    icon: "mdi mdi-handshake",
    subItem: [
      {
        sublabel: "Tickets",
        link: "/ticket",
      },
      {
        sublabel: "Technicians",
        link: "/technician",
      },
      {
        sublabel: "Backup",
        link: "/backup",
      },
      {
        sublabel: "Reports",
        link: "/#",
      },
      {
        sublabel: "MSP360 Backups",
        link: "/msp-backup",
      },
      {
        sublabel: "Weekend Tasks",
        link: "/weekend-tasks",
      },
    ],
  },
  {
    label: "HR",
    icon: "mdi mdi-account-supervisor-outline",
    subItem: [
      {
        sublabel: "Shifts Management",
        link: "/#",
        subMenu: [
          { title: "My Shifts", link: "/my-shifts" },
          { title: "Pick Shifts", link: "/pick-shifts" },
          { title: "Shift Transfer", link: "/mspcustomer" },
        ],
      },
      { sublabel: "Holiday List", link: "/#" },
      { sublabel: "My Leaves", link: "/#" },
      {
        sublabel: "Attendance Dashboard",
        link: "/#",
      },
    ],
  },
  {
    label: "Contract",
    icon: "mdi mdi-file-document-edit-outline",
    subItem: [
      { sublabel: "Contract Calendar View", link: "/#" },
      {
        sublabel: "New Contract",
        link: "/#",
      },
      {
        sublabel: "Contract List",
        link: "/#",
      },
    ],
  },
  {
    label: "Billing",
    icon: "mdi mdi-credit-card-marker",
    subItem: [
      { sublabel: "AT&T", link: "/#" },
      { sublabel: "Stripe Payment Dashboard", link: "/#" },
      { sublabel: "Manual Payment Processing Rep...", link: "/#" },
      {
        sublabel: "SaaS Billing",
        link: "/#",
        subMenu: [
          { title: "SaaS Billing Dashboard", link: "/#" },
          { title: "SaaS (Ingram Cloud)", link: "/#" },
          { title: "SaaS Payments", link: "/#" },
          { title: "SaaS Payment History", link: "/#" },
        ],
      },
      { sublabel: "Stripe Customer Mapping", link: "/#" },
      { sublabel: "Backblaze Charges", link: "/#" },
    ],
  },
  {
    label: "Knowledge Base",
    icon: "mdi mdi-head-lightbulb",
    isHasArrow: true,
    url: "/#",
  },
  {
    label: "Timesheet",
    icon: "mdi mdi-clock-time-four-outline",
    isHasArrow: true,
    url: "/#",
  },
];
export default SidebarData;
