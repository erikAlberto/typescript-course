interface ApiResponse<T> {
  data: T;
  status: number;
  success: boolean;
}

class ApiClient<T> {
    constructor(private baseUrl: string) {}

    async get(endpoint: string): Promise<ApiResponse<T>> {
        const response = await fetch(`${this.baseUrl}/${endpoint}`);
        return response.json();
    }

    async post(endpoint: string, body: Partial<T>): Promise<ApiResponse<T>> {
        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return response.json();
    }
}

export default ApiClient;