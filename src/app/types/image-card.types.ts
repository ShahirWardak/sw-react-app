import { ImageType } from "./image.types";

export type ImageCardType = {
  title?: string;
  image: ImageType;
  rounded?: boolean;
  border?: boolean;
  className?: string;
  children?: Readonly<React.ReactNode>;
};
