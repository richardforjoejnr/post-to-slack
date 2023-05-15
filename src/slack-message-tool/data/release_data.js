exports.releaseData = (data) => {

  const inputText = `# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.2](https://github.com/compare/com.sky.hello-lng-world@1.1.1...com.hello-lng-world@1.1.2) (2023-05-12)


### Bug Fixes

* **hello-world:** remove v3 from homepage ([391f006](https://github.com/dummy/commit/391f006f9fdd3df4dd4cee149ff8a8865de0dff5))



## [1.1.1](https://github.com/dummy/compare/hello-world@1.1.2) (2023-05-12)


### Bug Fixes

* **helloworld:** trigger ci post updates ([bc6f4e6](https://github.com/dummy/commit/bc6f4e6412d0e5af400d85823d09a75fc98a66e2))



## 1.1.0 (2023-05-12)


### Features

* **helloworld:** commit to trigger versioning ([949e09a](https://github.com/dummy/commit/949e09adb6a5f8e99b008b955c2f04979fb2c94f))`


  return {
    releaseUrl: "http://example.com/release",
    date: "2023-05-14",
  channel: "#general",
  title: "Release:",
  description: "Summary of the release",
  releasenotes: inputText
}
  };

