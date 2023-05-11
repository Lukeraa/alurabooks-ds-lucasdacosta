import React from "react";

import { AbButton, AbButtonProps } from '../src'

import { Meta, StoryFn } from '@storybook/react'

export default {

    title: 'components/AbButton',
    component: AbButton

} as Meta<typeof AbButton>

const Template: StoryFn<typeof AbButton> = (args) => <AbButton {...args}/>

export const Primary = Template.bind({})

Primary.args = {
    text: 'Primary AbButton',
    btnType: 'primary',
} as AbButtonProps

export const Secondary = Template.bind({})

Secondary.args = {
    text: 'Secondary AbButton',
    btnType: 'secondary',
} as AbButtonProps

