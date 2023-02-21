fn shark(
    pontoon_distance: f64,
    shark_distance: f64,
    you_speed: f64,
    shark_speed: f64,
    dolphin: bool,
) -> String {
    if !dolphin {
        if (shark_distance / shark_speed) > (pontoon_distance / you_speed) {
            String::from("Shark Bait!")
        } else {
            String::from("Alive!")
        }
    } else {
        if (shark_distance / (shark_speed / 2.0)) > (pontoon_distance / you_speed) {
            String::from("Shark Bait!")
        } else {
            String::from("Alive!")
        }
    }
}

