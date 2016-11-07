/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

({
    render: function (cmp, helper) {
        // Allow for cases when a auto-destory is disabled on the component, in such case a render may
        // be called multiple times
        if ($A.util.isEmpty(cmp.get("v.tabHeaders"))) {
            helper.setTabItems(cmp);
        }
        return this.superRender();
    },

    rerender: function (cmp, helper) {
        if (cmp.isDirty("v.tabs")) {
            helper.setTabItems(cmp);
        }

        return this.superRerender();
    }

})// eslint-disable-line semi
