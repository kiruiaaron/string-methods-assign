protect_email = function (user_email) {
    
    let splitted = user_email.split("@");
    let part1 = splitted[0];
    let  average = part1.length / 2;
    part1 = part1.substring(0, (part1.length - average));
   let  part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("robin_singh@example.com"));
