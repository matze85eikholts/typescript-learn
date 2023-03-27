interface IStatus<U> {
  code: U;
}

interface IEvents<T> {
  list: T[];
  emit(event: T) :void;
  getAll(): T[];
}

class State<T> implements IEvents<T> {
  list: T[];
  constructor() {
    this.list = [];
  }
  emit(event: T): void {
    this.list.push(event);
  }
  getAll(): T[]{
    return this.list;
  }
}

const s = new State<IStatus<number>>();
s.emit({code: 200});
s.emit({code: 404});
s.getAll().forEach(event => console.log(event.code));