function MyArrayProto() {
    this.push = function push() {
      for (let index = 0; index < arguments.length; index++) {
        this[this.length] = arguments[index];
        ++this.length;
      }
      return this.length;
    };
  
    this.pop = function pop() {
      if (this.length <= 0) {
        return;
      }
      const lastItem = this[this.length - 1];
      delete this[--this.length];
      return lastItem;
    };
  
    this.unshift = function unshift() {
      for (let i = 0; i < arguments.length; i++) {
        this[this.i - this.length] = arguments[i];
        
        ++this.length;
      }
      return this.length;
    }
  
    this.forEach = function forEach(cb) {
      for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
      }
    };
  
    this.map = function map(cb) {
      const result = new MyArray();
      for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
      }
      return result;
    }
  
    this.reverse = function reverse() {
      const copy = new MyArray();
      for (let i = 0; i < this.length; i++) {
        copy.push(this[i]);
      }
      for (let i = 0; i < this.length; i++) {
        this[i] = copy.pop();
      }
    };
  
    this.concat = function concat(array) {
      const result = new MyArray();
      for (let i = 0; i < this.length; i++) {
        result.push(this[i]);
      }
      for (let i = 0; i < array.length; i++) {
        result.push(array[i]);
      }
      return result;
    }
  
    this.some = function some(checkFunction) {
      for (let i = 0; i < this.length; i++) {
        if (checkFunction(this[i], i, this)) {
          return true;
        }
      }
      return false;
    };
  
    this.every = function every(checkFunction) {
      for (let i = 0; i < this.length; i++) {
        if (!checkFunction(this[i], i, this)) {
          return false;
        }
      }
      return true;
    };
  
    this.filter = function filter(checkFunction) {
      const result = new MyArray();
      for (let i = 0; i < this.length; i++) {
        if (checkFunction(this[i], i, this)) {
          result.push(this[i])
        }
      }
      return result;
    };
  
  }
  
  function MyArray(...args) {
    this.length = 0;
    for (let i = 0; i < [...args].length; i++) {
      this.push([...args][i]);
    }
  }
  
  MyArray.isMyArray = function (obj) {
    return obj instanceof MyArray;
  };
  
  MyArray.prototype = new MyArrayProto();