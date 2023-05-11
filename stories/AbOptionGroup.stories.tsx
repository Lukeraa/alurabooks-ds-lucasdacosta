import React from "react";

import { AbOptionGroup, AbOptionGroupProps } from '../src'

import { Meta, StoryFn } from '@storybook/react'

export default {

    title: 'components/AbOptionGroup',
    component: AbOptionGroup

} as Meta<typeof AbOptionGroup>

const Template: StoryFn<typeof AbOptionGroup> = (args) => <AbOptionGroup {...args} />

export const Default = Template.bind({})

Default.args = {
    options: [
        {
            id: 1,
            title: 'E-book',
            body: 'R$ 00,00',
            footer: '.pdf, .epub, .mob'
        },

        {
            id: 2,
            title: 'Impresso',
            body: 'R$ 00,00',
            footer: '.pdf, .epub, .mob'
        },

        {
            id: 3,
            title: 'Impresso + E-book',
            body: 'R$ 00,00',
            footer: '.pdf, .epub, .mob'
        }
    ]
} as AbOptionGroupProps
