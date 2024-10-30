import { ItemInterface } from "../interfaces/ItemInterface";

export class Query
{
  private _found: { deepItem: string, item: ItemInterface } = { deepItem: "", item: { id: 0, name: "", items: null }};
  private _savedTreeItems: string[] = [];

  searchRecursively = (word: string, items: ItemInterface[], deep: { name: string |undefined; value: string | number }): { deepItem: string, item: ItemInterface }|null => {
    items.forEach((item: ItemInterface) => {
      this._savedTreeItems.push(item.name);
      let result = false;
      if (!(item.items!.length === 0)) {
        if (item.name.toLowerCase() === word.toLowerCase()) {
            this._found = { deepItem: this._savedTreeItems[parseInt(`${deep.value}`)], item};
            result = true
        } else {
            this.searchRecursively(word, item.items as ItemInterface[], deep);
        }
      } else {
        if (item.name.toLowerCase() === word.toLowerCase()) {
          this._found = { deepItem: this._savedTreeItems[parseInt(`${deep.value}`)], item};
          result = true
        }
        this._savedTreeItems.pop();
      }
      if (result) {
        return item;
      }
    });
    this._savedTreeItems.pop();
  
    if (this._found.item.id === 0) {
      return null;
    }
  
    return this._found;
  }
}
