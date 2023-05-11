import { FC, HTMLAttributes, ReactChild } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** custom content, defaults to 'the snozzberries taste like snozzberries' */
    children?: ReactChild;
}
/**
 * A custom Thing component. Neat!
 */
export declare const Thing: FC<Props>;
export * from './components/AbButton';
export * from './components/AbCard';
export * from './components/AbTag';
export * from './components/AbOptionGroup';
export * from './components/AbInput';
export * from './components/AbQuantityInput';
export * from './components/AbModal';
