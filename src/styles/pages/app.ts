import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'row',

  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Button = styled('button', {
  width: '3rem',
  height: '3rem',

  backgroundColor: '$gray800',

  border: 0,
  borderRadius: '6px',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    cursor: 'pointer',
    svg: {
      color: '$gray300',
    },
  },

  svg: {
    color: '$gray400',
  },
})
