// Event for window system
var windowClosed = new Event('window-closed');
windowClosed.initEvent('window-closed', true, true);

// Events of the specific application
var ensembleSelectionChanged = new Event('changed-ensemble-selection');
var varChangeEvent = new Event('changed-var-selection');
var changeMultivariatePanel = new Event('change-multivariate-panel');
var changedCellSelectionEvent = new Event('changed-cell-selection');
var changedSimulationSelectionEvent = new Event('changed-simulation-selection');
ensembleSelectionChanged.initEvent('changed-ensemble-selection', true, true);
varChangeEvent.initEvent('changed-var-selection', true, true);
changeMultivariatePanel.initEvent('change-multivariate-panel', true, true);
changedCellSelectionEvent.initEvent('changed-cell-selection', true, true);
changedSimulationSelectionEvent.initEvent('changed-simulation-selection', true, true);