import { resolve } from "path";
import { unlinkSync } from "node:fs";
import { RepositoryInterface } from "../interfaces/repositories/RepositoryInterface";

export class DataTreeRepository implements RepositoryInterface
{
    public async all(): Promise<any>
    {
        let path = resolve(import.meta.dir+"/../../../dicts/data.json");
        let database = await Bun.file(path).text();

        return Promise.resolve(JSON.parse(database));
    }

    public async get(id: number): Promise<any>
    {
        return Promise.resolve({});
    }

    public async create(data: any): Promise<any>
    {
        let path = resolve(import.meta.dir+"/../../../dicts/data.json");
        let database = await Bun.file(path).text();

        let dataObj = (JSON.parse(database))
        if (Array.isArray(data)) {
            dataObj = data;
        } else {
            dataObj.push(data);
        }
        let content = JSON.stringify(dataObj, null, '\t');
        unlinkSync(path);
        await Bun.write(path, content);

        return Promise.resolve({});
    }

    public async update(id: number, data: any): Promise<any>
    {
        return Promise.resolve({});
    }

    public async delete(id: number): Promise<any>
    {
        return Promise.resolve({});
    }
}
