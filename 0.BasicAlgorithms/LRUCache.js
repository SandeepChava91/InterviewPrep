
function LinkedListNode(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
}

function LinkedList(size) {

    // Init 
    this.head = null;
    this.maxSize = size;
    this.size = 0;

    this.addElement = (key, val) => {

        let current;
        let node = new LinkedListNode(key, val);

        if (this.size <= this.maxSize) {
            if (this.head === null) {
                this.head = node;
            }
            else {
                current = this.head;
                while (current.next !== null) {
                    current = current.next;
                }

                current.next = node;
            }

            this.size++;
        }
        else {
            console.error("Max limit reached");
        }

    }

    this.deleteElement = (key) => {

        let prev = null;
        let current = this.head;

        while (current !== null) {
            if (current.key === key) {
                if (prev === null) {
                    this.head = current.next;
                }
                else {
                    prev.next = current.next;
                }
                this.size--;
                return current;
            }
            prev = current;
            current = current.next;
        }

    }

    this.print = () => {

        let current = this.head;

        while (current) {
            console.log(current.key + ":" + current.val);
            current = current.next;
        }

    }
}

function LRUCache(capacity) {

    this.capacity = capacity;
    this.cache = {};
    this.cache_vals = new LinkedList(capacity);

    this.get = (key) => {
        if (this.cache[key]) {
            let node = this.cache_vals.deleteElement(key);
            this.cache_vals.addElement(key, node.val);
            return node.val;
        }
        else {
            console.error("Not found in cache");
            return "Not found in cache";
        }
    }

    this.set = (key, val) => {
        this.evictIfNeeded();
        this.cache[key] = val;
        this.cache_vals.addElement(key, val);
    }

    this.evictIfNeeded = () => {
        if (!(this.cache_vals.size < this.capacity)) {
            let node = this.cache_vals.deleteElement(this.cache_vals.head.key);
            delete this.cache[node.key]
            console.log(this.cache);
        }
    }

    this.printcache = () => {
        let node = this.cache_vals.head;
        while (node) {
            console.log(node.key + " " + node.val + ", ");
            node = node.next;
        }
    }

}

let lruCache = new LRUCache(3);
lruCache.set('a', 10);
lruCache.set('b', 20);
lruCache.set('c', 30);

lruCache.get('a');
lruCache.set('d', 40);

lruCache.printcache();
