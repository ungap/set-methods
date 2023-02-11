import '../esm/index.js';

console.assert([...new Set([1, 2, 3]).intersection(new Set([2]))].join(',') === '2', 'intersection');
console.assert([...new Set([1, 2]).union(new Set([3]))].join(',') === '1,2,3', 'union');
console.assert([...new Set([1, 2, 3]).difference(new Set([2]))].join(',') === '1,3', 'difference');
console.assert([...new Set([1, 2, 3]).symmetricDifference(new Set([4, 5, 1]))].join(',') === '2,3,4,5', 'symmetricDifference');

console.assert(new Set([1]).isSubsetOf(new Set([1, 2])), 'isSubsetOf');
console.assert(!new Set([1,2]).isSubsetOf(new Set([1])), '!isSubsetOf');
console.assert(new Set([1, 2]).isSupersetOf(new Set([1])), 'isSupersetOf');
console.assert(!new Set([1]).isSupersetOf(new Set([1, 2])), '!isSupersetOf');
console.assert(new Set([1, 2]).isDisjointFrom(new Set([3])), 'isDisjointFrom');
console.assert(!new Set([1, 2]).isDisjointFrom(new Set([2])), '!isDisjointFrom');
