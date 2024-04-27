export type ImageCardType = {
  title?: string;
  image: {
    url: string;
    alt: string;
  };
  rounded?: boolean;
  border?: boolean;
  className?: string;
  children?: Readonly<React.ReactNode>;
};
