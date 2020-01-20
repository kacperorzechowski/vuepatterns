import createRepository from '@/API/Repositories/Repository'

const Repository = createRepository()
const resource = '/cats'

export default {
    get (id) {
        return Repository.get(`${resource}/${id}`)
    },
    all () {
        return Repository.get(`${resource}`)
    },
    create (data) {
        return Repository.post(`${resource}`, data)
    },
    update (id, data) {
        return Repository.put(`${resource}/${id}`, data)
    },
    delete (id) {
        return Repository.delete(`${resource}/${id}`)
    }
}