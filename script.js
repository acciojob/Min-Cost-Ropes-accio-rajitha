function mincost(arr)
{ 
//write your code here
// return the min cost
	 // Create a min-heap
    const PriorityQueue = require('priorityqueuejs');
    const pq = new PriorityQueue((a, b) => a - b);

    // Add all the rope lengths to the priority queue
    arr.forEach(length => pq.enq(length));

    let totalCost = 0;

    // While there is more than one rope in the priority queue
    while (pq.size() > 1) {
        // Extract the two shortest ropes
        const rope1 = pq.deq();
        const rope2 = pq.deq();

        // Connect the two ropes and calculate the cost
        const cost = rope1 + rope2;

        // Add the cost to the total cost
        totalCost += cost;

        // Insert the connected rope back into the priority queue
        pq.enq(cost);
    }

    return totalCost;
}
  
}

module.exports=mincost;
