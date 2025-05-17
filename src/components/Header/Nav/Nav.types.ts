export type LinksType = {
  name: string,
  url: string
}

export type NavLinksProps = {
  activeLink: string | null;
  setActiveLink: (link: string | null) => void;
};