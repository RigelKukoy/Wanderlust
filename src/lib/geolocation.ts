function getUserCoordinatesAsync(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
    });
  });
}

async function handleGeolocation(position: GeolocationPosition) {
  const coordinate = position.coords;
  console.log(coordinate);
  return coordinate;
}

async function handleGeolocationError(error: unknown) {
  const geoError = error as GeolocationPositionError;

  console.log("Code", geoError.code);
  console.log("Message", geoError.message);
}

export async function handleGetUserCoordinates() {
  try {
    const userCoordinate = await getUserCoordinatesAsync();
    return await handleGeolocation(userCoordinate);
  } catch (error) {
    await handleGeolocationError(error);
  }
}
