export default function destructor({ special }) {
  const arr = [];
  special.forEach(({
    id, name, icon, description = 'Описание недоступно',
  }) => {
    arr.push({
      id, name, icon, description,
    });
  });
  return arr;
}
