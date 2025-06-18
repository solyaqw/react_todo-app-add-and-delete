import React from 'react';
import { Todo } from '../types/Todo';
import { StatusFilter } from '../types/StatusFilter';

type Props = {
  todos: Todo[];
  filter: StatusFilter;
  setFilter: (filter: StatusFilter) => void;
  handleClearCompleted: () => void;
};

export const Footer: React.FC<Props> = ({
  todos,
  filter,
  setFilter,
  handleClearCompleted,
}) => {
  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeCount} items left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={`filter__link ${
            filter === StatusFilter.All ? 'selected' : ''
          }`}
          data-cy="FilterLinkAll"
          onClick={e => {
            e.preventDefault();
            setFilter(StatusFilter.All);
          }}
        >
          All
        </a>

        <a
          href="#/active"
          className={`filter__link ${
            filter === StatusFilter.Active ? 'selected' : ''
          }`}
          data-cy="FilterLinkActive"
          onClick={e => {
            e.preventDefault();
            setFilter(StatusFilter.Active);
          }}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={`filter__link ${
            filter === StatusFilter.Completed ? 'selected' : ''
          }`}
          data-cy="FilterLinkCompleted"
          onClick={e => {
            e.preventDefault();
            setFilter(StatusFilter.Completed);
          }}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        onClick={handleClearCompleted}
        disabled={completedCount === 0}
      >
        Clear completed
      </button>
    </footer>
  );
};
