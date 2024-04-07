import { instance } from "./_instance"

export const get_message = async () => {
    try {

        var response = await instance.get("HealthCheck/message");

        if (response.status === 200) {
            return response.data;
        }
    }
    catch {
        return null;
    }
}