function dailyTemperatures(temperatures: number[]): number[] {
    const res: number[] =  new Array(temperatures.length).fill(0);
    const stack: number[] = [];
    let i: number = 0;
    while(i < temperatures.length) {
        const idx = stack[stack.length - 1];
        if(temperatures[i] > temperatures[idx]) {
            res[idx] = (i - idx);
            stack.pop();
        } else {
            stack.push(i++);
        }
    }
    return res;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
