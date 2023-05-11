import React from "react";

import { AbModal, AbModalProps } from '../src'

import { Meta, StoryFn } from '@storybook/react'

export default {

    title: 'components/AbModal',
    component: AbModal,
    parameters: { actions: { argTypesRegex: '^on.*' } },

} as Meta<typeof AbModal>

const Template: StoryFn<typeof AbModal> = (args) => <AbModal {...args}/>

export const Primary = Template.bind({})

Primary.args = {
    titulo: "Modal",
    aberta: false,
} as AbModalProps

