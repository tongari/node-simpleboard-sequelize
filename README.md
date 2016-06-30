# node-simpleboard-sequelize

## DB名「bulletin_board」


### boardsテーブル定義
|カラム|型|長さ|符号ナシ|ゼロフィル|バイナリ|NULL許可|キー|デフォルト|追加情報|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|board_id|INT|11|false|false|false|false|PRI||auto_increment|
|created_at|DATETIME||false|false|false|false||||
|updated_at|DATETIME||false|false|false|false||||


### messagesテーブル定義
|カラム|型|長さ|符号ナシ|ゼロフィル|バイナリ|NULL許可|キー|デフォルト|追加情報|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|message_id|INT|11|false|false|false|false|PRI||auto_increment|
|board_id|INT|11|false|false|false|false||||
|message|TEXT||false|false|false|false||||
|created_at|DATETIME||false|false|false|false||||
|updated_at|DATETIME||false|false|false|false||||


## Start
```bash
npm run dev
```

```
localhost:3000
```
