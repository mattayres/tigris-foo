import { Tigris } from "@tigrisdata/core";

const tigris = new Tigris({
	serverUrl: "localhost:8081",
	projectName: "foo",
});

tigris.registerSchemas("src/schema");
