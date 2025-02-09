
    if (card == "puppet") {

      if (this.game.player == 2) {
        //If the event card has a UI component, run the clock for the player we are waiting on
        this.startClock();

        var twilight_self = this;
        twilight_self.playerFinishedPlacingInfluence();

        var ops_to_place = 3;
        var available_targets = 0;

        twilight_self.addMove("resolve\tpuppet");

        this.updateStatusHeader("US place three influence in countries without any influence");

        for (var i in this.countries) {

          let countryname  = i;
          let divname      = '#'+i;

          if (twilight_self.countries[countryname].us == 0 && twilight_self.countries[countryname].ussr == 0) {

            available_targets++;
            twilight_self.countries[countryname].place = 1;

            $(divname).off();
            $(divname).on('click', function() {
              let countryname = $(this).attr('id');
              if (twilight_self.countries[countryname].place == 1) {
                twilight_self.addMove("place\tus\tus\t"+countryname+"\t1");
                twilight_self.placeInfluence(countryname, 1, "us", function() {
                  twilight_self.countries[countryname].place = 0;
                  ops_to_place--;
                  if (ops_to_place == 0) {
                    twilight_self.playerFinishedPlacingInfluence();
                    twilight_self.endTurn();
                  }
                });
              } else {
                twilight_self.displayModal("you cannot place there...");
              }
            });
          }
        }

        if (available_targets < ops_to_place) { 
          ops_to_place = available_targets; 
        }

        //Safety catch if nowhere to place at all
        if (ops_to_place == 0) {
          twilight_self.playerFinishedPlacingInfluence();
          twilight_self.endTurn();
        } 
      }
      return 0;
    }



