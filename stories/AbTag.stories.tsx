import React from "react";

import { AbTag, AbTagProps } from '../src'

import { Meta, StoryFn } from '@storybook/react'

export default {

    title: 'components/AbTag',
    component: AbTag

} as Meta<typeof AbTag>

const Template: StoryFn<typeof AbTag> = (args) => <AbTag {...args}/>

export const Primario = Template.bind({})

Primario.args = {
    text: 'text',
} as AbTagProps
