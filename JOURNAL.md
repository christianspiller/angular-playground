# Journal
## Useful Angular CLI commands

### neue App mit Routing
ng new <name> --routing=true

### neues Modul mit Routing
ng g module <name> --routing=true --route=path --module=app.module
* path ohne Slash
* --module => wo die Route konfiguriert wird

### neue Komponente
ng g component <name>

## Nginx
Nginx is the better choice to serve Angular files in production mode.
There is a Docker-Template (FROM nginx:alpine) which can be used. In the
configuration (nginx.conf) it is necessary to set the routing for Angular Apps.

    location / {
        try_files $uri $uri/ /index.html; // <= instead of =404
    }


## Bryntum installation (trial)
### NPM
Source: https://bryntum.com/docs/gantt/guide/Gantt/npm-repository

Configuration:

    $> npm config set "@bryntum:registry=https://npm.bryntum.com"
    $> npm login --registry=https://npm.bryntum.com
    npm notice Log in on https://npm.bryntum.com/
    Username: christian.spiller..noser.com
    Password: trial
    Email: (this IS public) christian.spiller@noser.com
    Logged in as christian.spiller..noser.com on https://npm.bryntum.com/.

Install packages:

    $> npm install @bryntum/gantt-trial@5.0.3
    $> npm install @bryntum/gantt-angular@5.0.3
    $> npm install @bryntum/demo-resources@1.0.0

Create alias:

    $> npm install @bryntum/gantt@npm:@bryntum/gantt-trial@5.0.3
The alias can be replaced with @bryntum/gantt@5.0.3 in package.json when we have the license. So the code imports don't need to be changed. 

### Styles
Add

    @import "@bryntum/gantt/gantt.material.css";
to src/styles.css

### Module Dependency
Add BryntumGanttModule to the imports of the containing module

### File-size budget
The bryntum css is huge and therefor in angular.json the budget needs to be increased:
   
    configurations.production.budgets: type: anyComponentStyle, maximumError: 

### Scrolling
Prevent scrolling outside project range by adding listener onBeforePresetChange:
https://www.bryntum.com/forum/viewtopic.php?f=44&t=18489&start=10

### Bugs
#### Events start date changes to year -27000 when start Date is new Date(0)
