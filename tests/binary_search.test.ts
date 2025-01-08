import { assertEquals } from "@std/assert";
import { add } from "../binary_search_tree/binary_search.js";

Deno.test("add two integers", ()=>{
	let sum = add(2, 10);

	assertEquals(sum, 12);
})

