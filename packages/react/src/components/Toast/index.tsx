import * as ToastBase from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Text } from '../Text'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description?: string
  closeTimer?: number
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastBase.Provider>
      <ToastContainer {...props}>
        <ToastTitle>
          <Text size="xl">{title}</Text>
        </ToastTitle>
        <ToastDescription>
          <Text size="sm">{description}</Text>
        </ToastDescription>
        <ToastClose>
          <X size={24} />
        </ToastClose>
      </ToastContainer>
      <ToastViewport />
    </ToastBase.Provider>
  )
}

Toast.DisplayName = 'Toast'
