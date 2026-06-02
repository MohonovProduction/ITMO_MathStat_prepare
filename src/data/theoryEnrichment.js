/** Обогащение всех 41 тем (examples C-15, interpretation, metrics, Танченко) */
export const theoryEnrichment = {
  1: {
    "tags": [
      "edf",
      "descriptive"
    ],
    "relatedIds": [
      2,
      3,
      9
    ],
    "rgrStepIds": [
      "setup",
      "descriptive"
    ],
    "interpretation": {
      "good": "Ступеньки близки к модели",
      "bad": "Большой зазор с $F_0$",
      "improve": "Увеличить $n$"
    },
    "metrics": [
      {
        "name": "F_n",
        "direction": "target",
        "plain": "Приближается к $F$"
      }
    ],
    "examples": [
      {
        "id": "ex-1-1",
        "datasetRef": "c15.X2",
        "title": "Эмпирическая функция распределения и её свойства · X2",
        "scenario": "По C-15 (X2, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X2",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition",
    "thinkingPrompt": "Почему $F_n$ равномерно сходится к $F$ при $n\\to\\infty$?",
    "modelAnswer": "Теорема Гливенко–Кантелли: $\\sup_x|F_n-F|\\to0$ п.н."
  },
  2: {
    "tags": [
      "basics"
    ],
    "relatedIds": [
      3,
      4,
      5
    ],
    "rgrStepIds": [
      "setup",
      "descriptive"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-2-1",
        "datasetRef": "c15.X3",
        "title": "Полигон частот · X3",
        "scenario": "По C-15 (X3, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X3",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  3: {
    "tags": [
      "basics"
    ],
    "relatedIds": [
      2,
      4,
      5
    ],
    "rgrStepIds": [
      "setup",
      "descriptive"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-3-1",
        "datasetRef": "c15.X4",
        "title": "Гистограмма · X4",
        "scenario": "По C-15 (X4, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X4",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  4: {
    "tags": [
      "basics"
    ],
    "relatedIds": [
      2,
      3,
      5
    ],
    "rgrStepIds": [
      "setup",
      "descriptive"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-4-1",
        "datasetRef": "c15.X1",
        "title": "Определение статистики и виды статистик · X1",
        "scenario": "По C-15 (X1, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X1",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  5: {
    "tags": [
      "basics"
    ],
    "relatedIds": [
      2,
      3,
      4
    ],
    "rgrStepIds": [
      "setup",
      "descriptive"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "D\\bar X",
        "direction": "lower",
        "plain": "При росте $n$ разброс среднего падает"
      }
    ],
    "examples": [
      {
        "id": "ex-5-1",
        "datasetRef": "c15.X2",
        "title": "Выборочные моменты k-го порядка · X2",
        "scenario": "По C-15 (X2, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X2",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ]
  },
  6: {
    "tags": [
      "basics"
    ],
    "relatedIds": [
      2,
      3,
      4
    ],
    "rgrStepIds": [
      "setup",
      "descriptive"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-6-1",
        "datasetRef": "c15.X3",
        "title": "Свойства выборочных моментов · X3",
        "scenario": "По C-15 (X3, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X3",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Как связаны выборка и оценка в теме «Свойства выборочных моментов»?",
    "modelAnswer": "Выборка — данные; статистика по выборке приближает характеристику генеральной совокупности при росте $n$.",
    "examRole": "thinking"
  },
  7: {
    "tags": [
      "basics"
    ],
    "relatedIds": [
      2,
      3,
      4
    ],
    "rgrStepIds": [
      "setup",
      "descriptive"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-7-1",
        "datasetRef": "c15.X4",
        "title": "Выборочная дисперсия и несмещённая выборочная дисперсия · X4",
        "scenario": "По C-15 (X4, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X4",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  8: {
    "tags": [
      "basics"
    ],
    "relatedIds": [
      2,
      3,
      4
    ],
    "rgrStepIds": [
      "setup",
      "descriptive"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-8-1",
        "datasetRef": "c15.X1",
        "title": "Выборочная мода · X1",
        "scenario": "По C-15 (X1, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X1",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  9: {
    "tags": [
      "basics"
    ],
    "relatedIds": [
      2,
      3,
      4
    ],
    "rgrStepIds": [
      "setup",
      "descriptive"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-9-1",
        "datasetRef": "c15.X2",
        "title": "Выборочная медиана · X2",
        "scenario": "По C-15 (X2, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X2",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  10: {
    "tags": [
      "basics"
    ],
    "relatedIds": [
      2,
      3,
      4
    ],
    "rgrStepIds": [
      "setup",
      "descriptive"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-10-1",
        "datasetRef": "c15.X3",
        "title": "Квантиль · X3",
        "scenario": "По C-15 (X3, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X3",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  33: {
    "tags": [
      "basics"
    ],
    "relatedIds": [
      2,
      3,
      4
    ],
    "rgrStepIds": [
      "setup",
      "descriptive"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-33-1",
        "datasetRef": "c15.X2",
        "title": "Генеральная совокупность (примеры на разных законах) · X2",
        "scenario": "По C-15 (X2, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X2",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  34: {
    "tags": [
      "basics"
    ],
    "relatedIds": [
      2,
      3,
      4
    ],
    "rgrStepIds": [
      "setup",
      "descriptive"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-34-1",
        "datasetRef": "c15.X3",
        "title": "Выборка из генеральной совокупности · X3",
        "scenario": "По C-15 (X3, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X3",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  35: {
    "tags": [
      "basics"
    ],
    "relatedIds": [
      2,
      3,
      4
    ],
    "rgrStepIds": [
      "setup",
      "descriptive"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-35-1",
        "datasetRef": "c15.X4",
        "title": "Среднее выборочное и выборочная дисперсия · X4",
        "scenario": "По C-15 (X4, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X4",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ]
  },
  11: {
    "tags": [
      "methods"
    ],
    "relatedIds": [
      15,
      16,
      17
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "statistic",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-11-1",
        "datasetRef": "c15.X4",
        "title": "Метод моментов · X4",
        "scenario": "По C-15 (X4, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X4",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  12: {
    "tags": [
      "methods"
    ],
    "relatedIds": [
      15,
      16,
      17
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "statistic",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-12-1",
        "datasetRef": "c15.X1",
        "title": "Метод максимального правдоподобия (ММП) · X1",
        "scenario": "По C-15 (X1, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X1",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  15: {
    "tags": [
      "methods"
    ],
    "relatedIds": [
      12,
      16,
      17
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "statistic",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-15-1",
        "datasetRef": "c15.X4",
        "title": "Свойства оценок метода моментов · X4",
        "scenario": "По C-15 (X4, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X4",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Практический смысл «Свойства оценок метода моментов» при проверке гипотез?",
    "modelAnswer": "Вывод о параметре с контролем ошибок I/II рода и интерпретацией на бытовом языке.",
    "examRole": "thinking"
  },
  16: {
    "tags": [
      "methods"
    ],
    "relatedIds": [
      12,
      15,
      17
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "statistic",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-16-1",
        "datasetRef": "c15.X1",
        "title": "Свойства метода максимального правдоподобия · X1",
        "scenario": "По C-15 (X1, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X1",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Когда t вместо z?",
    "modelAnswer": "Когда $\\sigma^2$ неизвестна — оцениваем через $S^2$.",
    "examRole": "both"
  },
  17: {
    "tags": [
      "methods"
    ],
    "relatedIds": [
      12,
      15,
      16
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "statistic",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-17-1",
        "datasetRef": "c15.X2",
        "title": "Сравнение точечных оценок · X2",
        "scenario": "По C-15 (X2, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X2",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Практический смысл «Сравнение точечных оценок» при проверке гипотез?",
    "modelAnswer": "Вывод о параметре с контролем ошибок I/II рода и интерпретацией на бытовом языке.",
    "examRole": "thinking"
  },
  18: {
    "tags": [
      "methods"
    ],
    "relatedIds": [
      12,
      15,
      16
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "statistic",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-18-1",
        "datasetRef": "c15.X3",
        "title": "Информация Фишера · X3",
        "scenario": "По C-15 (X3, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X3",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Практический смысл «Информация Фишера» при проверке гипотез?",
    "modelAnswer": "Вывод о параметре с контролем ошибок I/II рода и интерпретацией на бытовом языке.",
    "examRole": "thinking"
  },
  19: {
    "tags": [
      "methods"
    ],
    "relatedIds": [
      12,
      15,
      16
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "statistic",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-19-1",
        "datasetRef": "c15.X4",
        "title": "Неравенство Рао–Крамера · X4",
        "scenario": "По C-15 (X4, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X4",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ]
  },
  20: {
    "tags": [
      "methods"
    ],
    "relatedIds": [
      12,
      15,
      16
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "statistic",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-20-1",
        "datasetRef": "c15.X1",
        "title": "Критерий проверки гипотез · X1",
        "scenario": "По C-15 (X1, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X1",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  21: {
    "tags": [
      "methods"
    ],
    "relatedIds": [
      12,
      15,
      16
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "statistic",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-21-1",
        "datasetRef": "c15.X2",
        "title": "Ошибки первого и второго рода · X2",
        "scenario": "По C-15 (X2, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X2",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Практический смысл «Ошибки первого и второго рода» при проверке гипотез?",
    "modelAnswer": "Вывод о параметре с контролем ошибок I/II рода и интерпретацией на бытовом языке.",
    "examRole": "thinking"
  },
  22: {
    "tags": [
      "methods"
    ],
    "relatedIds": [
      12,
      15,
      16
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "statistic",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-22-1",
        "datasetRef": "c15.X3",
        "title": "Гипотезы и критическая область · X3",
        "scenario": "По C-15 (X3, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X3",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  23: {
    "tags": [
      "methods"
    ],
    "relatedIds": [
      12,
      15,
      16
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "statistic",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-23-1",
        "datasetRef": "c15.X4",
        "title": "Проверка простых гипотез с известной дисперсией (z-критерий) · X4",
        "scenario": "По C-15 (X4, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X4",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  24: {
    "tags": [
      "methods"
    ],
    "relatedIds": [
      12,
      15,
      16
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "statistic",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-24-1",
        "datasetRef": "c15.X1",
        "title": "Критерий Стьюдента · X1",
        "scenario": "По C-15 (X1, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X1",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Практический смысл «Критерий Стьюдента» при проверке гипотез?",
    "modelAnswer": "Вывод о параметре с контролем ошибок I/II рода и интерпретацией на бытовом языке.",
    "examRole": "thinking"
  },
  25: {
    "tags": [
      "methods"
    ],
    "relatedIds": [
      12,
      15,
      16
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "statistic",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-25-1",
        "datasetRef": "c15.X2",
        "title": "Критерии, основанные на доверительных интервалах · X2",
        "scenario": "По C-15 (X2, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X2",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Практический смысл «Критерии, основанные на доверительных интервалах» при проверке гипотез?",
    "modelAnswer": "Вывод о параметре с контролем ошибок I/II рода и интерпретацией на бытовом языке.",
    "examRole": "thinking"
  },
  30: {
    "tags": [
      "methods"
    ],
    "relatedIds": [
      12,
      15,
      16
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "statistic",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-30-1",
        "datasetRef": "c15.X3",
        "title": "Интервальное оценивание: доверительный интервал · X3",
        "scenario": "По C-15 (X3, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X3",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Практический смысл «Интервальное оценивание: доверительный интервал» при проверке гипотез?",
    "modelAnswer": "Вывод о параметре с контролем ошибок I/II рода и интерпретацией на бытовом языке.",
    "examRole": "thinking"
  },
  31: {
    "tags": [
      "methods"
    ],
    "relatedIds": [
      12,
      15,
      16
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "statistic",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-31-1",
        "datasetRef": "c15.X4",
        "title": "Асимптотический доверительный интервал · X4",
        "scenario": "По C-15 (X4, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X4",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Практический смысл «Асимптотический доверительный интервал» при проверке гипотез?",
    "modelAnswer": "Вывод о параметре с контролем ошибок I/II рода и интерпретацией на бытовом языке.",
    "examRole": "thinking"
  },
  32: {
    "tags": [
      "methods"
    ],
    "relatedIds": [
      12,
      15,
      16
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "statistic",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-32-1",
        "datasetRef": "c15.X1",
        "title": "Уровень доверия (определение) · X1",
        "scenario": "По C-15 (X1, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X1",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Практический смысл «Уровень доверия (определение)» при проверке гипотез?",
    "modelAnswer": "Вывод о параметре с контролем ошибок I/II рода и интерпретацией на бытовом языке.",
    "examRole": "thinking"
  },
  13: {
    "tags": [
      "analysis"
    ],
    "relatedIds": [
      26,
      27,
      28
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-13-1",
        "datasetRef": "c15.X2",
        "title": "Критерий согласия · X2",
        "scenario": "По C-15 (X2, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X2",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  14: {
    "tags": [
      "analysis"
    ],
    "relatedIds": [
      26,
      27,
      28
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "\\alpha",
        "direction": "lower",
        "plain": "Меньше ложных тревог"
      },
      {
        "name": "1-\\beta",
        "direction": "higher",
        "plain": "Выше мощность"
      }
    ],
    "examples": [
      {
        "id": "ex-14-1",
        "datasetRef": "c15.X3",
        "title": "Общий вид критериев согласия · X3",
        "scenario": "По C-15 (X3, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X3",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition",
    "thinkingPrompt": "Что при уменьшении $\\alpha$?",
    "modelAnswer": "Реже ошибка I рода, но падает мощность."
  },
  26: {
    "tags": [
      "analysis"
    ],
    "relatedIds": [
      14,
      27,
      28
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-26-1",
        "datasetRef": "c15.X3",
        "title": "Свойства критериев согласия · X3",
        "scenario": "По C-15 (X3, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X3",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Когда уместен подход «Свойства критериев согласия»?",
    "modelAnswer": "Когда выполнены предпосылки критерия и нужна проверка согласия или связи.",
    "examRole": "thinking"
  },
  27: {
    "tags": [
      "analysis"
    ],
    "relatedIds": [
      14,
      26,
      28
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-27-1",
        "datasetRef": "c15.X4",
        "title": "Критерий Колмогорова · X4",
        "scenario": "По C-15 (X4, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X4",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  28: {
    "tags": [
      "analysis"
    ],
    "relatedIds": [
      14,
      26,
      27
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-28-1",
        "datasetRef": "c15.X1",
        "title": "Критерий Пирсона (χ²) · X1",
        "scenario": "По C-15 (X1, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X1",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "examRole": "definition"
  },
  29: {
    "tags": [
      "analysis"
    ],
    "relatedIds": [
      14,
      26,
      27
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-29-1",
        "datasetRef": "c15.X2",
        "title": "Теорема Пирсона · X2",
        "scenario": "По C-15 (X2, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X2",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Когда уместен подход «Теорема Пирсона»?",
    "modelAnswer": "Когда выполнены предпосылки критерия и нужна проверка согласия или связи.",
    "examRole": "thinking"
  },
  36: {
    "tags": [
      "analysis"
    ],
    "relatedIds": [
      14,
      26,
      27
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-36-1",
        "datasetRef": "c15.X1",
        "title": "Линейная регрессия · X1",
        "scenario": "По C-15 (X1, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X1",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Когда уместен подход «Линейная регрессия»?",
    "modelAnswer": "Когда выполнены предпосылки критерия и нужна проверка согласия или связи.",
    "examRole": "thinking"
  },
  37: {
    "tags": [
      "analysis"
    ],
    "relatedIds": [
      14,
      26,
      27
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-37-1",
        "datasetRef": "c15.X2",
        "title": "Методы нахождения коэффициентов линейной регрессии · X2",
        "scenario": "По C-15 (X2, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X2",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ]
  },
  38: {
    "tags": [
      "analysis"
    ],
    "relatedIds": [
      14,
      26,
      27
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-38-1",
        "datasetRef": "c15.X3",
        "title": "Частный случай линейной регрессии · X3",
        "scenario": "По C-15 (X3, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X3",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ]
  },
  39: {
    "tags": [
      "analysis"
    ],
    "relatedIds": [
      14,
      26,
      27
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-39-1",
        "datasetRef": "c15.X4",
        "title": "Ковариация и корреляция · X4",
        "scenario": "По C-15 (X4, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X4",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Когда уместен подход «Ковариация и корреляция»?",
    "modelAnswer": "Когда выполнены предпосылки критерия и нужна проверка согласия или связи.",
    "examRole": "thinking"
  },
  40: {
    "tags": [
      "analysis"
    ],
    "relatedIds": [
      14,
      26,
      27
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-40-1",
        "datasetRef": "c15.X1",
        "title": "Нахождение коэффициентов регрессии (общий случай) · X1",
        "scenario": "По C-15 (X1, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X1",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Когда уместен подход «Нахождение коэффициентов регрессии (общий случай)»?",
    "modelAnswer": "Когда выполнены предпосылки критерия и нужна проверка согласия или связи.",
    "examRole": "thinking"
  },
  41: {
    "tags": [
      "analysis"
    ],
    "relatedIds": [
      14,
      26,
      27
    ],
    "rgrStepIds": [
      "criterion",
      "hypothesis",
      "decision",
      "interpret"
    ],
    "interpretation": {
      "good": "Результат согласуется с задачей и предпосылками.",
      "bad": "Вывод противоречит данным или слишком силён при малом $n$.",
      "improve": "Проверить C-15, увеличить $n$, уточнить критерий или $\\alpha$."
    },
    "metrics": [
      {
        "name": "Надёжность",
        "direction": "context",
        "plain": "Растёт с $n$ и при корректном методе."
      }
    ],
    "examples": [
      {
        "id": "ex-41-1",
        "datasetRef": "c15.X2",
        "title": "Доверительный интервал коэффициентов линейной регрессии · X2",
        "scenario": "По C-15 (X2, $n=50$) проиллюстрируйте тему.",
        "steps": [
          "Столбец X2",
          "Расчёт/график",
          "Вывод"
        ],
        "result": "Пример на сквозном датасете C-15."
      }
    ],
    "thinkingPrompt": "Когда уместен подход «Доверительный интервал коэффициентов линейной регрессии»?",
    "modelAnswer": "Когда выполнены предпосылки критерия и нужна проверка согласия или связи.",
    "examRole": "thinking"
  },
}

export function enrichTheoryItem(item) {
  const extra = theoryEnrichment[item.id]
  return extra ? { ...item, ...extra } : item
}

export function enrichedTheoryList(list) {
  return list.map(enrichTheoryItem)
}
