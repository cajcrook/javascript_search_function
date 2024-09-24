const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
    it('finds all starting with Ma and price below 10', () => {
        expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
    });

    it('finds all starting with Ma and price below 2', () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars']);
    });

    it('finds all starting with S and price below 10', () => {
        expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    });

    it('finds all starting with S and price below 4', () => {
        expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
    });
    
    it('finds all starting with S and price below 4', () => {
        expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers']);
    });
});