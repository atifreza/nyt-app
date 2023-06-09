import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

export const getAuthToken = () => {
    return Cookies.get('accessToken');
}

export const commentsMockData = [
    {
        articleComments: [
            {
                id: uuidv4(),
                userComment: 'Best article'
            },
            {
                id: uuidv4(),
                userComment: 'Top article'
            },
            {
                id: uuidv4(),
                userComment: 'Best article'
            },
            {
                id: uuidv4(),
                userComment: 'Top article'
            },
            {
                id: uuidv4(),
                userComment: 'Best article'
            },
            {
                id: uuidv4(),
                userComment: 'Top article'
            },
            {
                id: uuidv4(),
                userComment: 'Best article'
            },
            {
                id: uuidv4(),
                userComment: 'Top article'
            },
            {
                id: uuidv4(),
                userComment: 'Best article'
            },
            {
                id: uuidv4(),
                userComment: 'Top article'
            },
        ]
    }, 
    {
        articleComments: [
            {
                id: uuidv4(),
                userComment: 'Best article'
            },
            {
                id: uuidv4(),
                userComment: 'Top article'
            },
        ]
    },
    {
        articleComments: [
            {
                id: uuidv4(),
                userComment: 'Best article'
            },
            {
                id: uuidv4(),
                userComment: 'Top article'
            },
        ]
    },
    {
        articleComments: [
            {
                id: uuidv4(),
                userComment: 'Best article'
            },
            {
                id: uuidv4(),
                userComment: 'Top article'
            },
        ]
    },
    {
        articleComments: [
            {
                id: uuidv4(),
                userComment: 'Best article'
            },
            {
                id: uuidv4(),
                userComment: 'Top article'
            },
        ]
    },
    {
        articleComments: [
            {
                id: uuidv4(),
                userComment: 'Best article'
            },
            {
                id: uuidv4(),
                userComment: 'Top article'
            },
        ]
    },
    {
        articleComments: [
            {
                id: uuidv4(),
                userComment: 'Best article'
            },
            {
                id: uuidv4(),
                userComment: 'Top article'
            },
        ]
    },
    {
        articleComments: [
            {
                id: uuidv4(),
                userComment: 'Best article'
            },
            {
                id: uuidv4(),
                userComment: 'Top article'
            },
        ]
    },
    {
        articleComments: [
            {
                id: uuidv4(),
                userComment: 'Best article'
            },
            {
                id: uuidv4(),
                userComment: 'Top article'
            },
        ]
    },
    {
        articleComments: [
            {
                id: uuidv4(),
                userComment: 'Best article'
            },
            {
                id: uuidv4(),
                userComment: 'Top article'
            },
        ]
    }
]