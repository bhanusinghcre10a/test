const blogss = document.querySelector('.head1');
import axios from 'axios';

export const renderblogs = async blogs => {
  let no = Math.floor(Math.random() * 300 + 1);
  var myobj = document.querySelector('.row');
  if (myobj) {
    myobj.remove();
  }
  const res1 = await axios(
    `https://cors-anywhere.herokuapp.com/https://hacker-news.firebaseio.com/v0/item/${
      blogs[no + 1]
    }.json?print=pretty`
  );
  const res2 = await axios(
    `https://cors-anywhere.herokuapp.com/https://hacker-news.firebaseio.com/v0/item/${
      blogs[no + 2]
    }.json?print=pretty`
  );
  const res3 = await axios(
    `https://cors-anywhere.herokuapp.com/https://hacker-news.firebaseio.com/v0/item/${
      blogs[no + 3]
    }.json?print=pretty`
  );
  const markup = `
    <div class="row">
    <div class="col-1-of-3">
            <div class="card">
                <div class="card__side card__side-front card__side-front-1">
                    <div class="card__heading">
                        <span class="card__heading-span card__heading-span-1">
                        ${res1.data.title}
                        </span>
                    </div>
                <div class="card__details">
                    <ul>
                        <li>${res1.data.type}</li>
                        <li>${res1.data.by}</li>
                    </ul>
                </div>
            </div>
                <div class="card__side card__side-back card__side-back-1">
                    <div class="card__cta">
                        <div class="card__price-box">
                            <a href="${res1.data.url}" class="btn btn--white">see full article</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div class="col-1-of-3">
            <div class="card">
                <div class="card__side card__side-front card__side-front-2">
                    <div class="card__heading">
                        <span class="card__heading-span card__heading-span-1">
                        ${res2.data.title}
                        </span>
                    </div>
                <div class="card__details">
                    <ul>
                        <li>${res2.data.type}</li>
                        <li>${res2.data.by}</li>
                    </ul>
                </div>
            </div>
                <div class="card__side card__side-back card__side-back-2">
                    <div class="card__cta">
                        <div class="card__price-box">
                            <a href="${res2.data.url}" class="btn btn--white">see full article</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div class="col-1-of-3">
            <div class="card">
                <div class="card__side card__side-front card__side-front-3">
                    <div class="card__heading">
                        <span class="card__heading-span card__heading-span-1">
                        ${res3.data.title}
                        </span>
                    </div>
                <div class="card__details">
                    <ul>
                        <li>${res3.data.type}</li>
                        <li>${res3.data.by}</li>
                    </ul>
                </div>
            </div>
                <div class="card__side card__side-back card__side-back-3">
                    <div class="card__cta">
                        <div class="card__price-box">
                            <a href="${res3.data.url}" class="btn btn--white">see full article</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
    `;
  blogss.insertAdjacentHTML('beforeend', markup);
};
