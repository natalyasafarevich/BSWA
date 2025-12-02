import type { Meta, StoryObj } from '@storybook/nextjs';

import { GenreCheckbox } from './GenreCheckbox';

const meta = {
  title: 'Components/Genre Checkbox',
  tags: ['autodocs'],
  component: GenreCheckbox,
  argTypes: {
    label: { control: 'text' },
    id: { control: 'text' },
    checked: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GenreCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'History', id: 'checkbox-1', checked: false },
};
export const Checked: Story = {
  args: { ...Default.args, checked: true },
};
