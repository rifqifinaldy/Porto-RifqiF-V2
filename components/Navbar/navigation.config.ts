interface IMenu {
  target: string;
  title: string;
}

export const menu: IMenu[] = [
  {
    target: "/",
    title: "Home",
  },
  {
    target: "/about",
    title: "About",
  },
  {
    target: "/projects",
    title: "Projects",
  },
];
