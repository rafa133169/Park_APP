import asyncio
import websockets
import json
import mysql.connector

# Configuración de la conexión a la base de datos
db_host = 'localhost'
db_user = 'root'
db_password = ''
db_name = 'sm52_arduino'

# Función para obtener los datos de la base de datos y enviarlos a los clientes conectados
async def send_data_to_clients(websocket, path):
    db_connection = mysql.connector.connect(
        host=db_host,
        user=db_user,
        password=db_password,
        database=db_name
    )
    db_cursor = db_connection.cursor()

    while True:
        # Consultar la base de datos para obtener los datos actualizados
        db_cursor.execute("SELECT * FROM infrarrojos")
        results = db_cursor.fetchall()

        # Enviar los datos a los clientes conectados
        for result in results:
            await websocket.send(json.dumps(result))

        await asyncio.sleep(1)  # Esperar un segundo antes de volver a consultar la base de datos

# Configurar el servidor WebSocket
start_server = websockets.serve(send_data_to_clients, "localhost", 8765)

# Mensaje de inicio del servidor WebSocket
print("Servidor WebSocket iniciado en ws://localhost:8765")

# Ejecutar el servidor WebSocket
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
