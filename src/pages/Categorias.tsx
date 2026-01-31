import { useState, useEffect } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Chip, Button, Stack, TextField } from '@mui/material';

export default function Categorias() {
  const [listaPersonajes, setListaPersonajes] = useState<any[]>([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const respuesta = await fetch('https://akabab.github.io/starwars-api/api/all.json');
      const resultado = await respuesta.json();
      setListaPersonajes(resultado.slice(10, 20)); 
    };
    obtenerDatos();
  }, []);

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2, borderLeft: '5px solid #ff9800', pl: 2 }}>
        Catálogo Star Wars (API Externa)
      </Typography>
      
      <TextField 
        label="Endpoint de origen"
        fullWidth 
        size="small" 
        value="https://akabab.github.io/starwars-api/api/all.json"
        slotProps={{ input: { readOnly: true } }}
        sx={{ mb: 3, "& .MuiInputBase-root": { fontSize: '0.8rem' } }}
      />

      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Button variant="text" size="small" sx={{ color: '#444' }}>Atrás</Button>
        <Button variant="text" size="small" sx={{ color: '#444' }}>Siguiente</Button>
        <Chip label="Mostrando 10 registros" sx={{ borderRadius: '4px' }} variant="outlined" />
      </Stack>

      <Paper elevation={0} sx={{ border: '1px solid #ddd' }}>
        <List disablePadding>
          {listaPersonajes.map((p, i) => (
            <Box key={p.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar variant="square" src={p.image} sx={{ width: 45, height: 45 }} />
                </ListItemAvatar>
                <ListItemText 
                  primary={<strong>{p.name}</strong>}
                  secondary={`ID: ${p.id} | Género: ${p.gender} | Altura: ${p.height}`}
                />
              </ListItem>
              {i < listaPersonajes.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </Paper>
    </Box>
  );
}