import { Ref, ref } from "vue";

interface Tarea {
  texto: string;
  autor: string;
  completado: boolean;
}

export const useTareas = () => {
  const tareas: Ref<Tarea[]> = ref([
    {
      texto: "Sacar la basura",
      autor: "Gorka",
      completado: false,
    },
  ]);

  const nuevaTarea = (
    texto: string,
    autor: string,
    completado: boolean = false
  ) => {
    tareas.value = [
      ...tareas.value,
      {
        texto,
        autor,
        completado,
      },
    ];
  };

  const eliminaTarea = (input: string | number) => {
    if (typeof input === "string") {
      // Lógica de buscar la tarea por texto
      tareas.value = tareas.value.filter((tarea) => tarea.texto !== input);
    } else {
      tareas.value.splice(input, 1);
    }
  };

  const completaTarea = (index: number) => {
    tareas.value = tareas.value.map((tarea, key) =>
      key === index ? { ...tarea, completado: !tarea.completado } : tarea
    );
  };

  return { tareas, nuevaTarea, eliminaTarea, completaTarea };
};
