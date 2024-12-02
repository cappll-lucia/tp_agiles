import axios from 'axios';

axios.defaults.withCredentials = true;
const API_URL = `${import.meta.env.VITE_API_URL}`;

export async function iniciarJuego() {
    return axios.get(`${API_URL}/iniciar`)
        .then(response => response.data)
        .catch(error => {
            console.error("Error al iniciar el juego:", error.response?.data || error.message);
            throw error;
        });
}

export async function registrarJugador(jugadorData) {
    return axios.post(`${API_URL}/registrarse`, jugadorData)
        .then(response => response.data)
        .catch(error => {
            console.error("Error al registrar jugador:", error.response?.data || error.message);
            throw error;
        });
}

export async function arriesgarLetra(letra) {
  return axios.post(`${API_URL}/adivinar`, { letra }).then(response => response.data);
}