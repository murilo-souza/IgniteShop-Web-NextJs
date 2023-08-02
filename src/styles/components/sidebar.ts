import { styled } from '..'
import * as Dialog from '@radix-ui/react-dialog'

export const CartContent = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',

  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,

  width: '30rem',

  backgroundColor: '$gray800',

  padding: '3rem',
  paddingTop: '4.5rem',

  boxShadow: '-4px 0px 30px rgba(0,0,0,0.8)',

  h2: {
    fontSize: '$lg',

    color: '$gray100',

    marginBottom: '2rem',
  },
})

export const CartClose = styled(Dialog.Close, {
  background: 'none',

  border: 'none',

  color: '$gray400',

  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',

  cursor: 'pointer',
})

export const ValueContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',

  marginTop: 'auto',
})

export const Value = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '0.75rem',

  span: {
    fontSize: '1rem',

    color: '$gray100',
  },
  p: {
    fontSize: '1.125rem',

    color: '$gray300',
  },
  h5: {
    fontSize: '1.125rem',
    fontWeight: 'bold',

    color: '$gray100',
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: 'bold',

    color: '$gray100',
  },
})

export const Button = styled('button', {
  marginTop: '2rem',

  backgroundColor: '$green500',
  color: '$white',

  border: 0,
  borderRadius: 8,

  padding: '1.25rem',

  cursor: 'pointer',

  fontWeight: 'bold',
  fontSize: '$md',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
})

export const ButtonNav = styled('button', {
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
