interface NavbarItem {
  url: string;
  label: string;
}

export const navbarMenu: NavbarItem[] = [
  { url: "/", label: "Home" },
  { url: "/about", label: "About" },
  { url: "/works", label: "Works" },
  { url: "/contact", label: "Contact" },
];
