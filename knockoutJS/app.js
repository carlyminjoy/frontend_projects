function Song(title, composer, key) {
    var self = this;

    self.title = ko.observable(title);
    self.composer = ko.observable(composer);
    self.key = ko.observable(key);
}

function SetListViewModel() {
    var self = this;

    self.songKeys = ['C', 'Db', 'D', 'Eb', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
    self.songs = ko.observableArray([
        new Song("", "", null)
    ]);

    // Operations
    self.addSong = function() {
        self.songs.push(new Song('', '', null));
    }

    self.removeSong = function(song) {
        self.songs.remove(song);
    }

    self.popularKey = ko.computed(function() {
        var keyCount = ko.observable{};

        self.songs().forEach(function(song) {
            keyCount.hasOwnProperty(song.key) ? keyCount[song.key] += 1 : keyCount[song.key] = 1;
        });
        debugger;
        return keyCount.Eb;
    });
}

ko.applyBindings(new SetListViewModel());
