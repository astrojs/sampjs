SAMP Web Profile
================

This page provides documentation, examples and supporting materials for the SAMP Web Profile. SAMP is the Simple Application Messaging Protocol: see the [IVOA Standard](http://www.ivoa.net/Documents/latest/SAMP.html) and [additional material](http://www.ivoa.net/samp).

The Web Profile allows web applications (applications running within a browser, for instance javascript on a web page) to communicate with SAMP-capable desktop-based tools such as Aladin or TOPCAT, or with other SAMP-aware web apps.

Documentation
=============

The Web Profile is defined as part of the SAMP 1.3 IVOA Recommendation, see [Section 5](http://www.ivoa.net/Documents/SAMP/20120411/REC-SAMP-1.3-20120411.html#tth_sEc5) of the standard.

You can also see an [HTTP log](http://www.star.bristol.ac.uk/~mbt/websamp/http-log.txt) of a short example session (generated using "-web:log http" option of the JSAMP hub).

A talk on SAMP and the Web Profile was presented at ADASS XXI (Paris, 2011). This will be published as M.B.Taylor, T.Boch, J.Fay, M.Fitzpatrick and L.Paioro, "SAMP: Application Messaging for Desktop and Web Applications", ASP Conf. Ser. 461, ADASS XXI, ed. Pascal Ballester, 279. You can see the [submitted paper](http://www.star.bris.ac.uk/~mbt/papers/adassXXI-O26.pdf) or [presentation](http://www.star.bris.ac.uk/~mbt/papers/adassXXI-O26_slides.pdf).

Hubs
====

A dual-profile hub is available as part of [JSAMP](http://software.astrogrid.org/doc/jsamp/) version 1.2 and later (1.3-1 and later recommended). Run it in one of these ways:

* [webstart version](http://www.star.bristol.ac.uk/~mbt/websamp/webhub.jnlp): just click to run if you have java WebStart installed; note the certificate is signed by Peter Draper.
* [jsamp-1.3-1.jar](http://www.astrogrid.org/maven/org.astrogrid/jars/jsamp-1.3-1.jar): download and run (java -jar).
* Run [TOPCAT v3.9](http://www.starlink.ac.uk/topcat/) or later. Download the [jar file](http://www.starlink.ac.uk/topcat/topcat-lite.jar) or use [WebStart](http://www.starlink.ac.uk/topcat/topcat-lite.jnlp).
This hub implements both Standard Profile and Web Profile. This means that clients of both types can communicate seamlessly with each other. See the [JSAMP documentation](http://software.astrogrid.org/doc/jsamp/)

[SAMPy](http://pypi.python.org/pypi/sampy/) (Luigi Paioro's Python SAMP implementation) also supports the Web Profile by offering a dual-profile hub since version 1.2.1.

Demonstration Clients
=====================

Here are a couple of experimental javascript clients which run in the browser sandbox and use the Web Profile perform 2-way SAMP communications. You must have the Web Profile hub (above) running for them to work.

Toys
----
* [Client Monitor](http://www.star.bristol.ac.uk/~mbt/websamp/monitor.html)
* [Table Viewer](http://www.star.bristol.ac.uk/~mbt/websamp/tdisplay.html)
* [Link Broadcaster](http://www.star.bristol.ac.uk/~mbt/websamp/sendlist.html)
* [Sample](http://www.star.bristol.ac.uk/~mbt/websamp/sample.html)

Experimental science pages:

* [VizieR search](http://cdsweb.u-strasbg.fr/~boch/SAMP-web-profile/demo/vizier-output-samp-web.html) (Thomas Boch)
* [Xamin](http://heasarc.gsfc.nasa.gov/xamin) from HEASARC
* [GAVO Data Center](http://dc.zah.uni-heidelberg.de/)

These use the SAMP javascript library [samp.js](http://www.star.bristol.ac.uk/~mbt/websamp/samp.js). This is undocumented and scrappy, but feel free to take a look if you like. It has been used by various web pages as the basis for Web SAMP capabilities.

Compatibility
=============

Clients so far tested:

* Firefox 3.0: OK (requires Flash)
* Firefox 3.6: OK (pure JavaScript)
* Internet Explorer 6: OK (requires Flash)
* Internet Explorer 8: OK (pure JScript)
* Chrome 7.0: OK (pure JavaScript)
* Safari 3.2: OK (requires Flash - no cross-domain controls?)
* Safari 5.0: OK (pure JavaScript)
* Opera: not working

Any other reports welcome.

----------------------------------------------------------------
*Mark Taylor*

*This work has been supported by Microsoft Research, GAVO and STFC*