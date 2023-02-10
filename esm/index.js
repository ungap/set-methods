/*! (c) Andrea Giammarchi - ISC */
((__proto__) => {
  if (!__proto__.intersection)
    __proto__.intersection = function intersection(other) {
      return new Set(
        other.size < this.size ?
          [...other.keys()].filter(has, this) :
          [...this].filter(has, other)
      );
    };

  if (!__proto__.union)
    __proto__.union = function union(other) {
      return new Set([...this, ...other.keys()]);
    };

  if (!__proto__.difference)
    __proto__.difference = function difference(other) {
      return new Set(
        [...this.union(other)]
          .filter(hasNot, this.intersection(other))
      );
    };

  if (!__proto__.symmetricDifference)
    __proto__.symmetricDifference = function symmetricDifference(other) {
      const set = new Set(this);
      for (const value of other.keys()) {
        if (this.has(value))
          set.delete(value);
        else
          set.add(value);
      }
      return set;
    };

  if (!__proto__.isSubsetOf)
    __proto__.isSubsetOf = function isSubsetOf(other) {
      return this.size <= other.size && [...this].every(has, other);
    };

  if (!__proto__.isSupersetOf)
    __proto__.isSupersetOf = function isSupersetOf(other) {
      return other.size <= this.size && [...other.keys()].every(has, this);
    };

  if (!__proto__.isDisjointFrom)
    __proto__.isDisjointFrom = function isDisjointFrom(other) {
      return other.size < this.size ?
        [...other.keys()].every(hasNot, this) :
        [...this].every(hasNot, other);
    };

  function has(value) { return this.has(value) }
  function hasNot(value) { return !this.has(value) }
})(Set.prototype);
