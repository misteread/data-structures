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

	/** 
	 *	Push an element onto the stack
	 * */
	push(el: number): void{
		this.#data.push(el)
	}

	/** 
	 *	Removes an element from the stack
	 * */
	pop(){
		if(this.isEmpty()){
			return "stack is empty"
		}
		return this.#data.pop();
	}

	/** 
	 *	Read the first element on the stack
	 * */
	peek(): number{
		return this.#data[this.#data.length -1];
	}

	/** 
	 *	return the size of the stack
	 * */
	size(): number{
		return this.#data.length;
	}

	/** 
	 *	Checks if the stack is empty
	 * */
	isEmpty(): boolean {
		return this.#data.length === 0;
	}

	/** 
	 *	Clears all data from the array
	 * */
	clear(): number[]{
		return this.#data = [];
	}
}
