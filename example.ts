const folders = [
  {
    id: 'e32bbeca-6845-4df1-b328-82635c9168e0',
    name: 'Nullfolder',
    createdAt: '2021-08-23T10:39:01.295Z',
    updatedAt: null,
    deletedAt: null,
    children: [
      {
      id: 'd2f1b77e-33e0-4d63-ad19-c33205680829',
      name: 'Merging-Nullfolder',
      createdAt: '2021-08-23T12:48:08.401Z',
      updatedAt: null,
      deletedAt: null
    },
    {
      id: '0d4bf2fe-e833-4cc8-9b23-14a5deb519f7',
      name: 'child folder',
      createdAt: '2021-09-07T09:18:50.104Z',
      updatedAt: null,
      deletedAt: null
    },
    {
      id: '8bac35dd-24ba-4f3c-a48e-64590a8ee521',
      name: 'Inside Null folder',
      createdAt: '2021-09-07T13:43:11.173Z',
      updatedAt: null,
      deletedAt: null
    }
    ]
    
  },
  {
    id: '6ac2963a-64c3-4b8b-a56b-e83ec0e2ada5',
    name: 'Folder 1',
    createdAt: '2021-09-03T12:41:56.714Z',
    updatedAt: null,
    deletedAt: null
  },
  {
    id: '0b100ea4-4141-47b8-8457-2f9e9bdb8536',
    name: 'Folder 2',
    createdAt: '2021-09-03T12:44:21.010Z',
    updatedAt: null,
    deletedAt: null
  },
  {
    id: '98d800bf-605e-4c49-b994-00783585a229',
    name: 'Abc1',
    createdAt: '2021-09-06T14:28:02.089Z',
    updatedAt: null,
    deletedAt: null
  },
  {
    id: 'dd310f50-2c27-4e90-8341-64e03971cf56',
    name: 'First Folder',
    createdAt: '2021-09-07T11:29:30.971Z',
    updatedAt: null,
    deletedAt: null
  }
];

const child = {
  '98d800bf-605e-4c49-b994-00783585a229': [
    {
      id: '807f30ce-31ab-4a22-9cda-76bcc8268575',
      name: 'InsideAbc1',
      createdAt: '2021-09-07T13:45:22.342Z',
      updatedAt: null,
      deletedAt: null
    }
  ],
  'e32bbeca-6845-4df1-b328-82635c9168e0': [
    {
      id: 'd2f1b77e-33e0-4d63-ad19-c33205680829',
      name: 'Merging-Nullfolder',
      createdAt: '2021-08-23T12:48:08.401Z',
      updatedAt: null,
      deletedAt: null
    },
    {
      id: '0d4bf2fe-e833-4cc8-9b23-14a5deb519f7',
      name: 'child folder',
      createdAt: '2021-09-07T09:18:50.104Z',
      updatedAt: null,
      deletedAt: null
    },
    {
      id: '8bac35dd-24ba-4f3c-a48e-64590a8ee521',
      name: 'Inside Null folder',
      createdAt: '2021-09-07T13:43:11.173Z',
      updatedAt: null,
      deletedAt: null
    }
  ],
  '0b100ea4-4141-47b8-8457-2f9e9bdb8536': [
    {
      id: 'af57dffd-a9df-4e94-955c-f0d4ed8f1fc0',
      name: 'InsideFolder2',
      createdAt: '2021-09-07T13:44:49.940Z',
      updatedAt: null,
      deletedAt: null
    }
  ],
  'dd310f50-2c27-4e90-8341-64e03971cf56': [
    {
      id: '818b9987-4aee-4d5e-aab4-d94eb5ee3edd',
      name: 'Second folder',
      createdAt: '2021-09-07T11:31:12.342Z',
      updatedAt: null,
      deletedAt: null
    }
  ],
  '6ac2963a-64c3-4b8b-a56b-e83ec0e2ada5': [
    {
      id: '1b592754-4689-482a-a539-4a5281411551',
      name: 'Folder 2',
      createdAt: '2021-09-03T13:06:10.448Z',
      updatedAt: null,
      deletedAt: null
    },
    {
      id: 'd0f7bd74-1e30-4a71-84c0-11fa10b29f37',
      name: 'Inside First1 Folder',
      createdAt: '2021-09-07T13:43:57.138Z',
      updatedAt: null,
      deletedAt: null
    }
  ]
};



function (folder, child) {
    return 
}