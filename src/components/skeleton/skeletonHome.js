export const skeletonHome = [
  {
    key: 'header',
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    children: [
      {
        key: 'image',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
      },
      {
        key: 'containerName',
        marginLeft: 10,
        children: [
          {
            key: 'name',
            width: 250,
            height: 25,
            marginBottom: 5,
          },
          {
            key: 'status',
            width: 150,
            height: 25,
            marginBottom: 15,
          },
        ],
      },
    ],
  },
];
