import { IFooterMenuItem } from "@/types/utils/footer-menu-item";

export const footerMenuService: IFooterMenuItem[] = [
  { id: 1, name: "Services", isActive: true },
  {
    id: 2,
    name: "Email Marketing",
    isActive: false,
  },
  {
    id: 3,
    name: "Campaigns",
    isActive: false,
  },
  {
    id: 4,
    name: "Branding",
    isActive: false,
  },
  {
    id: 5,
    name: "Offline",
    isActive: false,
  },
];

export const footerMenuAbout: IFooterMenuItem[] = [
  {
    id: 1,
    name: "About",
    isActive: true,
  },
  {
    id: 2,
    name: "Our Story",
    isActive: false,
  },
  {
    id: 3,
    name: "Benefits",
    isActive: false,
  },
  {
    id: 4,
    name: "Team",
    isActive: false,
  },
  {
    id: 5,
    name: "Careers",
    isActive: false,
  },
];

export const footerMenuHelp: IFooterMenuItem[] = [
  {
    id: 1,
    name: "Help",
    isActive: true,
  },
  {
    id: 2,
    name: "FAQs",
    isActive: false,
  },
  {
    id: 3,
    name: "Contact Us",
    isActive: false,
  },
];
