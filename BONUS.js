export function addMatrices(matrix1, matrix2) {
    return matrix1.map((row, i) => row.map((val, j) => val + matrix2[i][j]));
}

export function multiplyMatrices(matrix1, matrix2) {
    const result = Array(matrix1.length).fill(0).map(() => Array(matrix2[0].length).fill(0));
    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix2[0].length; j++) {
            for (let k = 0; k < matrix1[0].length; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    return result;
}

export function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}





export function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const right = arr.filter(x => x > pivot);
    return quickSort(left).concat(pivot, quickSort(right));
}





export function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}



export function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    const unvisited = new Set(Object.keys(graph));
    for (const node of unvisited) distances[node] = Infinity;
    distances[start] = 0;

    while (unvisited.size > 0) {
        const current = Array.from(unvisited).reduce((min, node) => distances[node] < distances[min] ? node : min, Array.from(unvisited)[0]);
        unvisited.delete(current);
        for (const neighbor in graph[current]) {
            if (visited.has(neighbor)) continue;
            const newDistance = distances[current] + graph[current][neighbor];
            if (newDistance < distances[neighbor]) distances[neighbor] = newDistance;
        }
        visited.add(current);
    }
    return distances;
}



export class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
}



export class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function preOrder(node) {
    if (!node) return [];
    return [node.value, ...preOrder(node.left), ...preOrder(node.right)];
}

function inOrder(node) {
    if (!node) return [];
    return [...inOrder(node.left), node.value, ...inOrder(node.right)];
}

function postOrder(node) {
    if (!node) return [];
    return [...postOrder(node.left), ...postOrder(node.right), node.value];
}





export class LRUCache {
    constructor(limit) {
        this.cache = new Map();
        this.limit = limit;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.limit) {
            this.cache.delete(this.cache.keys().next().value);
        }
        this.cache.set(key, value);
    }
}






export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}



export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}