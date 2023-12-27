import { MongoClient } from "mongodb";
import { ArbovirusEstimate, QueryResolvers } from "./graphql-types/__generated__/graphql-types";
import { ArbovirusEstimateDocument } from "../storage/types";

interface GenerateArboResolversInput {
  mongoClient: MongoClient;
}

interface GenerateArboResolversOutput {
  arboResolvers: { Query: QueryResolvers }
}

const filterUndefinedValuesFromArray = <T>(array: (T | undefined)[]): T[] => array.filter((element): element is T => !!element);

const transformArbovirusEstimateDocumentForApi = (document: ArbovirusEstimateDocument): ArbovirusEstimate => {
  return {
    id: document._id.toHexString(),
    antibodies: document.antibodies ?? [],
    antigen: document.antigen,
    country: document.country,
    latitude: document.latitude,
    longitude: document.longitude,
    createdAt: document.createdAt.toISOString(),
    estimateId: document.estimateId,
    pathogen: document.pathogen,
    sampleSize: document.sampleSize,
  }
}

export const generateArboResolvers = (input: GenerateArboResolversInput): GenerateArboResolversOutput => {
  const { mongoClient } = input;

  const databaseName = process.env.DATABASE_NAME;

  if(!databaseName) {
    throw new Error("Unable to find value for DATABASE_NAME. Please make sure you have specified one in your .env file")
  }

  const arbovirusEstimates = async () => {
    const databaseEstimates = await mongoClient.db(databaseName).collection<ArbovirusEstimateDocument>('arbovirusEstimates').find({}).toArray();

    return databaseEstimates.map((estimate) => transformArbovirusEstimateDocumentForApi(estimate));
  }

  const arbovirusFilterOptions = async () => {
    const [
      ageGroup,
      antibody,
      assay,
      country,
      pathogen,
      sampleFrame,
      sex,
      whoRegion
    ] = await Promise.all([
      mongoClient.db(databaseName).collection<ArbovirusEstimateDocument>('arbovirusEstimates').distinct('ageGroup').then((elements) => filterUndefinedValuesFromArray(elements)),
      mongoClient.db(databaseName).collection<ArbovirusEstimateDocument>('arbovirusEstimates').distinct('antibodies').then((elements) => filterUndefinedValuesFromArray(elements)),
      mongoClient.db(databaseName).collection<ArbovirusEstimateDocument>('arbovirusEstimates').distinct('assay').then((elements) => filterUndefinedValuesFromArray(elements)),
      mongoClient.db(databaseName).collection<ArbovirusEstimateDocument>('arbovirusEstimates').distinct('country').then((elements) => filterUndefinedValuesFromArray(elements)),
      mongoClient.db(databaseName).collection<ArbovirusEstimateDocument>('arbovirusEstimates').distinct('pathogen').then((elements) => filterUndefinedValuesFromArray(elements)),
      mongoClient.db(databaseName).collection<ArbovirusEstimateDocument>('arbovirusEstimates').distinct('sampleFrame').then((elements) => filterUndefinedValuesFromArray(elements)),
      mongoClient.db(databaseName).collection<ArbovirusEstimateDocument>('arbovirusEstimates').distinct('sex').then((elements) => filterUndefinedValuesFromArray(elements)),
      mongoClient.db(databaseName).collection<ArbovirusEstimateDocument>('arbovirusEstimates').distinct('whoRegion').then((elements) => filterUndefinedValuesFromArray(elements)),
    ])

    return {
      ageGroup,
      antibody,
      assay,
      country,
      pathogen,
      sampleFrame,
      sex,
      whoRegion,
    }
  }

  return {
    arboResolvers: {
      Query: {
        arbovirusEstimates,
        arbovirusFilterOptions
      }
    }
  }
}