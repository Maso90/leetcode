function minCostClimbingStairs(cost: number[]): number {
    let downOne = 0, downTwo = 0;
    
    for (let i = 2; i < cost.length + 1; i++) {
        let temp = downOne;
        downOne = Math.min(downOne + cost[i-1], downTwo + cost[i-2]);
        downTwo = temp;
    }
    console.log(downOne);
    return downOne;
};

minCostClimbingStairs([10,15,20]);