function asteroidCollision(asteroids: number[]): number[] {
    const ans: number[] = [asteroids[0]];
    for(let i = 1; i < asteroids.length; i++) {
        let collision = false;
        const asteroid = asteroids[i];
        if(asteroid > 0) {
            ans.push(asteroid);
            continue;
        }
        while( ans.length > 0 && ans[ans.length - 1] > 0) {
            const prev = ans[ans.length - 1];
            collision = (prev + asteroid === 0) || (Math.abs(prev) > Math.abs(asteroid));
            if(prev + asteroid === 0 || !collision) {
                ans.pop();
            }
            if(collision) {
                break;
            }
        }
        if(!collision) ans.push(asteroid);
    }
    return ans;
};

console.log(asteroidCollision([5, 10, -5])); // [5, 10]
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([10,2,-5])); // [10]
console.log(asteroidCollision([-2, -1, 1, 2])); // [10]
