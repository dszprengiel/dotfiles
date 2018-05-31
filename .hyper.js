// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

 module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'canary',

    // default font size in pixels for all tabs
    fontSize: 16,
    windowSize: [1080, 720],
    fontFamily: '"Operator Mono", "Inconsolata for Powerline", monospace',
    cursorShape: 'BLOCK',
    wickedBorder: true,
    padding: '10px',

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: '/bin/zsh',

    // for advanced config flags please refer to https://hyper.is/#cfg

    hyperStatusLine: {
      dirtyColor: 'salmon',
      aheadColor: 'ivory',
      footerTransparent: false
    },
    hyperTabs: {
      trafficButtons: true,
      border: true,
      tabIcons: true,
      tabIconsColored: true
    }
  },


  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hyperterm-cobalt2-theme',
    'hyper-pane',
    'hyper-statusline',
    'hyper-tabs-enhanced',
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};
