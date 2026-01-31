import { useState } from 'react';
import { Box, Typography, TextField, Divider, Alert, Stack } from '@mui/material';

export default function Calculos() {
  const [datosTri, setDatosTri] = useState({ b: 0, h: 0 });
  const [datosRect, setDatosRect] = useState({ b: 0, h: 0 });
  const [montoIva, setMontoIva] = useState(0);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" color="primary" gutterBottom>Utilidades Matemáticas</Typography>
      
      <Stack spacing={4} sx={{ mt: 3 }}>
     
        <Box>
          <Typography variant="overline">Area Triángulo</Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
            <TextField label="B" size="small" type="number" onChange={(e) => setDatosTri({...datosTri, b: +e.target.value})} />
            <TextField label="H" size="small" type="number" onChange={(e) => setDatosTri({...datosTri, h: +e.target.value})} />
          </Stack>
          <Alert icon={false} severity="success" sx={{ mt: 1 }}>Área: {(datosTri.b * datosTri.h) / 2}</Alert>
        </Box>

        <Divider />

  
        <Box>
          <Typography variant="overline">Area Rectángulo</Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
            <TextField label="Base" size="small" type="number" onChange={(e) => setDatosRect({...datosRect, b: +e.target.value})} />
            <TextField label="Altura" size="small" type="number" onChange={(e) => setDatosRect({...datosRect, h: +e.target.value})} />
          </Stack>
          <Alert icon={false} severity="info" sx={{ mt: 1 }}>Área total: {datosRect.b * datosRect.h}</Alert>
        </Box>

        <Divider />

       
        <Box>
          <Typography variant="overline">Comercial: IVA (12%)</Typography>
          <TextField fullWidth label="Importe" sx={{ mt: 1 }} onChange={(e) => setMontoIva(+e.target.value)} />
          <Box sx={{ mt: 2, p: 2, border: '1px dashed #ccc' }}>
            <Typography variant="body2">Impuesto: ${(montoIva * 0.12).toFixed(2)}</Typography>
            <Typography variant="h6">Gran Total: ${(montoIva * 1.12).toFixed(2)}</Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}