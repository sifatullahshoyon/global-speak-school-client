// import React, { useContext } from 'react';
// import { useQuery } from '@tanstack/react-query'
// import { AuthContext } from '../providers/AuthProviders';


// const useCart = () => {
//     const {user} = useContext(AuthContext);
//     const { refetch, data : cart = [] } = useQuery({
//         queryKey: ['users' , user?.email],
//         queryFn: async() => {
//             const response = await fetch(`${import.meta.env.VITE_API_URL}/users?email=${user?.email}`);
//             return response.json();
//         },
//       });
//       return [cart , refetch]
// };

// export default useCart;



import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../providers/AuthProviders';

const useCart = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const { refetch, data: users = [] } = useQuery({
        queryKey: {'users': user?.email,},
        queryFn: async (email) => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/users?email=${user?.email}` , {
                headers : {
                    authorization : `bearer ${token}`
                }
            });
            return response.json();
        },
    });

    return [users, refetch];
};

export default useCart;
