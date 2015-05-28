package org.risbic.databroker.openshift.v2; /**
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

/**
 * @author mtaylor
 */

public class DrupalApplication extends PHPApplication
{
   public static final String defaultGitUrl = "https://github.com/openshift/drupal-quickstart.git";

   private String gitUrl;

   public DrupalApplication(String username, String password, String domain, String applicationName, String gitUrl)
   {
      super(username, password, domain, applicationName);
      this.gitUrl = gitUrl;
   }

   public DrupalApplication(String username, String password, String domain, String applicationName)
   {
      this(username, password, domain, applicationName, defaultGitUrl);
   }

   @Override
   public String getGitURL()
   {
      return gitUrl;
   }
}