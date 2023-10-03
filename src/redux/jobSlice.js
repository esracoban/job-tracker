import { createSlice } from "@reduxjs/toolkit";
import AddJob from './../pages/AddJob';
import Filter from './../components/Filter';

const initialState = {
    // bu dizideğişmeyecek
    mainJobs: [],
    // filtrelenenleri aktar
    jobs:[],
    // apidan cevap geldi mi
    initialized: false,
    // hata oluştu mu
    isError: false,
};


const jobSlice = createSlice({
    name:'jobs',
    initialState,
    reducers:{
setJobs: (state, action) => {
    state.jobs = action.payload;
    state.mainJobs = action.payload;
    state.initialized = true;
    state.isError = false;
},
setError: (state, action) => {
    state.initialized = true;
    state.isError = true;
},

addJob: (state, action) => {
   state.jobs.push(action.payload); 
},

filterBySearch:(state, action) => {
    // arama terimini küçük harfe çevirme
    const query = action.payload.toLowerCase();
    // arama terimiyle eşleşen bütün işleri filtrele
    const filter = state.mainJobs.filter((job) =>
    job.company.toLowerCase().includes(query)
    );
    // statei güncelleme
    state.jobs = filter;
   
},

filterByStatus: (state, action) => {
    const filtred = state.mainJobs.filter(
        (job) => job.status === action.payload
    );
}

    },
});

export const {setJobs, setError, addJob, filterBySearch, filterByStatus} = jobSlice.actions;

export default  jobSlice.reducer;