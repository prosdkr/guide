webpackJsonp([0xcc147c23bcb0e000],{"./node_modules/json-loader/index.js!./.cache/json/python-list-sort-method.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h2>List Sort Method</h2>\n<p>Python lists have a built-in <code>sort()</code> method that modifies the list in-place and a <code>sorted()</code> built-in function that builds a new sorted list from an iterable.</p>\n<p>list.sort(key=…,  reverse=[True/False])</p>\n<h3>Parameters</h3>\n<p>There are two optional parameters to this method\n<br><br>\n<i>key</i> - The input value for the key parameter should be a function that takes a single argument \tand returns a value used for comparisons to sort the items in the list\n<br><br>\n<i>reverse=[value]</i>\n<br>\n<i>value=True</i> : Sorts the items in the list in descending order\n<br>\n<i>value=False</i> : Sorts the items in the list in ascending order. This is considered the default value.\n<br><br>\nPlease note that the <code>sort()</code> method does not return any value. It modifies the original list.</p>\n<h3>Example Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="language-py"><code>a = [4, 2, 5, 3, 1]\na.sort()\nprint a # prints [1, 2, 3, 4, 5]\n\nb = [\'free\', \'code\', \'camp\']\nb.sort()\nprint b # prints [\'camp\', \'code\', \'free\']</code></pre>\n      </div>\n<p>Consider an example with the <b>reverse</b> parameter</p>\n<div class="gatsby-highlight">\n      <pre class="language-py"><code>a = [4, 2, 5, 3, 1]\n\n#Sorts the list in descending order\na.sort(reverse=True)\n\nprint a # prints [5, 4, 3, 2, 1]</code></pre>\n      </div>\n<p>If you want to sort the list based on your own function, then use the <b>key</b> parameter.\n<br>Here is an example to sort the strings in the list by length, in ascending order</p>\n<div class="gatsby-highlight">\n      <pre class="language-py"><code>a = ["hello", "hi", "hey"]\n\n#The built-in len() function is given as an input to key parameter to sort the strings by length\na.sort(key = len) \n\nprint a # prints [\'hi\', \'hey\', \'hello\']</code></pre>\n      </div>\n<p>Here is another example, where the list contains tuples(name, age). <br>The usage below shows how to sort the list by age, in ascending order.</p>\n<div class="gatsby-highlight">\n      <pre class="language-py"><code>#Consider the second element in the tuple for sorting\n>>> def compareByAge(element):\n...     return element[1]\n\nb = [(\'Adam\', 20), (\'Rahman\', 30), (\'Rahul\', 25)]\n\n#Sort the list by age\nb.sort(key = compareByAge)\n\n#Output\nprint b # prints [(\'Adam\', 20), (\'Rahul\', 25), (\'Rahman\', 30)]</code></pre>\n      </div>\n<h3>Sorting Basics</h3>\n<p>A simple ascending sort is very easy — just call the sorted() function. It returns a new sorted list:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> sorted<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>You can also use the list.sort() method of a list. It modifies the list in-place (and returns None to avoid confusion). Usually it’s less convenient than sorted() - but if you don’t need the original list, it’s slightly more efficient.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>\n<span class="token operator">>></span><span class="token operator">></span> a<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token operator">>></span><span class="token operator">></span> a\n<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>Another difference is that the list.sort() method is only defined for lists. In contrast, the sorted() function accepts any iterable.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> sorted<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token string">\'D\'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token string">\'B\'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token string">\'B\'</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">:</span> <span class="token string">\'E\'</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">:</span> <span class="token string">\'A\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<h4>Implementation Details</h4>\n<p>If one wants to know details about the implementation of the sort function, the algorithm, and the time complexity, etc., refer <a href=\'http://svn.python.org/projects/python/trunk/Objects/listsort.txt\' target=\'_blank\' rel=\'nofollow\'>here</a>. In brief, sort function uses TimSort algorithm, which according to Python Developers, is :-  </p>\n<blockquote>\n<p>an adaptive, stable, natural mergesort, modestly called\ntimsort (hey, I earned it <wink>).  It has supernatural performance on many\nkinds of partially ordered arrays (less than lg(N!) comparisons needed, and\nas few as N-1), yet as fast as Python’s previous highly tuned samplesort\nhybrid on random arrays.</p>\n</blockquote>\n<h4>sort() Parameters</h4>\n<p>By default, sort() doesn’t require any extra parameters. However, it has two optional parameters:</p>\n<ul>\n<li>reverse - If true, the sorted list is reversed (or sorted in Descending order)</li>\n<li>key - function that serves as a key for the sort comparison</li>\n</ul>\n<h4>More Information:</h4>\n<p>More information about <code>sort()</code> can be found <a href=\'https://docs.python.org/3/library/functions.html#sorted\' target=\'_blank\' rel=\'nofollow\'>here</a></p>\n<p>More information about sort() and sorted() can be found <a href=\'https://docs.python.org/3.6/tutorial/datastructures.html\' target=\'_blank\' rel=\'nofollow\'>here</a></p>\n<p>More information about sort() and sorted() can be found <a href=\'https://docs.python.org/3.6/tutorial/datastructures.html\' target=\'_blank\' rel=\'nofollow\'>here</a>. </p>',fields:{slug:"/python/list-sort-method/"},frontmatter:{title:"List Sort Method"}}},pathContext:{slug:"/python/list-sort-method/"}}}});
//# sourceMappingURL=path---python-list-sort-method-3af25f91a6ffbe9c46ee.js.map