import popup from "../modules/popup.js";

jest.mock('../modules/popup.js');

describe('comments-counter', () => {
    test('should return number of object in the array', () => {
        const data = [
            {
                creation_date: '2023-05-24',
                username: 'test1',
                comment: 'testing'
            },
            {
                creation_date: '2023-07-03',
                username: 'test2',
                comment: 'querying'
            }
        ]
        expect(popup(data)).toBe(2);
    })
})