import serial
import mysql.connector

# Conexión a la base de datos MySQL
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="sm52_arduino"
)
cursor = conn.cursor()

# Configurar conexión serial
ser = serial.Serial('COM4', 9600)  # Ajusta el puerto COM según corresponda

# Función para procesar los datos recibidos y almacenarlos en la base de datos
def process_data(data):
    sensor_id, sensor_value = data.split(":")
    query = "INSERT INTO infrarrojos (id_infrarrojo, estado_sensor) VALUES (%s, %s)"
    values = (sensor_id, sensor_value)
    cursor.execute(query, values)
    conn.commit()

# Bucle principal para leer datos del puerto serie y procesarlos
while True:
    data = ser.readline().decode().strip()
    print("Datos recibidos:", data)
    process_data(data)
