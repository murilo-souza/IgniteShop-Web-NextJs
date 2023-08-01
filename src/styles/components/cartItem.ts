import { styled } from '..'

export const CartItemContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  marginBottom: '1.5rem',
  div: {
    width: 101.94,
    height: 93,

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

      marginBottom: '0.5rem',
    },
    span: {
      fontSize: '1.125rem',
      fontWeight: 'bold',

      color: '$green500',
    },
  },
})
