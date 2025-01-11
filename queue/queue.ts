
/**
 * Queue data structure that implements the First In First Out(FIFO)
 * 
 * */
class Queue {
	#data: number[] = [];

	constructor(data: number[]){
		this.#data = data;
	}

	/** 
	* Push data onto the Queue
	* */
	enqueue(el: number): void{
		this.#data.push(el);
	}

	/** 
	*	Pop data from the Queue
	* */
	dequeue(){
		if(this.isEmpty()){
			return "data not found";
		}
		return this.#data.shift();
	}
	
	/** 
	*	Returns the first data in the Queue
	* */
	peek(): number {
		return this.#data[0]
	}

	/** 
	*	Checks if the Queue is empty Then
	*	
	*	Returns false if Queue is empty
	* */
	isEmpty(){
		return this.#data.length === 0
	}

	/** 
	*	Clear all data in the Queue
	* */
	clear(): void{
		this.#data = []
	}
}
