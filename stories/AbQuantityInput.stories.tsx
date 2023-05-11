import React from "react";

import { AbQuantityInput, AbQuantityInputProps } from '../src'

import { Meta, StoryFn } from '@storybook/react'

export default {

    title: 'components/AbQuantityInput',
    component: AbQuantityInput,
    parameters: { actions: { argTypesRegex: '^on.*' } },

} as Meta<typeof AbQuantityInput>

const Template: StoryFn<typeof AbQuantityInput> = (args) => <AbQuantityInput {...args}/>

export const Primary = Template.bind({})

Primary.args = {
    label: 'Label'
} as AbQuantityInputProps
