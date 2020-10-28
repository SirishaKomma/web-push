var push =require('web-push');
let vapIdKeys={
    publicKey: 'BMkS7klPtvkYUprt_VfNmd-tDj_fZCm9wcxCY6Ed8Lc1OQAhV-Cay3IGt_jUigdQcjgWug84ExUK4JPfurYmDvI',
    privateKey: 'Oc6GVmO96ri-EW-2li5CvjiyINMTnQp8iYZXPkxhG-c'
  }
push.setVapidDetails("mailto:sireesha@bizense.com",vapIdKeys.publicKey,vapIdKeys.privateKey);
push.sendNotification(sub,'test message');