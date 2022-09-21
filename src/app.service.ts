import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';
import { v4 as uuidv4 } from 'uuid';

const firebaseAdmin = admin.initializeApp({ 
  credential: admin.credential.cert({
    projectId : "testfirestore-b049b",
    privateKey : "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDEu99d7/agI4nE\n9jbwsmwnWNMVWP9cla1UN744M2kK5/9gYydPiz0ZN5yJAucgEC8aIyAtQoUxloXz\n9eNQ7O8XUO46o42I4cU32g00O/SCaJOu9uRA+j0gP4/Grr9zBZpnORRz7yM5I+TZ\n6YVSO8sUU6VuIJdyu6/OwzdG6SrtmoOVAV7b0u90Dl4Cw6/1PFGRYxQndFau786F\n/3pYULeV1BPUVHsTxWmMT0MG+bgDO7Hllbpf4IE30A2N7tDp0a7nl9qy1RPJ+X6r\noNd35wocGLMG/+nWqRqPo+bh8NqC+BlItxmjxNwC+K2LnO9vHo2vM5BfViouXj6w\nTv7ALyFTAgMBAAECggEAFQ6AuVayQHCdUdICjl+ieNGmgh3s8xVoIF/5AZ3rC8pK\nCKCEOBzQlM7hd76ySznAON1yl7WLeQPB4Zs7UdGSQ54baXZQ80oq6C/0Ate5821L\nBUqSoqvF+Bolgt/4SNDcNlkjKcd6Lyb62yIF7YfN1Cahybg+TX7uMcSuOW5CdHzJ\np3h8Whwol6JCmLMvp8RyIX5QnkEeajeCDVQLo9B5pJrGTKpHkC70g9UujtM88NVU\n7k9jJTyJenOC14Ptsr5WE5/X+BQPwwjP8E1wEzO8IOK5P/F52Sr/Xt8bpUtALGKu\njd7K03vY+5hgX8kBzLgrW3akiRom7c6sOAU1R0NZSQKBgQDsFtQd8D2F85WpiZ2k\ny9+Bn2Ava+PfapXRkhTQGwVfyuzX4eqZNb/5xmYF3qCUBrhTWiA16xZax7nBb0Cg\nRVIZc9SZ1OcIJbgXmbxp24G9CUHtMJ56bEcfgsDgODQZC4Z0udJfWDujU5/zCAOo\nNw66fNxW5lE7+g2xzMorsL7j+wKBgQDVU1yvt9UJA7KY4kO4UVcMto/DaNHS4KXR\nDeXr9I3Nq9R/P1gLtgoVJLhWplItrGUWHRWESZcVqx6W5hoeXsDq+0r6XBzyzX45\nUXRMmGgGtIoEYpuLT7W8uGGqemfwy/SOOIgcxNwte5nD5+TESC0E03zxZxx4Gvbv\nEt/2PktgiQKBgQC72YY5tBgf5yskVN1cbOOQTfHIib4s3LAMqoFo/LcP+3TsaVOz\nSHNSGKzA6t02KwqrN8D9ZerJnLWO1ijD3aRvoBx/skmJ0AlkreyfBgt7EEymn9LZ\nciI9TlqNjerWKrd3VQuw1ZHOaRGR3MScKgLMG+FuO6BTaqlO2bXbgazB1QKBgQCR\n7uosJyUseoQWBEtxbuuO/eDRPAa2LQoiPlC4nt7XASJoPkwcDtdM6YbVeAglyJaK\njzDmA3XA1AQkFJtvhUCSP4BmTtda3mroCSn3MBeR5rW4FED2B3x68uOVPRGX796H\n4HJ0w9MfpjtlgmDESd/KOmdxuSkHnOKqYA4oJStpiQKBgQDjmK11YJd2ruM/zHQi\nkHdzPbeCSEeN35oX7s1/yRKhEuezoQFfrfxYHa4mXempOWtts4eOfg2GoIMceJdf\nCigRTGO/Vx+EOhnBcSQefWLI+pid6FWz3F0WhKpv5Q1d+cKLgIiNjLo/tAalgmPU\ntTc5Su0roHrYUy/4rpYZZc1jSA==\n-----END PRIVATE KEY-----\n",
    clientEmail : "firebase-adminsdk-5s4cm@testfirestore-b049b.iam.gserviceaccount.com"
  }), 
});

// 먼저 npm install firebase-admin --save



@Injectable()
export class AppService {
  // getHello () {
  //   // 하나의 컬렉션에 담긴 모든 데이터를 갖고 오기 위해서는 아래와 같이 .then문과 forEach를 사용
  //   // collection은 empty 여부 확인함
  //   let test = [];
  //   const work = () => {
  //     firebaseAdmin.firestore().collection('User').get()
  //       .then((result) => {
  //         if(result.empty) throw new Error('데이터가 없슴다')
  //         result.forEach(doc => {
  //           test.push(doc.data())
  //           return test;
  //       })
  //     }, (err) => {
  //       console.log('err :',  err);
  //     })
  //   } 
  //   work();
  // }

  getHello () {
    // 문서/컬렉션/doc을 찾는 때는 exists로 있는 지 여부를 확인
    firebaseAdmin.firestore().collection('User').doc('s0kQrcRrELStQwavuo1e').get()
    .then((shot) => {
      if(!shot.exists) throw new Error('없음당')
      console.log(shot.data());
      return shot.data();
    }, err => {
      console.log('err :', err)
    });
  };

  createUser(name) {
    // set()은 비동기로 처리할 때 없는 컬렉션을 넣어도 결과가 동일하기 때문에 동기적으로 처리
    // 없는 컬렉션은 생성해서 값을 넣음
    // result : WriteResult {
    // _writeTime: Timestamp { _seconds: 1663743260, _nanoseconds: 76096000 }
    firebaseAdmin.firestore().collection('User').doc(uuidv4()).set(name)
      .then(() => {
        console.log('success');
      }, (err) => {
        console.log(err);
    });
  }

  updateUser(uuid: string, name) {
    firebaseAdmin.firestore().collection('User').doc(uuid).update(name)
      .then(() => {
        console.log('success');
      }, (err) => {
        console.log(err);
      });
  }

  deleteUser(uuid: string) {
    firebaseAdmin.firestore().collection('User').doc(uuid).delete()
      firebaseAdmin.firestore().collection('test').doc(uuid).delete()
      .then(() => {
        console.log('success');
      }, (err) => {
        console.log(err);
    });
  }
}
