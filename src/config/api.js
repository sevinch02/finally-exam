import axiosClient from './axiosClient';


const apiCalls = {
    getTours: () => {
        return axiosClient.get(`tours`);
    },
    getExplore: () => {
        return axiosClient.get(`explore`);
    },
    getcities: () => {
        return axiosClient.get(`cities`);
    },
    gethotels: () => {
        return axiosClient.get(`hotels`);
    },
    getHotelsDetailes: (id) => {
        return axiosClient.get(`hotels/${id}`);
    },
    getBestPlace: () => {
        return axiosClient.get(`bestPlace`);
    }
};
export default apiCalls;