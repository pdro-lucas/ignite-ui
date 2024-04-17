import { Box, Text, Toast, ToastProps } from '@ignite-ui-pedro/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Helpers/Toast',
  component: Toast,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            height: '30vh',
            backgroundColor: '$gray900',
          }}
        >
          <Text size={'sm'}>Hover to show the Toast</Text>
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    open: true,
  },
}
