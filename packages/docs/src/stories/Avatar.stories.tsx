import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/kaique-oliveira.png',
    alt: 'Kaique oliveira',
  },

  argTypes: {
    src: {
      description: 'Avatar para ser utilizada foto do usuário.',
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: '',
    alt: 'Kaique oliveira',
  },
}
