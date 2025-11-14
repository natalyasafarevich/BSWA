import type { Meta, StoryObj } from '@storybook/nextjs';

import { Logo } from './Logo';

const meta = {
  title: 'Example/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
