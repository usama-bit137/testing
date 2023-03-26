import reverseString  from './reverseString'; 

test("'hello' => 'olleh'", () => {
  expect(reverseString('hello')).toBe('olleh'); 
}); 

test("'God's Green Earth' => htraE neerg s'doG", () => {
  expect(reverseString("God's Green Earth")).toBe("htraE neerG s'doG")
})

test("Works on numbers and characters too", () => {
  expect(reverseString("1234567890*/+-")).toBe("-+/*0987654321")
})