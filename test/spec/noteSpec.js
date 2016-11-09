var test = new FeatureTest()

test.visit("http://localhost:8080/", function () {
  test.toHaveText("First note");
})
