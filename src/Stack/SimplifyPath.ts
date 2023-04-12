function simplifyPath(path: string): string {
    const stack: string[] = [];
    const arr: string[] = path.split('/');
    for(const a of arr) {
        if(a === '' || a === '.') {
            continue;
        } else if(a === '..') {
            stack.pop();
        } else {
            stack.push(a);
        }
    }
    return '/' + stack.join('/');
};

console.log(simplifyPath('/home//foo/'));
console.log(simplifyPath('/../'));
