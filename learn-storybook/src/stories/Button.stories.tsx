import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import Button, {ButtonProps} from '../Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' }
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  className: 'large',
  children: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  className: 'medium',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  className: 'small',
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  className: 'small',
  children: 'Button',
  isDisabled: true
};

export const Click = Template.bind({});
Click.args = {
  className: 'small',
  children: 'Button',
  onClick: action("Button is clicked!")
};