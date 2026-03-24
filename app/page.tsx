import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Image from 'next/image'

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 73px)', // Subtract header height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        p: 4,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 300,
          height: 300,
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          mb: 4,
          border: '5px solid white',
        }}
      >
        <Image
          src="/KyleBethke.png"
          alt="Kyle Bethke"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </Box>
      
      <Typography
        level="h1"
        sx={{
          color: 'white',
          fontSize: { xs: '2rem', md: '3rem' },
          fontWeight: 'bold',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          mb: 2,
        }}
      >
        Kyle Bethke
      </Typography>
      
      <Typography
        level="h3"
        sx={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: { xs: '1rem', md: '1.5rem' },
          textAlign: 'center',
          maxWidth: '600px',
        }}
      >
        Welcome to my corner of the internet
      </Typography>
    </Box>
  )
}