import axios from "axios";
import {ICreateThemeDto, IThemeCategoriesProps} from "@/constants/theme-categories";

export async function getListThemeCategories() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v2/page-builder/cms/themes/categories`);
  return res.data
}

export async function addThemeCategory(data: ICreateThemeDto) {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v2/page-builder/cms/themes/category`, data);
  return res.data
}

export async function getDetailThemeCategory(themeId: string) : Promise<IThemeCategoriesProps> {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v2/page-builder/cms/themes/categories/${themeId}`);
  return res.data
}

export async function updateThemeCategory(themeCategoryId: string, data: ICreateThemeDto) {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v2/page-builder/cms/themes/categories/${themeCategoryId}`, data);
  return res.data
}