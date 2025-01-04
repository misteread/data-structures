
/** 
 * 
 *Implementation of a stack data structure with arrays
 * 
 * Described as Last in First Out
 * 
 * */
class Stack{
	#data = [];
	constructor(data){
		this.#data = data
	}

	/** 
	 * Push an element onto the stack
	 * */
	push(el){
		this.#data.push(el)
	}

	/** 
	 * Removes an element from the stack
	 * */
	pop(){
		if(this.isEmpty()){
			return "stack is empty"
		}
		return this.#data.pop();
	}

	/** 
	 * Read the first element on the stack
	 * */
	peek(){
		return this.#data[this.#data.length -1];
	}

	/** 
	 * return the size of the stack
	 * */
	size(){
		return this.#data.length;
	}

	/** 
	 * Checks if the stack is empty
	 * */
	isEmpty(){
		return this.#data.length === 0;
	}

	/** 
	 * Clears all data from the array
	 * */
	clear(){
		return this.#data = [];
	}
}