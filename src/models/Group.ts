import {observable} from 'mobx'
import Room from './Room'

export default class Group {
    _id: string
    @observable name: string
    @observable description: string
    @observable rooms: Room[] = []

    constructor(attrs: any)
    {
        Object.assign(this, attrs)
    }
}