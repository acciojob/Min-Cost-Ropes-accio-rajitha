function mincost(arr)
{ 
//write your code here
arr.sort((a, b) => a - b);
    
    let totalCost = 0;
    
    // Continue until there is only one rope left
    while (arr.length > 1) {
        // Extract the two shortest ropes
        const rope1 = arr.shift();
        const rope2 = arr.shift();
        
        // Connect the ropes and calculate the cost
        const cost = rope1 + rope2;
        
        // Add the cost to the total
        totalCost += cost;
        
        // Add the connected rope back to the array
        arr.push(cost);
        // Re-sort the array to maintain the min heap property
        arr.sort((a, b) => a - b);
    }
    
    return totalCost;

  
}

module.exports=mincost;
