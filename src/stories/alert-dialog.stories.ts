import { Meta, StoryObj } from '@storybook/react';

import AlertDialogModal from './example/Alert-dialog';

const meta = {
    title: 'Example/alert',
    component: AlertDialogModal,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        children: {control: 'text', defaultValue: 'Button'},
        onClick: {action: "clicked", type: "function"},
    }
} satisfies Meta<typeof AlertDialogModal>

export default meta
type Story = StoryObj<typeof meta>

export const AlertDialogDemo: Story = {
    args: {
        variant: "default",
        children: "dsdsd",
      },
}
