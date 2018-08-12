import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import Group from 'models/Group'

export const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql'
})

export default {
    groups: {
        all(): Promise<Group[]> {
            return client.query({
                query: gql`
                {
                    groups {
                        _id
                        name
                        description
                        rooms {
                            _id
                            name
                        }
                    }
                }
                `
            })
            .then(resp => resp.data['groups'])
        },

        get(id: string): Promise<Group> {
            return client.query({
                query: gql`
                {
                    group(id: "${id}") {
                        _id
                        name
                        description
                        rooms {
                            _id
                            name
                        }
                    }
                }
                `
            })
            .then(resp => resp.data['group'])
        }
    },
    posts: {
        all(id: string) {
            return client.query({
                query: gql`
                {
                    posts(room: "${id}") {
                        _id
                        body
                    }
                }
                `
            })
                .then(resp => resp.data['posts'])
        }
    }
}