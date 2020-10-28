var push =require('web-push');
let vapIdKeys={
    publicKey: 'BMkS7klPtvkYUprt_VfNmd-tDj_fZCm9wcxCY6Ed8Lc1OQAhV-Cay3IGt_jUigdQcjgWug84ExUK4JPfurYmDvI',
    privateKey: 'Oc6GVmO96ri-EW-2li5CvjiyINMTnQp8iYZXPkxhG-c'
  }
push.setVapidDetails("mailto:sireesha@bizense.com",vapIdKeys.publicKey,vapIdKeys.privateKey);
let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/d3uOmTME18Y:APA91bGw1knziPx4pJhhDSHfLPrg-TJJ3nygFGJkvNxaMBxygwcThHP3GhSd_OpIFGmfx8om3ILeL9DZPzec4F3H4wW1dDR3_7cvsNuwcg4YO3SRffkFpq4CA9UoZP5kYKqUT_by9OUs","expirationTime":null,"keys":{"p256dh":"BGf9h0ydxCLlXMr4xOivk79DnsadB4ncBHoB3ts3hqgTK4gd4dJT4Y-tJ3NTQo-nRTYl3ZjOjseX5Rq_Mlmr8K8","auth":"v6dnJiqepsd6S8Wwigg7kg"}}
push.sendNotification(sub,'test message');