import type { Meta, StoryObj } from '@storybook/react';
import { MyLibrary1 } from './my-library-1';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof MyLibrary1> = {
  component: MyLibrary1,
  title: 'MyLibrary1',
};
export default meta;
type Story = StoryObj<typeof MyLibrary1>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to MyLibrary1!/gi)).toBeTruthy();
  },
};
