const $ = (element) => document.getElementById(element);


window.onload = async() => {

    console.log('formulario.js success');

    let query = new URLSearchParams(location.search);
    console.log('>>>>',query)
    if(query.has('id')){
        $('buttonEdit').hidden = false;
        try {
            let response = await fetch(sessionStorage.getItem('urlBase')+'/api/movies/'+query.get('id'));
            let result = await response.json();
            console.log(result)

            let movie = result.data;
            let release_date = moment(movie.release_date).format('YYYY-MM-DD');
            $('title').value = movie.title;
            $('awards').value = movie.awards;
            $('rating').value = movie.rating;
            $('release_date').value = release_date;
            $('length').value = movie.length
            
        } catch (error) {
            console.log(error)
        }
        $('formulario').addEventListener('submit',async(e)=>{
            e.preventDefault()
            console.log('enviando formulario')

            let bodyForm = {
                title : $('title').value,
                rating : $('rating').value,
                awards : $('awards').value,
                length : $('length').value,
                release_date: $('release_date').value
            }

            try {
                let response = await fetch(`${sessionStorage.getItem('urlBase')}/api/movies/update/${query.get('id')}`,{
                    method: 'PUT',
                    body: await JSON.stringify(bodyForm),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                let result = await response.json();
                window.location.href = 'home.html'
            } catch (error) {
                console.log(error)
            }
        })
    }else{
        $('buttonAdd').hidden = false
    }
}