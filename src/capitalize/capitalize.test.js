import capitalize  from './capitalize'

test("'anarchy' => 'Anarchy'", () => {
  expect(capitalize('anarchy')).toBe('Anarchy'); 
}); 

test("'Anarchy' => 'Anarchy'", () => {
  expect(capitalize('Anarchy')).toBe('Anarchy'); 
}); 
test("'ANARCHY' => 'ANARCHY'", () => {
  expect(capitalize('ANARCHY')).toBe('ANARCHY'); 
}); 
