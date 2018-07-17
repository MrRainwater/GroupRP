import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import Group from 'models/Group'

const client = new ApolloClient({
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
                        rooms {
                            _id
                            name
                        }
                    }
                }
                `
            })
            .then(resp => resp.data['groups'])
        }
    }
}