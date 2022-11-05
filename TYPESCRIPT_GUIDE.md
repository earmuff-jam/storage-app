# Read to quickly learn typescript

We can annotate a variable with a type like -
`const age: number = 20;`
Since we set it to a type of number, we cannot assign it a different type.

The typescript compiler can still know about the type of the object even though
we didn't specify the type. `const age = 20` is also a valid syntax. with typescript, the rule still stays the same. you cannot reassign it to something else.

## ANY TYPE

This type represents any type of variable. If you don't initialize a variable
the compiler assumes it is of any type. That means we can set it to a number and then later we can use it to string. HOWEVER, WE SHOULD AVOID USING THIS METHOD AS THIS GOES AGAINST THE WHOLE PURPOSE OF USING TYPESCRIPT.

## ARRAY TYPES

In javascript we can have array with different types. In typescript, we limit them to the type.
`const numbers: number[] = [1, 2, 3];`
With this too, `you can have ANY TYPE`. This again will bring issues because it is not a use of typescript.

## TUPLES

We can create tuples like -
`const user: [number, string] = [1, 'Mohit'];`
where we tell what the properties are like.

## Enumerators

To represent sizes of three sizes we can reference it via a enum.

`NOTE`

BY USING `CONST` IN THE FRONT OF THE ENUMERATOR WE ALLOW THE COMPILER TO WRITE BETTER CODE BASED ON THE ENUM. THIS IS ONE OF THE MOST IMPORTANT THINGS TO UNDERSTAND WITH TYPSCRIPT ENUMS.

```typescript
enum Size {
  Small,
  Medium,
  Large,
}
// we can also do this
enum Size {
  Small = "s",
  Medium = "m",
  Large = "l",
}
```

By doing this, we can do -

```typescript
const enum Size {
  Small = 1,
  Medium,
  Large,
}
const mySize: Size = Size.medium; // prints 2 ( because small is 1, and typescripts increments it by default)
```

## Working with Functions

```typescript
// number is what you return; void for null
function calculateTax(income: number): number {
  if (income < 50_000) {
    // ok to do numbers like this for readability
    return income * 1.2;
  }
  return income * 1.4;
}

function calculateTaxByYear(income: number, taxYear: number): number {
  if (income < 50_000) {
    return income * 1.2;
  }
  if (taxYear > 2016) {
    return income * 1.7; // for inflation
  }
  return income * 1.4;
}
```

`NOTE` YOU CAN MAKE PARAMETERS OPTIONAL BY PASSING THE < ? > AFTER THE VARIABLE.
FOR EXAMPLE, IN THE ABOVE CODE, TO MAKE `taxYear` OPTIONAL, YOU HAVE TO `taxYear?: number`.

However, that might not be the case like always. in the above eg, if `taxYear` is not present, how would `line 75 operate ?` you cannot compare `undefined` with `number` if you don't supply the argument. However, there is a better approach to this problem. We need to create `default` for that value so that if the value is not present said value would take precendence.

You can do such by - `function calculateTax(income: number, taxYear = 2022) ...`. Setting taxYear to default `2022`.

## Objects with Typescript

We can also apply type annotation here.

```typescript
// IN JS
const emp = {
  id: 1,
  name: "Mohit",
};

// IN TS
const emp: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "Mohit",
};
```
