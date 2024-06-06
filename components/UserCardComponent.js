export const UserCardComponent = (user) => {
    const {
      email,
      username,
      password
    } = user;
    return `
 
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<a href="#">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${username || "Unknown"}</h5>
</a>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${email || "sophy45@gmail.com"}</p>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${password || "******"}</p>
</div>
  `;
  };
  