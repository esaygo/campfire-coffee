//Pike Market kiosk

var pike = {

  minCust: 14,
  maxCust: 55,
  avgCups: 1.2,
  avgPounds: 3.7,
  noCustomers: 0,

  getNoCustormers: function() {
      this.noCustomers = Math.round(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },

  getAvgSales: function() {
      return Math.round(this.noCustomers * (this.avgCups / 20 + this.avgPounds));
    },

  getNoCups: function() {
      return Math.round(this.avgCups * this.noCustomers);
    },

  getAvgPounds: function() {
      return Math.round(this.avgPounds * this.noCustomers);
    }
  };

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

for (var i = 0; i < 15; i++) {

  pike.getNoCustormers();

  var paragraphEl = document.createElement('p');
  paragraphEl.textContent = hours[i] + pike.getAvgSales() + ' lbs' + ' ['+ pike.noCustomers +',' + ' customers ' + pike.getNoCups() + ' cups'+' (' + pike.getNoCups()/20 + ' lbs), ' + pike.getAvgPounds() + ' lbs to-go] PIKE';
  document.body.appendChild(paragraphEl);
}

//Capitol Hill kiosk

var capitol = {
  minCust: 32,
  maxCust: 48,
  avgCups: 3.2,
  avgPounds: 0.4,
  noCustomers: 0,

  getNoCustormers: function() {
      this.noCustomers = Math.round(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
  },

  getAvgSales: function() {
      return Math.round(this.noCustomers * (this.avgCups / 20 + this.avgPounds));
  },

  getNoCups: function() {
      return Math.round(this.avgCups * this.noCustomers);
  },

  getAvgPounds: function() {
      return Math.round(this.avgPounds * this.noCustomers);
  }
};

for (var i = 0; i < 15; i++) {

  capitol.getNoCustormers();

  var paragraphEl = document.createElement('p');
  paragraphEl.textContent = hours[i] + capitol.getAvgSales() + ' lbs' + ' ['+ capitol.noCustomers +',' + ' customers ' + capitol.getNoCups() + ' cups'+' (' + capitol.getNoCups()/20 + ' lbs), ' + capitol.getAvgPounds() + ' lbs to-go] CAPITOL';
  document.body.appendChild(paragraphEl);
}

//Seattle Public Library kiosk

var library = {

  minCust: 49,
  maxCust: 75,
  avgCups: 2.6,
  avgPounds: 0.2,
  noCustomers: 0,

  getNoCustormers: function() {
      this.noCustomers = Math.round(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },

  getAvgSales: function() {
      return Math.round(this.noCustomers * (this.avgCups / 20 + this.avgPounds));
    },

  getNoCups: function() {
      return Math.round(this.avgCups * this.noCustomers);
    },

  getAvgPounds: function() {
      return Math.round(this.avgPounds * this.noCustomers);
    }
  };


for (var i = 0; i < 15; i++) {

  library.getNoCustormers();

  var paragraphEl = document.createElement('p');
  paragraphEl.textContent = hours[i] + library.getAvgSales() + ' lbs' + ' ['+ library.noCustomers +',' + ' customers ' + library.getNoCups() + ' cups'+' (' + library.getNoCups()/20 + ' lbs), ' + library.getAvgPounds() + ' lbs to-go] LIBRARY';
  document.body.appendChild(paragraphEl);
}

//South Lake Union kiosk

var lake = {

  minCust: 35,
  maxCust: 88,
  avgCups: 1.3,
  avgPounds: 3.7,
  noCustomers: 0,

  getNoCustormers: function() {
      this.noCustomers = Math.round(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },

  getAvgSales: function() {
      return Math.round(this.noCustomers * (this.avgCups / 20 + this.avgPounds));
    },

  getNoCups: function() {
      return Math.round(this.avgCups * this.noCustomers);
    },

  getAvgPounds: function() {
      return Math.round(this.avgPounds * this.noCustomers);
    }
  };


for (var i = 0; i < 15; i++) {

  lake.getNoCustormers();

  var paragraphEl = document.createElement('p');
  paragraphEl.textContent = hours[i] + lake.getAvgSales() + ' lbs' + ' ['+ lake.noCustomers +',' + ' customers ' + lake.getNoCups() + ' cups'+' (' + lake.getNoCups()/20 + ' lbs), ' + lake.getAvgPounds() + ' lbs to-go] SOUTH LAKE UNION';
  document.body.appendChild(paragraphEl);
}

//Sea-Tac Airport

var airport = {

  minCust: 68,
  maxCust: 124,
  avgCups: 1.1,
  avgPounds: 2.7,
  noCustomers: 0,

  getNoCustormers: function() {
      this.noCustomers = Math.round(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },

  getAvgSales: function() {
      return Math.round(this.noCustomers * (this.avgCups / 20 + this.avgPounds));
    },

  getNoCups: function() {
      return Math.round(this.avgCups * this.noCustomers);
    },

  getAvgPounds: function() {
      return Math.round(this.avgPounds * this.noCustomers);
    }
  };


for (var i = 0; i < 15; i++) {

  airport.getNoCustormers();

  var paragraphEl = document.createElement('p');
  paragraphEl.textContent = hours[i] + airport.getAvgSales() + ' lbs' + ' ['+ airport.noCustomers +',' + ' customers ' + airport.getNoCups() + ' cups'+' (' + airport.getNoCups()/20 + ' lbs), ' + airport.getAvgPounds() + ' lbs to-go] SEA-TAC AIRPORT';
  document.body.appendChild(paragraphEl);
}

//Website sales

var website = {

  minCust: 3,
  maxCust: 6,
  avgCups: 0,
  avgPounds: 6.7,
  noCustomers: 0,

  getNoCustormers: function() {
      this.noCustomers = Math.round(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },

  getAvgSales: function() {
      return Math.round(this.noCustomers * (this.avgCups / 20 + this.avgPounds));
    },

  getNoCups: function() {
      return Math.round(this.avgCups * this.noCustomers);
    },

  getAvgPounds: function() {
      return Math.round(this.avgPounds * this.noCustomers);
    }
  };


for (var i = 0; i < 15; i++) {

  website.getNoCustormers();

  var paragraphEl = document.createElement('p');
  paragraphEl.textContent = hours[i] + website.getAvgSales() + ' lbs' + ' ['+ website.noCustomers +',' + ' customers ' + website.getNoCups() + ' cups'+' (' + website.getNoCups()/20 + ' lbs), ' + website.getAvgPounds() + ' lbs to-go] WEBSITE';
  document.body.appendChild(paragraphEl);
}
