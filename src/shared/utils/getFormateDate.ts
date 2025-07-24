export const getFormateDate = (isoDate: string): string => {
  try {
    const date = new Date(isoDate);

    if (isNaN(date.getTime())) {
      throw new Error(`Некорректная дата: ${isoDate}`);
    }

    return date.toLocaleDateString('ru-RU');
  } catch (error) {
    console.error('Ошибка форматирования даты:', error);
    return '-';
  }
};
