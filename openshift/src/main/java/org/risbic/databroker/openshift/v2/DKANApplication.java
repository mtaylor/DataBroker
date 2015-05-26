/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.risbic.databroker.openshift.v2;

/**
 * @author mtaylor
 */

public class DKANApplication extends DrupalApplication
{
   public static final String defaultDKANGitURL = "https://github.com/NuCivic/dkan-drops-7.git";

   public DKANApplication(String username, String password, String domain, String applicationName, String gitUrl)
   {
      super(username, password, domain, applicationName, gitUrl);
   }

   public DKANApplication(String username, String password, String domain, String applicationName)
   {
      this(username, password, domain, applicationName, defaultDKANGitURL);
   }
}
