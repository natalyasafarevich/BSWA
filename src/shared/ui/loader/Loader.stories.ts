import type { Meta, StoryObj } from '@storybook/nextjs';

import { Loader } from './Loader';
import { boolean } from 'zod';

const meta = {
  title: 'Components/Loader',
  tags: ['autodocs'],
  component: Loader,
  argTypes: {
    isVisible: {
      control: boolean,
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isVisible: true },
};
