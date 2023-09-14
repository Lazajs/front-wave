export const getAge = (userBirthdate: Date): number => {
  const currentDate = new Date();
  if (userBirthdate instanceof Date) {
    let userAge = 0;
    userAge = currentDate.getFullYear() - userBirthdate.getFullYear();
    if (
      currentDate.getMonth() < userBirthdate.getMonth() ||
      (currentDate.getMonth() === userBirthdate.getMonth() &&
        currentDate.getDate() < userBirthdate.getDate())
    ) {
      userAge--;
    }

    return userAge;
  }
  return 0;
};
