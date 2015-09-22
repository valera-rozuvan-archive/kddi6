TODO
====

A brief overview of some of the important things to be done for each release.


Version 0.4
-----------

- Investigate how to add (best approach in the case of this project) users and authorization/authentication via SSL.
- Split up further development into tasks.
- Implement users and authorization/authentication via SSL.


Version 0.3
-----------

- Add gulp.js to the project. All project build tasks will be automatized with gulp.
- JS linters, hinters, code style to the project.
- Unit testing with Jasmine, Sinon, and Karma.
- Add WebdriverIO, and write with it several end-2-end test.
- Decide on Sass or LESS, add to the project, and rewrite CSS with it.
- Add Node.js part of the project. It should serve the static application.
- Add socket.io to the project.
- Add MongoDB to the project.
- Make it so that the state of the application is saved on the back-end (MongoDB database) in real- time (via
socket.io).


Version 0.2
-----------

- Create a VirtTerm module so that you can instantiate as many as necessary. At first, the only initialization parameter
should be `{x, y}` coordinates of initial placement of VirtTerm.
- Introduce Bootstrap to the project.
- With Bootstrap, build a configuration pop-up for a VirtTerm. When a VirtTerm is selected (clicked on), the
configuration pop-up should appear. When a VirtTerm is deselected (the mouse clicks somewhere on the body of the page)
the configuration pop-up should hide.
- Make it so that the width and height (number of columns and rows) can be dynamically changed via the configuration
pop-up.
- Introduce KeyboardJS to the project.
- Make it so that you can type text within a VirtTerm.
- Make it so that a VirtTerm can be dynamically up-scaled and down-scaled (font size increased or decreased). This
should be available via the configuration pop-up.
- Add z-order property of VirtTerm to configuration pop-up.


Version 0.1
-----------

- ~~initial start of the project~~
- ~~creation of basic folder structure~~
- ~~simple logic: start of application code~~
- ~~writing up of TODO items for several next releases (versions)~~
- ~~adding of initial documentation on the project~~
