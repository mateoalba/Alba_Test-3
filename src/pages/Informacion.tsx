import { Box, Typography } from '@mui/material';

export default function Informacion() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>Información del Sistema</Typography>
      <Typography variant="body1" sx={{ color: '#444' }}>
        Este sistema permite gestionar categorías y realizar cálculos sencillos para practicar migración a ReactJS.
      </Typography>
      <Typography variant="body2" sx={{ mt: 2 }}>
        <strong>Fuente:</strong> akabab/starwars-api.
      </Typography>
    </Box>
  );
}