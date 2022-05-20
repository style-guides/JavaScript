const isTest = true

function logSomething (something: string) {
  console.info(
    isTest
      ? "Just something: " + something
      : "Is test",
  )
}

logSomething()
