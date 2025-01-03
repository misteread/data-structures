import { assertEquals } from "@std/assert";
import { add } from "../binary_search_tree/binary_search.js";

Deno.test("add two integers", ()=>{
	assertEquals(add(3,2), 5);
})

