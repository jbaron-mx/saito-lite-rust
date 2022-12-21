const Invite = require("./invite");
const InviteManagerTemplate = require("./invite-manager.template");
const JSON = require('json-bigint');

class InviteManager {

	constructor(app, mod, container="") {

	  this.app = app;
	  this.mod = mod;
	  this.container = container;
	  this.name = "InviteManager";
	  this.type = "short";

	  //
	  // track invites
	  //
	  this.invites = {};
	  manager_self = this;

	  //
	  // handle requests to re-render invite manager
	  //
	  app.connection.on("invite-manager-render-request", () => {
	    this.render();
	  });

	  //
	  // handle requests to re-render invites
	  //
	  app.connection.on("invite-render-request", (invite) => {
	    
	      if (!this.invites[invite.id]) {
			// rendering different types of invite templates based on invite manager type (inside RS or arcade)		
			if (manager_self.type == "short") {
				this.invites[invite.id] = new Invite(this.app, this.mod, ".invite-manager", invite);
			} else {
				this.invites[invite.id] = new Invite(this.app, this.mod, ".invite-manager", invite);
			}

			console.log('typeeeeeeeeeeeeeeeeeeeeee');
			console.log(manager_self.type);

			this.invites[invite.id].invite = invite;
	      }
	    
	      this.invites[invite.id].render();
	    
    });

	}


	render() {

    //
    // replace element or insert into page
 	  //
	  if (document.querySelector(".invite-manager")) {
	    this.app.browser.replaceElementBySelector(InviteManagerTemplate(this.app, this.mod), ".invite-manager");
	  } else {
 	    this.app.browser.addElementToSelectorOrDom(InviteManagerTemplate(this.app, this.mod), this.container);
 	  }

	  this.attachEvents();

	}


	attachEvents() {
	}

}

module.exports = InviteManager;


