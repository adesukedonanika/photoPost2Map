import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class PhotoPost2Map {
  readonly id: string;
  readonly datetime?: string;
  readonly geojson?: string;
  readonly direction?: number;
  readonly dateJST?: string;
  readonly timeJST?: string;
  readonly elevation?: number;
  readonly gnssfix?: boolean;
  constructor(init: ModelInit<PhotoPost2Map>);
  static copyOf(source: PhotoPost2Map, mutator: (draft: MutableModel<PhotoPost2Map>) => MutableModel<PhotoPost2Map> | void): PhotoPost2Map;
}