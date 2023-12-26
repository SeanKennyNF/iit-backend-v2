import { TwoLetterIsoCountryCode } from "./country-codes";
import { GeocoderDataType, GeocodingApiFailureResponse, GeocodingApiRequestParameters, GeocodingApiSuccessResponse } from "./geocoding-api-client-types";

export interface LookupInGeocodingApiResponseCacheInput {
  geocodingApiRequestParams: GeocodingApiRequestParameters;
}

export interface SaveInGeocodingApiResponseCacheInput {
  key: {
    geocodingApiRequestParams: GeocodingApiRequestParameters
  };
  cacheValue: GeocodingApiResponseCacheValue;
}

export interface GeocodingApiResponseCacheKeyInput {
  geocodingApiRequestParams: GeocodingApiRequestParameters;
}

export type GeocodingApiResponseCacheKey = `mapboxSearchText:${string},countryCode:${TwoLetterIsoCountryCode},geocoderDataType:${GeocoderDataType}`;

export type GeocodingApiResponseCacheValue =
  | GeocodingApiSuccessResponse
  | GeocodingApiFailureResponse
  | undefined;
export type GeocodingApiResponseCache = Record<
  string,
  GeocodingApiResponseCacheValue
>;
