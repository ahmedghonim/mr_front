import { Locale } from "@i18n";

export interface ParamsProps {
  params: { lang: Locale };
}

export interface Children {
  children: React.ReactNode;
}

export interface ParentPage extends ParamsProps, Children {}
