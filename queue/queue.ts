
/**
 *	Implementation of the Queue data-structure  with arrays
 *
 *	Described as the First In First Out (FIFO)
 *
 * */
class Queue {
	#data: number[] = [];

	constructor(data: number[]){
		this.#data = data;
	}

	/** 
	*	Push data onto the Queue
	* */
	enqueue(el: number): void{
		this.#data.push(el);
	}

	/** 
	*	remove first element in the Queue
	* */
	dequeue(){
		return this.#data.shift();
	}

	/** 
	*	Reads frist element in the Queue
	* */
	peek(): number {
		return this.#data[0]
	}

	/** 
	*	Removes all data in the Queue
	* */
	clear(): void{
		this.#data = []
	}
}
