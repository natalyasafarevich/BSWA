import type { Meta, StoryObj } from '@storybook/nextjs';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    id: { control: 'text' },
    checked: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Checkbox Label', id: 'checkbox-1', checked: false },
};
export const Checked: Story = {
  args: { ...Default.args, checked: true },
};
