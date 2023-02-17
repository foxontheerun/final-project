import { User, Task } from './interfaces';

export const users: User[] = [
  {
    id: 0,
    name: 'Джон Траволта',
    imgUrl: 'https://resizer.mail.ru/p/f64bf0c6-e56d-57e5-accd-aa43f1cacb65/AAACrTgdpTqavpKX6dnuSskiEX_smfALVExuzUAvto9M2qvgG5Zq_PF_ONiykubHW0WMeKB_NX3SImE_ZVxl4c05PJk.jpg'
  },
  {
    id: 1,
    name: 'Ума Турман',
    imgUrl: 'https://lostfilm.info/images/photo_actor/85/303380_846260.jpg'
  },
  {
    id: 2,
    name: 'Сэмюэл Л. Джексон',
    imgUrl: 'https://s3.vcdn.biz/static/f/2312447601/image.jpg'
  }
];

export const taskStatuses = [
  {
    id: 0,
    name: 'Входящие'
  },
  {
    id: 1,
    name: 'В работе'
  },
  {
    id: 2,
    name: 'На согласовании'
  },
  {
    id: 3,
    name: 'Готово'
  },
  {
    id: 4,
    name: 'К отгрузке'
  }
];

export const taskPriorities = [
  {
    id: 0,
    name: 'Низкий',
  },
  {
    id: 1,
    name: 'Средний',
  },
  {
    id: 2,
    name: 'Высокий',
  },
  {
    id: 3,
    name: 'Критический',
  }
];

export const beginTasks: Task[] = [
  {
    id: 0,
    name: 'Обновление ПО',
    money: 2500,
    lastUpdateDate: new Date(),
    createDate: new Date(),
    executorId: 0,
    priorityId: 0,
    statusId: 0,
    statusPosition: 0,
    comment: ''
  },
  {
    id: 1,
    name: 'Ошибка датчика',
    money: 500,
    lastUpdateDate: new Date(),
    createDate: new Date(),
    executorId: 1,
    priorityId: 3,
    statusId: 0,
    statusPosition: 1,
    comment: ''
  },
  {
    id: 2,
    name: 'Подключение системы',
    money: 500,
    lastUpdateDate: new Date(),
    createDate: new Date(),
    executorId: 1,
    priorityId: 1,
    statusId: 1,
    statusPosition: 0,
    comment: ''
  },
  {
    id: 3,
    name: 'Тех обслуживание',
    money: 500,
    lastUpdateDate: new Date(),
    createDate: new Date(),
    executorId: 0,
    priorityId: 0,
    statusId: 2,
    statusPosition: 0,
    comment: ''
  },
  {
    id: 4,
    name: 'Корректировка значений по ВКУ-321',
    money: 500,
    lastUpdateDate: new Date(),
    createDate: new Date(),
    executorId: 2,
    priorityId: 2,
    statusId: 3,
    statusPosition: 0,
    comment: ''
  },
];
