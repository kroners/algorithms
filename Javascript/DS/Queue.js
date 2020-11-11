class Queue {
    constructor(...items) {
        // initialize items in queue
        this._items = []
        this.enqueue(...items)
    }

    enqueue(...items) {
        // push items into queue
        this._items = [...this._items, ...items]
        return this._items
    }

    dequeue(count = 1) {
        // pull out the first to X item from the queue
        this._items.splice(0, count);
        return this._items
    }

    peek() {
        // peek at the first item in the queue
        return this._items[0]
    }

    size() {
        // get the length of the queue
        return this._items.length()
    }

    isEmpty() {
        // find whether the queue is empty or not
        return this._items.length() === 0
    }


}