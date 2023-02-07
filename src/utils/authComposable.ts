import { Ref, ref } from "vue";
import axios from "axios";

interface User {
  username: string;
  email: string;
  password: string;
}

const serverUrl = "https://6eda-178-237-232-187.eu.ngrok.io";

export const useAuth = () => {
  const user: Ref<User | null> = ref(null);

  const login = async (email: string, password: string): Promise<User> => {
    // Hacemos una llamada a una API externa
    // Obtenemos el token de autenticación
    const response = await axios.post(
      `${serverUrl}/auth`,
      { email, password }
    );
    // Si todo es correcto devolvemos el usuario
    return {
      email,
      password,
      username: response.data.user.username,
    };
  };

  return { user, login };
};
