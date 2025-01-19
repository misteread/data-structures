/** 
 * 
 *	Implementation of the stack data structure with arrays
 * 
 *	Described as Last in First Out(LIFO)
 * 
 * */
class Stack{

	#data: number[] = [];
	
	constructor(data: number[]){
		this.#data = data
	}

	
	push(el: number): void{
		this.#data.push(el)
	}

	
	pop(){
		if(this.isEmpty()){
			return "stack is empty"
		}
		return this.#data.pop();
	}

	
	peek(): number{
		return this.#data[this.#data.length -1];
	}

	
	size(): number{
		return this.#data.length;
	}

	
	isEmpty(): boolean {
		return this.#data.length === 0;
	}


	clear(): number[]{
		return this.#data = [];
	}
}

