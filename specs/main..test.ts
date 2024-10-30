import { expect, test } from "bun:test";
import { $ } from "bun";
import mock from "../mocks/mock";

test("Test deep search using text with 145 characters", async () => {
    await $`bun run ./cli.ts --deep 2 --verbose "${mock.minTextExample}" ""`;
});

test("Test deep search using text with 5000 characters", async () => {
    await $`bun run ./cli.ts --deep 2 --verbose "${mock.longTextExample}" ""`;
});
