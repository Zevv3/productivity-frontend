let token = localStorage.getItem('userId')

export const serverCalls = {
    get: async (token:any) => {
        const response = await fetch(`http://127.0.0.1:5000/tasks/${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application.json',
                'x-access-token': `bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }
        return await response.json();
    },

    create: async (data:any) => {
        const response = await fetch(`http://127.0.0.1:5000/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Failed to create new data on server')
        }
        return await response.json();
    },

    update: async (token:any, id:string, data:any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/tasks/${token}/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    },

    getOne: async (token:any, id:string) => {
        const response = await fetch(`http://127.0.0.1:5000/tasks/${token}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }
        return await response.json();
    },

    delete: async (id:string) => {
        const response = await fetch(`http://127.0.0.1:5000/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}