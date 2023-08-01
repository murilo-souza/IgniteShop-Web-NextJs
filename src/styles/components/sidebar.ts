import { styled } from '..'

export const Container = styled('aside', {
  zIndex: 1,

  position: 'absolute',
  right: 0,
  bottom: 0,

  height: '100%',
  width: '30rem',

  backgroundColor: '$gray800',

  div: {
    display: 'flex',
    flexDirection: 'column',

    padding: '3rem',
    justifyContent: 'left',

    header: {
      h1: {
        fontSize: '1.25rem',
      },
    },
  },
})
