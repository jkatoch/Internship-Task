

//data
var SalesData=[
    { year: '2008', TotalSale: 20 },
    { year: '2009', TotalSale: 10 },
    { year: '2010', TotalSale: 5 },
    { year: '2011', TotalSale: 5 },
    { year: '2012', TotalSale: 20 }
  ];

function addSale()
{
  year=document.getElementById("Year");
  price=document.getElementById("Sales");
SalesData.push({year:year.value , TotalSale:price.value });
alert("added");
graph.setData(SalesData);
buildTable();
}

  //Chart formation

var graph = Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: SalesData,
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['TotalSale'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['TotalSale']
});

function buildTable()
{
//Table Formation
 // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < SalesData.length; i++) {
            for (var key in SalesData[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.className=" table table-bordered";

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < SalesData.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = SalesData[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }