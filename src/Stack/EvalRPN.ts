const operation: object = {
    '+': (a:number, b:number) => a + b,
    '-': (a:number, b:number) => a - b,
    '*': (a:number, b:number) => a * b,
    '/': (a:number, b:number) => a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b),
  };
  
  function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
  
    for (const token of tokens) {
      if (operation[token]) {
        const top = stack.pop();
        const second = stack.pop();
  
        stack.push(operation[token](second, top));
      } else {
        stack.push(Number(token));
      }
    }
  
    return Number(stack.pop());
  };

console.log(evalRPN(["0","3","/"]));