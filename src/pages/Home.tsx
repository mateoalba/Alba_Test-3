import { Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Home() {

  const modulosApp = [
    { etiqueta: 'Explorar Secciones', info: 'Consulta la base de datos externa de personajes.' },
    { etiqueta: 'Registro Nuevo', info: 'Formulario para dar de alta nuevas métricas.' },
    { etiqueta: 'Panel de Operaciones', info: 'Herramientas de cálculo para áreas e impuestos.' }
  ];

  return (
    <Box sx={{ p: 1 }}>
      <Box sx={{ mb: 5, borderRadius: '12px', overflow: 'hidden', boxShadow: 3 }}>
        <img 
          src="https://picsum.photos/id/1060/1200/400" 
          alt="Banner" 
          style={{ width: '100%', display: 'block' }}
        />
      </Box>

      <Paper variant="outlined" sx={{ p: 4, mb: 4, border: 'none', bgcolor: '#f0f4f8' }}>
        <Typography variant="h4" sx={{ fontWeight: 600, color: '#2c3e50', mb: 1 }}>
          Panel de Control - Categorías
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Aplicación administrativa para la gestión de datos dinámicos y utilitarios matemáticos.
        </Typography>
      </Paper>

      <Grid container spacing={2}>
        {modulosApp.map((item, idx) => (
          <Grid size={{ xs: 12, md: 4 }} key={idx}>
            <Paper sx={{ p: 3, height: '100%', transition: '0.2s', '&:hover': { bgcolor: '#fdfdfd' } }} elevation={1}>
              <Typography variant="button" display="block" sx={{ color: '#1565c0', fontWeight: 'bold', mb: 1 }}>
                {item.etiqueta}
              </Typography>
              <Typography variant="body2">{item.info}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}