# Матстат · подготовка к экзамену

Одностраничное приложение (SPA) на **Vue 3 + Vite** для подготовки к экзамену по математической статистике: подробная теория с мнемониками и формулами (KaTeX), карточки с переворотом (3 режима), воронка из трёх уровней, мини-тесты и пробный экзамен. Весь прогресс сохраняется в `localStorage`.

## Возможности

- **Теория** — разбор всех 41 экзаменационного вопроса: определение, формулы, расшифровка каждого обозначения, объяснение «на пальцах» и мнемоника.
- **Карточки** — три колоды (термины / формулы / понимание) с переворотом и кнопками «Знаю / Не знаю».
- **Воронка** — три уровня («Основы», «Методы», «Анализ данных»). Следующий уровень открывается при наборе ≥ 80% в мини-тесте текущего.
- **Мини-тесты** — 5 случайных вопросов уровня с мгновенной обратной связью и пояснениями.
- **Пробный экзамен** — 15 вопросов со всех уровней, без возврата назад, опциональный таймер; разбор ошибок, повтор ошибок, сохранение лучшего результата.
- **Адаптив** — интерфейс рассчитан на мобильные устройства.

## Технологии

Vue 3 (Composition API, `<script setup>`), Vue Router (hash-режим), Pinia, Tailwind CSS, KaTeX, Vite.

## Структура

```
src/
  components/   # Flashcard, MiniTest, ExamTest, QuestionCard, Formula, MathText, ...
  views/        # Home, Theory, Flashcards, Funnel, MiniTest, Exam, Results
  composables/  # useFlashcards, useFunnel, useTest
  store/        # Pinia store прогресса (persist в localStorage)
  data/         # levels, theory, flashcards, questions
  router/       # маршруты
```

## Локальный запуск

```bash
npm install     # установка зависимостей
npm run dev     # режим разработки → http://localhost:5173/ITMO_MathStat_prepare/
npm run build   # production-сборка в dist/
npm run preview # локальный просмотр собранной версии
```

## Деплой на GitHub Pages

1. Создайте на GitHub репозиторий с именем **`ITMO_MathStat_prepare`** (имя должно совпадать с `base` в `vite.config.js`).
2. Свяжите локальный проект с репозиторием и запушьте код:

   ```bash
   git init
   git add .
   git commit -m "Инициализация приложения для подготовки к экзамену"
   git branch -M main
   git remote add origin https://github.com/<ВАШ_ЛОГИН>/ITMO_MathStat_prepare.git
   git push -u origin main
   ```

3. Соберите и опубликуйте на ветку `gh-pages`:

   ```bash
   npm run deploy
   ```

4. В настройках репозитория **Settings → Pages** выберите источник **ветка `gh-pages`, папка `/ (root)`**.
5. Сайт будет доступен по адресу:

   ```
   https://<ВАШ_ЛОГИН>.github.io/ITMO_MathStat_prepare/
   ```

## Что менять под свой репозиторий

| Где | Что |
| --- | --- |
| `vite.config.js` → `base` | `'/ITMO_MathStat_prepare/'` — заменить на `'/<имя-вашего-репозитория>/'` |
| команда `git remote add origin …` | URL вашего репозитория |
| README (адреса) | подставить ваш GitHub-логин |

> Если назовёте репозиторий иначе, обязательно поменяйте `base` в `vite.config.js` — иначе на GitHub Pages не подгрузятся стили и скрипты.
