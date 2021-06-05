import React from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button, {ButtonPropsType} from './Button';
import {ReactComponent as IconPhoneSVG} from '../../assets/images/phone.svg';
import '../../styles/styles.css';

export default {
  title    : 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonPropsType> = (args) => <Button {...args} />;

interface ISizes extends ButtonPropsType {
  title : string
}

const Sizes = (props:ISizes) => {
  const {title} = props;
  return (
    <>
      <h1>{title}</h1>
      <div style={{margin:'5px 0'}}><Template size={'small'} {...props} /></div>
      <div style={{margin:'5px 0'}}><Template size={'medium'} {...props} /></div>
      <div style={{margin:'5px 0'}}><Template size={'large'} {...props} /></div>
      <div style={{margin:'5px 0'}}><Template size={'full'} {...props} /></div>
    </>
  )
}

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const AllButton = () => (
  <div>
    <Sizes title={'default buttons'} children={'Button'} />
    <Sizes title={'outlined buttons'} children={'Button'} kind={'outlined'} />
  </div>
)
