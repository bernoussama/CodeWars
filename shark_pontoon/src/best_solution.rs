fn shark(pontoon_distance: f64, shark_distance: f64, you_speed: f64, shark_speed: f64, dolphin: bool) -> String {
    let shark_time = shark_distance / (shark_speed/ if dolphin {2.0} else {1.0});
    let you_time = pontoon_distance / you_speed;
    String::from(if shark_time > you_time {"Alive!"}else{"Shark Bait!"})
}

