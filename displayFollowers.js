const container = document.querySelector('.container');

const display = (followers) => {
    const newFollowers = followers.map((person) => {
        const { avatar_url, login, html_url } = person;

        return `<article class="card">
            <img src="${avatar_url}" alt="${login}" />
            <h4>${login}</h4>
            <a href="${html_url}" class="btn">View Profile</a> 
         </article>
        `
    }).join("");

    // console.log(newFollowers);
    container.innerHTML = newFollowers;
}

export default display
