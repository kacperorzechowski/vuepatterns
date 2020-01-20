import CatRepository from "./Repositories/Cat/CatRepository";
import DogRepository from "./Repositories/Dog/DogRepository";

const repositories = {
    cat: CatRepository,
    dog: DogRepository
}

export default {
    get: (name) => repositories[name]
}