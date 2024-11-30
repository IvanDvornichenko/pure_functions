import {health} from '../basic';


test('health_green', () => {
  const result = health({name: 'Маг', health: 90});

  expect(result).toBe("healthy");
});

test('health_yellow', () => {
  const result = health({name: 'Маг', health: 49});

  expect(result).toBe("wounded");
});

test('health_red', () => {
  const result = health({name: 'Маг', health: 10});

  expect(result).toBe("critical");
});