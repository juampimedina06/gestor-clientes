//TODA LA LOGICA PARA CRUD DE LO QUE SE NECESITE DE SUPABASE


const obtenerProyectosActivos = async () => {
    const { data, error } = await supabase
        .from('proyectos')
        .select('*')
        .eq('estado', 'activo');

    if (error) {
        throw error;
    }

    return data;
}

export default {
    obtenerProyectosActivos
}