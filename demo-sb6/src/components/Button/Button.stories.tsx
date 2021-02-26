import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ButtonProps, ShButton } from './Button';

export default {
  title: 'Components/Button',
  component: ShButton
} as Meta;

const Template: Story<ButtonProps> = (args) => <ShButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button'
};
