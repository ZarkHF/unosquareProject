using Microsoft.AspNetCore.Mvc.Testing;
using System;
using System.Net;
using ToyStoreAPI;
using Xunit;
using Xunit.Abstractions;

namespace Test
{
    public class InventoryTest
    {
        private readonly ITestOutputHelper _outputHelper;
        private readonly WebApplicationFactory<Startup> _factory;

        public InventoryTest(ITestOutputHelper outputHelper)
        {
            _factory = new WebApplicationFactory<Startup>();
            _outputHelper = outputHelper;
        }

        [Fact]
        public async void TestInventory()
        {
            var client = _factory.CreateDefaultClient();

            var response = await client.GetAsync("/api/inventory/Inventory");
            // var responsePost = await client.PostAsync("/api/inventory/Inventory", );
            var responseContent = response.Content.ReadAsStringAsync().Result;

            Assert.NotNull(response);
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
            Assert.NotNull(responseContent);
            Assert.NotEmpty(responseContent);
            // Assert.True
        }
    }
}
