module.exports = {
  onInit: ({ utils }) => {
    const currentProject = 'bike-store';
    const projectHasChanged = false;
    if (!projectHasChanged) {
      utils.build.cancelBuild(
        `Build was cancelled because ${currentProject} was not affected by the latest changes`
      );
    }
  }
};
