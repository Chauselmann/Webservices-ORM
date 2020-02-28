import Photo from './models/photo';
import User from './models/user';
import Album from './models/album';

//Main project function
async function run() {
  // const album = await Album.findById(2, ['user', 'photos']);
  // const photos = await Photo.find();
  // console.log(album);

  //create
  // const photo1 = new Photo(
  //   {
  //     id: 9999999,
  //     title: 'azertyuiop',
  //     url: 'http://azertyuiop',
  //     thumbnailUrl: 'http://azertyuiop',
  //     albumId: 1,
  //   },

  // );
  // const photo = await Photo.create(photo1);
  // console.log(photo);


  //find
  // const query = {
  //   page: 2,
  // };
  // const photo1 = await Photo.find(query);
  // console.log(photo1);


  //update
  // const data = new Photo({
  //   "albumId": 1,
  //   "id": 1,
  //   "title": "test",
  //   "url": "https://via.placeholder.com/600/92c952",
  //   "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  // })

  // const photo1 = await Photo.updateById(data);
  //console.log(photo1);
}

run().catch((err) => {
  console.error(err);
});
