import genres from "../data/genres";

  
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data:genres,loading:null,error:null})
export default useGenres;
