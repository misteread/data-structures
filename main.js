import { assertEquals } from "@std/assert"

function add(n, m){
	return n + m;
}


Deno.test("Add to integer", ()=>{
	assertEquals(add(2,3), 5)
});