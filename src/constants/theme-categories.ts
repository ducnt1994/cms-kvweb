export interface IThemeCategoriesProps {
  _id: string;
  name: string;
  code: string;
  platform: string;
  child_categories: string[];
}

export interface ICreateThemeDto {
  name: string;
  platform: string;
  child_categories: string[];
  username: string;
  password: string;
}