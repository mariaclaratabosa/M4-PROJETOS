import { QueryResult } from "pg";

interface IDeveloperInfos {
  id: number;
  developerSince: string;
  preferredOS: "Windows" | "Linux" | "MacOS";
  developerId: number;
}

type TDeveloperInfosCreate = Omit<IDeveloperInfos, "id">;
type TDeveloperInfosResult = QueryResult<IDeveloperInfos>;

export { IDeveloperInfos, TDeveloperInfosCreate, TDeveloperInfosResult };
