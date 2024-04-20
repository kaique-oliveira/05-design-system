import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@kaique-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    size: 'xl',
    children: 'Custom title',
  },

  argTypes: {
    size: {
      options: ['xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    Children: 'h1 heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
