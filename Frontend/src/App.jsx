import { useEffect, useState } from "react";
import { get_message } from "./api/health_check";

function App() {
	const [message, setMessage] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				var response = await get_message();
				if (response != null) {
					setMessage(response);
				}
			} catch (error) {
				console.error('Erro:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<p>{message}</p>
	)
}

export default App;
