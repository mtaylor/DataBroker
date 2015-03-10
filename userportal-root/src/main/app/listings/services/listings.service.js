'use strict';

angular.module('listings').factory('Listings', ['$window', 'Global', function ($window, Global) {

  //var listings = [{"name":"Saint-Dié-des-Vosges","date":"2014-03-08T02:51:32-08:00","author":"Erasmus Wise","description":"risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum","id":"703DC3B0-0F57-A507-B17F-63A991F182B4"},{"name":"North Saanich","date":"2014-08-18T11:01:49-07:00","author":"Barrett Sykes","description":"torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In","id":"53F195C3-AC09-9BD2-ABDD-46233F72467F"},{"name":"Forchtenstein","date":"2014-09-01T10:42:07-07:00","author":"Stacy Guthrie","description":"placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet,","id":"33B8E580-522E-071D-3EDA-2C9BBFFD27BC"},{"name":"Moere","date":"2014-02-26T16:45:38-08:00","author":"Heather Howard","description":"neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam","id":"FFE5118B-8A26-E09D-7B00-E51660959D20"},{"name":"Santa Cruz de Tenerife","date":"2014-05-03T16:53:36-07:00","author":"Jenette Guerrero","description":"velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius","id":"EE9C13BF-9F55-577F-E582-F40F32BFBE97"},{"name":"Montpelier","date":"2014-07-10T06:48:35-07:00","author":"Rowan Riggs","description":"euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec","id":"86A80FDF-3A69-4A91-539B-0B1814B20AF9"},{"name":"College","date":"2014-08-10T05:40:04-07:00","author":"Orla Alvarado","description":"Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio.","id":"BD83C91D-80C9-050E-3560-EFEB3597BF90"},{"name":"San Martino in Pensilis","date":"2015-01-29T06:34:25-08:00","author":"Raven Weeks","description":"lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida","id":"174DBFD6-9A3C-1A67-840E-FBCCF78B3160"},{"name":"Rouyn-Noranda","date":"2014-11-24T10:07:57-08:00","author":"Yasir Michael","description":"dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra","id":"94421F21-B038-E960-DB73-C2D5758041E1"},{"name":"Zaffelare","date":"2014-03-13T02:08:57-07:00","author":"August Silva","description":"lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo","id":"6D267F43-2DBE-CFDC-28B6-129388D77FF4"},{"name":"Kakisa","date":"2014-11-03T07:07:28-08:00","author":"Ezekiel Parsons","description":"Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris","id":"9948E0F7-D0EB-17A5-53F6-77DAF1CF2D1E"},{"name":"North Bay","date":"2014-10-27T14:54:58-07:00","author":"Lareina Maynard","description":"lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat","id":"9DF9D3A2-29D0-454D-5AAD-AD607E82DCF9"},{"name":"St. Albans","date":"2014-08-24T05:07:53-07:00","author":"Warren Woodard","description":"enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et,","id":"14D15485-ED5C-0B51-F157-CEE3E3C466F6"},{"name":"Wick","date":"2014-08-18T02:33:08-07:00","author":"Sloane Crosby","description":"metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui,","id":"1644F908-5257-51CB-9059-E8813C388470"},{"name":"Kolkata","date":"2014-02-04T13:12:03-08:00","author":"Buffy Pace","description":"pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi.","id":"9601E516-95E4-D091-6599-7E4ABA6FAE02"},{"name":"Lasne-Chapelle-Saint-Lambert","date":"2014-09-27T14:19:05-07:00","author":"Sierra Gomez","description":"adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet","id":"587001DD-3590-9B7C-23B9-A113F6115040"},{"name":"Velaine-sur-Sambre","date":"2014-03-15T09:17:38-07:00","author":"Jolene Page","description":"Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut,","id":"42D85FFC-6CEA-0B9A-98F0-1FEA50B63167"},{"name":"Lanester","date":"2014-06-10T16:02:59-07:00","author":"Stone Cervantes","description":"mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at","id":"515993D8-E921-20B0-180A-A221D57A88A1"},{"name":"Blois","date":"2014-06-28T21:02:58-07:00","author":"Jolene Kline","description":"elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate","id":"129B5C59-904C-044E-CA6E-26CAD1087495"},{"name":"Arrone","date":"2014-05-19T08:06:02-07:00","author":"Gabriel Love","description":"sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis","id":"3BE466F2-FD6D-09D5-68B0-FD3ADB29FFA6"},{"name":"Stonewall","date":"2014-03-21T21:04:42-07:00","author":"Lara Pollard","description":"aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris","id":"04DD33FC-67DF-440C-3D82-3DFF4A37E1BB"},{"name":"Leersum","date":"2014-12-29T16:20:59-08:00","author":"Xaviera Lane","description":"pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede,","id":"1E86EB41-FDCA-BAF9-C2CC-13721E3DCB2F"},{"name":"Hazaribag","date":"2014-05-10T05:16:24-07:00","author":"Odette Herrera","description":"sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor","id":"2B664802-DEF2-A28A-B22C-CA49A6935635"},{"name":"Ichtegem","date":"2014-11-13T01:08:35-08:00","author":"Xandra Collins","description":"ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus","id":"257DC16B-996C-3A10-8167-55E5CE045D6B"},{"name":"Chhindwara","date":"2014-12-07T06:05:26-08:00","author":"Lavinia Bush","description":"nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi","id":"C064C2D5-C4D0-9C28-F7F4-062324925D48"},{"name":"Paradise","date":"2015-01-27T10:29:20-08:00","author":"Castor Palmer","description":"consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum","id":"6625FF5A-9A23-98A3-7DC9-1EC7C021A0EF"},{"name":"Bolzano/Bozen","date":"2014-08-24T15:03:28-07:00","author":"Rae Yates","description":"lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec","id":"3C669354-013F-994C-591A-66C0B6A4C6F8"},{"name":"Quinte West","date":"2014-09-29T00:51:54-07:00","author":"Samantha Joyce","description":"feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede","id":"75569E75-0B38-7D4F-5402-0994FA5DB123"},{"name":"Ternitz","date":"2014-06-28T23:09:33-07:00","author":"Jerry Witt","description":"luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum","id":"8C00E4A4-0CD4-DE38-46DC-518239022B8F"},{"name":"Sellia Marina","date":"2014-02-04T09:16:06-08:00","author":"Deirdre Cook","description":"Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non,","id":"3DA03007-EA7A-80CA-0350-27BD2E75AE01"},{"name":"Yellowhead County","date":"2014-08-12T01:26:55-07:00","author":"Josephine Hull","description":"pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae,","id":"9E0425F6-CBF4-E9BB-5D5B-04E97A73F29D"},{"name":"Gandhinagar","date":"2014-04-02T16:02:46-07:00","author":"Kai Mueller","description":"lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat","id":"40CCFFDA-CDE3-9F1B-B5EE-ADB6DEE5481E"},{"name":"Brive-la-Gaillarde","date":"2014-10-09T05:36:19-07:00","author":"Belle Serrano","description":"Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate","id":"D8AF9503-725F-2935-A381-72F99A5AC17E"},{"name":"Brindisi","date":"2014-03-24T18:48:37-07:00","author":"Jade Stone","description":"fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper","id":"F3ED584F-B488-2851-C76F-FD6E8905EC50"},{"name":"Wandsworth","date":"2014-12-08T23:12:50-08:00","author":"Germaine Cleveland","description":"sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis","id":"4FA528B3-8EF9-3ED8-3BE0-AF4A58A6E68C"},{"name":"Potenza","date":"2014-03-21T13:17:10-07:00","author":"Christen Carney","description":"aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit,","id":"A7C09D35-05D3-4A17-CEE4-CE6087CC9E59"},{"name":"Paularo","date":"2014-02-23T06:45:10-08:00","author":"Robert Mays","description":"aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada","id":"D9404179-3336-AF3B-BEAD-6D7286DEF824"},{"name":"Langley","date":"2014-08-01T07:47:34-07:00","author":"Brynn Williamson","description":"Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a","id":"88316F68-195C-C0B8-517E-7C11FCB0B9FF"},{"name":"Frauenkirchen","date":"2014-02-24T04:21:37-08:00","author":"Daniel Waller","description":"mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero.","id":"477CA314-227E-A3EE-BC37-19E98F30013F"},{"name":"Attert","date":"2014-05-17T21:57:20-07:00","author":"Norman Fry","description":"vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu,","id":"F69E355C-9B24-1A9F-2270-ABBAD252B20A"},{"name":"Boignee","date":"2014-03-11T21:03:50-07:00","author":"Shellie Whitehead","description":"elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam.","id":"162F1D3D-920D-CC2C-0E8C-9F24C86FBBE2"},{"name":"Borsbeek","date":"2014-06-01T17:29:12-07:00","author":"Orli Cote","description":"mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus.","id":"0650616C-EB28-BA9D-8A8B-2BC12F6F5B73"},{"name":"Campitello di Fassa","date":"2014-07-20T15:43:43-07:00","author":"Quinn Stanton","description":"eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus","id":"8AD447CA-BC51-FFC8-D7BF-0679953B0BBB"},{"name":"Borgerhout","date":"2014-02-14T19:46:13-08:00","author":"Geraldine Ballard","description":"molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent","id":"FBF3D99C-45B9-3BE8-BE90-8FC80906107F"},{"name":"Suwałki","date":"2014-08-01T20:48:14-07:00","author":"Vernon Davis","description":"amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et","id":"014B91CB-3990-0D47-316F-51A2E6EC00FA"},{"name":"Lisciano Niccone","date":"2014-08-14T04:15:22-07:00","author":"Steel Garrison","description":"amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes,","id":"A4B35B34-79EE-24C6-E1E7-BBD0934DD72E"},{"name":"Villers-la-Bonne-Eau","date":"2014-06-24T18:45:14-07:00","author":"Merritt Shaw","description":"leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida","id":"FFA34D2B-1E44-C2E7-B2D3-0D707670F776"},{"name":"Norfolk","date":"2014-06-20T18:18:16-07:00","author":"Declan Hooper","description":"aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet","id":"18E58C2C-E08B-7514-8195-BB44492EBB6E"},{"name":"Port Hope","date":"2014-09-11T23:25:23-07:00","author":"Ramona Farrell","description":"vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu,","id":"233BAE49-0C3A-4D74-5C8A-4CC12D985621"},{"name":"San Marcello Pistoiese","date":"2014-12-07T09:37:04-08:00","author":"George Sheppard","description":"pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam","id":"B48F4399-1D87-91F4-525B-A86C36C4B809"},{"name":"San Mauro Cilento","date":"2014-04-30T15:31:36-07:00","author":"Declan Gentry","description":"odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque","id":"92333BC2-75D9-79BE-7C1E-B5BE87E83609"},{"name":"Saguenay","date":"2014-12-07T04:49:48-08:00","author":"Christopher Conner","description":"commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit","id":"FA51E295-F479-AA28-A1CC-BA89EF672198"},{"name":"Monghidoro","date":"2014-04-21T12:02:40-07:00","author":"Noah Hays","description":"Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet","id":"8720B5F5-857B-FB34-1413-4A06A338A9CF"},{"name":"Pak Pattan","date":"2014-10-22T11:10:00-07:00","author":"Garth Mcmillan","description":"nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a,","id":"77F7AB30-2AB5-719E-1392-6B13FC42FC76"},{"name":"Lloydminster","date":"2014-02-04T23:08:49-08:00","author":"Larissa Hood","description":"ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum,","id":"6D9E7FD6-B680-4431-0631-A2BEE146CBC7"},{"name":"Bahawalnagar","date":"2014-03-02T23:11:15-08:00","author":"Nehru Sharpe","description":"quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer","id":"671B4DFD-30C5-6631-7ED5-53FF48FD4AF0"},{"name":"Kansas City","date":"2014-05-25T22:03:22-07:00","author":"Tanisha Hoffman","description":"libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum","id":"70A733D0-527D-2034-94B2-A05CFE26EBA1"},{"name":"Tiverton","date":"2014-02-27T17:26:43-08:00","author":"Cooper Guthrie","description":"amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in","id":"24301461-22F3-B210-A8D9-55043BECABE5"},{"name":"Cras-Avernas","date":"2014-08-04T07:57:51-07:00","author":"Julian Moran","description":"quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis","id":"8C234223-5271-77AC-2993-806077D6D44F"},{"name":"Bazel","date":"2014-05-11T05:20:38-07:00","author":"Hakeem Blake","description":"nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis","id":"C151BEC4-980E-1C24-99A8-E5566F18E981"},{"name":"Torquay","date":"2015-01-14T16:29:19-08:00","author":"Dillon Hogan","description":"magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus","id":"2033246C-7643-3AE8-6E38-01F2E60B4D52"},{"name":"Ceppaloni","date":"2014-12-09T01:53:15-08:00","author":"Dolan Schultz","description":"aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac","id":"833CC8A4-24A4-9EE4-EFB2-61F2C63E095F"},{"name":"Cork","date":"2014-05-08T15:32:53-07:00","author":"Lucian Leblanc","description":"eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique","id":"46FB5ABC-02E8-180F-D92C-41DF825A9577"},{"name":"Cargovil","date":"2014-11-15T15:08:27-08:00","author":"Rama Ratliff","description":"elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras","id":"07A94B7E-A751-D7F9-DE06-3C39095FFD15"},{"name":"Spaniard's Bay","date":"2014-05-03T21:08:00-07:00","author":"Tucker Britt","description":"iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes,","id":"BCFF1E65-C334-9DFE-03F8-AA7EEFD4785C"},{"name":"Melsbroek","date":"2015-01-16T09:51:31-08:00","author":"Cherokee Clay","description":"vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec","id":"90E54267-FA68-743D-50C6-AB157B0ABEF1"},{"name":"Haridwar","date":"2014-05-10T04:56:12-07:00","author":"Preston Anthony","description":"scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis","id":"F5883133-AF3B-6FC3-8E35-A7D7AD104748"},{"name":"Napoli","date":"2014-02-08T19:39:20-08:00","author":"Lisandra Gutierrez","description":"ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus","id":"1E1AC00C-532E-82EE-C278-9565D54AE683"},{"name":"Montes Claros","date":"2014-09-04T19:44:15-07:00","author":"Jackson Lara","description":"magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non","id":"EB50B6DA-A870-58AD-5029-4DCE1E71454D"},{"name":"Kirkintilloch","date":"2014-12-22T02:58:41-08:00","author":"Mari Sutton","description":"eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec","id":"FEB85A1B-3714-3EF7-32AF-A7C2AF2A7FF5"},{"name":"Dunstable","date":"2014-10-18T04:52:17-07:00","author":"Ila Lawson","description":"Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem","id":"F69AA6D7-51B6-10A5-EC56-0182EC774E7B"},{"name":"Lint","date":"2014-11-13T11:19:57-08:00","author":"Ayanna Nieves","description":"libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat,","id":"D7305D22-A33C-DD75-83DD-AA203A1FBE0E"},{"name":"Roccabruna","date":"2014-11-07T21:56:03-08:00","author":"Petra Mann","description":"posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor,","id":"9801575D-0441-212F-EC35-753B3DC58587"},{"name":"Stonewall","date":"2014-03-07T23:06:27-08:00","author":"Eden Cervantes","description":"Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque","id":"CDC93E41-F20C-2487-3A11-F3FE381B4F47"},{"name":"Swadlincote","date":"2014-06-15T08:15:34-07:00","author":"Shellie Whitney","description":"quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam","id":"490C7CB1-E244-AA8A-9D67-387512FB7DDC"},{"name":"Fosses-la-Ville","date":"2014-07-03T12:50:12-07:00","author":"April Schneider","description":"at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut,","id":"99F253E1-6738-A026-9FE8-FEFD1EC422C0"},{"name":"Baton Rouge","date":"2014-04-17T09:15:05-07:00","author":"Zephania Lambert","description":"ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at,","id":"04E3A815-DF4A-A785-F685-AC1D65AD0321"},{"name":"Windermere","date":"2014-07-21T09:57:36-07:00","author":"Alvin Heath","description":"sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia","id":"EBEB8A82-80D8-A172-3222-E6B5643C6039"},{"name":"Frankston","date":"2015-01-11T11:57:20-08:00","author":"Aristotle Marshall","description":"Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a","id":"27CD0B67-A437-EB6A-AE26-F31CF08AC45F"},{"name":"Neuss","date":"2015-01-29T09:50:10-08:00","author":"Yeo Fox","description":"magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque,","id":"8DCFDA32-A65F-147B-F442-07C08593CAC8"},{"name":"Meix-Devant-Virton","date":"2014-04-12T09:09:07-07:00","author":"Jordan Padilla","description":"sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum","id":"DE77FCE3-55C9-B3B7-7265-972DC9D990DE"},{"name":"Vellore","date":"2014-04-22T01:00:40-07:00","author":"Joan Franklin","description":"ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas","id":"8B8F2E7D-C56E-EE8B-87A5-945387AD594F"},{"name":"Canora","date":"2014-09-03T22:46:04-07:00","author":"Graham Hodge","description":"Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","id":"F4E6C0AC-2B9B-086C-6ED6-FC3E05289DA3"},{"name":"Habra","date":"2014-07-12T00:59:33-07:00","author":"Galena Anthony","description":"erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar","id":"52974ED5-D90D-9CAB-8E6A-C7C4C670245F"},{"name":"Brussel X-Luchthaven Remailing","date":"2015-01-24T00:53:58-08:00","author":"Tanek Leach","description":"id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc","id":"C00E0610-9861-3668-8662-B83057C04E82"},{"name":"Campochiaro","date":"2014-03-30T23:05:06-07:00","author":"Zenaida Kim","description":"diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non,","id":"C4F7BEAA-3AE3-529D-7FBD-974F06519C3D"},{"name":"Cairns","date":"2014-12-01T15:29:57-08:00","author":"Nigel Trujillo","description":"Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis","id":"0BCE8782-CEF8-110A-20DC-2EDB7966262C"},{"name":"Gravelbourg","date":"2014-04-22T01:22:40-07:00","author":"Reed Davidson","description":"Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet","id":"B9B62DC5-698B-EAE5-CA6C-5E4E0813C5CF"},{"name":"Idar-Oberstei","date":"2014-05-17T06:13:37-07:00","author":"Jonah Arnold","description":"erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc","id":"38F14DC8-1424-670C-C8B7-8BD68964B23C"},{"name":"Fort William","date":"2014-10-24T15:28:28-07:00","author":"Briar Collins","description":"a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero","id":"57EA503C-3E50-7CDD-0193-353A5E3E18D9"},{"name":"Schifferstadt","date":"2014-11-01T10:15:27-07:00","author":"Jermaine Turner","description":"Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante","id":"9C8E5D47-0457-9F96-82CF-A41FD105E3A2"},{"name":"Carnoustie","date":"2015-01-03T17:00:57-08:00","author":"Linda Hurley","description":"libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis","id":"D8AEFCCC-428E-7A33-FC85-6DF4B92A6F61"},{"name":"Oosterhout","date":"2014-05-11T02:18:13-07:00","author":"Tamara Weeks","description":"ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis.","id":"1009EB54-C6BA-D319-889E-D7F2E945CE57"},{"name":"Minna","date":"2014-03-31T12:17:05-07:00","author":"Sandra Cherry","description":"tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum.","id":"ED95710E-4CBA-1CC8-7B3F-3F37BE6EB6E1"},{"name":"Roxburgh","date":"2014-10-26T06:15:05-07:00","author":"Roary Fitzpatrick","description":"consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue","id":"4DB8D007-9A24-91A4-DCB7-8805C11FDA21"},{"name":"Emmen","date":"2014-07-11T12:51:55-07:00","author":"Amity Duffy","description":"auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae","id":"328164E2-E3B0-9AF3-82EB-15E665F090C0"},{"name":"Ternitz","date":"2014-12-06T16:01:41-08:00","author":"Cody Dyer","description":"ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum","id":"40F8B351-853B-3D0C-E934-D11736C838E7"},{"name":"Rocky View","date":"2014-07-16T12:24:25-07:00","author":"Rajah Mcintyre","description":"non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent","id":"163638FA-9231-0A68-6FFE-BEEF8CBA625D"},{"name":"Cicagna","date":"2014-10-09T19:20:32-07:00","author":"Piper Ray","description":"ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at,","id":"9A780DDD-218A-1C6E-71EF-4E03516B72B9"},{"name":"Monguelfo-Tesido/Welsberg-Taisten","date":"2014-07-12T12:41:39-07:00","author":"Fitzgerald Dunlap","description":"id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia","id":"856CF1D8-238C-BD3C-D061-DC7BDAA5282A"}];
  var listings = [
    {
      id: 'http://newcastle.gov.uk/SMN',
      name: 'Speed Management Network',
      nodeClass: 'DataSource',
      description: 'The Speed Management Network Data Source from Newcastle City Council',
      details: 'The vehicle flow data at 120 outstations pulled every 5 minutes',
      childNodeIds: [
        'http://newcastle.gov.uk/SMN#VehicleRecordFeedService',
        'http://newcastle.gov.uk/SMN#OutstationService'
      ],
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user', 'public']
    },
    {
      id: 'http://newcastle.gov.uk/SMN#VehicleRecordFeedService',
      name: 'Vehicle Record Feed Service',
      nodeClass: 'DataService',
      description: 'Speed Management Network Vehicle Record Feed Service',
      details: '',
      childNodeIds: [
        'http://newcastle.gov.uk/SMN#VehicleRecords'
      ],
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user', 'public']
    },
    {
      id: 'http://newcastle.gov.uk/SMN#OutstationService',
      name: 'Outstation Service',
      nodeClass: 'DataService',
      description: 'Speed Management Network Data Outstation Service',
      details: '',
      childNodeIds: [
        'http://newcastle.gov.uk/SMN#Outstations'
      ],
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user', 'public']
    },
    {
      id: 'http://newcastle.gov.uk/SMN#VehicleRecords',
      name: 'Vehicle Records Data Set',
      nodeClass: 'DataSet',
      description: '',
      details: '',
      childNodeIds: [
        'http://newcastle.gov.uk/SMN#time',
        'http://newcastle.gov.uk/SMN#outstationId',
        'http://newcastle.gov.uk/SMN#lane',
        'http://newcastle.gov.uk/SMN#site',
        'http://newcastle.gov.uk/SMN#direction',
        'http://newcastle.gov.uk/SMN#speed',
        'http://newcastle.gov.uk/SMN#class'
      ],
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user', 'public']
    },
    {
      id: 'http://newcastle.gov.uk/SMN#Outstations',
      name: 'Outstations Data Set',
      nodeClass: 'DataSet',
      description: '',
      details: '',
      childNodeIds: [
        //'http://newcastle.gov.uk/SMN#outstationId',
        'http://newcastle.gov.uk/SMN#name',
        'http://newcastle.gov.uk/SMN#description',
        'http://newcastle.gov.uk/SMN#orientation',
        'http://newcastle.gov.uk/SMN#speedlimit',
        'http://newcastle.gov.uk/SMN#latitude',
        'http://newcastle.gov.uk/SMN#longitude'
      ],
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user', 'public']
    },
    {
      id: 'http://newcastle.gov.uk/SMN#outstationId',
      name: 'outstationId',
      description: 'Short',
      details: 'The outstation id at which the vehicle record was generated',
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user']
    },
    {
      id: 'http://newcastle.gov.uk/SMN#name',
      name: 'name',
      description: '',
      details: '',
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user']
    },
    {
      id: 'http://newcastle.gov.uk/SMN#description',
      name: 'description',
      description: '',
      details: '',
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user']
    },
    {
      id: 'http://newcastle.gov.uk/SMN#orientation',
      name: 'orientation',
      description: '',
      details: '',
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user']
    },
    {
      id: 'http://newcastle.gov.uk/SMN#speedlimit',
      name: 'speedlimit',
      description: '',
      details: '',
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user']
    },
    {
      id: 'http://newcastle.gov.uk/SMN#latitude',
      name: 'latitude',
      description: '',
      details: '',
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user']
    },
    {
      id: 'http://newcastle.gov.uk/SMN#longitude',
      name: 'longitude',
      description: '',
      details: '',
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user']
    },
    {
      id: 'http://newcastle.gov.uk/SMN#time',
      name: 'time',
      description: 'Long',
      details: 'The time at which the vehicle record was generated (The time at which the vehicle record was generated in milliseconds since midnight Coordinated Universal Time (UTC), 1 January 1970, not counting leap seconds)',
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user']
    },
    /*{
      id: 'http://newcastle.gov.uk/SMN#outstationId',
      name: 'outstationId',
      description: 'Short',
      details: '',
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user']
    },*/
    {
      id: 'http://newcastle.gov.uk/SMN#lane',
      name: 'lane',
      description: 'Short',
      details: 'The lane at which the vehicle record was generated',
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user']
    },
    {
      id: 'http://newcastle.gov.uk/SMN#site',
      name: 'site',
      description: 'Short',
      details: 'The site at which the vehicle record was generated',
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user']
    },
    {
      id: 'http://newcastle.gov.uk/SMN#direction',
      name: 'direction',
      description: '',
      details: '',
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user']
    },
    {
      id: 'http://newcastle.gov.uk/SMN#speed',
      name: 'speed',
      description: '',
      details: '',
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user']
    },
    {
      id: 'http://newcastle.gov.uk/SMN#class',
      name: 'class',
      description: '',
      details: '',
      owner: 'Admin User',
      "dateCreated": "2015-03-11T09:00:00+00:00",
      "dateUpdated": "2015-03-11T09:00:00+00:00",
      "access": ['user']
    }

    /*{
     id: '',
     metadataId: '',
     metadataPath: '',
     rootNode: '',
     nodeClass: '',
     name: '',
     summary: '',
     description: '',
     dateCreated: '',
     dateUpdate: '',
     owner: '',
     tags: '',
     childNodeIds: []

     }*/
  ];

  return {
    all: function () {
      if (! Global.getSession()) {
        return $window._.filter(listings, function(listing){
          return listing.access.indexOf('public') !== -1;
        })
      } else {
        return listings;
      }

    },
    one: function (id) {
      return $window._.find(listings, function (listing) {
        return Global.getSession() ? listing.id === id : listing.id === id && listing.access.indexOf('public') !== -1;
      });
    }
  };
}]);
