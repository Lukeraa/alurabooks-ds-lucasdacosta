/// <reference types="react" />
export interface AbInputProps {
    label?: string;
    placeholder?: string;
    placeholderAlign?: 'left' | 'center' | 'right';
    value: string;
    type?: 'text' | 'email' | 'password' | 'date';
    darkmode?: boolean;
}
export declare const AbInput: ({ label, placeholder, placeholderAlign, value, type, darkmode }: AbInputProps) => JSX.Element;
