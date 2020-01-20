import types from './types'
import repositories from '@/API/Repositories/types'
import RepositoryFactory from '@/API/RepositoryFactory'
import CatHandler from "../../Handlers/Cat/CatHandler";

const CatRepository = RepositoryFactory.get(repositories.cat)

const state = {
    cats: []
}

const getters = {
    //
}

const actions = {
    [types.actions.getCats] ({ commit }) {
        // toggle loading state before call API
        CatRepository.all()
            .then(CatHandler.onGetAllCatsSuccess.bind(this, { commit }))
            .catch(() => {
                /*
                Instead of defining callback here you might create
                proper method in CatHandler object.
                You might also would like to create dedicated object to handle
                all rejections.
                 */
            })
    }
}

const mutations = {
    [types.mutations.setCats] (state, cats) {
        state.cats = cats
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}