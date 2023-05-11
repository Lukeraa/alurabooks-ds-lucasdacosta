/// <reference types="react" />
export interface AbOptionGroupBase {
    id: number;
    title: string;
    body: string;
    footer: string;
}
export interface AbOptionGroupProps {
    options: AbOptionGroupBase[];
    defaultValue?: AbOptionGroupBase | null;
    onChange?: (option: AbOptionGroupBase) => void;
}
export declare const AbOptionGroup: ({ options, onChange, defaultValue }: AbOptionGroupProps) => JSX.Element;
