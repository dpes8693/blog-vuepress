<template><!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
  <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  <style>
    [v-cloak] {
      display: none;
    }
  </style>
</head>
<body>
  <div id="app">
    <v-app id="inspire">
<pre><code>  &lt;v-app-bar dark color=&quot;primary&quot; app v-if=&quot;isShow&quot;&gt;
    &lt;v-app-bar-nav-icon&gt;&lt;/v-app-bar-nav-icon&gt;
    &lt;v-toolbar-title v-cloak&gt;{{tooltips.rent}}&lt;/v-toolbar-title&gt;
    &lt;v-spacer&gt;&lt;/v-spacer&gt;
    &lt;!--  --&gt;
    &lt;span v-cloak&gt;{{tooltips.step}}&lt;/span&gt;
    &lt;v-spacer&gt;&lt;/v-spacer&gt;
  &lt;/v-app-bar&gt;

  &lt;v-main&gt;
    &lt;br /&gt;
    &lt;v-container fluid&gt;
      &lt;!-- form --&gt;
      &lt;template app v-if=&quot;isShow&quot;&gt;
        &lt;v-form ref=&quot;form&quot; v-model=&quot;valid&quot; lazy-validation&gt;
          &lt;v-row&gt;
            &lt;v-col md=&quot;1&quot;&gt;
              &lt;v-checkbox v-model=&quot;checkBoxes[0]&quot; disabled&gt;&lt;/v-checkbox&gt;
              &lt;v-checkbox v-model=&quot;checkBoxes[1]&quot;&gt;&lt;/v-checkbox&gt;
              &lt;v-checkbox v-model=&quot;checkBoxes[2]&quot;&gt;&lt;/v-checkbox&gt;
              &lt;v-checkbox v-model=&quot;checkBoxes[3]&quot;&gt;&lt;/v-checkbox&gt;
            &lt;/v-col&gt;
            &lt;v-col md=&quot;4&quot;&gt;
              &lt;v-text-field type=&quot;text&quot; v-model=&quot;room&quot; :rules=&quot;mustRules&quot; label=&quot;房間&quot; required :oninput=&quot;oninputs&quot;&gt;
              &lt;/v-text-field&gt;
              &lt;v-text-field type=&quot;number&quot; v-model=&quot;waterPrice&quot; :rules=&quot;mustRules&quot; label=&quot;水費&quot; required
                :oninput=&quot;oninputs&quot;&gt;
              &lt;/v-text-field&gt;
              &lt;v-text-field type=&quot;number&quot; v-model=&quot;electricPrice&quot; :rules=&quot;mustRules&quot; label=&quot;電費&quot; required
                :oninput=&quot;oninputs&quot;&gt;
              &lt;/v-text-field&gt;
              &lt;v-text-field type=&quot;number&quot; v-model=&quot;managePrice&quot; :rules=&quot;mustRules&quot; label=&quot;管理費&quot; required&gt;
              &lt;/v-text-field&gt;
              &lt;v-col md=&quot;6&quot; offset-md=&quot;4&quot;&gt;
                &lt;v-btn color=&quot;green&quot; class=&quot;mr-4&quot; @click=&quot;go&quot; dark&gt;
                  &lt;h2&gt;+ 結算&lt;/h2&gt;
                &lt;/v-btn&gt;
              &lt;/v-col&gt;
            &lt;/v-col&gt;
            &lt;v-col md=&quot;5&quot;&gt;
              &lt;template&gt;
                &lt;v-row justify=&quot;center&quot;&gt;
                  &lt;v-date-picker v-model=&quot;picker&quot; color=&quot;green lighten-1&quot; header-color=&quot;green&quot; locale=&quot;zh-tw&quot;&gt;
                  &lt;/v-date-picker&gt;
                &lt;/v-row&gt;
              &lt;/template&gt;
            &lt;/v-col&gt;
          &lt;/v-row&gt;
        &lt;/v-form&gt;
      &lt;/template&gt;
      &lt;!-- form-end --&gt;
      &lt;br /&gt;
      &lt;!-- icons --&gt;
      &lt;v-tooltip top&gt;
        &lt;template v-slot:activator=&quot;{ on, attrs }&quot;&gt;
          &lt;v-btn icon v-bind=&quot;attrs&quot; v-on=&quot;on&quot; @click=&quot;showOthers&quot;&gt;
            &lt;v-icon&gt;mdi-eye&lt;/v-icon&gt;
          &lt;/v-btn&gt;
        &lt;/template&gt;
        &lt;span v-cloak&gt;{{eyes}}&lt;/span&gt;
      &lt;/v-tooltip&gt;
      &lt;v-tooltip top open-on-hover&gt;
        &lt;template v-slot:activator=&quot;{ on, attrs }&quot;&gt;
          &lt;v-btn icon v-bind=&quot;attrs&quot; v-on=&quot;on&quot; @click=&quot;printer&quot;&gt;
            &lt;v-icon&gt;mdi-printer&lt;/v-icon&gt;
          &lt;/v-btn&gt;
        &lt;/template&gt;
        &lt;span v-cloak&gt;{{tooltips.print}}&lt;/span&gt;
      &lt;/v-tooltip&gt;
      &lt;!-- icons-end --&gt;
      &lt;v-divider&gt;&lt;/v-divider&gt;
      &lt;br /&gt;
      &lt;!-- table --&gt;
      &lt;template&gt;
        &lt;div v-for=&quot;(table,index) in Tables&quot; :key=&quot;index&quot;&gt;

          &lt;v-row&gt;
            &lt;v-col md=&quot;6&quot; v-for=&quot;n in 2&quot; :key=&quot;n&quot;&gt;
              &lt;v-simple-table&gt;
                &lt;template v-slot:default&gt;
                  &lt;thead&gt;
                    &lt;tr&gt;
                      &lt;th class=&quot;text-right&quot;&gt;
                        {{ months[index] }}月
                      &lt;/th&gt;
                      &lt;th class=&quot;text-center&quot;&gt;
                        房號:{{ rooms[index] }}
                      &lt;/th&gt;
                    &lt;/tr&gt;
                  &lt;/thead&gt;
                  &lt;tbody&gt;
                    &lt;tr v-for=&quot;(item) in Tables[index]&quot; :key=&quot;item.name&quot;&gt;
                      &lt;td class=&quot;text-left&quot;&gt;{{ item.name }}&lt;/td&gt;
                      &lt;td class=&quot;text-center&quot;&gt;{{ item.value }}&lt;/td&gt;
                    &lt;/tr&gt;
                  &lt;/tbody&gt;
                &lt;/template&gt;
              &lt;/v-simple-table&gt;
            &lt;/v-col&gt;
          &lt;/v-row&gt;
          &lt;v-row align-center&gt;
            &lt;v-col md=&quot;6&quot; class=&quot;text-right&quot;&gt;
              {{picker}} {{signName}}
            &lt;/v-col&gt;
            &lt;v-col md=&quot;6&quot; class=&quot;text-right&quot;&gt;
              {{picker}} {{signName}}
            &lt;/v-col&gt;
          &lt;/v-row&gt;
          &lt;br /&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;!-- table-end --&gt;
    &lt;/v-container&gt;
  &lt;/v-main&gt;
&lt;/v-app&gt;
</code></pre>
  </div>
</body>
</html>
</template>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>


  <script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>


  <script src='https://cdnjs.cloudflare.com/ajax/libs/axios/0.9.1/axios.js'
    integrity='sha512-Kg0CewqPNO/ziOJuCq5eyl3P/V6OLz/Lb1I2m+yKS3lHZcGVFN/KOew18rWP+kTsL7haYdaqGjwHQCZrN0heLQ=='
    crossorigin='anonymous'>
    </script>


  <script>
    new Vue({
      el: '#app',
      vuetify: new Vuetify(),
      computed: {},
      watch: {
        isShow() {
          (this.isShow === true) ? this.eyes = this.tooltips.hide : this.eyes = this.tooltips.show
        }
      },
      mounted() { },
      data: () => ({
        formCounter: 0,
        eyes: '顯示',
        tooltips: {
          hide: '隱藏',
          show: '顯示',
          print: '列印',
          rent: '收租金',
          step: `1.填表單 2.選日期 3.結算做更新 4.隱藏表單 5.列印`
        },
        isShow: true,
        valid: true,
        signName: '廖本源',
        name: '',
        mustRules: [v => !!v || '一定要填'],
        oninputs: 'if(value.length > 10)value = value.slice(0, 10)',
        months: [],
        rooms: [],
        room: '8-7',
        waterPrice: 0,
        electricPrice: 0,
        managePrice: 0,
        checkBoxes: [true, true, true, true],
        picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        trueData: [],
        Tables: []
      }),
      methods: {
        go() {
          this.rooms.push(this.room)
          this.setMonth()
          this.setData()
          this.addTable()
        },
        setMonth() {
          let m = this.picker.slice(-5, -3)
          this.months.push(m)
        },
        setData() {
          this.trueData = []
          let counter = 0
          if (this.checkBoxes[1]) {
            this.trueData.push({ name: '水費', value: this.waterPrice })
            counter += Number(this.waterPrice)
          }
          if (this.checkBoxes[2]) {
            this.trueData.push({ name: '電費', value: this.electricPrice })
            counter += Number(this.electricPrice)
          }
          if (this.checkBoxes[3]) {
            this.trueData.push({ name: '管理費', value: this.managePrice })
            counter += Number(this.managePrice)
          }
          this.trueData.push({ name: '總計', value: counter + ' NTD' })
        },
        addTable() {
          this.Tables.push(this.trueData)
        },
        printer() {
          this.tooltips.print = ''
          this.$nextTick(() => {
            window.print()
            this.tooltips.print = '列印'
          })
        },
        showOthers() {
          this.isShow = !this.isShow
        },
      },
    })
  </script>
