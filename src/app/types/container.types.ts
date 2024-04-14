export type containerType = {
    title: string;
    children: Readonly<React.ReactNode>;
    position?: 'left' | 'center' | 'right';
}