export interface Task {
    id: number;
    name: string;
    money: number;
    lastUpdateDate: Date;
    createDate: Date;
    executorId: number;
    priorityId: number;
    statusId: number;
    statusPosition: number;
  }
  
  export interface User {
    id: number;
    name: string;
    imgUrl: string;
  }
  