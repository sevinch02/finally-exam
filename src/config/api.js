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
    gethotels: (id) => {
        return axiosClient.get(`hotels/${id}`);
    },
};
export default apiCalls;