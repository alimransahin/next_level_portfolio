import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TProject = {
  _id: string;
  name: string;
  live: string;
  client: string;
  server: string;
  technology: string[];
  feature: string[];
  mainImage: string;
  images: string[];
  description: string;
  isDeleted: boolean;
};
