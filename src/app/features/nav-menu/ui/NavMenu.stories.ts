import type { Meta, StoryObj } from '@storybook/nextjs';

import { NavMenu } from './NavMenu';

const meta = {
  title: 'Widgets/Nav Menu',
  component: NavMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
