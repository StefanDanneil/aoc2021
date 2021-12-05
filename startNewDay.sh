#!/bin/bash

mkdir src/$1
cd src/$1

touch $1.input.ts
touch $1.spec.ts
touch $1.ts
touch index.ts

cat > index.ts << EOF
export * from "./$1";
EOF

cat > $1.ts << EOF
import { $1_input } from "./$1.input";

export function $1_1(input: any = $1_input) : number {  
    return 0;
}

export function $1_2(input: any = $1_input) :number {
    return 0;
}

EOF

cat > $1.input.ts << EOF
export const $1_input = [];

EOF

cat > $1.spec.ts << EOF
import { $1_1, $1_2 } from "./$1";

describe("$1_1", () => {
  test("it should return x given the example", () => {
    expect(
      $1_1([        
      ])
    ).toBe();
  });
});

describe.skip("$1_2", () => {
  test("it should return x given the example", () => {
    expect(
      $1_2([        
      ])
    ).toBe();
  });
});

EOF