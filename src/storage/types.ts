import { Document, ObjectId } from "mongodb";

export interface ArbovirusEstimateDocument {
  _id: ObjectId;
  sex: string | undefined;
  ageMinimum: number | undefined;
  ageMaximum: number | undefined;
  ageGroup: string | undefined;
  assayOther: string | undefined;
  producer: string | undefined;
  producerOther: string | undefined;
  sampleFrame: string | undefined;
  sameFrameTargetGroup: string | undefined;
  sampleSize: number;
  serotype: string[];
  sampleNumerator: number | undefined;
  inclusionCriteria: string | undefined;
  pathogen: string;
  seroprevalence: number | undefined;
  country: string;
  state: string | undefined;
  city: string | undefined;
  antibodies: string[] | undefined;
  latitude: number;
  longitude: number;
  sampleStartDate: Date | undefined;
  sampleEndDate: Date | undefined;
  assay: string | undefined;
  url: string | undefined;
  sourceSheetId: string | undefined;
  antigen: string | undefined;
  whoRegion: string | undefined;
  sourceSheetName: string | undefined;
  estimateId: string | undefined;
  createdAt: Date;
  updatedAt: Date;
}
