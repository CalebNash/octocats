var octocats = [{
  url: 'https://octodex.github.com/images/Terracottocat_Single.png',
  author: 'https://avatars3.githubusercontent.com/u/20879614?s=460&u=8df7ef730bcc464aeb935b9d1a866b9ed277b938&v=4',
  name: 'https://github.com/chubbmo',
  number: 149
},
{
  url: 'https://octodex.github.com/images/Sentrytocat_octodex.jpg',
  author: 'https://avatars2.githubusercontent.com/u/72919?s=400&u=842e59562a3799dca195b939372936560ea6f2ff&v=4',
  name: 'https://github.com/cameronmcefee',
  number: 143
},
{
  url: 'https://octodex.github.com/images/vinyltocat.png',
  author: 'https://avatars2.githubusercontent.com/u/7002940?s=400&u=dc08a065b1675df06f476fad36b7e965029d9d35&v=4',
  name: 'https://github.com/suziejurado',
  number: 137
}];


var octocatsHTML = '';
octocats.forEach(function(octocat) {
  octocatsHTML += `
  <li class="octocat">
    <a href="https://octodex.github.com/saritocat">
      <img src=${octocat.url} />
    </a>
    <div class="image-footer">
      <span class="image-number">${octocat.number}</span>
      <div class="image-caption">
        <span>the</span>
        <a href="https://octodex.github.com/saritocat">Saritocat</a>
        <span>by</span>
        <ul class="authors">
          <li>
            <a href="${octocat.name}">
            <img src=${octocat.author} />
          </a>
          </li>
        </ul>
      </div>
      <!-- .image-caption -->
    </div>
    <!-- .image-footer -->
  </li>`
});

const parentHTML = document.querySelector('.octodex');
parentHTML.insertAdjacentHTML('beforeend', octocatsHTML);
