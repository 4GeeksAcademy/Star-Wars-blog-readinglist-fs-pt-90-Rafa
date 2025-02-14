const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			characterDetailView: {},
			planets: [],
			planetDetailView: [],
			vehicles: [],
			vehicleDetailView: [],
			favourites: [],
		},
		actions: {
			// CHARACTERS
			getCharacters: async () => {
				try {
					const options = { method: 'GET', headers: {} };
					const response = await fetch("https://www.swapi.tech/api/people/", options)
					if (!response.ok) {
						console.error("Fetch error getCharacters")
					}
					const data = await response.json()
					setStore({ characters: data["results"] })
				}
				catch (error) {
					console.error("Failed to get getCharacters")
				}
			},
			characterDetails: async (id) => {
				try {
					const options = { method: 'GET', headers: {} };
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`, options)
					if (!response.ok) {
						console.error("Fetch error characterDetails")
					}
					const data = await response.json()
					setStore({ characterDetailView: data.result.properties })
				}
				catch (error) {
					console.error("Failed to get characterDetails")
				}
			},
			// PLANETS
			getPlanets: async (id) => {
				try {
					const options = { method: 'GET', headers: {} };
					const response = await fetch("https://www.swapi.tech/api/planets/", options)

					if (!response.ok) {
						console.error("Fetch error getPlanets");
						return;
					}
					const data = await response.json();
					setStore({ planets: data["results"] })
				}
				catch (error) {
					console.error("Failed to get getPlanets")
				}
			},
			planetDetails: async (id) => {
				try {
					const options = { method: 'GET', headers: {} };
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`, options)
					if (!response.ok) {
						console.error("Fetch error characterDetails")
					}
					const data = await response.json()
					setStore({ planetDetailView: data.result.properties })
				}
				catch (error) {
					console.error("Failed to get characterDetails")
				}
			},
			// VEHICLES
			getVehicles: async () => {
				try {
					const options = { method: 'GET', headers: {} };
					const response = await fetch("https://www.swapi.tech/api/vehicles/", options)
					if (!response.ok) {
						console.error("Fetch error getVehicles")
					}
					const data = await response.json()
					setStore({ vehicles: data["results"] })
				}
				catch (error) {
					console.error("Failed to get getVehicles")
				}
			},
			vehicleDetails: async (id) => {
				try {
					const options = { method: 'GET', headers: {} };
					const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`, options)
					if (!response.ok) {
						console.error("Fetch error characterDetails")
					}
					const data = await response.json()
					setStore({ vehicleDetailView: data.result.properties })
				}
				catch (error) {
					console.error("Failed to get characterDetails")
				}
			},
			// FAVOURITES
			addFavourite: (item) => {
				const store = getStore()
				console.log("Current store:", store);
				if (!store.favourites.includes(item)) {
					setStore({ favourites: [...store.favourites, item] })
				}
			},
			deleteFavourite: (index) => {
				const store = getStore()
				const favouritesList = [...store.favourites]
				favouritesList.splice(index, 1)
				setStore({ favourites: favouritesList })
			},
		}
	};
};

export default getState;
