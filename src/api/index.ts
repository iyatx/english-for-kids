import { ICategory } from '@interfaces/categories';

export const baseURL = 'https://azizbeksavkimov-server-efk.herokuapp.com';

interface IUser {
  username: string;
  password: string;
}

export const userLogin = async (user: IUser): Promise<string> => {
  const data = await fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  });
  const res: string = await data.json();
  return res;
};

export const getAllCategories = async (): Promise<Array<ICategory>> => {
  const data = await fetch(`${baseURL}/category`);
  const res: ICategory[] = await data.json();
  return res;
}