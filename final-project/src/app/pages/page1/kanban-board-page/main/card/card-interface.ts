export interface Card {
    id: number;
    groupId: number;
    name: string;
    email: string;
    money: number;
    date: string;
    dateChange: string;
    executor: string;
}

export interface Group {
    groupId: number;
    groupName: string;
}