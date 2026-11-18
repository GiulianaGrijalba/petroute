using Xunit;

namespace PetRoute.UnitTests;

public sealed class ProjectBootstrapTests
{
    [Fact]
    public void TestAssembly_CanRun()
    {
        Assert.Equal(2, 1 + 1);
    }
}
