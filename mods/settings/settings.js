const SettingsAppspace = require('./lib/appspace/main');
const SettingsAppspaceSidebar = require('./lib/appspace-sidebar/main');
var saito = require('../../lib/saito/saito');
var ModTemplate = require('../../lib/templates/modtemplate');

class Settings extends ModTemplate {

  constructor(app) {
    super(app);
    this.app = app;
    this.name = "Settings";
    this.appname = "Settings";
    this.slug = "settings";
    this.description = "Convenient Email plugin for managing Saito account settings";
    this.utilities = "Core Utilities";
    this.link = "/email?module=settings";
    this.icon = "fas fa-cog";
    this.description = "User settings module.";
    this.categories = "Admin Users";
    this.styles = ['/settings/style.css','/saito/lib/jsonTree/jsonTree.css'];
    return this;
  }


  initialize(app) {
    super.initialize(app);

    let settings_self = this;
    this.app.connection.on("update_identifier", (tmpkey) => {
      if (document.getElementById("register-identifier-btn")) {
        if (tmpkey.publickey === settings_self.app.wallet.returnPublicKey()) {
          let username = settings_self.app.keys.returnIdentifierByPublicKey(app.wallet.returnPublicKey());
          document.getElementById("register-identifier-btn").innerHTML = username;
        }
      }
    });
  }


  respondTo(type) {
    if (type === 'appspace') {
      super.render(this.app, this); // for scripts + styles
      return new SettingsAppspace(this.app, this, ".saito-main");
    }
    if (type === 'appspace-sidebar') {
      super.render(this.app, this); // for scripts + styles
      return new SettingsAppspaceSidebar(this.app, this);
    }
    return null;
  }

}







module.exports = Settings;


