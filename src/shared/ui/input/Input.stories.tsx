import type { Meta, StoryObj } from '@storybook/nextjs';

import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  tags: ['autodocs'],
  component: Input,
  argTypes: { label: { control: 'text' }, placeholder: { control: 'text' } },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Input Label', placeholder: 'Enter text here' },
};

export const WithError: Story = {
  args: { ...Default.args, error: 'This field is required' },
};

export const FullWidth: Story = {
  args: { ...Default.args, fullWidth: true },
};
