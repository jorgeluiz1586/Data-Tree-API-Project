import { ServiceInterface } from "../interfaces/services/ServiceInterface";
import { ItemInterface } from "../interfaces/models/ItemInterface";

export class DataTreeController
{
    public constructor(private _service: ServiceInterface)
    {}

    public async getDataTree(): Promise<string|null>
    {
        let data = await this._service.all();
        return data;
    }

    public async createDataTree(item: ItemInterface): Promise<string|null>
    {
        try {
            if (!item) {
                return null;
            }
            await this._service.create(item);
            return "success"; 
        } catch(e: unknown) {
            throw new Error((e as Error).message);
        }
    }
}
