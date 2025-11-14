import type { Preview } from '@storybook/nextjs';
import '@/app/_styles/ui/index.scss';

const preview: Preview = {
  parameters: {
    docs: { autodocs: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
