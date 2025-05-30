export interface TextDto {
  text: string;
  color: string;
  fontSize: number;
  fontWeight: number;
  fontFamily: string;
  lineHeight: number;
  maxWidth: number;
}

export interface ButtonDto extends TextDto {
  isActive: boolean;
  backgroundColor: string;
}

export interface BannerTemplateDto {
  _id?: string;
  name: string;
  category: string;
  backgroundImage: string;
  thumb: string;
  textAlign: string;
  width: number;
  height: number;
  title: TextDto;
  description: TextDto;
  button: ButtonDto;
  ratio: string;
}