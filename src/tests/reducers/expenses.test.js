import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set defaut state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '109',
        description: 'Laptop',
        note: '',
        createdAt: 200000,
        amount: 29500
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            description: 'Credit Cards'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[2].description).toBe('Credit Cards');
});

test('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'Credit Cards'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});