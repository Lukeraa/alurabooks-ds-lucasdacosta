import React from "react";

import { AbCard } from '../src'

import { Meta, StoryFn } from '@storybook/react'

export default {

    title: 'components/AbCard',
    component: AbCard

} as Meta<typeof AbCard>


export const CardComponent = () => {
    return (
        <AbCard>
            <h1>Conteúdo do card!</h1>
        </AbCard>
    )
}

