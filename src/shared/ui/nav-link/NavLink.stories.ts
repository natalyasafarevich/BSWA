import type { Meta, StoryObj } from '@storybook/nextjs';

import { NavLink } from './NavLink';

const meta = {
  title: 'Components/Nav Link',
  component: NavLink,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    className: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    isActive: { control: 'boolean' },
  },
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    isActive: false,
    label: 'Home',
    className: '',
  },
};
export const Active: Story = {
  args: {
    ...Default.args,
    isActive: true,
  },
};
