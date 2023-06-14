import format from "pg-format";
import { client } from "../database";
import {
  IDeveloper,
  TDeveloperCreate,
  TDeveloperResult,
  TDeveloperUpdate,
} from "../interfaces";

const create = async (payload: TDeveloperCreate): Promise<IDeveloper> => {
  const queryFormat: string = format(
    'INSERT INTO "developers" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );
  const query: TDeveloperResult = await client.query(queryFormat);
  return query.rows[0];
};

const retrieve = async (developerId: string): Promise<IDeveloper> => {
  const queryFormat: string = format(
    `
    SELECT
    d.id AS "developerId",
    d.name AS "developerName",
    d.email as "developerEmail",
    i."developerSince" AS "developerInfoDeveloperSince", 
    i."preferredOS" as "developerInfoPreferredOS"
    FROM 
    developers AS "d"
    LEFT JOIN
    "developerInfos" as i ON i."developerId" = d.id
    WHERE
    d.id = $1
    `
  )
  const queryResult: TDeveloperResult = await client.query(queryFormat, [developerId]);
  return queryResult.rows[0]
}

const destroy = async (developerId: string): Promise<void> => {
  await client.query('DELETE FROM "developers" WHERE "id" = $1;', [
    developerId,
  ]);
};

const update = async (payload: TDeveloperUpdate,developerId: string): Promise<IDeveloper> => {
  const queryFormat: string = format(
    'UPDATE "developers" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );
  const query: TDeveloperResult = await client.query(queryFormat, [
    developerId,
  ]);
  return query.rows[0];
};

export default { create, retrieve, destroy, update };
