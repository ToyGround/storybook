import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, {ButtonProps} from '../Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
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