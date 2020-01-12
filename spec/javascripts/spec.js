
/*
run jasmine server in cmd to review tests
 */


describe('binarySearch(array, element)', function () {
    it('Should return true if an element is in the array.', () => {
        expect(binarySearch([3,4,5,6,7,8], 4)).toBe(true)
    });
    it("Should return false if an element is not in the array.", () => {
        expect(binarySearch([1,2,3,4], 0)).toBe(false)
    });
    it("Should return false if an empty list is given.", () => {
        expect(binarySearch([],0)).toBe(false);
    });
    it('Should be able to correctly search items in the midpoint.', () => {
        expect(binarySearch([1,2,3,4,5], 3)).toBe(true);
    });
});

