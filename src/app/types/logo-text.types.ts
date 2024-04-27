type imageLogo = {
    src: string;
    alt: string;
    width: number;
    height: number;
    invert?: boolean;
    priorty?: boolean;
}

export type LogoTextType = {
    children: Readonly<React.ReactNode>;
    alignment?: 'normal' | 'reverse';
    justify?: 'justify-start' | 'justify-center' | 'justify-end' | 'justify-between';
    logos: imageLogo[];
}