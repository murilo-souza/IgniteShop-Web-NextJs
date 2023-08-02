import { styled } from '..'

export const CartItemContainer = styled('div', {
  display: 'flex',

  marginBottom: '1.5rem',
  div: {
    width: '6.375rem',
    height: '5.8125rem',

    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: 8,

    position: 'relative',
    overflow: 'hidden',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
      objectFit: 'cover',
    },
  },

  section: {
    display: 'flex',
    flexDirection: 'column',

    marginLeft: '1.25rem',

    h2: {
      fontSize: '1.125rem',
      fontWeight: 'normal',

      marginBottom: '0.5rem',
    },
    strong: {
      fontSize: '1.125rem',
      fontWeight: 'bold',

      marginBottom: '1.25rem',
    },
    button: {
      width: '3rem',

      fontSize: '1.125rem',
      fontWeight: 'bold',

      color: '$green500',

      border: 0,

      background: 'none',

      cursor: 'pointer',

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },

      '&:not(:disabled):hover': {
        color: '$green300',
      },
    },
  },
})
