import { getLatitude, getLongitude } from "../geocoding-api/coordinate-helpers.js";
import { Point } from "../geocoding-api/geocoding-api-client-types.js";
import { getCityLatLng } from "../geocoding-api/geocoding-functions.js";
import {
  AirtableEstimateFieldsAfterMergingEstimatesAndSourcesStep,
  AirtableSourceFieldsAfterMergingEstimatesAndSourcesStep,
} from "./merge-estimates-and-sources-step.js";

export type AirtableEstimateFieldsAfterLatLngGenerationStep =
  AirtableEstimateFieldsAfterMergingEstimatesAndSourcesStep & {
    latitude: number;
    longitude: number;
  };

export type AirtableSourceFieldsAfterLatLngGenerationStep =
  AirtableSourceFieldsAfterMergingEstimatesAndSourcesStep;

interface LatLngGenerationStepInput {
  allEstimates: AirtableEstimateFieldsAfterMergingEstimatesAndSourcesStep[];
  allSources: AirtableSourceFieldsAfterMergingEstimatesAndSourcesStep[];
}

interface LatLngGenerationStepOutput {
  allEstimates: AirtableEstimateFieldsAfterLatLngGenerationStep[];
  allSources: AirtableSourceFieldsAfterLatLngGenerationStep[];
}

export const latLngGenerationStep = async(
  input: LatLngGenerationStepInput
): Promise<LatLngGenerationStepOutput> => {
  const geocodingApiRequestReportFileName = './lat-lng-generation-report.txt';

  console.log(`Running step: latLngGenerationStep. Remaining estimates: ${input.allEstimates.length}`);

  const { allEstimates, allSources } = input;

  const estimatesWithLatitudesAndLongitudes: AirtableEstimateFieldsAfterLatLngGenerationStep[] = [];
  
  for(const estimate of allEstimates) {
    //const cityLatLng = await getCityLatLng({
    //  city: estimate.city,
    //  state: estimate.state,
    //  country: estimate.country,
    //  geocodingApiRequestReportFileName
    //})

    const cityLatLng:Point = [0, 0];

    if(cityLatLng) {
      estimatesWithLatitudesAndLongitudes.push({
        ...estimate,
        latitude: getLatitude(cityLatLng),
        longitude: getLongitude(cityLatLng)
      })
    }
  }

  return {
    allEstimates: estimatesWithLatitudesAndLongitudes,
    allSources: allSources,
  };
};
