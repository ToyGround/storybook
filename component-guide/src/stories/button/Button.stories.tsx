import React from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button, {ButtonPropsType} from './Button';
import {ReactComponent as IconPhoneSVG} from '../../assets/images/phone.svg';
import '../../styles/styles.css';

export default {
  title    : 'Example/Button',
  component: Button,
  argTypes : {
    onClick: {action: 'clicked'}
  },
} as Meta;

const Template: Story<ButtonPropsType> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  kind    : 'outlined',
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size    : 'large',
  children: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size    : 'medium',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size    : 'small',
  children: 'Button',
};

export const IconButton = Template.bind({});
IconButton.args = {
  size    : 'small',
  children: '전화로 문의하기',
  icon    : <IconPhoneSVG width="16" height="16" style={{fill: '#fff'}}/>
};

export const Disabled = Template.bind({});
Disabled.args = {
  size    : 'small',
  children: 'Button',
  disabled: true
};

export const Click = Template.bind({});
Click.args = {
  size    : 'small',
  children: 'Button',
  onClick : action('Button is clicked!')
};