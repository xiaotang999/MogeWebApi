# Filename: get_pk10.py

# 导入模块


import sys
import time
import requests

sys.path.append("config")
from open_time import time_pk10

req_url = "https://api.api68.com/pks/getPksHistoryList.do?lotCode=10001"
req_data = {
    'key': '',
    'day_id': '',
    'issue': '',
    'opens': '',
}
up_url = "http://127.0.0.1:8000/api/pk10/req/"
key = '*@%4JksclK@mrstP'

num = 1
def req_pk10():
    global req_data, num
    print(time.strftime("%Y/%m/%d %H:%M:%S", time.localtime())+' 执行第'+str(num)+'次')
    num+=1
    # 
    k_day_id = int(time_pk10()[0])
    # 新数据跟就数据比较
    if k_day_id != req_data['day_id']:
        print( '<北京PK10> 常驻内存 - 第 '+str(req_data['day_id'])+' 期 - 跟内存不一至！需要进行采集～' )
        r = requests.get(req_url)
        _json = r.json()
        # 
        res_issue = int(_json['result']['data'][0]['preDrawIssue'])
        res_opens = _json['result']['data'][0]['preDrawCode']
        # 请求的开奖不等于旧开奖数据  并且 有9个逗号
        if res_opens != req_data['opens'] and res_opens.count(',') == 9:
            post_data = {
                'key': key,
                'day_id': k_day_id,
                'issue': res_issue,
                'opens': res_opens,
            }
            xx = requests.get(up_url, post_data)
            print(xx)
            if xx.status_code == 222: # 如果返回正确 改变内存变量！ 否则死劲采集
                req_data = post_data
                print( '<北京PK10> 常驻内存 - 第 '+str(req_data['day_id'])+' 期 状态 222 成功写入' )
            elif xx.status_code == 555: #数据库已经存在
                req_data = post_data
                print( '<北京PK10> 常驻内存 - 第 '+str(req_data['day_id'])+' 期 状态 555 已存在数据库中' )

    else:
        print( '<北京PK10> 常驻内存 - 第 '+str(req_data['day_id'])+' 期 - 相同不需要进行采集～pass' )
    # 如果采集正确入库 day_id, issue, opens


# 后期该程try
# 主程序入口
if __name__ == '__main__':
    while True:
        try:
            req_pk10()
        except:
            print("出现入口异常")
        time.sleep(10)