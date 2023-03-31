import { Locale } from "@i18n";

export interface ParamsProps {
 
}

export interface Children {
  children: React.ReactNode;
}

export interface ParentPage extends ParamsProps, Children {}
