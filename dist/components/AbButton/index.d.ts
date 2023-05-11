/// <reference types="react" />
export interface AbButtonProps {
    text?: string;
    btnType?: 'primary' | 'secondary';
    onClick?: () => void;
}
export declare const AbButton: ({ text, btnType, onClick }: AbButtonProps) => JSX.Element;
