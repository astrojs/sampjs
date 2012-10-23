sampjs
======

**sampjs**  is a small JavaScript library for using the
SAMP Web Profile from within web pages.

What is SAMP?
-------------

SAMP is the Simple Application Messaging Protocol,
a platform- and language-neutral protocol
used for communicating between applications.
It was developed within the [IVOA](http://www.ivoa.net/)
for use with astronomy tools, but the protocol is not specific
to astronomy.
See the [SAMP Standard](http://www.ivoa.net/Documents/latest/SAMP.html)
and [additional material](http://www.ivoa.net/samp").

What is the Web Profile?
------------------------

SAMP is defined in layers, and the _Profile_ layer
defines how tools perform the actual communications.
Two profiles are currently defined: the _Standard Profile_,
which is suitable for desktop clients, and the _Web Profile_,
which is suitable for web clients running within a browser
sandbox.
The Web Profile is defined as part of version 1.3 of SAMP;
see
[Section 5](http://www.ivoa.net/Documents/SAMP/20120411/REC-SAMP-1.3-20120411.html#tth_sEc5)
of the standard for the details.

For a view of what the protocol looks like in action at the byte level
you can see an [HTTP log](http-log.txt) of a short example
session
(generated using `-web:log http` option of the JSAMP hub).

A talk on SAMP and the Web Profile was presented at ADASS XXI (Paris, 2011).
This will be published as
_M.B.Taylor, T.Boch, J.Fay, M.Fitzpatrick and L.Paioro,
"SAMP: Application Messaging for Desktop and Web Applications",
ASP Conf. Ser. 461, ADASS XXI, ed. Pascal Ballester, 279_
You can see the
[submitted paper](http://www.star.bris.ac.uk/~mbt/papers/adassXXI-O26.pdf) or
[presentation](http://www.star.bris.ac.uk/~mbt/papers/adassXXI-O26_slides.pdf).

What is it good for?
--------------------

Putting these things together allows you to write a web page
which can communicate with other desktop applications running on
the same machine as the browser displaying it
(or even with other unrelated web pages in the same browser).
A simple example is a web page with a button you can click to
send an image or table (perhaps generated dynamically by the server)
to a desktop image or table viewer application.
But more complicated scenarios, including two-way communication,
are possible too.

The technical details of how that can happen and the
associated security implications are
discussed in exhaustive detail in the SAMP standard reference above.

How can I run SAMP?
-------------------

All SAMP communications (Standard and Web) are via a _Hub_,
a daemon process that brokers messages between clients.
So for SAMP tools to be able to communicate, a Hub must be running.
For web clients, this must be a Web Profile-capable hub,
which currently means
either
[JSAMP](http://software.astrogrid.org/doc/jsamp/) version >=1.3-1 (Java) or
[SAMPy](http://pypi.python.org/pypi/sampy/) version >=1.2.1 (Python).

There are (at least?) three ways to make this happen:
   * Some SAMP-aware applications, such as
     [TOPCAT](http://www.starlink.ac.uk/topcat/) and
     [Aladin](http://aladin.u-strasbg.fr/),
     start a hub automatically when they start up, if one is not already
     present.
   * You can download and run a JSAMP or SAMPy hub
   * You can use Java WebStart to start a JSAMP hub by just clicking here:
     [start hub](jsamp-hub.jnlp).

How can I write a SAMP-compatible web page?
-------------------------------------------

Use the `samp.js` javascript library file and write your own code around it.
You can write a minimal SAMP application (often, all that is required)
with very little work.
Usually you will start by importing `samp.js` and `flXHR.js`
(see the discussion of flXHR below):

    <script src="samp.js">
    <script src="flXHR.js">

You can either supply a full path to the js libs or copy them into
the same directory as the web page.

Examples
--------

Here are some working examples:

   * [Client Monitor](examples/monitor.html)
   * [Table Viewer](examples/tdisplay.html)
   * [Link Broadcaster](examples/sendlist.html)
   * [Sample](examples/sample.html)

Don't forget you need to be running a hub for these to work.
Running other SAMP clients will make it more interesting too -
here is a WebStart link for, e.g.,
[TOPCAT](http://www.starlink.ac.uk/topcat/topcat-lite.jnlp).

Who's using sampjs?
-------------------

Some known science uses of this library are:

   * [VizieR search](http://cdsweb.u-strasbg.fr/~boch/SAMP-web-profile/demo/vizier-output-samp-web.html) (CDS)
   * [Xamin](http://heasarc.gsfc.nasa.gov/xamin) (HEASARC)
   * [GAVO Data Center](http://dc.zah.uni-heidelberg.de/)

Note some of these may be experimental.
Feel free to add your own site if you are using sampjs.

What is flXHR?
--------------

**flXHR** is a clever external library for faking a JavaScript
XmlHttpRequest Level 2 object by use of Flash.

The SAMP Web Profile has to play some tricks to communicate outside
of the browser sandbox.  By preference it uses a W3C standard called
[Cross-Origin Resource Sharing](http://www.w3.org/TR/cors/) (CORS)
to do this.
However, some browsers do not support CORS, and in these cases it is
(usually) possible to fall back to using a Flash-based workaround.
Since Flash is installed very widely in browsers, that makes sampjs
work almost everywhere (see the discussion of Compatibility below).

Sampjs does not implement the Flash magic on its own, that's done
by an external library called flXHR.  This contains
both JavaScript and Flash components.  To get it working
you need to put all the relevant flXHR files in the same directory
as the web client page (or something like that) and import the
flXHR script:

    <script src="flXHR.js"/>

flXHR is hosted at
[http://flxhr.flensed.com/](),
which now redirects to a github site; the project is no longer
actively maintained, since the recommendation is to use javascript instead.
You can grab the library files from there; for convenience you can
find what you need on this site under in the `lib/flxhr`
directory.

You don't _need_ to use flXHR with samp.js, but if you don't,
your SAMP client will not run in
browsers which lack support for CORS
(see the compatibility section).

Can I contribute?
-----------------

Please do!  The sampjs project was originally contributed by
[Mark Taylor](http://www.star.bris.ac.uk/~mbt/),
but I'm not a very competent or enthusiastic
JavaScript programmer (or git user), so please improve it
(javascript, documentation, examples, whatever).
If you want write privileges, let me or somebody else know.
If somebody else wants to take over looking after the project,
that suits me too.

Browser Compatibility
---------------------

Browsers so far tested:

   * Firefox 3.0: OK (requires Flash)</li>
   * Firefox 3.6: OK (pure JavaScript)</li>
   * Internet Explorer 6: OK (requires Flash)</li>
   * Internet Explorer 8: OK (pure JScript)</li>
   * Chrome 7.0: OK (pure JavaScript)</li>
   * Safari 3.2<!-- OSX 10.5 -->:
            OK (requires Flash - no cross-domain controls?)</li>
   * Safari 5.0: OK (pure JavaScript)</li>
   * Opera: not working</li>

Any other reports welcome.

History
-------

This library was originally written by Mark Taylor
as a proof of concept when defining the SAMP Web Profile;
it was not intended for public use.
As is the way of these things, some people used and adapted it anyway.

It was moved onto the [astrojs.org](http://astrojs.org/)
site in October 2012.

The original work was supported by Microsoft Research, GAVO and STFC.


