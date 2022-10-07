import { APIBase } from "./APIBase";

export type TMenuItemModel = {
  id: string;
  text: string;
  visible: boolean;
}

class APIMenu extends APIBase {
  constructor() {
    super('/menu');
  }

  public get(): Promise<TMenuItemModel[]> {
    return this.http.get('');
  }

  public addItem(data: TMenuItemModel) {
    return this.http.put('/add', data);
  }

  public removeItem(data: TMenuItemModel) {
    return this.http.put('/remove', data);
  }

  public changeItem(data: TMenuItemModel) {
    return this.http.put('/change', data);
  }
}

export default new APIMenu();
