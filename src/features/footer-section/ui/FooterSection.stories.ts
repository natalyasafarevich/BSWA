import type { Meta, StoryObj } from '@storybook/nextjs';

import { FooterSection } from './FooterSection';

const meta = {
  title: 'Components/Footer Section',
  component: FooterSection,
  tags: ['autodocs'],
  argTypes: {
    section: { control: 'object' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FooterSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    section: {
      title: 'Section Title',
      links: [
        { label: 'Link 1', href: '#' },
        { label: 'Link 2', href: '#' },
        { label: 'Link 2', href: '#' },
      ],
    },
  },
};
