import axios from 'axios';
import API from '../API' ;
import { promises } from 'fs';

export function  getentriesdate(){
    return new Promise((resolve,reject)=>{
        axios.get(API.INDEX_ENTRIES_API,{
            params : {
                latitude : 22.648565,
                longitude : 113.830707,
                templates: ['main_template','favourable_template','svip_template'],
                terminal : 'h5'

            }
        })
        .then(response=>{
            // console.log('请求成功')
            // console.log(response);
            let data = response.data[0].entries.map(item=>{
                return {
                    id : item.id ,
                    image_hash : item.image_hash,
                    name : item.name
                }
            })
            let dataone = response.data[1].entries.map(item=>{
                return {
                    id : item.id ,
                    image_hash : item.image_hash,
                    name : item.name,
                    population:JSON.parse(item.more).population,
                    description : item.description
                }
            })
            // console.log(data)
            // console.log(dataone )
            resolve([data,dataone]);
        })
        .catch(error=>{
            console.log('请求失败')
            console.log(error)
        })
    })
    
}

export function getNenuList(){
    return new Promise((resolve,reject)=>{
        axios.get(API.MENU_LIST_API,{
            params : {
                latitude : 22.648565,
                longitude : 113.830707,
                terminal : 'h5'
            }
        })
        .then(response=>{
            resolve(response)
        })
        .catch(error=>{
            console.log('请求失败')
            console.log(error)
        })
    })
}

export function getStoreInfo(){
    return new Promise((resolve,reject)=>{
        axios.get(API.STORE_INFO_API,{
            params : {
                latitude: 22.54286,
                longitude: 114.059563,
                offset: 40,
                limit: 8,
                extras: ['activities','tags'],
                // extra_filters: home,
                // rank_id : 2d05a5d5aab44710bf7344f1d7021894,
                // terminal: h5,
            }
        })
        .then(response=>{
            console.log('请求成功')
            // console.log(response.data.items)
            let data = response.data.items.map(item=>{
                return {
                    restaurant : item.restaurant ,
                    __ob__ : item.__ob__
                }
            })
            // console.log(data)
            resolve(data)
        })
        .catch(error=>{
            console.log('请求失败')
            console.log(error)
        })
    })
}
