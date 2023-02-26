export interface Task {
    id: number;
    name: string;
    money?: number;
    lastUpdateDate?: Date;
    createDate: Date;
    executorId: number;
    workingGroupId: number;
    priorityId: number;
    statusId: number;
    statusPosition: number;
    comment?: string;
  }
  
  export interface User {
    id: number;
    name: string;
    imgUrl: string;
    status?: string;
  }
  
  export interface Group {
    id: number
  }

  export interface Status {
    id: number;
    name: string
  }

  export interface Priority {
    id: number;
    name: string
  }