//creating div and row and container.
var container = document.createElement("div")
container.setAttribute('class', 'container')

var row = document.createElement('div')
row.setAttribute('class', 'row')

var col1 = document.createElement('div')
col1.setAttribute('class', 'col-lg-12 col-md-12 col-sm-12')
col1.setAttribute('class', 'color')

var h1=document.createElement("h1")
h1.setAttribute("class",'h11')
h1.innerHTML="Library"

col1.append(h1)
row.append(col1)
container.append(row)

foo()

//async function start
async function foo() {

    try {
        //taking books api and fetch it and converting it into json and storing into variable data1
        let data = await fetch("https://anapioficeandfire.com/api/books");
        let data1 = await data.json();

        var z = 0

        //here data1[8] can give us book number 8 then we access different characters of book number 8.

        for (var j = 0; (j < 9 && j !== 7); j++) {
            let data2 = await fetch(data1[8].characters[j])
            let data22 = await data2.json()

            //each of the characters contain sub data from which we take array of different books , so to access that array we write following for loop

            for (var i = 0; i < data22.books.length; i++) {
                let books = await fetch(data22.books[i])
                let bookfinal = await books.json()


                //now  bookfinal variable consits of different books each time loop run.now we store that data inside diff var.  
                
                var book = document.createElement("h1")
                book.innerHTML =" BOOK NO." + " " + z
                book.setAttribute('class', 'book')
                z++;

                var name = document.createElement('h4')
                name.innerHTML = "Name of book:" + " " + bookfinal.name
                name.setAttribute('class', 'name')


                var isbn = document.createElement('h4')
                isbn.innerHTML = "Isbn:" + " " + bookfinal.isbn
                isbn.setAttribute("class", 'isbn')

                var pages = document.createElement('h4')
                pages.innerHTML = "Pages:" + " " + bookfinal.numberOfPages
                pages.setAttribute('class', 'pages')


                var Author = document.createElement('h4')
                Author.innerHTML = "Author Name:" + " " + bookfinal.authors
                Author.setAttribute("class", 'author')

                var publish = document.createElement('h4')
                publish.innerHTML = "Publisher Name:" + " " + bookfinal.publisher
                publish.setAttribute('class', 'publish')

                var rel = document.createElement("h4")
                rel.innerHTML = "Released Date:" + " " + bookfinal.released
                rel.setAttribute('class', 'rel')

                var char = document.createElement('h4')


                //creation of unorder list for storing around 6 characters
                var list = document.createElement('ul')
                var listele = document.createElement('li')
                list.setAttribute("class", 'list')
                var j = i


                //for loop give 5 to 6 characters for each book and we store that character name inside unorderlist.
                for (var p = 0; p <= 6; p++) {
                    let datanew = await fetch(data1[j].characters[p])
                    let datanew1 = await datanew.json()
                    var listele = document.createElement('li')
                    listele.innerHTML = datanew1.name
                    list.append(listele)
                    char.innerHTML = datanew1.name


                }
                var cha = document.createElement("h4")
                cha.innerHTML = "Characters:"
                cha.setAttribute("class", 'cha')


                //this if condition limits books upto 60
                if (z <= 60) {
                    col1.append(book, name, isbn, pages, Author, publish, rel, cha, list)

                    row.append(col1)
                    container.append(row)
                    document.body.append(container)

                }
              
            }
           
        }

    }
    catch (error) {
        console.log(error)
    }
}



