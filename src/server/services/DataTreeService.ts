import { ServiceInterface } from "../interfaces/services/ServiceInterface";
import { RepositoryInterface } from "../interfaces/repositories/RepositoryInterface";

export class DataTreeService implements ServiceInterface
{
    public constructor(private readonly _repository: RepositoryInterface)
    {}

    public async all(): Promise<any>
    {
        return await this._repository.all();
    }

    public async get(id: number): Promise<any>
    {
        return await this._repository.get(id);
    }

    public async create(data: any): Promise<any>
    {
        return await this._repository.create(data);
    }

    public async update(id: number, data: any): Promise<any>
    {
        return await this._repository.update(id, data);
    }

    public async delete(id: number): Promise<any>
    {
        return await this._repository.delete(id);
    }
}
