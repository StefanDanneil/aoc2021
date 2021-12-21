import { day12_input } from "./day12.input";

export type Cave = {
  name: string;
  isBig: boolean;
  connects_to: string[];
};

export function day12_1(input: string = day12_input): number {
  const caves = parseInput(input);
  const paths = findPaths(caves);
  return paths.length;
}

export function parseInput(input: string): Cave[] {
  const uniqueNames: string[] = [];
  const caves: Cave[] = [];
  const connections: string[][] = input
    .split("\n")
    .map((l) => l.split("-").map((c) => c.trim()));

  connections.forEach((c) => {
    c.forEach((name) => {
      if (!uniqueNames.includes(name)) {
        uniqueNames.push(name);
        caves.push({
          name,
          isBig: name.toLowerCase() !== name,
          connects_to: [],
        });
      }
    });
  });

  connections.forEach((c) => {
    const firstCave = caves.filter((ca) => ca.name === c[0]).shift();
    const secondCave = caves.filter((ca) => ca.name === c[1]).shift();

    if (
      firstCave?.name &&
      secondCave?.name &&
      firstCave?.name !== "start" &&
      secondCave?.name !== "end"
    ) {
      firstCave.connects_to.push(secondCave.name);
      secondCave.connects_to.push(firstCave.name);
    } else if (
      firstCave?.name &&
      secondCave?.name &&
      secondCave?.name === "start"
    ) {
      secondCave.connects_to.push(firstCave.name);
    } else if (
      firstCave?.name &&
      secondCave?.name &&
      firstCave.name === "start"
    ) {
      firstCave.connects_to.push(secondCave.name);
    } else if (
      firstCave?.name &&
      secondCave?.name &&
      firstCave.name === "end"
    ) {
      secondCave.connects_to.push(firstCave.name);
    } else if (
      firstCave?.name &&
      secondCave?.name &&
      secondCave.name === "end"
    ) {
      firstCave.connects_to.push(secondCave.name);
    }
  });

  return caves;
}

export function findPaths(
  caves: Cave[],
  canVisitSmallCaveMoreThanOnce: boolean = false
): string[] {
  const startNode = caves.filter((c) => c.name === "start").shift();

  if (!startNode) {
    return [];
  }

  const paths = pathFind(startNode, caves, [], canVisitSmallCaveMoreThanOnce);

  return paths;
}

export function pathFind(
  node: Cave,
  caves: Cave[],
  currentPath: string[],
  canVisitSmallCaveMoreThanOnce: boolean = false,
  foundPaths: string[] = []
) {
  let path: string[] = currentPath.slice(
    0,
    currentPath.length - 1 === -1 ? 0 : currentPath.length
  );

  path.push(node.name);

  if (node.name === "end") {
    foundPaths.push(path.join(","));
    return foundPaths;
  }

  node.connects_to.forEach((c) => {
    const childNode = caves.filter((f) => f.name === c).shift();

    if (
      childNode &&
      (childNode?.isBig || !currentPath.includes(childNode.name))
    ) {
      pathFind(
        childNode,
        caves,
        path,
        canVisitSmallCaveMoreThanOnce,
        foundPaths
      );
    }
  });

  return foundPaths;
}

export function day12_2(input: string = day12_input): number {
  const caves = parseInput(input);
  const paths = findPaths(caves, true);
  return paths.length;
}
