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

import com.openshift.client.IApplication;
import com.openshift.client.cartridge.IStandaloneCartridge;
import com.openshift.client.cartridge.selector.LatestStandaloneCartridge;
import com.openshift.client.cartridge.selector.LatestVersionOf;

/**
 * @author mtaylor
 */

public class WordPress extends BaseOpenShiftApplicationImpl
{

   private String defaultGitUrl = "https://github.com/openshift/wordpress-example.git";

   public WordPress(String name)
   {
      super(name);
   }

   @Override
   public IApplication createApplication()
   {
      IStandaloneCartridge phpCartridge = new LatestStandaloneCartridge(IStandaloneCartridge.NAME_PHP).get(getUser());

      IApplication app = getDomain().createApplication(applicationName, phpCartridge, null, null, defaultGitUrl, Integer.MAX_VALUE, LatestVersionOf.mySQL().get(getUser()));
      return app;
   }
}
