function subsets(nums: number[]): number[][] {
    let res: number[][] = [];
    let subset: number[] = [];
    const dfs = (i: number) => {
        if (i >= nums.length) {
            res.push(subset.slice());
            return;
        }
        subset.push(nums[i]);
        console.log(i + "=============================");
        console.log(subset);
        dfs(i + 1);
        subset.pop();
        console.log(i + "-----------------------------");
        console.log(subset);
        dfs(i + 1);
    }

    dfs(0);

    return res;
};



console.log(subsets([1,2,3]))