function makeConnected(n: number, connections: number[][]): number {
    if(n - 1 > connections.length) {
        return -1;
    }
    const parent: number[] = [];
    for(let i = 0; i < n; i++) {
        parent.push(i);
    }
    console.log(parent);
    const find = (n: number): number => {
        if (parent[n] !== n) {
            parent[n] = find(parent[n]);
        }
        return parent[n];
    }
    const union = (a: number, b: number): void => {
        const parentA = find(a);
        const parentB = find(b);
        if(parentA === parentB) {
            return;
        }
        parent[parentA] = parentB;
    }

    for(const [from, to] of connections) {
        union(from, to);
    }
    console.log(parent);
    const unique: Set<number> = new Set();
    for(let i = 0; i < n; i++) {
        unique.add(find(i));
    }
    console.log(unique);
    return unique.size - 1;
}
const result = makeConnected(6, [[0,1],[0,2],[0,3],[1,2],[1,3]]);
console.log(result);
