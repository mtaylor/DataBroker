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

package org.risbic.databroker.tests.openshift;

import java.util.Map;
import java.util.UUID;

import com.openshift.client.ApplicationScale;
import com.openshift.client.IApplication;
import com.openshift.client.IDomain;
import com.openshift.client.IEnvironmentVariable;
import com.openshift.client.IGearProfile;
import com.openshift.client.IOpenShiftConnection;
import com.openshift.client.IUser;
import com.openshift.client.OpenShiftConnectionFactory;
import com.openshift.client.cartridge.IStandaloneCartridge;
import com.openshift.client.cartridge.selector.LatestVersionOf;
import com.sun.org.apache.xalan.internal.xsltc.DOM;
import org.junit.Before;
import org.junit.Test;

/**
 * @author mtaylor
 */

/**
 * Deploys an OpenShift cartridge.
 *
 * The following environment variables are expected
 *
 * openshift.username
 * openshift.password
 * openshift.domain
 *
 */

public class DeployPostgresql
{

   private static String CLIENT_ID = "RISBIC_TEST_CLIENT";

   private static String APP_NAME = "RISBICTESTAPP";  // Can only contain alpha numeric

   private IOpenShiftConnection connection;

   private IUser user;

   private IDomain domain;

   @Before
   public void setup()
   {
      connection = getConnection();
      user = connection.getUser();
      domain = user.getDomain(System.getProperty("openshift.domain"));
   }

   @Test
   public void deployCartridge(String cartridgeName, String appName)
   {
      // Detect to see if an application with this name already exist.
      IApplication app = domain.getApplicationByName(APP_NAME);
      if (app == null)
      {
         app = domain.createApplication(APP_NAME, LatestVersionOf.ruby().get(user));
         app.addEmbeddableCartridge(LatestVersionOf.postgreSQL().get(user));
      }
      app.start();

      if (app.canGetEnvironmentVariables())
      {
         for (Map.Entry<String, IEnvironmentVariable> entry : app.getEnvironmentVariables().entrySet())
         {
            System.out.println(entry.getKey());
            System.out.println(entry.getValue().getValue());
         }
      }
   }

   private IOpenShiftConnection getConnection()
   {
      return new OpenShiftConnectionFactory().getConnection(CLIENT_ID,
                                                            System.getProperty("openshift.username"),
                                                            System.getProperty("openshift.password"));
   }

   public void tearDown()
   {
      domain.getApplicationByName(APP_NAME).destroy();
   }
}
