# Complexity

In this workshop, you'll be implementing simple algorithms for checking basic properties of code complexity.

Two design patterns are of importance here:
* A [Builder pattern](https://en.wikipedia.org/wiki/Builder_pattern), which is used to build up state and then finally emit.
* A [Visitor pattern](https://en.wikipedia.org/wiki/Visitor_pattern), which is used to abstract the process of visiting a data structure such as abstract syntax tree (AST). The only input you have to provide is what action to perform at each node.

### Esprima

Instead of building a scanner and parser by hand like we [demonstrated previously](https://github.com/CSC-DevOps/Parsing). We will use an existing library, [esprima](http://esprima.org/), to parse code and create a static analyzer for basic code complexity metrics.

##### Video
If you have not already watched this video, you can get more background about Esprima here:
Watch [5:00-14:30,28:00-34:00](https://www.youtube.com/watch?v=ACYZFkvq0Sk).

##### Interactive AST

Use the [demo page](http://esprima.org/demo/parse.html) to see what a code snippet looks like, in order to help you navigate the data structure.

For example, the following snippet:

```
function functionName( node )
{
	if( node.id )
	{
		return node.id.name;
	}
	return "anon function @" + node.loc.start.line;
}
```

Will appear as following, and:

![image](https://cloud.githubusercontent.com/assets/742934/9937779/295bc654-5d30-11e5-9e60-6454fb5360f3.png)


**Can be [interacted with here](http://esprima.org/demo/parse.html?code=function%20functionName(%20node%20)%0A%7B%0A%09if(%20node.id%20)%0A%09%7B%0A%09%09return%20node.id.name%3B%0A%09%7D%0A%09return%20%22anon%20function%20%40%22%20%2B%20node.loc.start.line%3B%0A%7D)**.

### Workshop

The repository contains a stub that parses a javascript file and visits each function. 

1. Run the program and print all the tokens in an ast.
   ```
      npm install
      node analysis.js
   ```

2. Do a simple calculation

   * **String Usage**: How many string literals are used in file? (FileBuilder)
   * **ParameterCount**: The number of parameters for functions (FunctionBuilder)

3. Using multiple visitors.

   * **SimpleCyclomaticComplexity**: The number of if statements/loops + 1.

4. Advanced (using parents/etc):

   * **MaxConditions**: The max number of conditions in one statement.
   * **MaxNestingDepth**: The max depth of scopes (nested ifs, loops, etc) -- this one is hard, only expect a few to get to do finish this one.



