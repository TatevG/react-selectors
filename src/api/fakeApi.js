const login = () =>
  new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          firstName: "Tatevik",
          lastName: "Vardanyan",
          gender: "Female",
          maritalStatus: "Married",
          reservation: {
            startDate: "2019-06-10T12:00",
            endDate: "2019-06-16T12:00",
            roomType: "dlxoc"
          }
        }),
      Math.random() * 100
    );
  });

const fetchRooms = () =>
  new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          {
            id: "stdct",
            name: "City View Standard Room",
            description: "1 Queen bed",
            image:
              "https://www.airlinestaffrates.com/wp-content/uploads/2014/05/210.jpg"
          },
          {
            id: "stdoc",
            name: "Ocean View Standard Room",
            description: "1 Queen bed",
            image:
              "https://www.airlinestaffrates.com/wp-content/uploads/2014/05/210.jpg"
          },
          {
            id: "dlxct",
            name: "Deluxe Room, City View",
            description: "2 Double beds",
            image:
              "https://www.airlinestaffrates.com/wp-content/uploads/2014/05/210.jpg"
          },
          {
            id: "dlxoc",
            name: "Deluxe Room, Ocean View",
            description: "2 Double beds",
            image:
              "https://www.airlinestaffrates.com/wp-content/uploads/2014/05/210.jpg"
          },
          {
            id: "gdlux",
            name: "Grand Lux Room, Oceanfront",
            description: "1 King bed and 1 Sofa bed",
            image:
              "https://www.airlinestaffrates.com/wp-content/uploads/2014/05/210.jpg"
          },
          {
            id: "royal",
            name: "Royal Suite, Oceanfront",
            description: "2 king beds",
            image:
              "https://www.airlinestaffrates.com/wp-content/uploads/2014/05/210.jpg"
          }
        ]),
      Math.random() * 100
    );
  });

export default { login, fetchRooms };
