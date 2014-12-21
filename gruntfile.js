module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    meta: {
      version: "<%= pkg.version %>",
      banner:
        "// iam\n" + 
        "// ------\n" + 
        "// Simple authentication plumbing for NodeJS / Express apps" + 
        "// \n" + 
        "// v<%= pkg.version %>\n" +
        "// Copyright (C)<%= grunt.template.today('yyyy') %> Muted Solutions, LLC.\n" + 
        "// Distributed under MIT license\n" + 
        "// \n" +
        "// https://github.com/derickbailey/iam\n" +
        "\n"
    },

    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      build: [ "iam/**/*.js" ]
    },

    jasmine_node: {
      options: {
        forceExit: true,
        match: ".",
        matchall: false,
        extensions: "js",
        specNameMatcher: "[Ss][Pp][Ee][Cc][Ss]",
        jUnit: {
          report: true,
          savePath : "./build/reports/jasmine/",
          useDotNotation: true,
          consolidate: true
        }
      },
      all: ["specs/"]
    },

    watch: {
      specs: {
        files: ["iam/**/*.js", "specs/**/*.js"],
        tasks: ["specs"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-jasmine-node");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("specs", ["jshint", "jasmine_node:all"]);
  grunt.registerTask("default", ["specs", "watch"]);
};

