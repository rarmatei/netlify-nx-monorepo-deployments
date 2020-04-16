module.exports = {
  onInit: ({ utils }) => {
    utils.build.cancelBuild(
      `Build was cancelled because ${currentProject} was not affected by the latest changes`
    );
  }
};
