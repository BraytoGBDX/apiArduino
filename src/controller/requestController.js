export const index=(req,res)=>{
    res.render('../src/views/index.ejs')
}


export const openDoor=  (req, res) => {
console.log('Abriendo la puerta...');
res.json({ message: 'Puerta abierta' });
};


import amauri from 'axios';


////////


const arduinoIP = '192.168.137.35';
const arduinoPort = 2206;

export const controlArduino = async (req, res) => {
try {
    const response = await amauri.get(`http://${arduinoIP}:${arduinoPort}/controlArduino`);
    console.log(response.data);
    res.send('Petición GET enviada al Arduino exitosamente');
} catch (error) {
    console.error('Error al enviar la petición GET:', error.message);

    res.status(500).send('Error al enviar la petición GET al Arduino');
}
};

