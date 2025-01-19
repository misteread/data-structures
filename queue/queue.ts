
/**
 * Queue data structure that implements the First In First Out(FIFO)
 * 
 * */
class Queue {
	#data: number[] = [];

	constructor(data: number[]){
		this.#data = data;
	}

	enqueue(el: number): void{
		this.#data.push(el);
	}

	dequeue(){
		if(this.isEmpty()){
			return "data not found";
		}
		return this.#data.shift();
	}
	
	peek(): number {
		return this.#data[0]
	}

	isEmpty(){
		return this.#data.length === 0
	}

	clear(): void{
		this.#data = []
	}
}
