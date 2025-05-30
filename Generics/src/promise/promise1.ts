// Ejemplo Promises, async y await

// Supongamos que estamos trabajando con datos de usuarios y queremos simular una solicitud a una API
// para obtener la información de un usuario por su ID.

// Función que retorna una Promise
export function getUserById(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve, reject) => {
    // Simulamos una latencia de red con setTimeout
    setTimeout(() => {
      const mockDatabase = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
      ];

      const user = mockDatabase.find((user) => user.id === id);

      if (user) {
        resolve(user); // Si lo encontramos, resolvemos la Promise con el usuario
      } else {
        reject(new Error("Usuario no encontrado")); // Si no, lanzamos un error
      }
    }, 1000); // Esperamos 1 segundo para simular el tiempo de respuesta
  });
}

// Función async para consumir la Promise con await
export async function showUserInfo(id: number): Promise<void> {
  try {
    console.log("Buscando usuario...");
    const user = await getUserById(id); // Esperamos que la Promise se resuelva
    console.log(`Usuario encontrado: ID=${user.id}, Nombre=${user.name}`);
  } catch (error) {
    // Capturamos errores si la Promise fue rechazada
    console.error("Error al obtener el usuario:", error);
  }
}

/*
1. `getUserById` retorna una Promise que resuelve después de 1 segundo si encuentra un usuario.
2. `showUserInfo` es una función `async`, lo que permite usar `await` para esperar la resolución de la Promise.
3. `try...catch` permite capturar cualquier error que ocurra dentro del bloque `await`, útil para manejar fallos de red o datos inexistentes.
*/
