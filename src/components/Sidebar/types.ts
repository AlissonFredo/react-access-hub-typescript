import React from "react";

interface ILink {
  href: string;
  icon: React.ReactNode;
  title: string;
}

export interface ISidebar {
  title: string;
  logo: string;
  links: Array<ILink>;
}
