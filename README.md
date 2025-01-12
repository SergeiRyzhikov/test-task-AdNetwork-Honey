# test-task-AdNetwork-Honey

## Описание

Этот проект включает в себя несколько частей задания:

1. **EventEmitter** — Класс для подписки на события с возможностью подписки, отписки и эмита событий.
2. **Аналог Promise.all** — Функция `all` для обработки массива промисов.
3. **Debounce Input** — React компонент с debounce-обработчиком для ввода данных.
4. **Drag-and-Drop список** — Компонент с возможностью перетаскивания элементов и сортировки списка.

## Структура проекта

- файл **EventEmitter.ts**: Реализует класс для подписки на события, отписки и их эмита.
- файл **all.ts**: Функция, которая выполняет все переданные промисы и возвращает результаты.
- **DebounceInput.tsx**: Реализует компонент ввода с debounce, чтобы избежать частых вызовов при вводе текста.
- **DraggableList.tsx**: Реализует компонент списка с drag-and-drop для сортировки элементов.

## Установка и запуск

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/your-username/typescript-react-task.git
   cd typescript-react-task
