
/** 
 * 
 *Implementation of a stack
 * 
 * Described as Last in First Out
 * 
 * */
class Stack{
	#data = [];
	constructor(data){
		this.#data = data
	}

	push(el){
		this.#data.push(el)
	}

	pop(){
		return this.#data.pop();
	}

	read(){
		return this.#data[this.#data.length -1];
	}

	all_data(){
		return this.#data;
	}
}