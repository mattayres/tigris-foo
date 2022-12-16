import { Tigris } from "@tigrisdata/core";
import { fooSchema } from "./schema/foo";

const tigris = new Tigris({
	serverUrl: "localhost:8081",
	projectName: "foo",
});

tigris.getDatabase().createOrUpdateCollection("foo", fooSchema);
