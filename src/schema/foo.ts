import { TigrisCollectionType, TigrisDataTypes, TigrisSchema } from "@tigrisdata/core";

export interface Foo extends TigrisCollectionType {
	id: string;
	date: Date;
}

export const fooSchema: TigrisSchema<Foo> = {
	id: {
		type: TigrisDataTypes.STRING,
	},
	date: {
		type: TigrisDataTypes.DATE_TIME,
	},
};
