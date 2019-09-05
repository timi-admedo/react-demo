import * as accountsAPI from "./fakeAccountService";

const campaigns = [
  {
    id: "5b21ca3eeb7f6fbccd471815",
    name: "Campaign 1",
    account: { id: "5b21ca3eeb7f6fbccd471818", name: "Glennifer Lopez" },
    CPM: 6,
    dailyClickRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    id: "5b21ca3eeb7f6fbccd471816",
    name: "Campaign 2",
    account: { id: "5b21ca3eeb7f6fbccd471818", name: "Glennifer Lopez" },
    CPM: 5,
    dailyClickRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    id: "5b21ca3eeb7f6fbccd471817",
    name: "Campaign 3",
    account: { id: "5b21ca3eeb7f6fbccd471820", name: "Glennifer Aniston" },
    CPM: 8,
    dailyClickRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    id: "5b21ca3eeb7f6fbccd471819",
    name: "Campaign 4",
    account: { id: "5b21ca3eeb7f6fbccd471814", name: "Glenny from tha block" },
    CPM: 7,
    dailyClickRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    id: "5b21ca3eeb7f6fbccd47181a",
    name: "Campaign 5",
    account: { id: "5b21ca3eeb7f6fbccd471814", name: "Glenny from tha block" },
    CPM: 7,
    dailyClickRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    id: "5b21ca3eeb7f6fbccd47181b",
    name: "Campaign 6",
    account: { id: "5b21ca3eeb7f6fbccd471814", name: "Glenny from tha block" },
    CPM: 7,
    dailyClickRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    id: "5b21ca3eeb7f6fbccd47181e",
    name: "Campaign 7",
    account: { id: "5b21ca3eeb7f6fbccd471820", name: "Glennifer Aniston" },
    CPM: 7,
    dailyClickRate: 4.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    id: "5b21ca3eeb7f6fbccd47181f",
    name: "Campaign 8",
    account: { id: "5b21ca3eeb7f6fbccd471820", name: "Glennifer Aniston" },
    CPM: 4,
    dailyClickRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    id: "5b21ca3eeb7f6fbccd471821",
    name: "Campaign 9",
    account: { id: "5b21ca3eeb7f6fbccd471818", name: "Glennifer Lopez" },
    CPM: 7,
    dailyClickRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  }
];

export function getCampaigns() {
  return campaigns;
}

export function getCampaign(id) {
  return campaigns.find(m => m.id === id);
}

export function saveCampaign(camp) {
  let campInDb = campaigns.find(m => m.id === camp.id) || {};
  campInDb.name = camp.name;
  campInDb.account = accountsAPI.accounts.find(g => g.id === camp.accountId);
  campInDb.CPM = camp.CPM;
  campInDb.dailyClickRate = camp.dailyClickRate;
  campInDb.publishDate = camp.publishDate;

  if (!campInDb.id) {
    campInDb.id = Date.now();
    campaigns.push(campInDb);
  }
  return campInDb;
}

export function deleteCampaign(id) {
  let campInDb = campaigns.find(m => m.id === id);
  campaigns.splice(campaigns.indexOf(campInDb), 1);
  return campInDb;
}




// export function getCampaign() {
//   const promise = axios.get('/endpoint' + params)
//   const response =  await promise;
//   return response
// }

// export async function getCampaigns() {
//   const promise = axios.get('/endpoint');
//   const response = await promise;
//   return response;
// }

// async function saveCampaign(data) {
//   await axios.put('/endpoint' + data.id, data)
//   await axios.patch('/endpoint' + data.id, {name: name.data})
// }

// export async function deleteCampaign(id) {
//   let campInDb = campaigns.find(m => m.id === id);
//   delete campInDb
//   const promise = axios.put('/endpoint' + campaigns);
//   const response = await promise;
//   return response;
// }



// Other React friendly HTTP clients: 
    // Axios https://github.com/axios/axios
    // Ajax https://api.jquery.com/category/ajax/ 
    // React Fetch API https://reactjs.org/docs/faq-ajax.html

// API Simulator: https://jsonplaceholder.typicode.com