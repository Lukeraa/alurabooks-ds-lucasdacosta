import React from "react";

import { AbInput, AbInputProps } from '../src'

import { Meta, StoryFn } from '@storybook/react'

export default {

    title: 'components/AbInput',
    component: AbInput,
    argTypes: {
        label: {
            control: 'text'
        }
      },
    parameters: { actions: { argTypesRegex: '^on.*' } },

} as Meta<typeof AbInput>

const Template: StoryFn<typeof AbInput> = (args) => <AbInput {...args}/>

export const Primary = Template.bind({})

Primary.args = {
    label: 'E-mail',
    placeholder: 'seuemail@email.com',
} as AbInputProps
