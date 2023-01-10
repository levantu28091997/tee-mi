import {Typography, Box} from '@mui/material'
interface WelcomeMessageType {
  position: string,
  contry?: string
}
function WelcomeMessage({position, contry='Viet Nam'}:WelcomeMessageType) {
  return (
    <Box>
      <Typography>Welcome {position} from {contry}</Typography>
    </Box>
  )
}

export default WelcomeMessage