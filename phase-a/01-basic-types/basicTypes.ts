// phase-a/01-basic-types/basicTypes.ts
// Phase A - 01: Type Annotations and Primitive Types
// Ref: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

const userName: string = "Eve";
const age: number = 30;
const isActive: boolean = true;

console.log(`[1] userName: ${userName}, age: ${age}, isAcitve: ${isActive}`);

// --- [2] Type inference: TypeScript figures out the type automatically ---
// When you assign a value at declaration, TypeScript infers the type.
// Hover over the variable in VSCode to see the inferred type shown as a tooltip.

const city = "Berlin"; // TypeScript infers: string
const score = 100; // TypeScript infers: number
const isLoggedIn = false; // TypeScript infers: boolean

// Rule of thumb: when the type is obvious from the value, let inference do the work.
// When the value is unknown at declaration time, annotate explicitly.

let description: string; // No value yet — annotation is required here
description = "TypeScript leaner";

console.log(`[2] city: ${city}, score: ${score}, description: ${description}`);
