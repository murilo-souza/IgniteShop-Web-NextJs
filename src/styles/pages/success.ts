import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',
  justifyContent: 'center',

  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '$lg',
    color: '$green500',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImagesContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',

  marginBottom: '3rem',

  'div + div': {
    marginLeft: 'calc(-140px/2)',
  },
})

export const ImageContainer = styled('div', {
  maxWidth: 140,
  height: 140,

  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

  borderRadius: '50%',
  boxShadow: '0px 0px 60px rgba(0,0,0,0.8)',

  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
