const Menu = [
  {
    heading: "Main Navigation",
    translate: "sidebar.heading.HEADER"
  },
  {
    name: "Dashboard",
    icon: "icon-speedometer",
    translate: "sidebar.nav.DASHBOARD",
    label: { value: 3, color: "success" },
    submenu: [
      {
        name: "Dashboard v1",
        path: "/dashboardv1"
      },
      {
        name: "Dashboard v2",
        path: "/dashboardv2"
      },
      {
        name: "Dashboard v3",
        path: "/dashboardv3"
      }
    ]
  },

  {
    name: "Forms",
    icon: "icon-note",
    translate: "sidebar.nav.form.FORM",
    submenu: [
      {
        name: "Macula",
        path: "/macula-display"
      },
      {
        name: "Macula Table",
        path: "/macula-table"
      },
      {
        name: "Macula From2",
        path: "/macula-form2"
      },
      {
        name: "Macula Resgister",
        path: "/mregister"
      }
    ]
  },

  {
    name: "Form",
    path: "/macula-form"
  }
];

export default Menu;
