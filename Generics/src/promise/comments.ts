type Comments = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

// 🔧 Función que hace la petición usando fetch y devuelve una Promise
function fetchComments(): Promise<Comments[]> {
    return fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al obtener los comentarios");
            }
            return response.json(); // Esto también es una Promise
        });
}

// 🔎 Función asincrónica que consume la Promise con async/await
export async function showFirstComments(): Promise<void> {
    try {
        console.log("⏳ Cargando comentarios...");
        const comments = await fetchComments(); // Esperamos la respuesta
        console.log("✅ Comentarios obtenidos. Mostrando los primeros 5:\n");

        comments.slice(0, 5).forEach((comment) => {
            console.log(`🗨️ Comentario #${comment.id}`);
            console.log(`   Nombre: ${comment.name}`);
            console.log(`   Email: ${comment.email}`);
            console.log(`   Texto: ${comment.body}`);
            console.log("---------------------------------------------------");
        });
    } catch (error) {
        console.error("❌ Ocurrió un error:", error);
    }
}
