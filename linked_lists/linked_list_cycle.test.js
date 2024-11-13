import hasCycle from "./linked_list_cycle";
import { createLinkedList, printLinkedList } from "./linked_list_utils.js";

describe("hasCycle", () => {
  test("should return true if there is a cycle in the linked list", () => {
    const list = createLinkedList([1, 2, 3, 4, 5]);
    const node = list.next.next.next.next;
    node.next = list.next.next;
    expect(hasCycle(list)).toBe(true);
  });

  test("should return false if there is no cycle in the linked list", () => {
    const list = createLinkedList([1, 2, 3, 4, 5]);
    expect(hasCycle(list)).toBe(false);
  });

  test("should return false for an empty linked list", () => {
    const list = createLinkedList([]);
    expect(hasCycle(list)).toBe(false);
  });

  test("should return false for a single node linked list", () => {
    const list = createLinkedList([1]);
    expect(hasCycle(list)).toBe(false);
  });
}