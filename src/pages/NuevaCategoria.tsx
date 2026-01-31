import { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, Snackbar } from '@mui/material';

export default function NuevaCategoria() {
  const [form, setForm] = useState({ nom: '', desc: '' });
  const [notificacion, setNotificacion] = useState(false);
  const [camposVacios, setCamposVacios] = useState(false);

  const enviarFormulario = (e: any) => {
    e.preventDefault();
    if (!form.nom || !form.desc) {
      setCamposVacios(true);
      return;
    }
    setNotificacion(true);
    setForm({ nom: '', desc: '' });
    setCamposVacios(false);
  };

  return (
    <Box component="form" onSubmit={enviarFormulario} sx={{ maxWidth: 550, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 4, textAlign: 'center', color: '#388e3c' }}>
        Añadir Nueva Entrada
      </Typography>

      {camposVacios && <Alert severity="warning" sx={{ mb: 2 }}>Faltan datos por completar</Alert>}
      
      <TextField 
        label="Nombre" 
        fullWidth 
        sx={{ mb: 2 }} 
        value={form.nom}
        onChange={(e) => setForm({...form, nom: e.target.value})}
      />

      <TextField 
        label="Detalles / Descripción" 
        fullWidth 
        multiline 
        rows={3} 
        sx={{ mb: 3 }} 
        value={form.desc}
        onChange={(e) => setForm({...form, desc: e.target.value})}
      />

      <Button fullWidth variant="contained" type="submit" sx={{ py: 1.5, bgcolor: '#388e3c' }}>
        Registrar Categoría
      </Button>

      <Snackbar open={notificacion} autoHideDuration={2000} onClose={() => setNotificacion(false)} message="Guardado correctamente" />
    </Box>
  );
} 