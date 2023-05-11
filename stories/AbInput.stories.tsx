import React from "react";

import { AbInput, AbInputProps } from '../src'

import { Meta, StoryFn } from '@storybook/react'

export default {

    title: 'components/AbInput',
    component: AbInput

} as Meta<typeof AbInput>

const Template: StoryFn<typeof AbInput> = (args) => <AbInput {...args}/>

export const Primary = Template.bind({})

Primary.args = {
    title: 'E-mail',
    placeHolder: 'seuemail@email.com',
} as AbInputProps
