/*! For license information please see combochart.64e601a50d7c22680bd1.js.LICENSE.txt */
/*!
 * sense-client@7.79.4
 * 
 * Copyright(C) 2020 Qlik International AB
 * All Rights Reserved
 * 
 */
// This is just a sample script. Paste your real code (javascript or HTML) here.
(window["qJsonp"] = window["qJsonp"] || []).push([
    [59], {
        "+Lr6": function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i("qIEf");
            var n = i.n(a);
            var s = i("4nJ1");
            var r = i("mWu2");
            var o = i("sWge");
            var l = i("IUcm");
            var h = i("nHjU");
            var c = i("7xSA");
            var u = i("tccY");
            var d = i("wntQ");
            var p = i("/KrV");
            var f = i("plXO");
            var m = i("Q5XB");
            var v = i("NWoE");
            var g = i("ZrpC");
            var x = i("T7lR");
            var _ = i("AFKu");

            function y(e) {
                switch (e) {
                    case "diamond":
                    case "triangle":
                        return new g["a"];
                    case "circle":
                        return new v["a"];
                    case "line":
                        return new x["a"];
                    default:
                        return new x["a"]
                }
            }

            function b(e, t, i, a, n, s) {
                var r = n.type;
                var o = n.rgb;
                var l = n.shiftedRgb;
                var h = .5;
                var c = n.isFilled;
                var u;
                var d = true;
                switch (r) {
                    case "circle":
                        e.set(t, i, Math.max(2, Math.min(6, .125 * a)));
                        break;
                    case "diamond":
                        u = Math.max(4, Math.min(12, .25 * a));
                        e.set([{
                            x: t,
                            y: i - u / 2
                        }, {
                            x: t - u / 2,
                            y: i
                        }, {
                            x: t,
                            y: i + u / 2
                        }, {
                            x: t + u / 2,
                            y: i
                        }]);
                        break;
                    case "triangle":
                        u = Math.max(4, Math.min(12, .25 * a));
                        e.set([{
                            x: t,
                            y: i - u / 2
                        }, {
                            x: t - u / 2,
                            y: i + u / 2
                        }, {
                            x: t + u / 2,
                            y: i + u / 2
                        }]);
                        break;
                    case "line":
                        u = Math.max(4, .5 * a);
                        u < 24 ? e.set(t - u / 2, Math.floor(i) - h, u, Math.min(3, Math.max(2, Math.round(u / 4)))) : e.set(Math.floor(t - u / 2) - h, Math.floor(i) - h, Math.ceil(u), Math.min(3, Math.max(2, Math.round(u / 4))));
                        c = true;
                        break;
                    default:
                        u = Math.max(4, Math.min(12, .25 * a));
                        e.set(t - u / 2, i - u / 2, u, u)
                }
                if (d && false !== c) {
                    e.fill = o;
                    e.stroke = l
                } else {
                    e.stroke = o;
                    delete e.fill
                }
                s && (e.stroke = "#000000")
            }

            function M(e) {
                var t;
                var i = this._shapes ? this._shapes.length : 0;
                var a;
                var n;
                var s = this.rect.width;
                var r = this._majorAxis;
                var o;
                var l;
                var h;
                var c;
                this._outOfRange = {
                    up: {},
                    down: {},
                    points: []
                };
                for (t = 0; t < i; t++) {
                    c = this._shapes[t];
                    o = this._minorAxes[c.data.axisIdx];
                    l = e[this._measureToAxisIndex[c.data.measureIdx]];
                    h = this.isDimensionContinuous ? 2 : r.getWidthOfId(c.data.axisId);
                    a = this.isDimensionContinuous ? this._activeDimAxis.getPositionOfValue(c.data.axisNum) : r.getPositionOfId(c.data.axisId);
                    n = o.getPositionOfValue(c.data.end);
                    c.data.x = a;
                    c.data.y = n;
                    c.data.outOfRangeUp = n < l.topCutoff;
                    c.data.outOfRangeDown = n > l.bottomCutoff;
                    c.data.selected = c.data.cacheItem && c.data.cacheItem.selected;
                    c.opacity = c.data.outOfRangeUp || c.data.outOfRangeDown ? 0 : c.data.selected ? 1 : this._globalAlpha;
                    n = c.data.outOfRangeUp ? l.topCutoff + 4 : c.data.outOfRangeDown ? l.bottomCutoff - 4 : Math.floor(n);
                    var u = c.data.cacheItem && c.data.cacheItem.selected;
                    this.isDimensionContinuous && this.selectedRanges && !u && (u = this.selectedRanges.some((function(e) {
                        return c.data.axisNum >= e.min && (e.maxIncluded ? c.data.axisNum <= e.max : c.data.axisNum < e.max)
                    })));
                    b(c, a, n, h, c.data, u);
                    c.data.isVisible = a >= 0 && a <= s;
                    if (c.data.isVisible && (c.data.outOfRangeUp || c.data.outOfRangeDown))
                        if (c.data.outOfRangeUp && !this._outOfRange.up[a]) {
                            this._outOfRange.points.push(c);
                            this._outOfRange.up[a] = true
                        } else if (c.data.outOfRangeDown && !this._outOfRange.down[a]) {
                        this._outOfRange.points.push(c);
                        this._outOfRange.down[a] = true
                    }
                }
            }
            var A = h["a"].extend("MarkerArea", {
                init: function e() {
                    this._super.apply(this, arguments);
                    this.renderers = {
                        markers: new f["a"](this.container, {
                            name: "marker-layer"
                        })
                    };
                    this._edgeBleed = 0;
                    this._oobLayer = new _["a"](this.container);
                    this.layers = [this._oobLayer];
                    this._markerRenderer = this.renderers.markers
                },
                setColorMap: function e(t) {
                    this._colorMap = t
                },
                getColorMap: function e() {
                    return this._colorMap
                },
                getMeasureIndices: function e() {
                    return this._measureIndices
                },
                setMeasureIndices: function e(t) {
                    this._measureIndices = t
                },
                setMajorAxis: function e(t) {
                    this._majorAxis = t;
                    this._majorAxis.listen("changed", (function() {
                        this.invalidateDisplay("MarkerArea.setMajorAxis")
                    }), this)
                },
                setMinorAxis: function e(t) {
                    this._minorAxis = t;
                    this._minorAxis.listen("changed", (function() {
                        this.invalidateDisplay("MarkerArea.setMinorAxis")
                    }), this)
                },
                setSecondaryMinorAxis: function e(t) {
                    this._secondaryMinorAxis = t;
                    this._secondaryMinorAxis.listen("changed", (function() {
                        this.invalidateDisplay("MarkerArea.setSecondaryMinorAxis")
                    }), this)
                },
                setTimeAxis: function e(t) {
                    this.timeAxis = t;
                    this.timeAxis.listen("changed", (function() {
                        this.invalidateDisplay()
                    }), this)
                },
                setContinuousAxis: function e(t) {
                    this.continuousAxis = t;
                    this.continuousAxis.listen("changed", (function() {
                        this.invalidateDisplay()
                    }), this)
                },
                setActiveDimensionAxis: function e(t) {
                    this._activeDimAxis = t
                },
                setIsDimensionContinuous: function e(t) {
                    this.isDimensionContinuous = t;
                    this._edgeBleed = this.isDimensionContinuous ? 5 : 0
                },
                setDimensionTree: function e(t) {
                    this._tree = t;
                    this.invalidateProperties()
                },
                hasValidData: function e() {
                    return this._super() && this._data
                },
                getMajorAxisData: function e() {
                    return this._majorAxisData
                },
                createAxisData: function e(t, i, a, n) {
                    n || (this._cacheIndex = 0);
                    var s = t.children;
                    return s.map((function(e) {
                        var t;
                        if ("dimension" === i.types[n]) {
                            t = {
                                label: e.data.qText,
                                group: false,
                                id: e.data.id,
                                cacheIndex: []
                            };
                            "measure" === i.types[n + 1] && t.cacheIndex.push(this._cacheIndex++)
                        }
                        return t
                    }), this)
                },
                _createMeasureDisplayNode: function e(t, i, a, n) {
                    var s = y(a);
                    var r = t.children[0].data;
                    var o = t.parent.cacheItem;
                    var l = this.measureFormatters[i];
                    var h = "undefined" !== typeof r.qValue ? r.qValue : r.qNum;
                    var c = t.ancestors.filter((function(e) {
                        return "qElemNo" in e.data
                    })).map((function(e) {
                        return e.data.qElemNo
                    })).reverse();
                    s.data = {
                        qText: t.data.qText,
                        qNum: h,
                        start: 0,
                        end: h,
                        valueLabel: l && "U" === l.type ? l.formatValue(h) : t.data.qText,
                        cacheItem: o,
                        type: a,
                        isFilled: n,
                        measureIdx: i,
                        color: this._colorMap.getColor(c, h, i, t.data.rowIndex)
                    };
                    o.addShape("dataArea", s, true);
                    s.fill = s.data.color.toHex();
                    s.data.rgb = s.data.color.toRGBA();
                    s.data.shiftedRgb = s.data.color.createShiftedColor().toRGBA();
                    return s
                },
                _createDimensionDisplayNode: function e(t) {
                    var i = new m["a"];
                    i.data = {
                        qText: t.data.qText
                    };
                    return i
                },
                _applyIds: function e(t, i, a, n) {
                    var s;
                    t.children.forEach((function(e, r) {
                        s = t.data.id ? "".concat(t.data.id, ";") || false : "";
                        if ("dimension" === a[n]) {
                            e.data.id = "".concat(s + i[n], ":").concat(e.data.qElemNo);
                            this._applyIds(e, i, a, n + 1)
                        } else "measure" === a[n] && (e.data.id = s + i[n + r])
                    }), this)
                },
                getRenderTree: function e(t, i, a, n) {
                    var s;
                    var r;
                    var o;
                    r = t.children;
                    "measure" === i.types[n] && this._measureIndices && (r = r.filter((function(e, t) {
                        return this._measureIndices.indexOf(t) >= 0
                    }), this));
                    return r.map((function(e, t) {
                        var r;
                        if ("dimension" === i.types[n]) {
                            r = this._createDimensionDisplayNode(e);
                            s = this.getRenderTree(e, i, a, n + 1);
                            s.forEach((function(e) {
                                r.addChild(e)
                            }))
                        } else if ("measure" === i.types[n]) {
                            o = this._measureIndices ? this._measureIndices[t] : t;
                            r = this._createMeasureDisplayNode(e, o, this._data.qHyperCube.qMeasureInfo[o].series.marker || "circle", this._data.qHyperCube.qMeasureInfo[o].series.markerFill);
                            r.data.axisId = e.parent.data.id;
                            r.data.axisNum = e.parent.data.qNum;
                            r.data.axisIdx = i.measureToAxisIndex[o];
                            a.shapes.push(r)
                        }
                        return r
                    }), this)
                },
                updateRangeSelection: function e(t) {
                    this.isMini || (this.selectedRanges = t)
                },
                _updateProperties: function e() {
                    this._markerRenderer.stage.removeChildren();
                    if (!this._data || !this._tree) return;
                    var t = this._data.qHyperCube.qDimensionInfo.length;
                    var i = this._measureIndices ? this._measureIndices.length : this._data.qHyperCube.qMeasureInfo.length;
                    var a = t + 1;
                    var n = new Array(t).join(",").split(",").map((function() {
                        return "dimension"
                    }));
                    var s = this._data.qHyperCube.qDimensionInfo.concat(this._data.qHyperCube.qMeasureInfo).map((function(e) {
                        return e.cId
                    }));
                    var r = this._data.qHyperCube.qDimensionInfo.map((function(e) {
                        return e.qApprMaxGlyphCount
                    }));
                    r.push(this._data.qHyperCube.qMeasureInfo.reduce((function(e, t) {
                        return Math.max(e, t.qApprMaxGlyphCount)
                    }), 0));
                    this._minorAxes = [this._minorAxis];
                    this._secondaryMinorAxis && this._minorAxes.push(this._secondaryMinorAxis);
                    var o = this._minorAxes;
                    var l = [];
                    var h = [];
                    if (this._measureIndices) h = this._measureIndices;
                    else if (i > 0 && i < 20)
                        while (h.length < i) h.push(h.slice(-1)[0] + 1 || 0);
                    h.forEach((function(e) {
                        l[e] = o.filter((function(t) {
                            return !t._dataIndices || t._dataIndices.indexOf(e) >= 0
                        }))[0]
                    }));
                    this._measureToAxis = l;
                    this._measureToAxisIndex = l.map((function(e) {
                        return o.indexOf(e)
                    }));
                    n.push("measure");
                    var c = {
                        shapes: [],
                        shapesToLabel: [],
                        globalPositiveSum: 0,
                        globalNegativeSum: 0
                    };
                    var u = {
                        colIds: s,
                        types: n,
                        numLevels: a,
                        numMeasures: i,
                        measureToAxisIndex: this._measureToAxisIndex,
                        axesSettings: this._minorAxes.map(this._getAxisDetails)
                    };
                    this._applyIds(this._tree, s, n, 0);
                    var d = this.getRenderTree(this._tree, u, c, 0);
                    this._objects = d;
                    this._shapes = c.shapes;
                    d.forEach((function(e) {
                        this._markerRenderer.stage.addChild(e)
                    }), this);
                    var p = this.createAxisData(this._tree, u, c, 0);
                    var f = n.map((function(e, t) {
                        return {
                            qApprMaxGlyphCount: r[t],
                            show: t < n.length - 1
                        }
                    }));
                    this._majorAxisData = {
                        data: p,
                        info: f
                    };
                    this.setSelectableShapes(c.shapes.map((function(e) {
                        return e.data.cacheItem
                    })))
                },
                paint: function e() {
                    this._super(this._layoutMode, this._data);
                    var t = this._minorAxes.map(this._getAxisDetails);
                    var i = [];
                    M.call(this, t);
                    if (this._oobLayer) {
                        this._oobLayer.update(this._outOfRange.points, {
                            measureToAxisIndex: this._measureToAxisIndex,
                            axesSettings: t,
                            style: {
                                outOfRange: "#999999"
                            },
                            globalAlpha: this._globalAlpha,
                            markerSize: Math.min(8, this._majorAxis.getDiscreteSpacing() / 2)
                        });
                        this._oobLayer.renderer.edgeBleed = {
                            left: 0,
                            right: this._edgeBleed,
                            top: 0,
                            bottom: 0
                        };
                        i.push(this._oobLayer.render())
                    }
                    this._markerRenderer.edgeBleed = {
                        left: 0,
                        right: this._edgeBleed,
                        top: 0,
                        bottom: 0
                    };
                    i.push(this._markerRenderer.render());
                    return o["a"].all(i)
                },
                updateSize: function e() {
                    this._super();
                    this.renderers.markers.setDimensions(0, -1, this.rect.width, this.rect.height);
                    this.layers.forEach((function(e) {
                        e.rect = this.rect;
                        e.renderer.setDimensions(0, 0, this.rect.width, this.rect.height);
                        e.renderer.setDimensionsToContainerRatio(this.layoutToContainerRatios.x, this.layoutToContainerRatios.y)
                    }), this)
                },
                release: function e() {
                    this.layers.forEach((function(e) {
                        e.release()
                    }));
                    this._super();
                    this._majorAxis && this._majorAxis.stopListen("changed", null, this);
                    this._minorAxis && this._minorAxis.stopListen("changed", null, this);
                    this._secondaryMinorAxis && this._secondaryMinorAxis.stopListen("changed", null, this);
                    this.timeAxis && this.timeAxis.stopListen("changed", null, this);
                    this.continuousAxis && this.continuousAxis.stopListen("changed", null, this)
                },
                clear: function e() {
                    this._super();
                    this.layers.forEach((function(e) {
                        e.clear()
                    }))
                },
                _getAxisDetails: function e(t) {
                    var i = t.getPlotMin();
                    var a = t.getPlotMax();
                    var n = a - i;
                    var s = t.getPadding();
                    var r = s.top - 1;
                    var o = t.rect.height - s.bottom;
                    var l = 0;
                    l = i > 0 ? o : a < 0 ? r : Math.floor(t.getPositionOfValue(0)) - .5;
                    return {
                        plotMin: i,
                        plotMax: a,
                        posMin: t.getPositionOfValue(i),
                        posMax: t.getPositionOfValue(a),
                        plotRange: n,
                        topCutoff: r,
                        bottomCutoff: o,
                        areaStartBase: l,
                        zeroPos: Math.floor(t.getPositionOfValue(0)) - .5
                    }
                }
            });
            var D = A;
            var w = h["a"].extend("ComboArea", {
                init: function e() {
                    var t = new(Function.prototype.bind.apply(p["a"], [null].concat([].slice.call(arguments))));
                    var i = new(Function.prototype.bind.apply(d["a"], [null].concat([].slice.call(arguments))));
                    var a = new(Function.prototype.bind.apply(D, [null].concat([].slice.call(arguments))));
                    this._super.apply(this, arguments);
                    this._data = null;
                    this._layoutMode = null;
                    this._selectableShapes = [];
                    this._shapes = [];
                    this._cacheItems = [];
                    this._colorMap = null;
                    i.setShowDataPoints(!this.isMini);
                    i.setShowDataPointLabels(false);
                    t.setShowDataPoints(false);
                    this.subComponents = [t, i, a];
                    this.lineArea = i;
                    this.barArea = t;
                    this.markerArea = a
                },
                setYMirrorMode: function e(t) {
                    this.yMirrorMode = t;
                    this.subComponents.forEach((function(e) {
                        e.setYMirrorMode(t)
                    }))
                },
                setColorMap: function e(t) {
                    this._colorMap = t;
                    this.subComponents.forEach((function(e) {
                        e.setColorMap(t)
                    }))
                },
                getColorMap: function e() {
                    return this._colorMap
                },
                setShowDataPoints: function e() {},
                setMajorAxis: function e(t) {
                    this.subComponents.forEach((function(e) {
                        e.setMajorAxis(t)
                    }));
                    this._majorAxis = t
                },
                setMinorAxis: function e(t) {
                    this._minorAxis = t;
                    this.subComponents[0].setMinorAxis(this._minorAxis);
                    this.subComponents[2].setMinorAxis(this._minorAxis)
                },
                setTimeAxis: function e(t) {
                    this.timeAxis = t;
                    this.subComponents.forEach((function(e) {
                        e.setTimeAxis(t)
                    }))
                },
                setContinuousAxis: function e(t) {
                    this.continuousAxis = t;
                    this.subComponents.forEach((function(e) {
                        e.setContinuousAxis(t)
                    }))
                },
                setActiveDimensionAxis: function e(t) {
                    this._activeDimAxis = t;
                    this.subComponents.forEach((function(e) {
                        e.setActiveDimensionAxis(t)
                    }))
                },
                setIsDimensionContinuous: function e(t) {
                    this.isDimensionContinuous = t;
                    this.subComponents.forEach((function(e) {
                        e.setIsDimensionContinuous(t)
                    }))
                },
                getMinorAxisData: function e() {
                    return this.barArea.getMinorAxisData()
                },
                setSecondaryMinorAxis: function e(t) {
                    this._secondaryMinorAxis = t
                },
                setDimensionTree: function e(t) {
                    this._tree = t;
                    this.subComponents.forEach((function(e) {
                        e.setDimensionTree(t)
                    }))
                },
                setData: function e(t) {
                    this._super(t);
                    var i = [];
                    var a = [];
                    var n = [];
                    for (var s = 0; s < t.qHyperCube.qMeasureInfo.length; s++) t.qHyperCube.qMeasureInfo[s].series && "line" === t.qHyperCube.qMeasureInfo[s].series.type ? i.push(s) : t.qHyperCube.qMeasureInfo[s].series && "marker" === t.qHyperCube.qMeasureInfo[s].series.type ? n.push(s) : a.push(s);
                    this.subComponents[0].setHasValidData(a.length > 0);
                    this.subComponents[1].setHasValidData(i.length > 0);
                    this.subComponents[2].setHasValidData(n.length > 0);
                    this.lineArea.setMeasureIndices(i);
                    this.barArea.setMeasureIndices(a);
                    this.markerArea.setMeasureIndices(n);
                    this.subComponents.forEach((function(e) {
                        e.setData(t)
                    }));
                    this.barArea.setMinorAxis(this._minorAxis);
                    this.lineArea.setMinorAxis(this._secondaryMinorAxis);
                    this.lineArea.setSecondaryMinorAxis(this._minorAxis);
                    this.markerArea.setMinorAxis(this._minorAxis);
                    this.markerArea.setSecondaryMinorAxis(this._secondaryMinorAxis);
                    this.invalidateProperties()
                },
                setHasValidData: function e(t) {
                    this.subComponents.forEach((function(e) {
                        e.setHasValidData(t)
                    }))
                },
                setLayoutMode: function e(t) {
                    this._super(t);
                    this.subComponents.forEach((function(e) {
                        e.setLayoutMode(t)
                    }))
                },
                setRect: function e(t, i, a, n) {
                    this._super(t, i, a, n);
                    this.subComponents.forEach((function(e) {
                        e.setRect(t, i, a, n)
                    }))
                },
                setOuterRect: function e(t, i, a, n) {
                    this._super(t, i, a, n);
                    this.subComponents.forEach((function(e) {
                        e.setOuterRect(t, i, a, n)
                    }))
                },
                setLayoutToContainerRatios: function e(t, i) {
                    this._super(t, i);
                    this.subComponents.forEach((function(e) {
                        e.setLayoutToContainerRatios(t, i)
                    }))
                },
                setContainerRect: function e(t, i, a, n) {
                    this._super(t, i, a, n);
                    this.subComponents.forEach((function(e) {
                        e.setContainerRect(t, i, a, n)
                    }))
                },
                insertAdjacentTo: function e() {
                    this._super.apply(this, [].slice.call(arguments));
                    this.subComponents.forEach((function(e) {
                        e.setRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height)
                    }), this)
                },
                setGlobalOpacity: function e(t, i) {
                    this._super(t, i);
                    this.subComponents.forEach((function(e) {
                        e.setGlobalOpacity(t, i)
                    }), this)
                },
                setLineType: function e() {},
                updateSize: function e() {
                    this._super();
                    this.subComponents.forEach((function(e) {
                        e.updateSize()
                    }), this)
                },
                _updateDisplay: function e() {
                    var t = [];
                    this.subComponents.forEach((function(e) {
                        t.push(e.invalidateDisplay())
                    }));
                    return o["a"].all(t)
                },
                _updateSize: function e() {},
                updateRangeSelection: function e(t) {
                    this.isMini ? this.lineArea.updateRangeSelection(t) : this.subComponents.forEach((function(e) {
                        e.updateRangeSelection(t)
                    }))
                },
                _updateProperties: function e() {
                    if (!this._data || !this._tree) return;
                    this.barArea.measureFormatters = this.measureFormatters;
                    this.lineArea.measureFormatters = this.measureFormatters;
                    this.markerArea.measureFormatters = this.measureFormatters;
                    this.barArea.combinedMeasuresFormatter = this.combinedMeasuresFormatter;
                    this.lineArea.combinedMeasuresFormatter = this.combinedMeasuresFormatter;
                    this.markerArea.combinedMeasuresFormatter = this.combinedMeasuresFormatter;
                    this.subComponents[0].updateNow(["properties"]);
                    this.subComponents[1].updateNow(["properties"]);
                    this.subComponents[2].updateNow(["properties"]);
                    var t = this.subComponents[0].getSelectableShapes();
                    t && t.length || (t = this.subComponents[1].getSelectableShapes());
                    t && t.length || (t = this.subComponents[2].getSelectableShapes());
                    this.setSelectableShapes(t)
                },
                invalidateProperties: function e() {
                    this._super.apply(this, Array.prototype.slice.call(arguments));
                    this.subComponents.forEach((function(e) {
                        e.invalidateProperties("ComboArea.invalidateProperties")
                    }))
                },
                hasValidData: function e() {
                    return this._super() && this._majorAxis && this._minorAxis && this._data
                },
                paint: function e() {
                    this._majorAxis.updateNow();
                    this._minorAxis.updateNow();
                    this._activeDimAxis && this._activeDimAxis.updateNow()
                },
                clear: function e() {
                    this._super();
                    this.subComponents.forEach((function(e) {
                        e.clear()
                    }))
                },
                release: function e() {
                    this.subComponents.forEach((function(e) {
                        e.release()
                    }))
                }
            });
            var S = w;
            var C = i("6uJb");
            var q = i("2Hli");
            var L = i("DXLV");
            var P = i("DGsO");

            function k(e, t, i) {
                var a;
                var n = i || 0;
                a = t ? t.getMeasureLayouts() : q["a"].getValue(e, "qHyperCubeDef.qMeasures", []).map((function(e) {
                    return e.qDef
                }));
                var s = a.filter((function(e) {
                    return q["a"].getValue(e, "series.axis", 0) === n || 0 === n && "bar" === q["a"].getValue(e, "series.type", "bar")
                }));
                return s
            }

            function O(e, t) {
                if (t) return t.getDimensionLayouts();
                return e.qHyperCubeDef.qDimensions.map((function(e) {
                    return e.qDef
                }))
            }

            function T(e, t) {
                return t.getMeasures().filter((function(e) {
                    return e.qDef.series && "line" === e.qDef.series.type
                })).length > 0
            }

            function I(e, t, i) {
                return t.getMeasures().filter((function(e) {
                    return !e.qDef.series || "bar" === e.qDef.series.type
                })).length > i
            }
            var R = {
                uses: "settings",
                items: {
                    presentation: {
                        type: "items",
                        translation: "properties.presentation",
                        grouped: true,
                        show: function e(t, i) {
                            return T(t, i) || I(t, i, 0)
                        },
                        items: {
                            grouping: {
                                ref: "barGrouping.grouping",
                                type: "string",
                                component: "item-selection-list",
                                defaultValue: "grouped",
                                horizontal: true,
                                items: [{
                                    icon: "grouped",
                                    component: "icon-item",
                                    labelPlacement: "bottom",
                                    translation: "properties.grouping.grouped",
                                    value: "grouped"
                                }, {
                                    icon: "stacked",
                                    component: "icon-item",
                                    labelPlacement: "bottom",
                                    translation: "properties.grouping.stacked",
                                    value: "stacked"
                                }],
                                show: function e(t, i, a) {
                                    return I(t, i, 1) && !L["a"].isContinuousChart(a.layout)
                                }
                            },
                            orientation: {
                                ref: "orientation",
                                type: "string",
                                component: "item-selection-list",
                                defaultValue: "vertical",
                                horizontal: true,
                                show: false,
                                items: [{
                                    component: "icon-item",
                                    icon: "bar_vertical",
                                    labelPlacement: "bottom",
                                    translation: "properties.orientation.vertical",
                                    value: "vertical"
                                }, {
                                    icon: "bar_horizontal",
                                    component: "icon-item",
                                    labelPlacement: "bottom",
                                    translation: "Common.Horizontal",
                                    value: "horizontal"
                                }]
                            },
                            scrollStartPos: {
                                ref: "scrollStartPos",
                                type: "number",
                                translation: "properties.ScrollAlignment",
                                component: "dropdown",
                                defaultValue: 0,
                                options: [{
                                    value: 0,
                                    translation: "properties.ScrollAlignStart"
                                }, {
                                    value: 1,
                                    translation: "properties.ScrollAlignEnd"
                                }],
                                show: function e(t, i, a) {
                                    return !L["a"].isContinuousChart(a.layout)
                                }
                            },
                            nullMode: {
                                type: "string",
                                component: "dropdown",
                                ref: "nullMode",
                                translation: "properties.nullMode",
                                options: [{
                                    value: "gap",
                                    translation: "properties.nullMode.gap"
                                }, {
                                    value: "connect",
                                    translation: "properties.nullMode.connect"
                                }, {
                                    value: "zero",
                                    translation: "properties.nullMode.zero"
                                }],
                                defaultValue: "gap",
                                show: function e(t, i) {
                                    return T(t, i) && i.getMeasures().length > 1
                                }
                            },
                            dataPointSettings: {
                                type: "items",
                                grouped: false,
                                snapshot: {
                                    tid: "property-dataPoint"
                                },
                                show: function e(t, i) {
                                    return T(t, i)
                                },
                                items: {
                                    dataPoints: {
                                        ref: "dataPoint.show",
                                        translation: "properties.dataPoints.showDataPoints",
                                        type: "boolean",
                                        defaultValue: false
                                    },
                                    showLineDataPointLabels: {
                                        ref: "dataPoint.showLineLabels",
                                        translation: "properties.dataPoints.linelabelmode",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        show: function e(t) {
                                            return t.dataPoint && t.dataPoint.show
                                        },
                                        options: [{
                                            value: true,
                                            translation: "Common.Auto"
                                        }, {
                                            value: false,
                                            translation: "properties.off"
                                        }]
                                    }
                                }
                            },
                            showBarLabels: {
                                ref: "dataPoint.showBarLabels",
                                type: "boolean",
                                translation: "properties.dataPoints.barlabelmode",
                                component: "switch",
                                show: function e(t, i) {
                                    return I(t, i, 0)
                                },
                                defaultValue: false,
                                options: [{
                                    value: true,
                                    translation: "Common.Auto"
                                }, {
                                    value: false,
                                    translation: "properties.off"
                                }]
                            }
                        }
                    },
                    colorsAndLegend: {
                        uses: "colorsAndLegend",
                        items: {
                            legend: {
                                items: {
                                    show: {
                                        snapshot: {
                                            tid: "property-legend"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    dimensionAxis: {
                        uses: "axis.dimensionAxis",
                        label: function e(t, i) {
                            var e;
                            var a = "x";
                            var n = O(t, i).map((function(e) {
                                return e.qFallbackTitle || ""
                            })).join(", ");
                            e = n ? C["default"].get("properties.".concat(a, "AxisWithInfo"), [n]) : C["default"].get("properties.".concat(a, "Axis"));
                            return e
                        },
                        items: {
                            othersGroup: {
                                items: {
                                    dock: {
                                        options: [{
                                            value: "near",
                                            translation: "Common.Bottom"
                                        }, {
                                            value: "far",
                                            translation: "Common.Top"
                                        }]
                                    }
                                }
                            }
                        }
                    },
                    measureAxis: {
                        uses: "axis.measureAxis",
                        label: function e(t, i) {
                            var e;
                            var a = k(t, i, 0).map((function(e) {
                                return e.qFallbackTitle
                            }));
                            e = a.length ? C["default"].get("properties.yAxisWithInfo", [a.join(",")]) : C["default"].get("properties.yAxis");
                            return e
                        },
                        show: function e(t) {
                            return k(t, null, 0).length > 0
                        },
                        items: {
                            axis: {
                                items: {
                                    show: {
                                        ref: "measureAxes.0.show",
                                        snapshot: {
                                            title: "properties.yAxis",
                                            tid: "property-yAxis"
                                        }
                                    },
                                    dock: {
                                        ref: "measureAxes.0.dock",
                                        show: function e(t) {
                                            return "none" !== t.measureAxes[0].show
                                        },
                                        options: function e(t, i, a) {
                                            var n = a.yMirrorMode ? "properties.dock.right" : "properties.dock.left";
                                            var s = a.yMirrorMode ? "properties.dock.left" : "properties.dock.right";
                                            return [{
                                                value: "near",
                                                translation: n
                                            }, {
                                                value: "far",
                                                translation: s
                                            }]
                                        }
                                    },
                                    spacing: {
                                        ref: "measureAxes.0.spacing",
                                        show: function e(t) {
                                            return t.measureAxes[0] && "none" !== t.measureAxes[0].show
                                        }
                                    }
                                }
                            },
                            minMax: {
                                items: {
                                    autoMinMax: {
                                        ref: "measureAxes.0.autoMinMax"
                                    },
                                    minMax: {
                                        ref: "measureAxes.0.minMax",
                                        defaultValue: "min",
                                        show: function e(t) {
                                            return !t.measureAxes[0].autoMinMax
                                        }
                                    },
                                    min: {
                                        ref: "measureAxes.0.min",
                                        show: function e(t) {
                                            return ["min", "minMax"].includes(t.measureAxes[0].minMax) && !t.measureAxes[0].autoMinMax
                                        },
                                        invalid: function e(t) {
                                            if ("minMax" === t.measureAxes[0].minMax) return t.measureAxes[0].min >= t.measureAxes[0].max;
                                            return false
                                        }
                                    },
                                    max: {
                                        ref: "measureAxes.0.max",
                                        show: function e(t) {
                                            return ["max", "minMax"].includes(t.measureAxes[0].minMax) && !t.measureAxes[0].autoMinMax
                                        },
                                        invalid: function e(t) {
                                            if ("minMax" === t.measureAxes[0].minMax) return t.measureAxes[0].min >= t.measureAxes[0].max;
                                            return false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    secondaryMeasureAxis: {
                        uses: "axis.measureAxis",
                        label: function e(t, i) {
                            var e;
                            var a = k(t, i, 1).map((function(e) {
                                return e.qFallbackTitle
                            }));
                            e = a.length ? C["default"].get("properties.yAxisWithInfo", [a.join(",")]) : C["default"].get("properties.yAxis");
                            return e
                        },
                        show: function e(t) {
                            return k(t, null, 1).length > 0
                        },
                        items: {
                            axis: {
                                items: {
                                    show: {
                                        ref: "measureAxes.1.show"
                                    },
                                    dock: {
                                        ref: "measureAxes.1.dock",
                                        defaultValue: "far",
                                        show: function e(t) {
                                            return "none" !== t.measureAxes[1].show
                                        },
                                        options: function e(t, i, a) {
                                            var n = a.yMirrorMode ? "properties.dock.right" : "properties.dock.left";
                                            var s = a.yMirrorMode ? "properties.dock.left" : "properties.dock.right";
                                            return [{
                                                value: "near",
                                                translation: n
                                            }, {
                                                value: "far",
                                                translation: s
                                            }]
                                        }
                                    },
                                    spacing: {
                                        ref: "measureAxes.1.spacing",
                                        show: function e(t) {
                                            return t.measureAxes[1] && "none" !== t.measureAxes[1].show
                                        }
                                    }
                                }
                            },
                            minMax: {
                                type: "items",
                                items: {
                                    autoMinMax: {
                                        ref: "measureAxes.1.autoMinMax"
                                    },
                                    minMax: {
                                        ref: "measureAxes.1.minMax",
                                        defaultValue: "min",
                                        show: function e(t) {
                                            return !t.measureAxes[1].autoMinMax
                                        }
                                    },
                                    min: {
                                        ref: "measureAxes.1.min",
                                        show: function e(t) {
                                            return ["min", "minMax"].includes(t.measureAxes[1].minMax) && !t.measureAxes[1].autoMinMax
                                        },
                                        invalid: function e(t) {
                                            if ("minMax" === t.measureAxes[1].minMax) return t.measureAxes[1].min >= t.measureAxes[1].max;
                                            return false
                                        }
                                    },
                                    max: {
                                        ref: "measureAxes.1.max",
                                        show: function e(t) {
                                            return ["max", "minMax"].includes(t.measureAxes[1].minMax) && !t.measureAxes[1].autoMinMax
                                        },
                                        invalid: function e(t) {
                                            if ("minMax" === t.measureAxes[1].minMax) return t.measureAxes[1].min >= t.measureAxes[1].max;
                                            return false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    tooltips: {
                        uses: "tooltip"
                    }
                }
            };
            var N = {
                uses: "data",
                items: {
                    dimensions: {
                        items: {
                            nullSuppression: {
                                show: function e(t, i, a) {
                                    var n = P["a"].isFirstDimension(t, i);
                                    var s = L["a"].isContinuousChart(a.layout);
                                    var r = !(n && s);
                                    return r
                                }
                            }
                        }
                    },
                    measures: {
                        items: {
                            series: {
                                type: "items",
                                items: {
                                    seriesType: {
                                        ref: "qDef.series.type",
                                        type: "string",
                                        component: "item-selection-list",
                                        defaultValue: "bar",
                                        horizontal: true,
                                        items: [{
                                            icon: function e(t) {
                                                if ("stacked" === t.barGrouping.grouping || L["a"].isContinuousChart(t)) return "stacked";
                                                return "grouped"
                                            },
                                            component: "icon-item",
                                            labelPlacement: "bottom",
                                            translation: "properties.style.bar",
                                            value: "bar"
                                        }, {
                                            icon: "line_chart_line",
                                            component: "icon-item",
                                            labelPlacement: "bottom",
                                            translation: "properties.style.line",
                                            value: "line"
                                        }, {
                                            icon: "shapes",
                                            component: "icon-item",
                                            labelPlacement: "bottom",
                                            translation: "properties.style.marker",
                                            value: "marker"
                                        }],
                                        change: function e() {}
                                    },
                                    seriesAxis: {
                                        ref: "qDef.series.axis",
                                        type: "integer",
                                        component: "dropdown",
                                        defaultValue: 0,
                                        options: [{
                                            translation: "properties.axis.primary",
                                            value: 0
                                        }, {
                                            translation: "properties.axis.secondary",
                                            value: 1
                                        }],
                                        show: function e(t) {
                                            return t.qDef && t.qDef.series && t.qDef.series.type && "bar" !== t.qDef.series.type
                                        }
                                    },
                                    seriesMarker: {
                                        ref: "qDef.series.marker",
                                        type: "string",
                                        component: "dropdown",
                                        defaultValue: "circle",
                                        options: [{
                                            translation: "properties.marker.circle",
                                            value: "circle"
                                        }, {
                                            translation: "properties.marker.rect",
                                            value: "rect"
                                        }, {
                                            translation: "properties.marker.diamond",
                                            value: "diamond"
                                        }, {
                                            translation: "properties.marker.triangle",
                                            value: "triangle"
                                        }, {
                                            translation: "properties.marker.line",
                                            value: "line"
                                        }],
                                        show: function e(t) {
                                            return t.qDef && t.qDef.series && "marker" === t.qDef.series.type
                                        }
                                    },
                                    seriesMarkerFill: {
                                        ref: "qDef.series.markerFill",
                                        translation: "properties.series.fill",
                                        type: "boolean",
                                        defaultValue: true,
                                        show: function e(t) {
                                            return t.qDef && t.qDef.series && "marker" === t.qDef.series.type && !["line"].includes(t.qDef.series.marker)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
            var z = {
                uses: "sortingWithDisclaimer"
            };
            var j = {
                type: "items",
                component: "expandable-items",
                translation: "properties.addons",
                items: {
                    dataHandling: {
                        uses: "dataHandling",
                        items: {
                            calcCond: {
                                uses: "calcCond"
                            }
                        }
                    }
                }
            };
            var V = {
                type: "items",
                component: "accordion",
                items: {
                    data: N,
                    sorting: z,
                    addons: j,
                    settings: R
                }
            };

            function E(e) {
                return e.qHyperCubeDef.qMeasures.filter((function(e) {
                    return e.qDef.series && "line" === e.qDef.series.type
                })).length > 0
            }

            function F(e) {
                return e.qHyperCubeDef.qMeasures.filter((function(e) {
                    return !e.qDef.series || "bar" === e.qDef.series.type
                })).length > 1
            }
            var H = {
                type: "items",
                component: "accordion",
                items: {
                    data: {
                        uses: "data"
                    },
                    sort: {
                        uses: "sortWithDisclaimer"
                    },
                    presentation: {
                        uses: "presentation",
                        type: "items",
                        translation: "properties.presentation",
                        grouped: true,
                        show: function e(t, i) {
                            return E(t, i) || F(t, i) && !L["a"].isContinuousChart(i)
                        },
                        items: {
                            grouping: {
                                ref: "barGrouping.grouping",
                                type: "string",
                                component: "item-selection-list",
                                horizontal: true,
                                items: [{
                                    icon: "grouped",
                                    component: "icon-item",
                                    labelPlacement: "bottom",
                                    translation: "properties.grouping.grouped",
                                    value: "grouped"
                                }, {
                                    icon: "stacked",
                                    component: "icon-item",
                                    labelPlacement: "bottom",
                                    translation: "properties.grouping.stacked",
                                    value: "stacked"
                                }],
                                show: function e(t, i) {
                                    return F(t, i)
                                }
                            },
                            nullMode: {
                                type: "string",
                                component: "radio-list",
                                ref: "nullMode",
                                translation: "properties.nullMode",
                                options: function e() {
                                    return [{
                                        value: "gap",
                                        translation: "properties.nullMode.gap"
                                    }, {
                                        value: "connect",
                                        translation: "properties.nullMode.connect"
                                    }, {
                                        value: "zero",
                                        translation: "properties.nullMode.zero"
                                    }]
                                },
                                show: function e(t) {
                                    return E(t) && t.qHyperCubeDef.qMeasures.length > 1
                                }
                            },
                            dataPoints: {
                                ref: "dataPoint.show",
                                translation: "properties.dataPoints.showDataPoints",
                                type: "boolean",
                                show: function e(t) {
                                    return E(t)
                                }
                            }
                        }
                    },
                    color: {
                        uses: "color"
                    }
                }
            };
            var B = i("26xU");
            var W = i("e4OJ");
            var U = i("hpzB");
            var Z = i("YWN+");
            var G = i("hPNO");
            var Y = i("4zDG");
            var X = '<div class="qv-viz" aria-hidden="true"></div>\n<span class="qv-viz-center-disclaimer" ng-if="dataAttributes.noDataExist && dataAttributes.layoutMode > 2" q-translation="Object.Disclaimer.NoDataExist" q-title-translation="Object.Disclaimer.NoDataExist" dir="ltr"></span>\n<div qva-chart-disclaimer attributes="dataAttributes" visible="!dataAttributes.noDataExist" direction="options.direction"></div>';
            var $ = i("KBmc");
            var K = i("ByVn");
            var J = i("3r60");
            var Q = i("acVu");
            var ee = {
                NONE: 0,
                ONE_DIM: 1,
                TWO_DIM: 2
            };
            var te = {
                ACCUMULATIONS: "accumulation",
                MOVING_AVERAGE: "movingAverage",
                DIFFERENCE: "difference",
                NORMALIZATION: "normalization"
            };

            function ie() {
                var e = [];
                Object.keys(te).forEach((function(t) {
                    Object(Q["b"])(t) && e.push(te[t])
                }));
                return e
            }

            function ae(e) {
                var t = [];
                var i = [];
                e.qHyperCube.qMeasureInfo.forEach((function(e) {
                    e.series && "bar" !== e.series.type && 1 === e.series.axis ? i.push(e) : t.push(e)
                }));
                return {
                    primaryMeasures: t,
                    secondaryMeasures: i
                }
            }

            function ne(e, t, i, a, n, r) {
                if (!t.length) return;
                var o;
                var l;
                if (n) {
                    o = n.min;
                    l = n.max
                } else {
                    o = Math.min.apply(this, t.filter((function(e) {
                        return !Number.isNaN(+e.qMin)
                    })).map((function(e) {
                        return e.qMin
                    })));
                    l = Math.max.apply(this, t.filter((function(e) {
                        return !Number.isNaN(+e.qMax)
                    })).map((function(e) {
                        return e.qMax
                    })))
                }
                s["a"].isNumeric(o) || (o = -1);
                s["a"].isNumeric(l) || (l = 1);
                var h = this.getAxisOptions(i);
                if (a) {
                    l = Math.max(0, l);
                    o = Math.min(0, o)
                }
                if (r) {
                    r.min = o;
                    r.max = l;
                    if (r.minMeasure && r.maxMeasure) {
                        this._cutMode = this.getSpikeSettings(r, h);
                        o = this._cutMode.min;
                        l = this._cutMode.max
                    } else this._cutMode = {
                        positive: false,
                        negative: false
                    }
                }
                e.setRealDataRange(void 0, void 0);
                this.setAxisDataRange(e, l, o, h.max, h.min, 1)
            }
            var se = l["a"].extend("ComboChart", {
                namespace: ".combochart",
                init: function e(t, i, a, s, r) {
                    a = n.a.extend(true, {
                        components: {
                            dataArea: {
                                clazz: S
                            },
                            miniChart: {
                                components: {
                                    dataArea: {
                                        clazz: S
                                    },
                                    secondaryMeasureAxis: {
                                        show: false,
                                        dock: "right",
                                        clazz: c["a"]
                                    }
                                }
                            },
                            axis: {
                                show: true,
                                order: 1.1,
                                reductionOrder: 2.1,
                                dock: "right",
                                relevantSize: 90,
                                showFlag: h["a"].prototype.ShowFlags.XSMALL,
                                clazz: c["a"]
                            },
                            secondaryMeasureAxisTitle: {
                                show: true,
                                order: 1.2,
                                dock: "right",
                                relevantSize: 30,
                                reductionOrder: 1,
                                showFlag: h["a"].prototype.ShowFlags.SMALL,
                                clazz: u["a"]
                            }
                        }
                    }, a || {});
                    this._super(t, i, a, s, r);
                    J["a"].updateProperties(t.backendApi, t.layout);
                    this.components.scrollArea.setUseMiniChart(false);
                    this.components.axis.setShowStrategy("all");
                    this.components.dataArea.setSecondaryMinorAxis(this.components.axis);
                    this.components.secondaryMeasureAxisTitle.setType("measure");
                    this.components.secondaryMeasureAxisTitle.setModel(t.ext.model);
                    if (this.components.miniChart) {
                        var o = this.components.miniChart;
                        this.components.miniChart.setBackendApi(this.backendApi);
                        this.components.scrollArea.setMiniChart(o);
                        o.setColorMap(this.providers.colorMap);
                        o.components.measureAxis.setDock("left");
                        o.components.dimensionAxis.setDock("bottom");
                        o.components.dataArea.setMinorAxis(o.components.measureAxis);
                        o.components.dataArea.setMajorAxis(o.components.dimensionAxis);
                        o.components.dataArea.setSecondaryMinorAxis(o.components.secondaryMeasureAxis)
                    }
                },
                getVerticalComponents: function e() {
                    var t = this._super();
                    var i;
                    if (this._data && this.components) {
                        if (this.components.measureAxis && this.components.measureAxis.isVertical() && this._data.measureAxes) {
                            i = this._data.measureAxes[0].dock;
                            t.push({
                                comp: this.components.measureAxis,
                                dock: i
                            });
                            this.components.measureAxisTitle && t.push({
                                comp: this.components.measureAxisTitle,
                                dock: i
                            })
                        }
                        if (this.components.axis && this.components.axis.isVertical() && this._data.measureAxes && this._data.measureAxes.length > 1) {
                            i = this._data.measureAxes[1].dock;
                            t.push({
                                comp: this.components.axis,
                                dock: i
                            });
                            this.components.secondaryMeasureAxisTitle && t.push({
                                comp: this.components.secondaryMeasureAxisTitle,
                                dock: i
                            })
                        }
                    }
                    return t
                },
                partialUpdate: function e(t) {
                    var i = this;
                    var a;
                    var n;
                    var s;
                    var r = [];
                    var l = this._dataOptions.primary.indexOf(this._dataOptions.barSeries[0]) >= 0;
                    this._enablePagingTransitions();
                    n = t.qHyperCube.qStackedDataPages.length > 0 ? this._pagingInfo.y : t.qHyperCube.qDataPages[0].qArea.qTop;
                    this.components.dimensionAxis.setInnerOffset(n * this.scrollMultiplicator);
                    return this.providers.colorMap.setData(t).then((function() {
                        i._chartContext.refresh(t);
                        i.components.colorLegend.updateNow(["properties"]);
                        r.push(i.components.colorLegend.invalidateDisplay("ScrollableChart.partialUpdate"));
                        for (a in i.components) "miniChart" !== a && i.components[a].invalidateProperties("ScrollableChart.partialUpdate");
                        i.components.dataArea.updateNow(["properties"]);
                        s = i.components.dataArea.barArea.getMeasureIndices().length ? i.components.dataArea.barArea.getMajorAxisData() : i.components.dataArea.markerArea.getMeasureIndices().length ? i.components.dataArea.markerArea.getMajorAxisData() : i.components.dataArea.lineArea.getMajorAxisData();
                        i.components.dimensionAxis.setDataRange(s.data, s.info);
                        var e = i.components.dataArea.barArea.getMinorAxisData();
                        e && i._dataOptions.primary.forEach((function(t) {
                            if (this._dataOptions.barSeries.indexOf(t) < 0 && !Number.isNaN(+t.qMin)) {
                                e.min = Math.min(t.qMin, e.min);
                                e.max = Math.max(t.qMax, e.max)
                            }
                        }), i);
                        ne.apply(i, [i.components.measureAxis, i._dataOptions.primary, i._dataOptions.axes.measureAxis, l, e, e ? i.getPrimaryMeasureSettings(t, i._dataOptions) : null]);
                        i.components.dimensionAxis.updateNow(["properties"]);
                        i.components.dimensionAxis.updateLevels();
                        r.push(i.components.dimensionAxis.invalidateDisplay("ScrollableChart.partialUpdate"));
                        r.push(i.components.dataArea.invalidateDisplay("ScrollableChart.partialUpdate"));
                        return o["a"].all(r)
                    }))
                },
                isValid: function e(t) {
                    return this._super(t) && !this.supressChartRendering
                },
                _paint: function e() {
                    if (!this.isValid(this._data)) return this.clear();
                    this._super();
                    var t;
                    var i = this.components.scrollArea;
                    var a = this.rect.height;
                    var n = this.getSnapshotStoredChartData();
                    var s = 0;
                    var r = [];
                    if (this._cutMode.positive || this._cutMode.negative) {
                        this._layoutMode >= 31 && (s = 48);
                        s = this._layoutMode >= 15 ? 32 : this._layoutMode >= 7 ? 16 : 8
                    }
                    this.components.measureAxis.setPadding(this._cutMode.positive ? s : 0, 0, this._cutMode.negative ? s : 0, 0);
                    this.components.axis.setPadding(this._cutMode.positive ? s : 0, 0, this._cutMode.negative ? s : 0, 0);
                    this.components.dimensionAxis.setMaxDiscreteUnitSize(Math.max(1, Math.ceil(a / 4)));
                    this.components.dataArea.updateNow(["properties"]);
                    this.components.dimensionAxis.updateNow(["properties"]);
                    this.layout();
                    if (this._readStoredData) {
                        this.components.dimensionAxis.setInnerOffset(n.axisInnerOffset);
                        this.components.scrollArea.setOffset(n.scrollOffset);
                        this.components.scrollArea.setViewRange(n.viewRange)
                    } else if (this.options.viewState) {
                        this.components.dimensionAxis.setInnerOffset(this.options.viewState.axisInnerOffset);
                        this.components.scrollArea.setOffset(this.options.viewState.scrollOffset);
                        this.components.scrollArea.setViewRange(this.options.viewState.viewRange)
                    }
                    var l = this.checkPage();
                    if (l) r.push(l);
                    else {
                        for (t in this.components) r.push(this.components[t].invalidateDisplay("ComboChart.paint"));
                        i.viewState.min + i.viewState.range > i.fullState.max && i.setOffset(i.fullState.max - i.viewState.range)
                    }
                    return o["a"].all(r)
                },
                prePaint: function e(t) {
                    this._super(t);
                    W["a"].applyDisclaimerAttributes({
                        paging: true
                    }, this.$scope.dataAttributes, this.$element, this.$scope, t);
                    this.supressChartRendering = this.$scope.dataAttributes.noDataExist
                },
                updateData: function e(t) {
                    if (this._destroyed) return o["a"].reject();
                    this.setIsDimensionContinuous(L["a"].isContinuousChart(t));
                    this._setActiveDimensionAxis(t);
                    return this._super(t)
                },
                _updateData: function e(t) {
                    var i = [];
                    this._checkPage = false;
                    var a = this.getSnapshotStoredChartData();
                    this.components.scrollArea.setUseMiniChart(this.isDimensionContinuous);
                    var s = t.qHyperCube.qMeasureInfo.filter((function(e) {
                        return e.series && "line" === e.series.type
                    }));
                    var r = t.qHyperCube.qMeasureInfo.filter((function(e) {
                        return !e.series || "bar" === e.series.type
                    }));
                    var l = t.qHyperCube.qMeasureInfo.filter((function(e) {
                        return e.series && "marker" === e.series.type
                    }));
                    var c = ae(t);
                    var u = c.primaryMeasures;
                    var d = c.secondaryMeasures;
                    this.isStacked = false;
                    this.components.measureAxis.isStacked = ("stacked" === t.barGrouping.grouping || this.isDimensionContinuous) && r.length > 1;
                    this.components.axis.isStacked = false;
                    this._pagingMode = ee.NONE;
                    this.scrollMultiplicator = "grouped" === t.barGrouping.grouping && r.length > 1 ? r.length + 1 : 1;
                    this.components.dataArea.setIsDimensionContinuous(this.isDimensionContinuous);
                    if (this.isDimensionContinuous) this._pagingMode = ee.NONE;
                    else {
                        if (t.qHyperCube.qSize.qcy > t.qHyperCube.qDataPages[0].qArea.qHeight) {
                            this._pagingMode = ee.ONE_DIM;
                            var p = t.qHyperCube.qSize.qcy;
                            if ("grouped" === t.barGrouping.grouping && r.length > 1) {
                                this.scrollMultiplicator = r.length + 1;
                                p *= this.scrollMultiplicator
                            }
                            this.components.dimensionAxis.setNumDiscreteUnits(p)
                        } else this.components.dimensionAxis.setNumDiscreteUnits(null);
                        this.components.dimensionAxis.isDiscrete() || (this._pagingMode = ee.NONE)
                    }
                    var f = n.a.extend(true, {}, t.measureAxes[0], {
                        show: u.length ? t.measureAxes[0].show : "none"
                    });
                    var m = n.a.extend(true, {}, t.measureAxes[1], {
                        show: d.length ? t.measureAxes[1].show : "none",
                        dock_: ["near", "far"].includes(t.measureAxes[0].dock) ? "near" === t.measureAxes[0].dock ? "far" : "near" : h["a"].prototype.getOppositeDock.call({
                            options: {
                                dock: t.measureAxes[0].dock
                            }
                        })
                    });
                    var v = {
                        primary: u,
                        secondary: d,
                        lineSeries: s,
                        markerSeries: l,
                        barSeries: r,
                        axes: {
                            measureAxis: {
                                component: this.components.measureAxis,
                                data: f,
                                dataIndices: u.map((function(e) {
                                    return t.qHyperCube.qMeasureInfo.indexOf(e)
                                }))
                            },
                            secondaryMeasureAxis: {
                                component: this.components.axis,
                                data: m,
                                dataIndices: d.map((function(e) {
                                    return t.qHyperCube.qMeasureInfo.indexOf(e)
                                }))
                            },
                            dimensionAxis: {
                                component: this.components.dimensionAxis,
                                data: t.dimensionAxis,
                                dataIndices: t.qHyperCube.qDimensionInfo.map((function(e, t) {
                                    return t
                                }))
                            },
                            timeAxis: {
                                component: this.components.timeAxis,
                                data: t.dimensionAxis
                            },
                            continuousAxis: {
                                component: this.components.continuousAxis,
                                data: t.dimensionAxis
                            }
                        },
                        axisTitles: {
                            dimensionAxisTitle: {
                                component: this.components.dimensionAxisTitle,
                                data: t.dimensionAxis
                            },
                            measureAxisTitle: {
                                component: this.components.measureAxisTitle,
                                data: f
                            },
                            secondaryMeasureAxisTitle: {
                                component: this.components.secondaryMeasureAxisTitle,
                                data: m
                            }
                        }
                    };
                    var g = this.components.dimensionAxisTitle;
                    var x = this.components.measureAxisTitle;
                    var _ = this.components.secondaryMeasureAxisTitle;
                    this._dataOptions = v;
                    var y = [];
                    var b = [];
                    u.forEach((function(e) {
                        y.push({
                            label: e.qFallbackTitle,
                            index: t.qHyperCube.qMeasureInfo.indexOf(e)
                        })
                    }));
                    d.forEach((function(e) {
                        b.push({
                            label: e.qFallbackTitle,
                            index: t.qHyperCube.qMeasureInfo.indexOf(e)
                        })
                    }));
                    this._data = t;
                    i.push(g.setData(t));
                    i.push(x.setData(y));
                    i.push(_.setData(b));
                    i.push(this.components.dataArea.setData(t));
                    i.push(this.components.colorLegend.setData(t));
                    var M = this.providers.colorMap.getLegendDataProvider();
                    M.setMeasureLegendTypes(t.qHyperCube.qMeasureInfo.map((function(e) {
                        if (!e.series || !e.series.type) return ["rect"];
                        if ("line" === e.series.type) return t.dataPoint.show ? ["line", "circle"] : ["line"];
                        if ("marker" === e.series.type) return [(false === e.series.markerFill ? "!" : "") + (e.series.marker || "circle")];
                        return ["rect"]
                    })));
                    this._super(t, v);
                    if (this._readStoredData) {
                        this.components.dimensionAxis.setInnerOffset(a.axisInnerOffset);
                        this.components.scrollArea.setOffset(a.scrollOffset);
                        this.components.scrollArea.setViewRange(a.viewRange)
                    } else if (this.options.viewState) {
                        this._checkPage = true;
                        this.components.dimensionAxis.setInnerOffset(this.options.viewState.axisInnerOffset);
                        this.components.scrollArea.setOffset(this.options.viewState.scrollOffset);
                        this.components.scrollArea.setViewRange(this.options.viewState.viewRange)
                    } else if (Number.isNaN(+t.scrollStartPos)) {
                        if (!this.isDimensionContinuous) {
                            this.components.dimensionAxis.setInnerOffset(0);
                            this.components.scrollArea.setOffset(0)
                        }
                    } else this.components.scrollArea.setRelativeOffset(t.scrollStartPos);
                    this.isDimensionContinuous || (this._checkPage = true);
                    return o["a"].all(i)
                },
                initSelections: function e() {
                    var t = this;
                    this._super();
                    if (!this.options._disableSelections) {
                        this.selections.types.range.addComponent("y", this.components.axis);
                        this.selections.Select.bind((function(e, i) {
                            var a;
                            var n = t.selections.getActiveType().activeComponent;
                            a = n.subComponents ? t.components.dimensionAxis.getType().current : n.getSelectionIndices();
                            t.onSelection.Select.apply(t, [e, i, a])
                        }));
                        var i = function e(t) {
                            this.onSelection.scheduleInvalidation.call(this);
                            this.components.timeAxis.setSelectedRanges(t);
                            this.components.dataArea.updateRangeSelection(t);
                            this.components.miniChart.components.dataArea.updateRangeSelection(t)
                        };
                        this.selections.UpdateRanges.bind(i.bind(this));
                        this.selections.Clear.bind(i.bind(this, []));
                        this.selections.Deactivated.bind(i.bind(this, []))
                    }
                },
                updateDataArea: function e(t, i) {
                    this._super.apply(this, [].slice.call(arguments));
                    "byExpression" === t.color.mode ? this.components.dataArea.lineArea.interpolateVaryingColors = !t.color.expressionIsColor && -1 !== ["sg", "dg"].indexOf(t.color.measureScheme) : this.components.dataArea.lineArea.interpolateVaryingColors = false;
                    var a = "area" === t.lineType && t.stackedArea ? "stackedArea" : t.lineType;
                    this.components.dataArea.lineArea.setShowDataPoints(t.dataPoint.show);
                    this.components.dataArea.lineArea.setLineType(a);
                    this.components.dataArea.lineArea.setNullMode(t.nullMode);
                    this.components.dataArea.lineArea.setShowDataPointLabels(t.dataPoint.showLineLabels);
                    this.components.dataArea.barArea.setShowDataPoints(t.dataPoint.showBarLabels);
                    var n = this.isDimensionContinuous ? "stacked" : t.barGrouping.grouping;
                    this.components.dataArea.barArea.setGroupingMode(n);
                    if (this.components.miniChart) {
                        this.components.miniChart.components.dataArea.lineArea.setLineType(a);
                        this.components.miniChart.components.dataArea.lineArea.setNullMode(t.nullMode);
                        this.components.miniChart.components.dataArea.barArea.setGroupingMode(n);
                        var s;
                        var r;
                        for (s in i.axes) {
                            var o = i.axes[s];
                            r = this.components.miniChart.components[s];
                            if (r) {
                                r.setDataIndices(o.dataIndices || [o.dataIndex || 0]);
                                r.setCurrentDataIndices(o.currentDataIndices || o.dataIndices || [o.dataIndex || 0])
                            }
                        }
                    }
                    this.components.dataArea.updateNow(["properties"])
                },
                getMinDiscreteUnitSize: function e() {
                    return this._minDiscreteUnitSize
                },
                updateAxis: function e(t, i) {
                    var a;
                    var s = i.primary.indexOf(i.barSeries[0]) >= 0;
                    var r = this.getSnapshotStoredChartData();
                    var o = ae(t);
                    var l = n.a.extend(true, {}, t.measureAxes[0], {
                        show: o.primaryMeasures.length ? t.measureAxes[0].show : "none"
                    });
                    var c = n.a.extend(true, {}, t.measureAxes[1], {
                        show: o.secondaryMeasures.length ? t.measureAxes[1].show : "none",
                        dock_: ["near", "far"].includes(t.measureAxes[0].dock) ? "near" === t.measureAxes[0].dock ? "far" : "near" : h["a"].prototype.getOppositeDock.call({
                            options: {
                                dock: t.measureAxes[0].dock
                            }
                        })
                    });
                    this._super(t, i);
                    this.components.timeAxis.setData(t);
                    this._cutMode = {
                        positive: false,
                        negative: false
                    };
                    var u = this.components.dataArea.barArea.getMinorAxisData();
                    u && i.primary.forEach((function(e) {
                        if (i.barSeries.indexOf(e) < 0 && !Number.isNaN(+e.qMin)) {
                            u.min = Math.min(e.qMin, u.min);
                            u.max = Math.max(e.qMax, u.max)
                        }
                    }));
                    if (this._readStoredData && r.dataRanges) {
                        u.min = r.dataRanges[0].min;
                        u.max = r.dataRanges[0].max
                    }
                    ne.apply(this, [this.components.measureAxis, i.primary, i.axes.measureAxis, s, u, s ? this.getPrimaryMeasureSettings(t, i) : null]);
                    ne.apply(this, [this.components.axis, i.secondary, i.axes.secondaryMeasureAxis, "zero" === t.nullMode, null]);
                    var d = this.chartFormatter.getFormattersForMeasures(t.qHyperCube.qMeasureInfo, i.primary.map((function(e) {
                        return t.qHyperCube.qMeasureInfo.indexOf(e)
                    })));
                    var p = this.chartFormatter.getFormattersForMeasures(t.qHyperCube.qMeasureInfo, i.secondary.map((function(e) {
                        return t.qHyperCube.qMeasureInfo.indexOf(e)
                    })));
                    this.components.measureAxis.combinedMeasuresFormatter = this.chartFormatter.getFormatterFromFormatters(d);
                    this.components.axis.combinedMeasuresFormatter = this.chartFormatter.getFormatterFromFormatters(p);
                    if (i.barSeries.length) a = this.components.dataArea.barArea.getMajorAxisData();
                    else if (i.markerSeries.length) {
                        a = this.components.dataArea.markerArea.getMajorAxisData();
                        i.lineSeries.length || a.data.forEach((function(e) {
                            var t = [];
                            for (var a = 0; a < i.markerSeries.length; a++) t.push(e.cacheIndex[0] * i.markerSeries.length + a);
                            e.cacheIndex = t
                        }))
                    } else a = i.lineSeries.length ? this.components.dataArea.lineArea.getMajorAxisData() : {
                        data: [],
                        info: [],
                        groupSize: null
                    };
                    this.components.dimensionAxis.setDataRange(a.data, a.info);
                    this._updateMinDiscreteUnitSize(this.components.dimensionAxis);
                    var f = this.components.dimensionAxisTitle;
                    var m = this.components.measureAxisTitle;
                    var v = this.components.secondaryMeasureAxisTitle;
                    f.setDock("far" === t.dimensionAxis.dock ? "top" : "bottom");
                    m.setDock("far" === l.dock ? "right" : "left");
                    v.setDock("far" === c.dock ? "right" : "left");
                    f.setSelectionsEnabled(!!this.selections);
                    m.setSelectionsEnabled(!!this.selections);
                    v.setSelectionsEnabled(!!this.selections);
                    if (i.primary.length && i.secondary.length || t.measureAxes.every((function(e) {
                            return "none" === e.show
                        }))) this.components.dimensionAxis.setUnitAlignment("center");
                    else {
                        var g = i.primary.length ? t.measureAxes[0] : t.measureAxes[1];
                        this.components.dimensionAxis.setUnitAlignment(U["a"].getAxisUnitAlignment(g.dock, this.components.dimensionAxis.isHorizontal()))
                    }
                    this.updateTimeAxis()
                },
                updateGrid: function e(t, i) {
                    this._super(t, i);
                    !i.primary.length && i.secondary.length || ["all", "labels"].indexOf(i.axes.measureAxis.data.show) < 0 && i.secondary.length && ["all", "labels"].indexOf(i.axes.secondaryMeasureAxis.data.show) >= 0 ? this.components.grid.setAxes(this._activeDimAxis, this.components.axis) : this.components.grid.setAxes(this._activeDimAxis, this.components.measureAxis)
                },
                _updateMinDiscreteUnitSize: function e(t) {
                    this._super(t)
                },
                getPrimaryMeasureSettings: function e(t, i) {
                    var a = i.primary.filter((function(e) {
                        return !Number.isNaN(+e.qMin)
                    })).map((function(e) {
                        return {
                            min: e.qMin,
                            max: e.qMax,
                            index: t.qHyperCube.qMeasureInfo.indexOf(e),
                            isBarSeries: i.barSeries.indexOf(e) >= 0
                        }
                    }));
                    var n = i.primary.filter((function(e) {
                        return !Number.isNaN(+e.qMin) && i.barSeries.indexOf(e) < 0
                    }));
                    var r;
                    var o;
                    var l;
                    var h;
                    if (a.length) {
                        r = a.reduce((function(e, t) {
                            return e.min < t.min ? e : t
                        }), a[0]);
                        o = a.reduce((function(e, t) {
                            return e.max > t.max ? e : t
                        }), a[0]);
                        o && (h = r.max);
                        r && (l = r.min);
                        s["a"].isNumeric(l) || (l = 0);
                        s["a"].isNumeric(h) || (h = 1)
                    }
                    return {
                        minMeasure: r,
                        maxMeasure: o,
                        nonBarSeriesMax: Math.max.apply(null, n.map((function(e) {
                            return e.qMax
                        }))),
                        nonBarSeriesMin: Math.min.apply(null, n.map((function(e) {
                            return e.qMin
                        }))),
                        min: l,
                        max: h,
                        data: t,
                        options: i
                    }
                },
                getSpikeSettings: function e(t, i) {
                    var a = t.data;
                    var n = t.minMeasure;
                    var s = t.maxMeasure;
                    var r = t.min;
                    var o = t.max;
                    var l = 0;
                    var h = 0;
                    var c = 0;
                    var u = 0;
                    var d = false;
                    var p = false;
                    var f;
                    var m;
                    var v = s.index + a.qHyperCube.qDimensionInfo.length;
                    var g = n.index + a.qHyperCube.qDimensionInfo.length;
                    var x = a.qHyperCube.qDataPages[0] ? a.qHyperCube.qDataPages[0].qMatrix : [];
                    !Number.isNaN(+t.nonBarSeriesMax) && t.nonBarSeriesMax > 0 && (l = t.nonBarSeriesMax);
                    !Number.isNaN(+t.nonBarSeriesMin) && t.nonBarSeriesMin < 0 && (h = t.nonBarSeriesMin);
                    if (!this.components.measureAxis.isStacked) {
                        for (var _ = 0; _ < x.length; _++) {
                            f = x[_];
                            m = f[v].qNum;
                            m > 0 && !Number.isNaN(+m) && (f[0].qIsOtherCell || f[1].qIsOtherCell ? c = Math.max(m, c) : l = Math.max(m, l));
                            m = f[g].qNum;
                            m < 0 && !Number.isNaN(+m) && (f[0].qIsOtherCell || f[1].qIsOtherCell ? u = Math.min(m, u) : h = Math.min(m, h))
                        }
                        if (null !== i.max && i.max < s.max) d = i.max > 0;
                        else if (l > 0 && c / l > 5) {
                            o = l;
                            d = o >= 0
                        }
                        if (null !== i.min && i.min > n.min) p = i.min < 0;
                        else if (h < 0 && u / h > 5) {
                            r = h;
                            p = r < 0
                        }
                    }
                    return {
                        max: o,
                        min: r,
                        positive: d,
                        negative: p
                    }
                },
                getPreferredSize: function e() {
                    return this._super()
                }
            });

            function re(e, t) {
                var i = this.item;
                var a;
                var n = ["contextMenu.add", i.name];
                if (t.canAddMeasure()) {
                    a = this.menu.addItem({
                        translation: n,
                        tid: "add-as"
                    });
                    a.addItem({
                        translation: "contextMenu.asBar",
                        tid: "as-bar",
                        icon: "bar-chart",
                        select: function a() {
                            t.addLibraryMeasure(i.id).then((function(i) {
                                i.qDef.series.type = "bar";
                                t.updateGlobalChangeListeners();
                                e.setProperties(t.properties);
                                r["default"].$rootScope.$broadcast("pp-open-path", "data.".concat(i.qDef.cId))
                            }))
                        }
                    });
                    a.addItem({
                        translation: "contextMenu.asLine",
                        tid: "as-line",
                        icon: "line-chart",
                        select: function a() {
                            t.addLibraryMeasure(i.id).then((function(i) {
                                i.qDef.series.type = "line";
                                i.qDef.series.axis = 1;
                                t.updateGlobalChangeListeners();
                                e.setProperties(t.properties);
                                r["default"].$rootScope.$broadcast("pp-open-path", "data.".concat(i.qDef.cId))
                            }))
                        }
                    });
                    a.addItem({
                        translation: "contextMenu.asMarker",
                        tid: "as-marker",
                        icon: "shapes",
                        select: function a() {
                            t.addLibraryMeasure(i.id).then((function(i) {
                                i.qDef.series.type = "marker";
                                i.qDef.series.axis = 1;
                                t.updateGlobalChangeListeners();
                                e.setProperties(t.properties)
                            }))
                        }
                    })
                }
                t.canColorBy().byMeasure && this.menu.addItem({
                    translation: ["contextMenu.colorBy", i.name],
                    tid: "colorby",
                    select: function a() {
                        $["a"].setColorByPropertyDef(t.properties, i);
                        t.updateGlobalChangeListeners();
                        e.setProperties(t.properties)
                    }
                })
            }
            var oe = t["default"] = {
                type: "ComboChart",
                BackendApi: Z["a"],
                template: X,
                View: se,
                definition: V,
                softDefinition: H,
                initialProperties: {
                    qHyperCubeDef: {
                        qDimensions: [],
                        qMeasures: [],
                        qInitialDataFetch: [{
                            qWidth: 17,
                            qHeight: 500
                        }],
                        qSuppressMissing: true
                    },
                    measureAxes: [{
                        autoMinMax: true,
                        dock: "near",
                        max: 10,
                        min: 0,
                        minMax: "min",
                        show: "all",
                        spacing: 1
                    }, {
                        autoMinMax: true,
                        dock: "far",
                        max: 10,
                        min: 0,
                        minMax: "min",
                        show: "all",
                        spacing: 1
                    }]
                },
                data: B["a"],
                support: {
                    cssScaling: false,
                    snapshot: true,
                    export: true,
                    exportData: true,
                    sharing: true,
                    viewData: true,
                    modifiers: ie()
                },
                migrate: {
                    properties: function e(t) {
                        var i = J["a"].migrateProperties(t);
                        return K["a"].migrateProperties(i)
                    }
                },
                options: {
                    selections: {
                        dataArea: {},
                        range: {},
                        colorLegend: {}
                    },
                    tooltips: {}
                },
                getDropMeasureOptions: function e(t, i, a, n, s) {
                    if ("measure" === t.item.type) {
                        re.call(t, a, i, s);
                        i.getMeasures().length >= i.minMeasures() && t.ReplaceMeasures(a, i, s);
                        n()
                    } else G["a"].getDropMeasureOptions(t, i, a, n, s)
                },
                importProperties: function e(t, i, a) {
                    var n = Y["default"].axisChart.importProperties.apply(Y["default"], [t, i, a]);
                    var r = "linechart" === t.properties.visualization;
                    var o = [];
                    n.qProperty.qHyperCubeDef.qMeasures.forEach((function(e) {
                        e.qDef.series || (e.qDef.series = {
                            type: r ? "line" : "bar",
                            axis: 0,
                            marker: "circle",
                            markerFill: true
                        });
                        o.indexOf(e.qDef.series.axis) < 0 && o.push(e.qDef.series.axis)
                    }));
                    var l = o.sort().shift();
                    n.qProperty.measureAxes[l] && t.properties.measureAxis && "undefined" !== typeof t.properties.measureAxis.autoMinMax && s["a"].extend(true, n.qProperty.measureAxes[l], t.properties.measureAxis, {
                        logarithmic: false
                    });
                    return n
                },
                exportProperties: Y["default"].axisChart.exportProperties.bind(Y["default"])
            }
        },
        "/D2Q": function(e, t, i) {
            "use strict";
            var a = i("nHjU");
            var n = i("UV1h");
            var s = i("plXO");
            var r = {
                positionRectanglesAlongAxis: function e(t, i, a, n, s) {
                    var r;
                    var o;
                    var l;
                    var h;
                    var c = t ? t.length : 0;
                    true !== s && t.sort((function(e, t) {
                        return e.position > t.position ? 1 : -1
                    }));

                    function u() {
                        if (0 === c) {
                            r = [];
                            o = 0;
                            return
                        }
                        var e;
                        var a;
                        var n;
                        var s;
                        var l;
                        r = [
                            [0]
                        ];
                        for (e = 1; e < c; e++) {
                            a = t[e].position;
                            n = t[e].size;
                            s = t[e - 1].position;
                            l = t[e - 1].size;
                            s + l / 2 + i > a - n / 2 ? r[r.length - 1].push(e) : r.push([e])
                        }
                        o = r ? r.length : 0
                    }

                    function d() {
                        if (0 === c) return;
                        p();
                        f();
                        v();
                        l = m();
                        if (l) return;
                        g()
                    }

                    function p() {
                        var e;
                        var n;
                        var s;
                        var r;
                        var o;
                        n = t[0].position;
                        s = t[0].size;
                        n = Math.max(a, n - s / 2) + s / 2;
                        t[0].newPosition = n;
                        for (e = 1; e < c; e++) {
                            r = t[e - 1].newPosition;
                            o = t[e - 1].size;
                            n = t[e].position;
                            s = t[e].size;
                            n = Math.max(r + o / 2 + i, n - s / 2) + s / 2;
                            t[e].newPosition = n
                        }
                    }

                    function f() {
                        var e;
                        var s;
                        var r;
                        var o;
                        var l;
                        s = t[c - 1].newPosition;
                        r = t[c - 1].size;
                        if (s + r / 2 > n) {
                            t[c - 1].newPosition = n - r / 2 - a;
                            for (e = c - 2; e >= 0; e--) {
                                o = t[e + 1].newPosition;
                                l = t[e + 1].size;
                                s = t[e].newPosition;
                                r = t[e].size;
                                s = Math.min(o - l / 2 - i, s + r / 2) - r / 2;
                                t[e].newPosition = s
                            }
                        }
                    }

                    function m() {
                        var e;
                        var n;
                        var s;
                        var r = t[0].newPosition;
                        var o = t[0].size;
                        if (r - o / 2 < a) return true;
                        if (r - o / 2 > a) return false;
                        for (e = 1; e < c; e++) {
                            n = t[e - 1].newPosition;
                            s = t[e - 1].size;
                            r = t[e].newPosition;
                            o = t[e].size;
                            if (n + s / 2 + i < r - o / 2) return false
                        }
                        return true
                    }

                    function v() {
                        var e;
                        var i;
                        var a;
                        var n;
                        var s;
                        var l;
                        var c;
                        var u;
                        var d;
                        var p;
                        var f;
                        var m;
                        h && h.length === o || (h = new Array(o));
                        for (e = 0; e < o; e += 1) {
                            i = r[e];
                            a = i[0];
                            n = i[i.length - 1];
                            s = t[a];
                            l = t[n];
                            d = s.position;
                            c = s.size;
                            f = s.newPosition - c / 2;
                            p = l.position;
                            u = l.size;
                            m = l.newPosition + u / 2;
                            h[e] = {
                                firstPosition: d,
                                lastPosition: p,
                                minPosition: f,
                                maxPosition: m
                            }
                        }
                    }

                    function g() {
                        x(0, a);
                        for (var e = 1; e < o; e++) x(e, h[e - 1].maxPosition + i)
                    }

                    function x(e, t) {
                        var i = r[e];
                        i.length % 2 === 0 ? _(e, t) : y(e, t)
                    }

                    function _(e, i) {
                        var a = r[e];
                        var n = a[0];
                        var s = a[a.length / 2 - 1];
                        var o = a[a.length / 2];
                        var l = t[n];
                        var h = t[s];
                        var c = t[o];
                        var u = l.newPosition;
                        var d = l.size;
                        var p = (h.position + c.position) / 2;
                        var f = (h.newPosition + c.newPosition) / 2;
                        var m = f - p;
                        var v = u - m;
                        b(e, u, v, d, i)
                    }

                    function y(e, i) {
                        var a = r[e];
                        var n = a[0];
                        var s = a[(a.length - 1) / 2];
                        var o = t[n];
                        var l = t[s];
                        var h = o.newPosition;
                        var c = o.size;
                        var u = l.position;
                        var d = l.newPosition;
                        var p = d - u;
                        var f = h - p;
                        b(e, h, f, c, i)
                    }

                    function b(e, t, i, a, n) {
                        if (i >= t) return;
                        i = Math.max(n + a / 2, i);
                        var s = t - i;
                        h[e].minPosition -= s;
                        h[e].maxPosition -= s;
                        M(e, s)
                    }

                    function M(e, i) {
                        var a;
                        var n;
                        var s;
                        var o = r[e];
                        var l = o ? o.length : 0;
                        for (a = 0; a < l; a++) {
                            n = o[a];
                            s = t[n];
                            s.newPosition -= i
                        }
                    }
                    u();
                    d()
                }
            };
            var o = r;
            var l = i("qIEf");
            var h = i.n(l);
            var c = i("G1wx");
            var u = i("FJpR");
            var d = i("/Zwk");
            var p = i("Xb14");

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    "value" in a && (a.writable = true);
                    Object.defineProperty(e, a.key, a)
                }
            }

            function v(e, t, i) {
                t && m(e.prototype, t);
                i && m(e, i);
                return e
            }
            var g = h()(document);
            var x;

            function _(e, t, i) {
                var a = e.offset();
                return new u["a"](t - a.left, i - a.top)
            }

            function y(e, t, i) {
                var a = e.offset();
                return new u["a"](a.left + t, a.top + i)
            }

            function b(e, t) {
                var i = e.shapeWrapper.getBoundingRect();
                return i.pointInside(t.x, t.y)
            }

            function M(e, t) {
                return e.filter((function(e) {
                    return b(e, t)
                }))[0]
            }

            function A(e, t) {
                return {
                    positions: [y(t, e.x + e.width / 2, e.y), y(t, e.x + e.width, e.y + e.height / 2), y(t, e.x, e.y + e.height / 2), y(t, e.x + e.width / 2, e.y + e.height)],
                    directions: ["top", "right", "left", "bottom"]
                }
            }

            function D() {
                x && (x = null)
            }
            var w = function() {
                function e(t, i) {
                    f(this, e);
                    this.$container = h()(t);
                    this.styleService = i;
                    n["a"].ThemeChanged.bind(this.updateStyling.bind(this));
                    this.updateStyling()
                }
                v(e, [{
                    key: "updateStyling",
                    value: function e() {
                        this.styling = {
                            "font-family": this.styleService.getStyle("tooltip", "fontFamily")
                        }
                    }
                }, {
                    key: "setLabelObjects",
                    value: function e(t) {
                        this._labelObjects = t
                    }
                }, {
                    key: "on",
                    value: function e() {
                        var t = this;
                        this._onMouseMove = function(e) {
                            if (!t._labelObjects) return;
                            var i = _(t.$container, e.pageX, e.pageY);
                            var a = M(t._labelObjects, i);
                            if (a && x !== a) {
                                x = a;
                                var n = A(a.shapeWrapper.getLocalBoundingRect(), t.$container);
                                p["a"].open({
                                    content: [{
                                        rows: a.tooltipRows
                                    }],
                                    position: n.positions,
                                    direction: n.directions,
                                    hideCallback: D,
                                    styling: t.styling
                                }, d["a"].getDuration(a.tooltipRows.length), 500)
                            } else if (!a) {
                                x = null;
                                p["a"].close()
                            }
                        };
                        this._onMouseLeave = function() {
                            x = null;
                            p["a"].close()
                        };
                        if (c["a"].treatAsDesktop()) {
                            this.$container.on("mousemove", this._onMouseMove);
                            this.$container.on("mouseleave", this._onMouseLeave);
                            g.on("mouseleave.refLineLabels", this._onMouseLeave)
                        }
                    }
                }, {
                    key: "off",
                    value: function e() {
                        this.$container.off("mousemove", this._onMouseMove);
                        this.$container.off("mouseleave", this._onMouseLeave);
                        g.off("mouseleave.refLineLabels", this._onMouseLeave)
                    }
                }, {
                    key: "release",
                    value: function e() {
                        this.$container = null;
                        n["a"].ThemeChanged.unbind(this.updateStyling)
                    }
                }]);
                return e
            }();
            var S = w;
            var C = i("wdNe");
            var q = i("NWoE");
            var L = i("ZrpC");
            var P = i("4nJ1");
            var k = i("zjn0");
            var O = i("gapF");
            var T;
            var I;
            var R;
            var N;
            var z;
            var j = "center";
            var V = "bottom";
            var E = 2;

            function F(e) {
                e.forEach((function(e) {
                    e.size = e.shapeWrapper.measure().height
                }))
            }

            function H(e, t) {
                if (!e || !e.paletteColor && !e.color) return t;
                if (e.paletteColor) return n["a"].resolveColor(e.paletteColor);
                return n["a"].resolveColor(e.color, n["a"].deprecatedPalette)
            }

            function B(e, t, i, a, n, s) {
                void 0 === n && (n = Number.MAX_VALUE);
                void 0 === s && (s = 1);
                var r = new C["a"];
                r.setText(e);
                r.font = t;
                r.x = i;
                r.y = a;
                r.maxWidth = n;
                r.maxNumLines = s;
                r.align = j;
                r.baseline = V;
                return r
            }

            function W(e) {
                if (void 0 === e || "" === e) return 0;
                T.setText(e);
                return T.measure().width
            }

            function U(e) {
                if (void 0 === e || "" === e) return 0;
                R.setText(e);
                return R.measure()
            }

            function Z(e) {
                if (void 0 === e || "" === e) return 0;
                I.setText(e);
                return I.measure().width
            }

            function G(e, t) {
                if (void 0 === e || "" === e) return {
                    numLines: 0,
                    width: 0,
                    height: 0,
                    lines: []
                };
                I.setText(e);
                I.maxWidth = t;
                return I.measure()
            }

            function Y(e, t) {
                if (void 0 === e || "" === e) return {
                    index: -1,
                    width1: 0,
                    width2: 0,
                    width: 0
                };
                void 0 === t && (t = W(e));
                var i = Number.MAX_VALUE;
                var a = e.length;
                var n = Math.floor(a / 2);
                var s = e.substring(0, n);
                var r = 0;
                var o = true;
                var l = s.lastIndexOf(" ");
                var h;
                var c;
                var u;
                var d;
                while (l > -1 && o) {
                    s = e.substring(0, l);
                    h = W(s);
                    c = t - h - N;
                    u = Math.max(h, c);
                    if (i < u) o = false;
                    else {
                        i = u;
                        r++;
                        d = {
                            index: l,
                            width1: h,
                            width2: c,
                            width: i
                        };
                        l = s.lastIndexOf(" ")
                    }
                }
                if (r > 1) return d;
                l = e.indexOf(" ", n);
                r = 0;
                while (l > -1) {
                    s = e.substring(l + 1);
                    c = W(s);
                    h = t - c - N;
                    u = Math.max(h, c);
                    if (i < u) return d;
                    i = u;
                    r++;
                    d = {
                        index: l,
                        width1: h,
                        width2: c,
                        width: i
                    };
                    l = e.indexOf(" ", l + 1)
                }
                void 0 === d && (d = {
                    index: -1,
                    width1: 0,
                    width2: t,
                    width: t
                });
                return d
            }

            function X(e, t) {
                if (void 0 === e || "" === e) return {
                    index1: -1,
                    index2: -1,
                    width1: 0,
                    width2: 0,
                    width3: 0,
                    width: 0
                };
                void 0 === t && (t = W(e));
                var i = Number.MAX_VALUE;
                var a = e.length;
                var n = Math.floor(a / 3);
                var s = e.substring(0, n);
                var r = 0;
                var o = true;
                var l = s.lastIndexOf(" ");
                var h;
                var c;
                var u;
                var d;
                var p;
                var f;
                var m;
                while (l > -1 && o) {
                    s = e.substring(0, l);
                    h = e.substring(l + 1);
                    u = W(h);
                    c = t - u - N;
                    f = Y(h, u);
                    p = f.width;
                    d = Math.max(c, p);
                    if (i < d) o = false;
                    else {
                        i = d;
                        r++;
                        m = {
                            index1: l,
                            index2: f.index,
                            width1: c,
                            width2: f.width1,
                            width3: f.width2,
                            width: i
                        };
                        l = s.lastIndexOf(" ")
                    }
                }
                if (r > 1) return m;
                l = e.indexOf(" ", n);
                r = 0;
                while (l > -1) {
                    h = e.substring(l + 1);
                    u = W(h);
                    c = t - u - N;
                    f = Y(h, u);
                    p = f.width;
                    d = Math.max(c, p);
                    if (i < d) return m;
                    i = d;
                    r++;
                    m = {
                        index1: l,
                        index2: f.index,
                        width1: c,
                        width2: f.width1,
                        width3: f.width2,
                        width: i
                    };
                    l = e.indexOf(" ", l + 1)
                }
                void 0 === m && (m = {
                    index1: -1,
                    index2: -1,
                    width1: 0,
                    width2: 0,
                    width3: t,
                    width: t
                });
                return m
            }

            function $(e, t, i) {
                var a;
                if (t <= i) return {
                    minTextWidth: t,
                    level: 1
                };
                if (t <= 2 * i) {
                    a = Y(e, t);
                    if (a.width <= i) return {
                        minTextWidth: a.width,
                        level: 0 === a.width1 ? 3 : 2
                    };
                    if (0 === a.width1) return {
                        minTextWidth: Math.ceil(a.width / 2) + z,
                        level: 3
                    }
                }
                if (t < 3 * i) {
                    a = X(e, t);
                    if (0 === a.width1 && 0 === a.width2) return {
                        minTextWidth: Math.min(Math.ceil(a.width / 3) + Math.ceil(3 * z / 2), i),
                        level: 3
                    };
                    return {
                        minTextWidth: Math.min(a.width, i),
                        level: 3
                    }
                }
                return {
                    minTextWidth: i,
                    level: 3
                }
            }

            function K(e, t, i, a, n) {
                e.size = t;
                e.size2 = i;
                e.numLines = a;
                e.level = n
            }

            function J(e, t, i) {
                if (e.size / 2 <= t || 3 === e.numLines || 3 === e.level) return;
                var a;
                var n;
                if (2 === e.numLines) {
                    a = X(e.text, e.singleLineTextWidth);
                    n = G(e.text, a.width);
                    K(e, a.width, n.height, n.numLines, 3);
                    return
                }
                a = Y(e.text, e.singleLineTextWidth);
                if (0 === a.width1) return;
                if (a.width / 2 <= t || true === i) {
                    n = G(e.text, a.width);
                    K(e, a.width, n.height, n.numLines, 2);
                    return
                }
                a = X(e.text, e.singleLineTextWidth);
                n = G(e.text, a.width);
                K(e, a.width, n.height, n.numLines, 3)
            }

            function Q(e, t, i) {
                var a;
                var n;
                if (e.position + e.size / 2 + i > t.position - t.size / 2) {
                    if (e.size > t.size) {
                        a = e;
                        n = t.position - t.size / 2 - i - e.position
                    } else {
                        a = t;
                        n = t.position - (e.position + e.size / 2 + i)
                    }
                    J(a, n, true)
                }
            }

            function ee(e, t, i, a, n, s) {
                e.singleLineTextWidth = t;
                e.size = i;
                e.size2 = a;
                e.numLines = n;
                e.level = s
            }

            function te(e) {
                return String(void 0 !== e.label ? e.label : e)
            }

            function ie(e, t) {
                var i = e;
                var a = P["a"].escapeRegExp("+-".concat(this.chartFormatter.getLocaleInfo().qDecimalSep || "").concat(this.chartFormatter.getLocaleInfo().qThousandSep || ""));
                var n = i.replace(new RegExp("[0-9e".concat(a, "]"), "g"), "");
                n = n.length ? i : this._axis.format(t);
                return n
            }

            function ae(e) {
                if (!this._axis || !this._data) return;
                this._axis.updateFormatter();
                var t = this._data ? this._data.length : 0;
                var i = [];
                var a = this._axis.getPlotMin();
                var n = this._axis.getPlotMax();
                var s;
                var r;
                var o;
                var l;
                var h;
                var c;
                var u;
                var d = [];
                var p = [];
                var f = -Number.MAX_VALUE;
                var m = Number.MAX_VALUE;
                var v = 0;
                var g = 0;
                this._plotMinValueForRelevantSize = a;
                this._plotMaxValueForRelevantSize = n;
                this._maxLowerLabelIndex = void 0;
                this._minUpperLabelIndex = void 0;
                for (s = 0; s < t; s += 1) {
                    if (!O["a"].isVisible(this._data[s]) || false === this._data[s].showLabel && false === this._data[s].showValue) continue;
                    r = te(this._data[s].refLineExpr);
                    o = e ? this._currentProperties["value".concat(s)] : this._data[s].refLineExpr.value;
                    if (null === o || Number.isNaN(+o)) continue;
                    l = this._data[s].label;
                    h = ie.apply(this, [r, o]);
                    c = " ".concat(k["a"].lrm, "(").concat(h, ")").concat(k["a"].lrm);
                    if (o < a) {
                        v++;
                        p.push({
                            label: l,
                            value: h
                        });
                        f < o && (this._maxLowerLabelIndex = s);
                        continue
                    }
                    if (o > n) {
                        g++;
                        d.push({
                            label: l,
                            value: h
                        });
                        m > o && (this._minUpperLabelIndex = s);
                        continue
                    }
                    u = O["a"].getRefLineTitle({
                        refLine: this._data[s],
                        label: l,
                        valueString: h
                    });
                    i.push({
                        index: s,
                        text: u,
                        value: o,
                        text1: l,
                        text2: false !== this._data[s].showValue ? c : "",
                        tooltipRows: [{
                            label: l,
                            value: h
                        }]
                    })
                }
                g > 0 && i.push({
                    index: -1,
                    text: g < 10 ? g.toString() : "9+",
                    value: "max",
                    type: 1,
                    tooltipRows: d
                });
                v > 0 && i.push({
                    index: -2,
                    text: v < 10 ? v.toString() : "9+",
                    value: "min",
                    type: -1,
                    tooltipRows: p
                });
                this._labelObjects = i;
                this._numLabelObjects = this._labelObjects ? this._labelObjects.length : 0;
                this._labelsMaxWidthNeedToUpdate = true;
                this._labelsMaxHeightNeedToUpdate = true;
                this._labelObjectsNeedToUpdate = false;
                this._numLowerLabels = v;
                this._numUpperLabels = g
            }

            function ne() {
                if (!this._labelsMaxWidthNeedToUpdate) return;
                this._labelsMaxWidthNeedToUpdate = false;
                var e;
                var t = 0;
                var i;
                var a;
                I.maxWidth = this._labelMaxWidthForYAxis;
                for (e = 0; e < this._numLabelObjects; e++) {
                    if (void 0 !== this._labelObjects[e].type) {
                        i = U(this._labelObjects[e].text);
                        a = oe(i);
                        t = Math.max(t, a + 4)
                    } else t = Math.max(t, Z(this._labelObjects[e].text) + 4);
                    if (t >= this._labelMaxWidthForYAxis) {
                        this._labelsMaxWidth = this._labelMaxWidthForYAxis;
                        return
                    }
                }
                this._labelsMaxWidth = t
            }

            function se(e) {
                if ("max" === e) return Math.floor(this._axis.getPositionOfValue(this._axis.getPlotMax())) - .5 + (this.isVertical() ? -.1 : .1);
                if ("min" === e) return Math.floor(this._axis.getPositionOfValue(this._axis.getPlotMin())) - .5 + (this.isVertical() ? .1 : -.1);
                return Math.floor(this._axis.getPositionOfValue(e)) - .5
            }

            function re() {
                var e;
                var t;
                var i;
                for (e = 0; e < this._numLabelObjects; e += 1) {
                    t = this._labelObjects[e];
                    i = se.call(this, t.value);
                    t.position = i
                }
            }

            function oe(e) {
                return Math.sqrt(e.width * e.width + e.height * e.height)
            }

            function le() {
                if (!this._labelsMaxHeightNeedToUpdate) return;
                this._labelsMaxHeightNeedToUpdate = false;
                re.call(this);
                var e;
                var t = 0;
                var i;
                var a;
                this.calculateLabelWidths(this._labelObjects, this._componentWidth, this._horizontalLabelGap, this._boundaryGap, this._labelMaxWidthForXAxis);
                o.positionRectanglesAlongAxis(this._labelObjects, this._horizontalLabelGap, this._boundaryGap, this._componentWidth, true);
                for (e = 0; e < this._numLabelObjects; e += 1)
                    if (void 0 !== this._labelObjects[e].type) {
                        i = U(this._labelObjects[e].text);
                        a = oe(i);
                        t = Math.max(t, a)
                    } else t = Math.max(t, this._labelObjects[e].size2);
                this._labelsMaxHeight = t
            }

            function he(e, t) {
                var i = e.scaleFontSize(e.getStyle("referenceLine.label.name", "fontSize"), t, null);
                var a = e.getStyle("referenceLine.label.name", "fontFamily");
                var n = e.scaleFontSize(e.getStyle("referenceLine.outOfBounds", "fontSize"), t, null);
                var s = e.getStyle("referenceLine.outOfBounds", "fontFamily");
                var r = {
                    label: {
                        color: e.getStyle("referenceLine.label.name", "color"),
                        font: "normal ".concat(i, " ").concat(a)
                    },
                    outOfBounds: {
                        color: e.getStyle("referenceLine.outOfBounds", "color"),
                        backgroundColor: e.getStyle("referenceLine.outOfBounds", "backgroundColor"),
                        font: "normal ".concat(n, " ").concat(s)
                    }
                };
                T = B("", r.label.font, 0, 0, Number.MAX_VALUE, 1);
                I = B("", r.label.font, 0, 0, Number.MAX_VALUE, 3);
                R = B("", r.outOfBounds.font, 0, 0, Number.MAX_VALUE, 1);
                N = W("m m") - W("mm");
                z = W("m");
                return r
            }
            var ce = a["a"].extend("RefLineLabels", {
                init: function e() {
                    this._super.apply(this, arguments);
                    this.renderer = new s["a"](this.container);
                    this._styleService = n["a"].initializeService("object.".concat(this.options.parentType || ""));
                    this._style = he(this._styleService);
                    this._tooltips = new S(this.container, this._styleService);
                    this._currentProperties = {};
                    this._transitionProperties = {};
                    this.renderers = {
                        labels: this.renderer
                    };
                    this._$renderAreaWrap.addClass("qv-chart-component-reflinelabels");
                    this._hasVisibleRefLines = false;
                    this._labelMargin = 4;
                    this._labelMaxWidthForYAxis = 70;
                    this._labelMaxWidthForXAxis = 100;
                    this._labelMaxHeightForXAxis = 50;
                    this._verticaLabelGap = 4;
                    this._horizontalLabelGap = 6;
                    this._boundaryGap = 4
                },
                calculateRelevantSize: function e() {
                    this._super();
                    ae.call(this);
                    if (this.isVertical()) {
                        ne.call(this);
                        this.relevantSize = this._labelsMaxWidth + this._labelMargin
                    } else {
                        var t = this.rect.width ? this.rect.width : this._axis._plotSize;
                        if (this._componentWidth !== t) {
                            this._componentWidth = t;
                            this._labelsMaxHeightNeedToUpdate = true
                        }
                        le.call(this);
                        this.relevantSize = this._labelsMaxHeight + this._labelMargin
                    }
                },
                calculatePreliminaryRelevantSize: function e() {
                    this.relevantSize = this.isVertical() ? this._labelMaxWidthForYAxis : this._labelMaxHeightForXAxis
                },
                setData: function e() {
                    this._super.apply(this, arguments);
                    this._hasVisibleRefLines = this.checkIfHavingVisibleRefLines();
                    this.updateLocalPlotMaxMinValues();
                    this._labelObjectsNeedToUpdate = true
                },
                setAxis: function e(t) {
                    var i = this;
                    this._axis && this._axis.stopListen("changed", i.invalidateDisplay, i);
                    this._axis = t;
                    this._axis.listen("changed", i.invalidateDisplay, i);
                    this._labelObjectsNeedToUpdate = true
                },
                isVisible: function e() {
                    var t = this._super.apply(this, arguments);
                    if (!t) return false;
                    if (this._axis && (this._plotMinValue !== this._axis.getPlotMin() || this._plotMaxValue !== this._axis.getPlotMax())) {
                        this._hasVisibleRefLines = this.checkIfHavingVisibleRefLines();
                        this.updateLocalPlotMaxMinValues()
                    }
                    return this._hasVisibleRefLines
                },
                calculateLabelWidths: function e(t, i, a, n, s) {
                    var r;
                    var o;
                    var l;
                    var h;
                    var c;
                    var u;
                    var d;
                    var p = t ? t.length : 0;
                    if (0 === p) return;
                    for (r = 0; r < p; r++) {
                        l = t[r];
                        h = l.text;
                        if (void 0 === h || "" === h) ee(l, 0, 0, 0, 0, 0, void 0);
                        else {
                            c = W(h);
                            u = $(h, c, s);
                            d = G(h, u.minTextWidth);
                            ee(l, c, u.minTextWidth, d.height, d.numLines, u.level, d)
                        }
                    }
                    t.sort((function(e, t) {
                        return e.position > t.position ? 1 : -1
                    }));
                    l = t[p - 1];
                    void 0 !== l.text && "" !== l.text && J(l, i - l.position - n);
                    l = t[0];
                    void 0 !== l.text && "" !== l.text && J(l, l.position - n);
                    for (r = 0; r < p - 1; r++)
                        if (void 0 !== t[r].text && "" !== t[r].text && void 0 !== t[r + 1].text && "" !== t[r + 1].text)
                            for (o = 0; o < 4; o++) Q(t[r], t[r + 1], a)
                },
                checkIfHavingVisibleRefLines: function e() {
                    if (!this._data || 0 === this._data.length || !this._axis) return false;
                    var t;
                    for (t = 0; t < this._data.length; t += 1)
                        if (O["a"].isVisible(this._data[t])) {
                            if ("value" in this._data[t].refLineExpr && (null === this._data[t].refLineExpr.value || Number.isNaN(+this._data[t].refLineExpr.value))) continue;
                            return true
                        } return false
                },
                updateLocalPlotMaxMinValues: function e() {
                    if (this._axis) {
                        this._plotMinValue = this._axis.getPlotMin();
                        this._plotMaxValue = this._axis.getPlotMax()
                    }
                },
                setLabelMargin: function e(t) {
                    this._labelMargin = void 0 === t ? 4 : t
                },
                hasValidData: function e() {
                    return this._super() && this._data && this._axis
                },
                paint: function e() {
                    this._super.apply(this, arguments);
                    this._style = he(this._styleService);
                    if (this._plotMinValue !== this._axis.getPlotMin() || this._plotMaxValue !== this._axis.getPlotMax()) {
                        this._hasVisibleRefLines = this.checkIfHavingVisibleRefLines();
                        this.updateLocalPlotMaxMinValues()
                    }
                    if (!this._hasVisibleRefLines) {
                        this._clearLabels();
                        return
                    }
                    ae.call(this, true);
                    var t;
                    var i;
                    var a;
                    var n;
                    var s;
                    var r;
                    var l;
                    var h;
                    var c;
                    var u;
                    var d;
                    var p;
                    var f;
                    var m;
                    var v;
                    var g;
                    var x;
                    var _;
                    var y = this.isVertical() ? "middle" : "top" === this.dock ? "bottom" : "top";
                    var b = "middle";
                    var M = this.rect.width;
                    var A = this.rect.height;
                    var D = "top" === this.dock ? A - this._labelMargin : this._labelMargin;
                    var w = new Array(this._numLabelObjects);
                    var S = this._labelMaxWidthForYAxis;
                    var P = this._style.label.font;
                    var k = "top" === this.dock ? (A - this._labelMargin) / 2 : (A + this._labelMargin) / 2;
                    if (this.yMirrorMode) {
                        h = .7;
                        c = .3;
                        u = M / 2 - (this._labelMargin / 2 + 1)
                    } else {
                        h = .3;
                        c = .7;
                        u = M / 2 + this._labelMargin / 2 + 1
                    }
                    var O = u;
                    for (t = 0; t < this._numLabelObjects; t += 1) {
                        x = this._labelObjects[t];
                        i = x.index;
                        a = se.call(this, x.value);
                        if (this.isVertical()) {
                            n = u;
                            s = a
                        } else {
                            n = a;
                            s = void 0 !== x.type ? k : D
                        }
                        d = i > -1 ? H(this._data[i], this._style.label.color) : this._style.label.color;
                        if (void 0 !== x.type) {
                            P = this._style.outOfBounds.font;
                            _ = b;
                            d = this._style.outOfBounds.color
                        } else {
                            P = this._style.label.font;
                            _ = y
                        }
                        p = new C["a"];
                        p.fill = d;
                        p.x = n;
                        p.y = s;
                        p.align = j;
                        p.baseline = _;
                        p.font = P;
                        p.maxWidth = S;
                        p.maxHeight = 92;
                        p.maxNumLines = 3;
                        p.ellipsis = "… ".concat(x.text2);
                        p.setText(x.text);
                        w[t] = p;
                        x.position = a;
                        x.shapeWrapper = p
                    }
                    if (0 === this._numLabelObjects) {
                        this._clearLabels();
                        return
                    }
                    if (this.isVertical()) {
                        F(this._labelObjects);
                        if (this._numUpperLabels > 0) {
                            a = Math.floor(this._axis.getPositionOfValue(this._axis.getPlotMax())) - .7;
                            this._labelObjects.push({
                                position: a,
                                size: E
                            })
                        }
                        if (this._numLowerLabels > 0) {
                            a = Math.floor(this._axis.getPositionOfValue(this._axis.getPlotMin())) - .3;
                            this._labelObjects.push({
                                position: a,
                                size: E
                            })
                        }
                        o.positionRectanglesAlongAxis(this._labelObjects, this._verticaLabelGap, this._boundaryGap, this.rect.height, false);
                        for (t = this._labelObjects.length - 1; t > -1; t--) void 0 === this._labelObjects[t].shapeWrapper && this._labelObjects.splice(t, 1);
                        for (t = 0; t < this._numLabelObjects; t += 1) {
                            x = this._labelObjects[t];
                            f = x.shapeWrapper;
                            f.y = x.newPosition;
                            if (1 === x.type) {
                                m = x.shapeWrapper.measure();
                                v = {
                                    cx: f.x,
                                    cy: f.y,
                                    r: oe(m) / 2
                                }
                            }
                            if (-1 === x.type) {
                                m = x.shapeWrapper.measure();
                                g = {
                                    cx: f.x,
                                    cy: f.y,
                                    r: oe(m) / 2
                                }
                            }
                        }
                    } else {
                        this.calculateLabelWidths(this._labelObjects, this.rect.width, this._horizontalLabelGap, this._boundaryGap, this._labelMaxWidthForXAxis);
                        if (this._numUpperLabels > 0) {
                            a = Math.floor(this._axis.getPositionOfValue(this._axis.getPlotMax())) - h;
                            this._labelObjects.push({
                                position: a,
                                size: E
                            })
                        }
                        if (this._numLowerLabels > 0) {
                            a = Math.floor(this._axis.getPositionOfValue(this._axis.getPlotMin())) - c;
                            this._labelObjects.push({
                                position: a,
                                size: E
                            })
                        }
                        o.positionRectanglesAlongAxis(this._labelObjects, this._horizontalLabelGap, this._boundaryGap, this.rect.width, false);
                        for (t = this._labelObjects.length - 1; t > -1; t--) void 0 === this._labelObjects[t].shapeWrapper && this._labelObjects.splice(t, 1);
                        for (t = 0; t < this._numLabelObjects; t += 1) {
                            x = this._labelObjects[t];
                            f = x.shapeWrapper;
                            f.x = x.newPosition;
                            f.maxWidth = x.size;
                            if (1 === x.type) {
                                m = x.shapeWrapper.measure();
                                v = {
                                    cx: f.x,
                                    cy: k,
                                    r: oe(m) / 2
                                }
                            }
                            if (-1 === x.type) {
                                m = x.shapeWrapper.measure();
                                g = {
                                    cx: f.x,
                                    cy: k,
                                    r: oe(m) / 2
                                }
                            }
                        }
                    }
                    if (this._numLowerLabels > 0) {
                        if (this.isVertical()) p = new L["a"]([{
                            x: O - 3,
                            y: A - 5.2
                        }, {
                            x: O,
                            y: A
                        }, {
                            x: O + 3,
                            y: A - 5.2
                        }]);
                        else {
                            r = this.yMirrorMode ? M - 5.2 : 5.2;
                            l = this.yMirrorMode ? M : 0;
                            p = new L["a"]([{
                                x: r,
                                y: k - 3
                            }, {
                                x: l,
                                y: k
                            }, {
                                x: r,
                                y: k + 3
                            }])
                        }
                        p.fill = this._style.label.color;
                        w.push(p);
                        p = new q["a"](g.cx, g.cy, g.r);
                        p.fill = this._style.outOfBounds.backgroundColor;
                        w.splice(0, 0, p)
                    }
                    if (this._numUpperLabels > 0) {
                        if (this.isVertical()) p = new L["a"]([{
                            x: O - 3,
                            y: 5.2
                        }, {
                            x: O,
                            y: 0
                        }, {
                            x: O + 3,
                            y: 5.2
                        }]);
                        else {
                            r = this.yMirrorMode ? 5.2 : M - 5.2;
                            l = this.yMirrorMode ? 0 : M;
                            p = new L["a"]([{
                                x: r,
                                y: k - 3
                            }, {
                                x: l,
                                y: k
                            }, {
                                x: r,
                                y: k + 3
                            }])
                        }
                        p.fill = this._style.label.color;
                        w.push(p);
                        p = new q["a"](v.cx, v.cy, v.r);
                        p.fill = this._style.outOfBounds.backgroundColor;
                        w.splice(0, 0, p)
                    }
                    this.renderer.stage.removeChildren();
                    this.renderer.stage.addChildren(w);
                    this.renderer.render();
                    this._tooltips.setLabelObjects(this._labelObjects)
                },
                release: function e() {
                    this._super();
                    this._axis && this._axis.stopListen("changed", null, this);
                    this._tooltips.release();
                    this._tooltips = null
                },
                on: function e() {
                    this._super();
                    this._tooltips.on()
                },
                off: function e() {
                    this._super();
                    this._tooltips.off()
                },
                _updateProperties: function e() {
                    if (!this._data) return;
                    var t = this._data;
                    var i = t.length;
                    var a;
                    var n;
                    for (n = 0; n < i; n++) {
                        a = "value".concat(n);
                        this._transitionProperties[a] = t[n].refLineExpr.value
                    }
                    this.calculateRelevantSize();
                    this._super()
                },
                _clearLabels: function e() {
                    this.renderer.stage.removeChildren();
                    this.renderer.clear()
                }
            });
            var ue = t["a"] = ce
        },
        "/KrV": function(e, t, i) {
            "use strict";
            var a = i("nHjU");
            var n = i("MoEg");
            var s = i("ZrpC");
            var r = i("plXO");
            var o = i("2Hli");
            var l = i("T7lR");

            function h(e, t, i, a, n, s, r) {
                var o;
                var l;
                if (s) {
                    o = t;
                    l = i;
                    i = n;
                    t = a;
                    n = o;
                    a = l;
                    if (i < t) {
                        o = i;
                        i = t;
                        t = o
                    }
                    t = Math.max(r.x, Math.min(r.x + r.width, t));
                    i = Math.max(r.x, Math.min(r.x + r.width, i))
                } else {
                    if (a < n) {
                        o = n;
                        n = a;
                        a = o
                    }
                    a = Math.max(r.y, Math.min(r.y + r.height, a));
                    n = Math.max(r.y, Math.min(r.y + r.height, n))
                }
                e.set(t, n, i - t, a - n);
                return e
            }

            function c(e, t, i, a) {
                var n = [{
                    x: e.x,
                    y: e.y
                }, {
                    x: e.x,
                    y: e.y + e.height
                }, {
                    x: e.x + e.width,
                    y: e.y + e.height
                }, {
                    x: e.x + e.width,
                    y: e.y
                }];
                switch (t) {
                    case "left":
                        a ? n[0].x -= i : n[1].x += i;
                        break;
                    case "right":
                        a ? n[2].x += i : n[3].x -= i;
                        break;
                    case "top":
                        a ? n[3].y -= i : n[0].y += i;
                        break;
                    case "bottom":
                        a ? n[1].y += i : n[2].y -= i;
                        break;
                    default:
                        break
                }
                return n
            }

            function u(e, t, i) {
                var a;
                var n = i.pad;
                var s = i.gap;
                var r = i.sharpness;
                var o = e.clone();
                var h = c;
                var u = [];
                if ("right" === t) {
                    a = new l["a"](o.x + o.width + s, o.y, n - s, o.height);
                    u.push(h(o, "right", r, true));
                    u.push(h(a, "left", r, false, true));
                    e.width += a.width + s
                } else if ("left" === t) {
                    a = new l["a"](0, o.y, n - s, o.height);
                    u.push(h(o, "left", r, true));
                    u.push(h(a, "right", r, false, true));
                    e.x = a.x;
                    e.width += a.width + s
                } else if ("down" === t) {
                    a = new l["a"](o.x, o.y + o.height + s, o.width, n - s);
                    u.push(h(o, "bottom", r, true));
                    u.push(h(a, "top", r, false, true));
                    e.height += a.height + s
                } else if ("up" === t) {
                    a = new l["a"](o.x, 0, o.width, n - s);
                    u.push(h(o, "top", r, true));
                    u.push(h(a, "bottom", r, false, true));
                    e.y = a.y;
                    e.height += a.height + s
                }
                return u
            }

            function d(e, t, i) {
                e.set(u(e.data.hitRect, t, i))
            }

            function p(e, t, i, a, n) {
                var s = [];
                if ("left" === n) {
                    s.push({
                        x: e,
                        y: t + i / 2
                    });
                    s.push({
                        x: e,
                        y: t - i / 2
                    });
                    s.push({
                        x: e - a,
                        y: t
                    })
                } else if ("right" === n) {
                    s.push({
                        x: e,
                        y: t + i / 2
                    });
                    s.push({
                        x: e,
                        y: t - i / 2
                    });
                    s.push({
                        x: e + a,
                        y: t
                    })
                } else if ("up" === n) {
                    s.push({
                        x: e - i / 2,
                        y: t
                    });
                    s.push({
                        x: e + i / 2,
                        y: t
                    });
                    s.push({
                        x: e,
                        y: t - a
                    })
                } else if ("down" === n) {
                    s.push({
                        x: e - i / 2,
                        y: t
                    });
                    s.push({
                        x: e + i / 2,
                        y: t
                    });
                    s.push({
                        x: e,
                        y: t + a
                    })
                }
                return s
            }

            function f(e, t, i) {
                var a;
                var n = Math.min(e[["left", "right"].includes(t) ? "height" : "width"] / 2, 8);
                var s = Math.min(n, 8);
                if ("left" === t) {
                    a = p(i.x + s, e.y + e.height / 2, n, s, t);
                    e.width += s
                } else if ("right" === t) {
                    a = p(i.x + i.width - s - 1, e.y + e.height / 2, n, s, t);
                    e.width += s;
                    e.x -= s
                } else if ("up" === t) {
                    a = p(e.x + e.width / 2, i.y + s, n, s, t);
                    e.height += s
                } else if ("down" === t) {
                    a = p(e.x + e.width / 2, i.y + i.height - s - 1, n, s, t);
                    e.height += s;
                    e.y -= s
                }
                return a
            }

            function m(e, t, i) {
                e.set(f(e.data.hitRect, t, i))
            }
            var v = {
                updateRectangle: h,
                getSpike: u,
                getSlicedPolygon: c,
                getHint: f,
                updateSpike: d,
                updateHint: m
            };

            function g(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function x(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    "value" in a && (a.writable = true);
                    Object.defineProperty(e, a.key, a)
                }
            }

            function _(e, t, i) {
                t && x(e.prototype, t);
                i && x(e, i);
                return e
            }

            function y() {
                var e;
                var t;
                var i;
                var a;
                var r = this.style.shape;
                var o = new n["a"](0, 0, 0, 0);
                var l = this.widthRatio;
                var h;
                var c;
                var u;
                var d = this.isSpikingEnabled;
                var p = this.isHintingEnabled;
                var f;
                var m;
                var g;
                var x = [];
                var _ = this.majorAxis.isDiscrete();
                var y = this.majorAxis.getDiscreteSpacing() * l;
                var b;
                var M = this.minorAxis.getPlotMax();
                var A = this.minorAxis.getPlotMin();
                var D = !this.majorAxis.isVertical();
                var w = this.minorAxis.getPadding();
                var S = this.minorAxis.getPositionOfValue(0) - 1;
                var C = {
                    pad: D ? w.top : w.right
                };
                var q = {
                    pad: D ? w.bottom : w.left
                };
                var L = new n["a"];
                C.gap = .3 * C.pad;
                C.sharpness = .3 * C.pad;
                q.gap = .3 * q.pad;
                q.sharpness = .3 * q.pad;
                L.set(w.left, w.top, this.rect.width - w.left - w.right, this.rect.height - w.top - w.bottom);
                this._bounds = L;
                var P = 0;
                var k = D ? this.rect.width : this.rect.height;
                var O = -1;
                var T = D ? this.rect.height : this.rect.width;
                var I = this.shapes ? this.shapes.length : 0;
                if (this.isNumeric) {
                    _ = false;
                    var R = this.majorAxis._scale.plotRange / (this.majorAxis._scale._dataMax - this.majorAxis._scale._dataMin);
                    var N = 90;
                    var z = .25;
                    var j = 2;
                    var V = this.majorAxis._scale._plotSize / N;
                    b = Math.max(V - Math.pow(R, z) * V, j);
                    Number.isNaN(+b) && (b = j)
                }
                for (var E = 0; E < I; E++) {
                    c = this.shapes[E];
                    g = c instanceof s["a"] || "Polygon" === c.type;
                    u = this.isNumeric ? this.majorAxis.getPositionOfValue(c.data.axisNum) : this.majorAxis.getPositionOfId(c.data.axisId);
                    h = _ ? y : b || this.majorAxis.getWidthOfId(c.data.axisId) * l;
                    if (c.data.isNaN || Number.isNaN(+c.data.value)) {
                        c.data.isNaN = true;
                        i = S;
                        a = S
                    } else {
                        i = this.minorAxis.getPositionOfValue(c.data.start) - 1;
                        a = this.minorAxis.getPositionOfValue(c.data.end) - 1
                    }
                    e = u - h / 2;
                    t = u + h / 2;
                    v.updateRectangle(c.data.hitRect, e, t, i, a, !D, L);
                    delete c.data.labelRect;
                    delete c.data.isCutOff;
                    delete c.data.hintDirection;
                    if (t < P || e > k) c.data.isVisible = false;
                    else {
                        c.data.isVisible = true;
                        g ? c.set(c.data.hitRect.getPoints()) : c.set(c.data.hitRect.x, c.data.hitRect.y, c.data.hitRect.width, c.data.hitRect.height);
                        o.set(c.data.hitRect.x, c.data.hitRect.y, c.data.hitRect.width, c.data.hitRect.height);
                        x.push(c);
                        f = c.data.cacheItem;
                        var F = f.selected;
                        if (c.data.isFakeOtherCell && c.data.highlightOnGroupSelect && f.children[0].selected) {
                            F = true;
                            for (var H = 0; H < f.children.length; H++)
                                if (!f.children[H].selected) {
                                    F = false;
                                    break
                                }
                        }
                        this.isNumeric && this.selectedRanges && !F && (F = this.selectedRanges.some((function(e) {
                            return c.data.axisNum >= e.min && (e.maxIncluded ? c.data.axisNum <= e.max : c.data.axisNum < e.max)
                        })));
                        m = F && h > 6 ? r.selected : {
                            border: {
                                color: 0,
                                width: 0
                            }
                        };
                        c.stroke = m.border.color;
                        c.fill = c.data.isFakeOtherCell ? this.othersFillPattern : c.data.fill;
                        c.strokeWidth = m.border.width;
                        c.opacity = F ? 1 : this._globalAlpha;
                        var B = !!p && this._getHint(i, a, L, D);
                        var W = !(!g || B || !d) && this._getSpike(c.data.end, i, a, L, D, A, M);
                        if (W) {
                            c.data.labelRect = o.clone();
                            v.updateSpike(c, D ? c.data.end >= 0 ? "up" : "down" : c.data.end >= 0 ? "right" : "left", c.data.end >= 0 ? C : q);
                            c.data.isCutOff = true
                        } else if (B) {
                            c.fill = r.outOfRange.color;
                            v.updateHint(c, B, L);
                            c.data.hintDirection = B
                        } else(i < O && a < O || i > T && a > T) && (c.data.isVisible = false)
                    }
                }
                this.nodesInView = x
            }
            var b = function() {
                function e(t) {
                    g(this, e);
                    this.renderer = new r["a"](t, {
                        name: "bar-layer"
                    });
                    this.widthRatio = .7;
                    this.isSpikingEnabled = false;
                    this.isHintingEnabled = false;
                    this.shapes = [];
                    this._globalAlpha = 1
                }
                _(e, [{
                    key: "release",
                    value: function e() {
                        this.renderer.release();
                        this.shapes = null;
                        this.minorAxis = null;
                        this.majorAxis = null
                    }
                }, {
                    key: "update",
                    value: function e() {
                        y.call(this)
                    }
                }, {
                    key: "render",
                    value: function e() {
                        return this.renderer.render()
                    }
                }, {
                    key: "clear",
                    value: function e() {
                        this.renderer.clear()
                    }
                }, {
                    key: "_getStyle",
                    value: function e(t) {
                        return {
                            selected: {
                                border: {
                                    color: o["a"].getValue(t, "shape.selected.border.color", "rgba(0,0,0,0.25)"),
                                    width: o["a"].getValue(t, "shape.selected.border.width", 1)
                                }
                            }
                        }
                    }
                }, {
                    key: "_getHint",
                    value: function e(t, i, a, n) {
                        if (n) {
                            if (i + 1 < a.y && t + 1 <= a.y) return "up";
                            if (i + 1 > a.y + a.height && t + 1 >= a.y + a.height) return "down"
                        } else {
                            if (i + 1 < a.x && t + 1 <= a.x) return "left";
                            if (i + 1 > a.x + a.width && t + 1 >= a.x + a.width) return "right"
                        }
                        return false
                    }
                }, {
                    key: "_getSpike",
                    value: function e(t, i, a, n, s, r, o) {
                        var l = t > o;
                        var h = t < r;
                        if (s) {
                            l = l && a < n.y && i > n.y;
                            h = h && a > n.y + n.height && i < n.y + n.height
                        } else {
                            l = l && a > n.x + n.width && i < n.x + n.width;
                            h = h && a < n.x && i > n.x
                        }
                        return l || h
                    }
                }]);
                return e
            }();
            var M = b;
            var A = i("ohbW");
            var D = i("wkj2");
            var w = i("GF7R");

            function S(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function C(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    "value" in a && (a.writable = true);
                    Object.defineProperty(e, a.key, a)
                }
            }

            function q(e, t, i) {
                t && C(e.prototype, t);
                i && C(e, i);
                return e
            }
            var L;
            var P;
            var k;
            var O;

            function T(e, t) {
                if (e) return w["a"].useDarkLabel(t, O) ? L.label.dark.color : L.label.light.color;
                return L.label.color
            }

            function I(e, t, i, a, n, s, r) {
                return {
                    type: "text",
                    fill: L.label.dark.color,
                    opacity: a || 1,
                    data: {
                        value: t,
                        rect: i,
                        labelRect: s,
                        hintDirection: r,
                        color: n
                    },
                    shape: {
                        text: e,
                        maxNumLines: 1,
                        align: "center",
                        baseline: "middle"
                    }
                }
            }

            function R(e) {
                var t;
                var i;
                var a = e.descendants.filter((function(e) {
                    return !e.isBranch && false !== e.data.isVisible
                }));
                var n = a.map((function(e) {
                    return e.data.hitRect
                }));
                if (n.length) {
                    t = n[0];
                    n.length > 1 && (t = t.combineWith(n.slice(-1)[0]));
                    i = I(e.data.valueLabel, e.data.sum, t, a[a.length - 1].opacity, a[a.length - 1].data.color, null, null);
                    i.data.isFillPattern = window.CanvasPattern && a[a.length - 1].fill instanceof window.CanvasPattern;
                    i.data.lastRect = n[n.length - 1];
                    return i
                }
                return
            }

            function N(e, t) {
                var i;
                var a;
                e.forEach((function(e) {
                    i = e.children;
                    if (e.data.isStack) {
                        a = R(e);
                        if (a) {
                            a.data.isStack = true;
                            a.targetShape = e;
                            t.push(a)
                        }
                    } else if (i && i.length) N(i, t);
                    else if (false !== e.data.isVisible) {
                        a = I(e.data.valueLabel, e.data.value, e.data.hitRect, e.opacity, e.data.color, e.data.labelRect, e.data.hintDirection);
                        a.targetShape = e;
                        t.push(a)
                    }
                }))
            }

            function z(e, t) {
                var i;
                e.forEach((function(e) {
                    i = e.children;
                    i && i.length ? z(i, t) : false !== e.data.isVisible && t.push(e)
                }))
            }

            function j(e, t) {
                Object.keys(t).forEach((function(i) {
                    e[i] = t[i]
                }))
            }

            function V(e) {
                return e.filter((function(e) {
                    return !!e.labelBounds
                }))
            }

            function E(e, t, i) {
                return e.filter((function(e) {
                    return e.labelBounds.x >= t && e.labelBounds.x + e.labelBounds.width <= i
                }))
            }

            function F(e, t) {
                var i = t ? t.length : 0;
                var a;
                var n = e.labelBounds;
                for (var s = 0; s < i; s++) {
                    a = t[s].data.hitRect;
                    if (e.targetShape === t[s]) {
                        if (n.y + n.height / 2 > a.y && n.width > a.width + 8) return true
                    } else if (a && n.x <= a.x + a.width && a.x <= n.x + n.width && n.y <= a.y + a.height && a.y <= n.y + n.height) return true
                }
                return false
            }

            function H(e, t) {
                return e.filter((function(e) {
                    return !F(e, t)
                }))
            }

            function B(e) {
                return e.filter((function(e) {
                    return e.data.value < 0
                }))
            }

            function W(e) {
                return e.filter((function(e) {
                    return e.data.value >= 0
                }))
            }

            function U(e, t) {
                var i = t ? t.length : 0;
                var a;
                var n = e.labelBounds;
                for (var s = 0; s < i; s++) {
                    a = t[s].labelBounds;
                    if (n.x <= a.x + a.width && a.x <= n.x + n.width && n.y <= a.y + a.height && a.y <= n.y + n.height) return true
                }
                return false
            }

            function Z(e) {
                var t = e ? e.length : 0;
                var i = [];
                var a;
                var n;
                var s;
                var r;
                var o;
                for (a = 0; a < t; a++) {
                    o = e[a];
                    n = o.data.value;
                    s = 0 === a ? n : e[a - 1].data.value;
                    r = a === t - 1 ? n : e[a + 1].data.value;
                    o.priority = n > s && n > r ? 6 : n < s && n < r ? 5 : n > s && n === r || n === s && n > r ? 4 : n < s && n === r || n === s && n < r ? 3 : n === s && n === r ? 2 : 1
                }
                e.sort((function(e, t) {
                    return e.priority - t.priority
                }));
                for (a = 0; a < t; a++) U(e[a], i) || (i[i.length] = e[a]);
                return i
            }

            function G(e, t, i) {
                var a;
                var n;
                var s;
                var r;
                var o = t && e.data.isStack ? 8 : 4;
                var l = [];
                a = e.data.rect.width;
                n = e.data.rect.height;
                s = e.data.rect.x;
                r = e.data.rect.y;
                if ("up" !== e.data.hintDirection && e.data.value >= 0 || "down" === e.data.hintDirection) {
                    r - this.bounds.y - 2 * o > 4 && l.push({
                        align: t ? "left" : "center",
                        baseline: t ? "middle" : "bottom",
                        rect: {
                            x: s - .5 * (i - a),
                            y: this.bounds.y + o,
                            width: i,
                            height: r - this.bounds.y - 2 * o
                        }
                    });
                    if (e.data.labelRect) {
                        a = e.data.labelRect.width;
                        n = e.data.labelRect.height;
                        s = e.data.labelRect.x;
                        r = e.data.labelRect.y
                    }
                    e.data.hintDirection || l.push({
                        align: t ? "right" : "center",
                        baseline: t ? "middle" : "top",
                        inline: true,
                        rect: {
                            x: s,
                            y: r + o,
                            width: a,
                            height: n - 2 * o
                        }
                    })
                } else {
                    this.bounds.height - r - n - 2 * o > 0 && l.push({
                        align: t ? "right" : "center",
                        baseline: t ? "middle" : "top",
                        rect: {
                            x: s - .5 * (i - a),
                            y: r + n + o,
                            width: i,
                            height: this.bounds.height - r - n - 2 * o
                        }
                    });
                    if (e.data.labelRect) {
                        a = e.data.labelRect.width;
                        n = e.data.labelRect.height;
                        s = e.data.labelRect.x;
                        r = e.data.labelRect.y
                    }
                    e.data.hintDirection || l.push({
                        align: t ? "left" : "center",
                        baseline: t ? "middle" : "bottom",
                        inline: true,
                        rect: {
                            x: s,
                            y: r + o,
                            width: a,
                            height: n - 2 * o
                        }
                    })
                }
                return l
            }

            function Y(e, t) {
                var i;
                var a = this.renderer.getFontHeight(L.label.font);
                var n = G.apply(this, [e, false, t]);
                for (var s = 0; s < n.length; s++) {
                    j(e.shape, n[s].rect);
                    if (a < n[s].rect.height) {
                        i = n[s];
                        break
                    }
                }
                if (i) {
                    var r = i.rect.width - e.data.labelWidth;
                    j(e.shape, i.rect);
                    e.shape.baseline = i.baseline;
                    e.shape.align = i.align;
                    e.labelBounds = {
                        x: i.rect.x + Math.min(r / 2, 4),
                        y: "top" === i.baseline ? i.rect.y : i.rect.y + i.rect.height - 16,
                        width: Math.max(i.rect.width - Math.min(r, 8)),
                        height: 16,
                        containingRect: i.inline ? e.shape : void 0
                    };
                    if (e.data.isStack && i.inline && (e.data.lastRect.height < 20 || e.data.isFillPattern)) e.backdrop = {
                        x: e.labelBounds.x,
                        y: e.labelBounds.y,
                        width: e.labelBounds.width,
                        height: e.labelBounds.height,
                        radius: 4
                    };
                    else {
                        e.fill = T(i.inline, e.data.color);
                        e.backdrop = false
                    }
                } else e.fill = false
            }

            function X(e, t) {
                var i;
                var a = G.apply(this, [e, true, t]);
                var n = this.bounds.x + this.bounds.width;
                var s = "labelWidth" in e.data ? e.data.labelWidth : A["a"].getTextWidth(e.shape.text);
                for (var r = 0; r < a.length; r++)
                    if (a[r].rect.height >= s) {
                        i = a[r];
                        break
                    } if (!i) {
                    a.sort((function(e, t) {
                        return .8 * t.rect.height - e.rect.height
                    }));
                    a[0].rect.height >= 8 && (i = a[0])
                }
                if (i) {
                    var o = new D["a"];
                    o.translate(i.rect.x, i.rect.y + i.rect.height);
                    o.rotate(-Math.PI / 2);
                    j(e.shape, {
                        width: i.rect.height,
                        height: i.rect.width,
                        baseline: i.baseline,
                        align: i.align,
                        x: 0,
                        y: 0
                    });
                    e.transform = o.elements;
                    e.labelBounds = {
                        x: i.rect.x + i.rect.width / 2 - 8,
                        y: "right" === i.align ? i.rect.y - 4 : i.rect.y + i.rect.height - s - 4,
                        width: 16,
                        height: s + 8
                    };
                    i.rect.x < 0 && i.rect.x + i.rect.width > 0 && (e.labelBounds.x = Math.max(e.labelBounds.x, this.bounds.x - 4));
                    i.rect.x < n && i.rect.x + i.rect.width > n && (e.labelBounds.x = Math.min(e.labelBounds.x, n - e.labelBounds.width));
                    if (e.data.isStack && i.inline && (e.data.lastRect.height < s + 4 || e.data.isFillPattern)) e.backdrop = {
                        x: e.labelBounds.x,
                        y: e.labelBounds.y,
                        width: e.labelBounds.width,
                        height: e.labelBounds.height,
                        radius: 4
                    };
                    else {
                        e.fill = T(i.inline, e.data.color);
                        e.backdrop = false
                    }
                } else e.fill = false
            }

            function $(e) {
                var t;
                var i;
                var a;
                var n;
                var s = e.data.isStack ? 8 : 4;
                var r = [];
                t = e.data.rect.width;
                i = e.data.rect.height;
                a = e.data.rect.x;
                n = e.data.rect.y;
                if ("right" !== e.data.hintDirection && (this.yMirrorMode ? e.data.value < 0 : e.data.value >= 0) || "left" === e.data.hintDirection) {
                    this.bounds.width - a - t - 2 * s > 0 && r.push({
                        align: "left",
                        rect: {
                            x: a + t + s,
                            y: n,
                            width: this.bounds.width - a - t - 2 * s,
                            height: i
                        }
                    });
                    if (e.data.labelRect) {
                        t = e.data.labelRect.width;
                        i = e.data.labelRect.height;
                        a = e.data.labelRect.x;
                        n = e.data.labelRect.y
                    }
                    e.data.hintDirection || r.push({
                        align: "right",
                        inline: true,
                        rect: {
                            x: a + s,
                            y: n,
                            width: t - 2 * s,
                            height: i
                        }
                    })
                } else {
                    a - this.bounds.x - 2 * s && r.push({
                        align: "right",
                        rect: {
                            x: this.bounds.x + s,
                            y: n,
                            width: a - this.bounds.x - 2 * s,
                            height: i
                        }
                    });
                    if (e.data.labelRect) {
                        t = e.data.labelRect.width;
                        i = e.data.labelRect.height;
                        a = e.data.labelRect.x;
                        n = e.data.labelRect.y
                    }
                    e.data.hintDirection || r.push({
                        align: "left",
                        inline: true,
                        rect: {
                            x: a + s,
                            y: n,
                            width: t - 2 * s,
                            height: i
                        }
                    })
                }
                return r
            }

            function K(e, t) {
                var i;
                var a = $.apply(this, [e, t]);
                var n = "labelWidth" in e.data ? e.data.labelWidth : A["a"].getTextWidth(e.shape.text);
                for (var s = 0; s < a.length; s++)
                    if (a[s].rect.width >= n) {
                        i = a[s];
                        break
                    } if (!i && a.length) {
                    a.sort((function(e, t) {
                        return .8 * t.rect.width - e.rect.width
                    }));
                    a[0].rect.width >= 8 && (i = a[0])
                }
                if (i) {
                    e.shape.baseline = "middle";
                    e.shape.align = i.align;
                    j(e.shape, i.rect);
                    e.labelBounds = {
                        x: ("right" === i.align ? i.rect.x + i.rect.width - n : i.rect.x) - 4,
                        y: i.rect.y + i.rect.height / 2 - 8,
                        width: n + 8,
                        height: 16
                    };
                    if (e.data.isStack && i.inline && (e.data.lastRect.width < n + 8 || e.data.isFillPattern)) e.backdrop = {
                        x: e.labelBounds.x,
                        y: e.labelBounds.y,
                        width: e.labelBounds.width,
                        height: e.labelBounds.height,
                        radius: 4
                    };
                    else {
                        e.fill = T(i.inline, e.data.color);
                        e.backdrop = false
                    }
                } else e.fill = false
            }

            function J() {
                var e = [];
                var t = [];
                var i = this.minorAxis.getPlotMin();
                var a = this.minorAxis.getPlotMax();
                var n;
                var s = L.label.font;
                var r = this.bounds;
                N(this._shapes, e);
                A["a"].setFont(s);
                this.renderer.setFont(s);
                e = e.filter((function(e) {
                    if ("NaN" === e.data.value) return true;
                    if (e.data.labelRect || e.data.showHintLabel) return true;
                    if (e.data.value >= 0 && a >= e.data.value && i <= e.data.value) return true;
                    if (e.data.value < 0 && i <= e.data.value && a >= e.data.value) return true;
                    if (e.data.rect.width && e.data.rect.height && r.intersectsWith(e.data.rect)) return true;
                    return false
                }));
                var o;
                var l;
                var h;
                if (this._shapes && this._shapes.length) {
                    l = this._shapes[0].descendants.filter((function(e) {
                        return !e.isBranch
                    }))[0];
                    h = l ? l.data.hitRect.width : this.majorAxis._discreteSpacing
                } else h = 0;
                o = 0;
                var c = e ? e.length : 0;
                for (var u = 0; u < c; u++) {
                    n = e[u];
                    if (n.shape) {
                        n.shape.font = s;
                        n.data.labelWidth = A["a"].getTextWidth(n.shape.text);
                        o = Math.max(o, n.data.labelWidth)
                    }
                }
                this._longestLabel = o;
                var d = this._longestLabel < h;
                var p;
                p = this.minorAxis.isVertical() ? d ? Y : X : K;
                for (var f = 0; f < c; f++) p.call(this, e[f], h);
                if (this.isNumeric) {
                    var m = 4;
                    var v;
                    var g;
                    z(this._shapes, t);
                    e = V(e);
                    e = E(e, this.bounds.x - m, this.bounds.x + this.bounds.width + m);
                    e = H(e, t);
                    v = B(e);
                    g = W(e);
                    v = Z(v);
                    g = Z(g);
                    e = g.concat(v)
                }
                e.slice().forEach((function(t) {
                    if (t.fill && t.backdrop) {
                        e.unshift({
                            opacity: t.opacity || 1,
                            type: "roundRect",
                            fill: P,
                            shape: t.backdrop
                        });
                        t.fill = O ? L.label.light.color : L.label.dark.color
                    }
                }));
                this.renderer.shapes = e;
                this.renderer.render()
            }
            var Q = function() {
                function e(t) {
                    S(this, e);
                    this.renderer = new A["a"](t)
                }
                q(e, [{
                    key: "setYMirrorMode",
                    value: function e(t) {
                        this.yMirrorMode = t
                    }
                }, {
                    key: "setData",
                    value: function e(t) {
                        this._data = t
                    }
                }, {
                    key: "setMeasureIndices",
                    value: function e() {}
                }, {
                    key: "setBarData",
                    value: function e(t) {
                        this._barData = t
                    }
                }, {
                    key: "setShapes",
                    value: function e(t) {
                        this._shapes = t
                    }
                }, {
                    key: "show",
                    value: function e() {
                        this.renderer.show()
                    }
                }, {
                    key: "hide",
                    value: function e() {
                        this.renderer.hide()
                    }
                }, {
                    key: "clear",
                    value: function e() {
                        this.renderer.clear()
                    }
                }, {
                    key: "release",
                    value: function e() {
                        this.renderer.release()
                    }
                }, {
                    key: "render",
                    value: function e() {
                        L = this.style.dataPoints;
                        k = new w["a"](this.style.backgroundColor);
                        O = k.isDark();
                        P = w["a"].toRGBA(k, .75);
                        J.call(this)
                    }
                }]);
                return e
            }();
            var ee = Q;
            var te = i("Q5XB");
            var ie = i("UV1h");
            var ae = i("sWge");
            var ne = i("e5Is");
            var se = {
                dataPoint: {
                    label: {
                        dark: {
                            color: "#666"
                        },
                        light: {
                            color: "#eee"
                        },
                        font: "11px 'QlikView Sans', sans-serif"
                    }
                },
                shape: {
                    selected: {
                        border: {
                            color: "#333",
                            width: 2
                        }
                    },
                    unselected: {
                        opacity: .5
                    },
                    highlighted: {
                        border: {
                            dark: {
                                color: "rgba( 26, 26, 26, 0.75 )"
                            },
                            light: {
                                color: "rgba( 230, 230, 230, 0.75)"
                            },
                            width: 1
                        }
                    }
                }
            };
            var re = "stacked";
            var oe = "grouped";
            var le = document.createElement("canvas");
            var he = le.getContext("2d");

            function ce(e) {
                var t = 1;
                le.width = 5 * t;
                le.height = 5 * t;
                he.save();
                he.fillStyle = w["a"].toRGBA(e, .8);
                he.scale(t, t);
                he.fillRect(0, 0, 1, 1);
                he.fillRect(0, 1, 1, 1);
                he.fillRect(1, 0, 1, 1);
                he.fillRect(4, 1, 1, 1);
                he.fillRect(4, 2, 1, 1);
                he.fillRect(3, 2, 1, 1);
                he.fillRect(3, 3, 1, 1);
                he.fillRect(2, 3, 1, 1);
                he.fillRect(2, 4, 1, 1);
                he.fillRect(1, 4, 1, 1);
                he.restore();
                return he.createPattern(le, "repeat")
            }

            function ue(e) {
                var t = e.getStyle("label.value", "fontSize");
                var i = e.getStyle("label.value", "fontFamily");
                return {
                    shape: {
                        selected: {
                            border: {
                                color: "#333333",
                                width: 2
                            }
                        },
                        outOfRange: {
                            color: e.getStyle("outOfRange", "color")
                        }
                    },
                    dataPoints: {
                        label: {
                            font: "normal ".concat(t, " ").concat(i),
                            color: e.getStyle("label.value", "color"),
                            dark: {
                                color: "#595959"
                            },
                            light: {
                                color: "#E6E6E6"
                            }
                        },
                        backgroundColor: e.getStyle("", "backgroundColor")
                    },
                    backgroundColor: e.getStyle("", "backgroundColor")
                }
            }
            var de = a["a"].extend("BarArea", {
                init: function e() {
                    this._super.apply(this, arguments);
                    this._data = null;
                    this._layoutMode = null;
                    this._selectableShapes = [];
                    this._shapes = [];
                    this._barData = [];
                    this._showDataPoints = true;
                    this._colorMap = null;
                    this._groupingMode = oe;
                    this._globalAlpha = 1;
                    this._styleService = ie["a"].initializeService("object.barChart");
                    this._edgeBleed = 0;
                    this._barLayer = new M(this.container);
                    this._barLayer.isMini = this.isMini;
                    this.layers = [this._barLayer];
                    if (this.isMini) {
                        this._rangeSelectionLayer = new ne["a"](this.container);
                        this.layers.push(this._rangeSelectionLayer)
                    } else {
                        this._labelLayer = new ee(this.container);
                        this.layers.push(this._labelLayer)
                    }
                },
                setYMirrorMode: function e(t) {
                    this._super(t);
                    this._labelLayer && this._labelLayer.setYMirrorMode(t)
                },
                beforeBarsAddedToRenderer: function e() {},
                barsAddedToRenderer: function e() {},
                labelAddedToRenderer: function e() {},
                afterPaint: function e() {
                    return ae["a"].resolve()
                },
                setColorMap: function e(t) {
                    this._colorMap = t
                },
                getColorMap: function e() {
                    return this._colorMap
                },
                setShowDataPoints: function e(t) {
                    this._showDataPoints = t;
                    this.invalidateDisplay("BarArea.setShowDataPoints")
                },
                getShowDataPoints: function e() {
                    return this._showDataPoints
                },
                getMeasureIndices: function e() {
                    return this._measureIndices
                },
                setMeasureIndices: function e(t) {
                    this._measureIndices = t
                },
                setMajorAxis: function e(t) {
                    this._majorAxis = t;
                    this._majorAxis.listen("changed", (function() {
                        this.invalidateDisplay("BarArea.setMajorAxis")
                    }), this)
                },
                setMinorAxis: function e(t) {
                    this._minorAxis = t;
                    this._minorAxis.listen("changed", (function() {
                        this._localFormatting && (this._areLabelsFormatted = false);
                        this.invalidateDisplay("BarArea.setMinorAxis")
                    }), this)
                },
                setTimeAxis: function e(t) {
                    this.timeAxis = t;
                    this.timeAxis.listen("changed", (function() {
                        this.invalidateDisplay()
                    }), this)
                },
                setContinuousAxis: function e(t) {
                    this.continuousAxis = t;
                    this.continuousAxis.listen("changed", (function() {
                        this.invalidateDisplay()
                    }), this)
                },
                setActiveDimensionAxis: function e(t) {
                    this._activeDimAxis = t
                },
                setIsDimensionContinuous: function e(t) {
                    this.isDimensionContinuous = t;
                    this._edgeBleed = this.isDimensionContinuous ? 5 : 0
                },
                setDimensionTree: function e(t) {
                    this._tree = t
                },
                setGroupingMode: function e(t) {
                    this._groupingMode = t
                },
                _updateSize: function e() {
                    this.invalidateDisplay("BarArea._updateSize")
                },
                insertAdjacentTo: function e(t, i) {
                    this._super(t, i);
                    if (this._minorAxis && this._minorAxis.isHorizontal()) switch (this._minorAxis.dock) {
                        case "bottom":
                            this.rect.height -= 1;
                            break;
                        default:
                            break
                    }
                },
                getMajorAxisData: function e() {
                    return this._majorAxisData
                },
                getMinorAxisData: function e() {
                    return this._minorAxisData
                },
                setCacheItems: function e(t) {
                    this._cacheItems = t
                },
                getCacheItems: function e() {
                    return this._cacheItems
                },
                createAxisData: function e(t, i, a, n) {
                    if (!n) {
                        this._cacheIndex = 0;
                        this._outerCacheIndex = 0
                    }
                    var s = i.stackLevel === n + 1;
                    var r;
                    var o = t.children;
                    var l = i.numLevels - i.numMeasures;
                    "measure" === i.types[n] && this._measureIndices && (o = o.filter((function(e, t) {
                        return this._measureIndices.indexOf(t) >= 0
                    }), this));
                    return o.map((function(e) {
                        var t;
                        if ("dimension" === i.types[n]) {
                            t = {
                                label: e.data.qText,
                                group: "dimension" === i.types[n + 1] || "measure" === i.types[n + 1] && i.numMeasures > 1,
                                id: e.data.id,
                                cacheIndex: []
                            };
                            if ("measure" === i.types[n + 1])
                                for (r = 0; r < i.numMeasures; r++) t.cacheIndex.push(this._cacheIndex++);
                            else l > 1 && 0 === n && e.children.forEach((function(e) {
                                if (e.children[0].isBranch) {
                                    -2 !== e.data.qElemNo && t.cacheIndex.push(this._outerCacheIndex);
                                    this._outerCacheIndex++
                                }
                            }), this);
                            !s && ("dimension" === i.types[n + 1] || "measure" === i.types[n + 1] && i.numMeasures > 1) && (t.children = this.createAxisData(e, i, a, n + 1))
                        } else "measure" === i.types[n] && (t = {
                            label: e.data.qText,
                            id: e.data.id
                        });
                        return t
                    }), this)
                },
                _createMeasureDisplayNode: function e(t, i) {
                    if (!t.isBranch) return;
                    var a = true === this.isMini || this._isStacked ? new l["a"] : new s["a"];
                    var r = t.children;
                    var o = r[0].data;
                    var h = t.parent.cacheItem;
                    var c = new n["a"](0, 0, 0, 0);
                    var u = this.measureFormatters[i];
                    var d = "undefined" !== typeof o.qValue ? o.qValue : o.qNum;
                    var p = t.ancestors.filter((function(e) {
                        return "qElemNo" in e.data
                    })).map((function(e) {
                        return e.data.qElemNo
                    })).reverse();
                    a.data = {
                        qText: t.data.qText,
                        measureIndex: i,
                        value: d,
                        start: 0,
                        end: d,
                        valueLabel: t.children[0].data.qText,
                        formatted: !u || "U" !== u.type,
                        hitRect: c,
                        cacheItem: h,
                        color: this._colorMap.getColor(p, d, i, t.data.rowIndex)
                    };
                    h.addShape("dataArea", c, true);
                    h.calculateTooltipPosition = true;
                    a.data.fill = a.data.color.toRGBA();
                    a.fill = a.data.fill;
                    a.data.isFillColorDark = a.data.color.isDark();
                    return a
                },
                _createDimensionDisplayNode: function e(t) {
                    var i = new te["a"];
                    i.data = {
                        qText: t.data.qText,
                        qElemNo: t.data.qElemNo,
                        qMaxPos: t.data.qMaxPos,
                        qMinNeg: t.data.qMinNeg,
                        qType: t.data.qType
                    };
                    return i
                },
                _createStackNode: function e() {
                    var t = new te["a"];
                    t.data = {
                        stack: true
                    };
                    return t
                },
                _createOtherNode: function e(t, i) {
                    var a = new l["a"];
                    var s = new n["a"](0, 0, 0, 0);
                    var r = this.measureFormatters[0];
                    a.data = {
                        measureIndex: 0,
                        value: i - t,
                        start: t,
                        end: i,
                        isFakeOtherCell: true,
                        highlightOnGroupSelect: 0 === this._selectionIndices[0],
                        valueLabel: "valueLabel",
                        formatted: !r || "U" !== r.type,
                        hitRect: s,
                        cacheItem: {},
                        color: this._colorMap.getColor([-3], i - t, 0, 0)
                    };
                    a.data.fill = a.data.color.toRGBA();
                    a.fill = a.data.fill;
                    a.data.isFillColorDark = a.data.color.isDark();
                    return a
                },
                _addOtherNode: function e(t, i, a) {
                    var n = this._createDimensionDisplayNode({
                        data: {
                            qMaxPos: 0,
                            qMinNeg: 0,
                            qElemNo: -3,
                            qType: "O"
                        }
                    });
                    var s = this._createOtherNode(t.data.sum, i);
                    s.data.axisId = a.data.id;
                    s.data.cacheItem = a.cacheItem;
                    n.addChild(s);
                    t.data.sum = i;
                    t.addChild(n);
                    return s
                },
                _stackNodes: function e(t, i, a, n) {
                    var s;
                    var r;
                    var o;
                    var l = this._createStackNode();
                    var h = this._createStackNode();
                    var c = false;
                    var u = false;
                    var d;
                    var p;
                    var f = 0;
                    var m = 0;
                    l.data.isStack = true;
                    h.data.isStack = true;
                    t.forEach((function(e) {
                        s = i;
                        o = e.children && e.children[0] ? e.children[0].data : e.data;
                        if (o.value >= 0) {
                            s = l;
                            o.start = f;
                            f += o.value;
                            o.end = f;
                            r = f;
                            d = true;
                            s.addChild(e);
                            "O" === e.data.qType && (c = true)
                        } else if (!Number.isNaN(+o.value)) {
                            s = h;
                            o.start = m;
                            m += o.value;
                            o.end = m;
                            r = m;
                            p = true;
                            s.addChild(e);
                            "O" === e.data.qType && (u = true)
                        }
                        s.data.sum = r
                    }));
                    if ("undefined" !== typeof i.data.qMaxPos && !c && f !== i.data.qMaxPos) {
                        n.push(this._addOtherNode(l, i.data.qMaxPos, a));
                        f = l.data.sum;
                        d = f > 0
                    }
                    if ("undefined" !== typeof i.data.qMinNeg && !u && m !== i.data.qMinNeg) {
                        n.push(this._addOtherNode(h, i.data.qMinNeg, a));
                        m = h.data.sum;
                        p = m < 0
                    }
                    if (d) {
                        l.data.valueLabel = this.combinedMeasuresFormatter ? this.combinedMeasuresFormatter.formatValue(l.data.sum) : "".concat(l.data.sum);
                        i.addChild(l)
                    }
                    if (p) {
                        h.data.valueLabel = this.combinedMeasuresFormatter ? this.combinedMeasuresFormatter.formatValue(h.data.sum) : "".concat(h.data.sum);
                        i.addChild(h)
                    }
                    i.data.sum = {
                        positive: f,
                        negative: m
                    }
                },
                getRenderTree: function e(t, i, a, n) {
                    var s = i.stackLevel === n + 1;
                    var r = [];
                    var o;
                    var l;
                    var h = t.children;
                    "measure" === i.types[n] && this._measureIndices && (h = h.filter((function(e, t) {
                        return this._measureIndices.indexOf(t) >= 0
                    }), this));
                    var c = h.length;
                    for (var u = 0; u < c; u++) {
                        var d = h[u];
                        if ("dimension" === i.types[n]) {
                            l = this._createDimensionDisplayNode(d);
                            var p = this.getRenderTree(d, i, a, n + 1);
                            if (s) {
                                this._stackNodes(p, l, d, a.otherShapes);
                                a.globalPositiveSum = Math.max(a.globalPositiveSum, l.data.sum.positive);
                                a.globalNegativeSum = Math.min(a.globalNegativeSum, l.data.sum.negative)
                            } else l.addChildren(p);
                            l.isBranch && r.push(l)
                        } else if ("measure" === i.types[n]) {
                            l = this._createMeasureDisplayNode(d, this._measureIndices ? this._measureIndices[u] : u);
                            if (!l) continue;
                            o = d;
                            i.numMeasures <= 1 && (o = o.parent);
                            i.stackLevel === n && (o = o.parent);
                            l.data.axisId = o.data.id;
                            l.data.axisNum = 1 === n ? o.data.qNum : o._parent.data.qNum;
                            a.shapes.push(l);
                            r.push(l)
                        }
                    }
                    return r
                },
                _applyIds: function e(t, i, a, n) {
                    var s = this;
                    var r;
                    t.children.forEach((function(e, o) {
                        r = t.data.id ? "".concat(t.data.id, ";") || false : "";
                        if ("dimension" === a[n]) {
                            e.data.id = "".concat(r + i[n], ":").concat(e.data.qElemNo);
                            s._applyIds(e, i, a, n + 1)
                        } else "measure" === a[n] && (e.data.id = r + i[n + o])
                    }))
                },
                renderRangeSelections: function e() {
                    this._rangeSelectionLayer.update(this._activeDimAxis);
                    return this._rangeSelectionLayer.render()
                },
                updateRangeSelection: function e(t) {
                    if (this._rangeSelectionLayer) {
                        this._rangeSelectionLayer.setRanges(t);
                        this.renderRangeSelections()
                    }
                    this.isMini || (this._barLayer.selectedRanges = t)
                },
                _updateProperties: function e() {
                    var t = this;
                    if (!this._data || !this._tree) return;
                    this._barLayer.renderer.stage.removeChildren();
                    var i = this._data.qHyperCube.qDimensionInfo.length;
                    var a = this._measureIndices ? this._measureIndices.length : this._data.qHyperCube.qMeasureInfo.length;
                    var n = this._groupingMode === re && (i > 1 || a > 1);
                    var s = i + 1;
                    var r = -2;
                    var o = [];
                    var l = new Array(i).join(",").split(",").map((function() {
                        return "dimension"
                    }));
                    var h = this._data.qHyperCube.qDimensionInfo.concat(this._data.qHyperCube.qMeasureInfo).map((function(e) {
                        return e.cId
                    }));
                    var c = this._data.qHyperCube.qDimensionInfo.map((function(e) {
                        return e.qApprMaxGlyphCount
                    }));
                    l.push("measure");
                    c.push(this._data.qHyperCube.qMeasureInfo.reduce((function(e, t) {
                        return Math.max(e, t.qApprMaxGlyphCount)
                    }), 0));
                    if (n) r = a > 1 ? i : i - 1;
                    else if (i > 1) {
                        var u = this._data.qHyperCube.qDimensionInfo[0].qStateCounts.qOption + this._data.qHyperCube.qDimensionInfo[0].qStateCounts.qSelected;
                        var d = this._data.qHyperCube.qSize.qcy / u;
                        o.push(d);
                        o.push(a)
                    } else {
                        o.push(a);
                        o.push(1)
                    }
                    this._isStacked = n;
                    var p = {
                        columns: [],
                        shapes: [],
                        shapesToLabel: [],
                        otherShapes: [],
                        globalPositiveSum: 0,
                        globalNegativeSum: 0
                    };
                    var f = {
                        colIds: h,
                        types: l,
                        numLevels: s,
                        numMeasures: a,
                        stackLevel: r
                    };
                    if (i > 1 && this._allowInnerSelection && !this._data.qHyperCube.qDimensionInfo[1].qLocked) {
                        this.setSelectionIndices([1]);
                        this._majorAxis.setSelectionIndices([1]);
                        this._majorAxis.setCurrentDataIndices([1])
                    } else {
                        this.setSelectionIndices([0]);
                        this._majorAxis.setSelectionIndices([0]);
                        this._majorAxis.setCurrentDataIndices([0])
                    }
                    this._applyIds(this._tree, h, l, 0);
                    var m = this.getRenderTree(this._tree, f, p, 0);
                    this._objects = m;
                    this._formatted = this._isStacked || this.measureFormatters.every((function(e, t) {
                        var i = !this._measureIndices || this._measureIndices.indexOf(t) >= 0;
                        return !i || e && "U" !== e.type
                    }), this);
                    this._shapes = p.shapes;
                    var v = p.shapes.map((function(e) {
                        return e.data.cacheItem
                    }));
                    this._shapes = this._shapes.concat(p.otherShapes);
                    m.forEach((function(e) {
                        t._barLayer.renderer.stage.addChild(e)
                    }));
                    var g = this.createAxisData(this._tree, f, p, 0);
                    var x = l.map((function(e, t) {
                        return {
                            qApprMaxGlyphCount: c[t],
                            show: t < l.length - 1,
                            groupSize: o[t]
                        }
                    }));
                    this._majorAxisData = {
                        data: g,
                        info: x
                    };
                    this._numDimensions = i;
                    this._numMeasures = a;
                    this._minorAxisData = n ? {
                        min: p.globalNegativeSum,
                        max: p.globalPositiveSum
                    } : null;
                    this.setSelectableShapes(v)
                },
                hasValidData: function e() {
                    return this._super() && this._majorAxis && this._minorAxis && this._data && this._tree && (this._data.qHyperCube.qStackedDataPages.length > 0 || this._data.qHyperCube.qDataPages.length > 0)
                },
                updateSize: function e() {
                    this._super();
                    this.layers.forEach((function(e) {
                        e.rect = this.rect;
                        e.renderer.setDimensionsToContainerRatio(this.layoutToContainerRatios.x, this.layoutToContainerRatios.y);
                        e.renderer.setDimensions(0, 0, this.rect.width, this.rect.height)
                    }), this)
                },
                paint: function e() {
                    this._super(this._layoutMode, this._data);
                    this._majorAxis.updateNow();
                    this._minorAxis.updateNow();
                    this._activeDimAxis && this._activeDimAxis.updateNow();
                    var t = this._minorAxis.getPadding();
                    var i = new n["a"];
                    var a = this;
                    this._style = ue(this._styleService);
                    i.set(t.left, t.top, this.rect.width - t.left - t.right, this.rect.height - t.top - t.bottom);
                    this.layers.forEach((function(e) {
                        e.minorAxis = this._minorAxis;
                        e.majorAxis = this.isDimensionContinuous ? this._activeDimAxis : this._majorAxis;
                        e.isNumeric = this.isDimensionContinuous;
                        e.shapes = this._shapes;
                        e.othersFillPattern = ce(this._colorMap.getColor([-3]));
                        e.groupingMode = this._groupingMode;
                        e.widthRatio = this._numDimensions <= 1 && this._numMeasures <= 1 || this._groupingMode === re ? .7 : .95;
                        e.isSpikingEnabled = !this.isMini && !(this._groupingMode === re && (this._numDimensions > 1 || this._numMeasures > 1));
                        e.isHintingEnabled = !this.isMini && (this._groupingMode === oe || this._groupingMode === re && this._numDimensions + this._numMeasures <= 2);
                        e.style = this._style;
                        e._globalAlpha = this._globalAlpha
                    }), this);
                    this._barLayer.renderer.edgeBleed = {
                        left: this._edgeBleed,
                        right: this._edgeBleed,
                        top: 0,
                        bottom: 0
                    };
                    this._barLayer.colorMap = this._colorMap;
                    this._barLayer.update();
                    this.nodesInView = this._barLayer.nodesInView;
                    this.barsAddedToRenderer();
                    if (this._labelLayer) {
                        this._labelLayer.renderer.edgeBleed = {
                            left: this._edgeBleed,
                            right: this._edgeBleed,
                            top: 0,
                            bottom: 0
                        };
                        this._labelLayer.setShapes(this._objects);
                        this._labelLayer.bounds = i;
                        this._labelLayer._longestLabel = 20;
                        if (this._layoutMode > this.ShowFlags.XSMALL && this._showDataPoints) {
                            this._formatLabels();
                            this._labelLayer.show();
                            this._labelLayer.render()
                        } else this._labelLayer.hide()
                    }
                    var s = [this._barLayer.render()];
                    this._rangeSelectionLayer && s.push(this.renderRangeSelections());
                    return ae["a"].all(s).then((function() {
                        return a.afterPaint()
                    }))
                },
                _formatLabels: function e() {
                    if (this._isStacked || this._formatted) return;
                    var t;
                    var i;
                    var a = this.nodesInView ? this.nodesInView.length : 0;
                    for (t = 0; t < a; t++) {
                        i = this.nodesInView[t].data;
                        if (!i.formatted) {
                            i.formatted = true;
                            i.valueLabel = this.measureFormatters[i.measureIndex] ? this.measureFormatters[i.measureIndex].formatValue(i.value) : i.valueLabel
                        }
                    }
                },
                preRelevantSizeCalculation: function e() {
                    this.perpendicularlyRelevantSpacing = {
                        left: this._edgeBleed,
                        right: this._edgeBleed,
                        top: 0,
                        bottom: 0
                    }
                },
                clear: function e() {
                    this._super();
                    this.layers.forEach((function(e) {
                        e.clear()
                    }))
                },
                release: function e() {
                    this.layers.forEach((function(e) {
                        e.release()
                    }));
                    this._super();
                    this._majorAxis && this._majorAxis.stopListen("changed", null, this);
                    this._minorAxis && this._minorAxis.stopListen("changed", null, this);
                    this.timeAxis && this.timeAxis.stopListen("changed", null, this);
                    this.continuousAxis && this.continuousAxis.stopListen("changed", null, this)
                }
            });
            var pe = t["a"] = de
        },
        "26xU": function(e, t, i) {
            "use strict";
            var a = i("2Hli");
            var n = i("pRem");
            var s = i("6uJb");
            var r = i("acVu");

            function o(e, t) {
                var i = t.getMeasures();
                var n = a["a"].getValue(e, "color.mode");
                "byDimension" === n && 1 === i.length && "line" === a["a"].getValue(i[0].qDef, "series.type") ? a["a"].setValue(e, "color.mode", "primary") : "byDimension" === n && i.length > 1 && a["a"].setValue(e, "color.mode", "byMultiple")
            }

            function l(e, t) {
                var i = 0 === t.indexOf(e);
                i || (e.qDef.series = {
                    axis: 1,
                    type: "line"
                })
            }

            function h(e) {
                n["a"].setCustomTooltipAttrs(e);
                n["a"].unquarantineCustomTooltipAttrs(e)
            }

            function c(e) {
                if (e.qHyperCubeDef.qDimensions.length > 0) {
                    n["a"].setCustomTooltipAttrs(e);
                    n["a"].unquarantineCustomTooltipAttrs(e)
                }
            }

            function u(e, t) {
                n["a"].quarantineCustomTooltipAttrs(e, t)
            }

            function d(e, t) {
                n["a"].quarantineCustomTooltipAttrs(e, t);
                n["a"].setCustomTooltipAttrs(e);
                n["a"].unquarantineCustomTooltipAttrs(e)
            }
            t["a"] = {
                dimensions: {
                    min: 1,
                    max: 1,
                    description: function e(t) {
                        var i = t.qHyperCubeDef.qMeasures;
                        var a = [0, 0, 0];
                        var n;
                        var r = ["Visualizations.Descriptions.Marker", "Visualizations.Descriptions.Line", "Visualizations.Descriptions.ComboChart.Dimension.LineMarker", "Visualizations.Descriptions.Bars", "Visualizations.Descriptions.ComboChart.Dimension.BarMarker", "Visualizations.Descriptions.ComboChart.Dimension.BarLine", "Visualizations.Descriptions.ComboChart.Dimension.BarLineMarker"];
                        if (!i.length) return s["default"].get("Visualizations.Descriptions.Bars");
                        for (var o = 0; o < i.length; ++o) {
                            n = i[o].qDef.series.type;
                            "bar" === n ? a[0] = 1 : "line" === n ? a[1] = 1 : a[2] = 1
                        }
                        var l = r[parseInt(a.join(""), 2) - 1];
                        return s["default"].get(l)
                    },
                    add: function e(t, i, a) {
                        o(i, a);
                        Object(r["b"])("CUSTOM_TOOLTIP_REMOVE_LIMITS") && h(i)
                    },
                    move: function e(t, i, a) {
                        o(i, a);
                        Object(r["b"])("CUSTOM_TOOLTIP_REMOVE_LIMITS") && c(i)
                    },
                    remove: function e(t, i) {
                        Object(r["b"])("CUSTOM_TOOLTIP_REMOVE_LIMITS") && u(i, t)
                    },
                    replace: function e(t, i, a, n) {
                        Object(r["b"])("CUSTOM_TOOLTIP_REMOVE_LIMITS") && d(n, i)
                    }
                },
                measures: {
                    min: 1,
                    max: 15,
                    description: function e(t, i) {
                        var a;
                        var n = t.qHyperCubeDef.qMeasures[i];
                        if (n) {
                            var r = n.qDef.series.type;
                            a = "line" === r ? "Visualizations.Descriptions.HeightLine" : "bar" === r ? "Visualizations.Descriptions.ComboChart.Measure.HeightBar" : "Visualizations.Descriptions.ComboChart.Measure.HeightMarker"
                        } else a = "Visualizations.Descriptions.HeightBars";
                        return s["default"].get(a)
                    },
                    add: function e(t, i, a) {
                        o(i, a);
                        l(t, i.qHyperCubeDef.qMeasures)
                    },
                    move: function e(t, i, a) {
                        o(i, a)
                    },
                    replace: function e(t, i) {
                        i.qDef.series && (t.qDef.series.type = i.qDef.series.type || "bar")
                    }
                }
            }
        },
        "3r60": function(e, t, i) {
            "use strict";
            var a = i("4nJ1");
            var n = i("BcSl");
            var s = i("acVu");

            function r(e, t) {
                var i = a["a"].getValue(e, "tooltip.data.qHyperCubeDef.qMeasures", []);
                if (i.length > 0 && t.length) return true;
                return false
            }

            function o(e, t) {
                var i = a["a"].getValue(e, "tooltip.data.qHyperCube.qMeasureInfo", []);
                if (i.length > 0 && t.length > 0) return true;
                return false
            }

            function l(e, t) {
                var i = t.qMeasures;
                return e.concat(i.map((function(e) {
                    var t = n["a"].CUSTOM.EXPRESSION;
                    var i = e.qDef,
                        a = i.qNumFormat,
                        s = i.qLabel,
                        r = i.qLabelExpression,
                        o = i.cId;
                    return e.qLibraryId ? {
                        qLibraryId: e.qLibraryId,
                        id: t,
                        qNumFormat: a,
                        qLabel: s,
                        qLabelExpression: r,
                        cId: o
                    } : {
                        qExpression: e.qDef.qDef,
                        id: t,
                        qNumFormat: a,
                        qLabel: s,
                        qLabelExpression: r,
                        cId: o
                    }
                })))
            }

            function h(e) {
                if (e.length > 0) {
                    var t = e.length - 1;
                    return a["a"].getValue(e, "".concat(t, ".qAttributeExpressions"), [])
                }
                return []
            }

            function c(e, t) {
                var i = a["a"].getValue(e, "qHyperCubeDef.qDimensions", []);
                if (i.length > 0) {
                    var n = i.length - 1;
                    e.qHyperCubeDef.qDimensions[n].qAttributeExpressions = t
                }
            }

            function u(e) {
                var t = a["a"].getValue(e, "tooltip");
                var i = a["a"].getValue(e, "qHyperCubeDef.qDimensions", []);
                if (Object(s["b"])("CUSTOM_TOOLTIP_REMOVE_LIMITS") && t && r(e, i)) {
                    var n = t.data.qHyperCubeDef;
                    var o = h(i);
                    o = l(o, n);
                    c(e, o);
                    delete t.data
                }
                return e
            }

            function d(e, t) {
                var i = a["a"].getValue(t, "qHyperCube.qDimensionInfo", []);
                Object(s["b"])("CUSTOM_TOOLTIP_REMOVE_LIMITS") && o(t, i) && e && e.model && e.model.getEffectiveProperties && e.model.getEffectiveProperties().then((function(t) {
                    e.model.setProperties(t);
                    e.model.app.clearUndoBuffer()
                }))
            }
            t["a"] = {
                migrateProperties: u,
                updateProperties: d,
                checkLayoutForBackwardCompatibility: o,
                checkPropertiesForBackwardCompatibility: r
            }
        },
        "3x6l": function(e, t, i) {
            "use strict";
            var a = i("nHjU");
            var n = i("UV1h");
            var s = i("ohbW");
            var r = i("gapF");

            function o(e) {
                return Number(void 0 !== e.value ? e.value : e)
            }

            function l(e, t) {
                if (!e || !e.paletteColor && !e.color) return t;
                if (e.paletteColor) return n["a"].resolveColor(e.paletteColor);
                return n["a"].resolveColor(e.color, n["a"].deprecatedPalette)
            }

            function h() {
                if (!this._numRefLinesDataAxes || !this._numAxes) return false;
                var e;
                var t;
                var i;
                var a;
                var n;
                var s;
                var l;
                for (e = 0; e < this._numAxes; e += 1) {
                    i = this._axes[e];
                    s = i.getPlotMin();
                    l = i.getPlotMax();
                    this._axisPlotMinValues[e] = s;
                    this._axisPlotMaxValues[e] = l;
                    a = this._data[e] || [];
                    for (t = 0; t < a.length; t += 1) {
                        n = o(a[t].refLineExpr);
                        if (r["a"].isVisible(a[t]) && null !== n && !Number.isNaN(+n) && n >= s && n <= l) return true
                    }
                }
                return false
            }

            function c() {
                var e;
                var t;
                var i;
                var a;
                for (e = 0; e < this._numAxes; e += 1) {
                    t = this._axes[e];
                    i = t.getPlotMin();
                    a = t.getPlotMax();
                    if (this._axisPlotMinValues[e] !== i || this._axisPlotMaxValues[e] !== a) return true
                }
                return false
            }

            function u() {
                var e;
                var t;
                for (e = 0; e < this._numAxes; e += 1) {
                    t = this._axes[e];
                    this._axisPlotMinValues[e] = t.getPlotMin();
                    this._axisPlotMaxValues[e] = t.getPlotMax()
                }
            }
            var d = a["a"].extend("RefLines", {
                init: function e() {
                    this._super.apply(this, arguments);
                    this.renderer = new s["a"](this.container);
                    this.renderer.edgeBleed = {
                        top: 1,
                        left: 1,
                        right: 0,
                        bottom: 0
                    };
                    this._$renderAreaWrap.addClass("qv-chart-component-reflines");
                    this._hasVisibleRefLines = false;
                    this._styleService = n["a"].initializeService("object.".concat(this.options.parentType));
                    this._numAxes = 0;
                    this.renderers = {
                        lines: this.renderer
                    }
                },
                setData: function e() {
                    this._super.apply(this, arguments);
                    this._numRefLinesDataAxes = void 0 === this._data ? 0 : this._data.length;
                    this._hasVisibleRefLines = h.call(this);
                    u.call(this)
                },
                setAxes: function e(t) {
                    var i = this;
                    this._axes && this._axes.forEach((function(e) {
                        e.stopListen("changed", i.invalidateDisplay, i)
                    }));
                    this._axes = t;
                    this._axes.forEach((function(e) {
                        e.listen("changed", i.invalidateDisplay, i)
                    }));
                    this._numAxes = void 0 === t ? 0 : t.length;
                    void 0 !== this._axisPlotMinValues && this._axisPlotMinValues.length === this._numAxes || (this._axisPlotMinValues = new Array(this._numAxes));
                    void 0 !== this._axisPlotMaxValues && this._axisPlotMaxValues.length === this._numAxes || (this._axisPlotMaxValues = new Array(this._numAxes))
                },
                isVisible: function e() {
                    var t = this._super.apply(this, arguments);
                    if (!t || !this._numAxes || !this._numRefLinesDataAxes) return false;
                    return true
                },
                hasValidData: function e() {
                    return this._super() && this._numRefLinesDataAxes && this._numAxes
                },
                paint: function e() {
                    var t = this._styleService.getStyle("referenceLine.label.name", "color");
                    this._super.apply(this, [].slice.call(arguments));
                    if (c.call(this)) {
                        this._hasVisibleRefLines = h.call(this);
                        u.call(this)
                    }
                    if (!this._hasVisibleRefLines) {
                        this.renderer.shapes = [];
                        this.renderer.clear();
                        return
                    }
                    var i;
                    var a;
                    var n;
                    var s;
                    var o;
                    var d;
                    var p;
                    var f;
                    var m;
                    var v;
                    var g;
                    var x;
                    var _;
                    var y = [];
                    for (i = 0; i < this._numRefLinesDataAxes; i += 1) {
                        n = this._data[i];
                        s = this._axes[i];
                        o = this._axisPlotMinValues[i];
                        d = this._axisPlotMaxValues[i];
                        for (a = 0; a < n.length; a += 1) {
                            var b, M;
                            if (!r["a"].isVisible(n[a])) continue;
                            p = this._currentProperties["value".concat(i).concat(a)];
                            if (null === p || Number.isNaN(+p) || p > d || p < o) continue;
                            f = s.getPositionOfValue(p);
                            f = Math.floor(f) - .5;
                            if (s.isVertical()) {
                                m = 0;
                                v = f;
                                g = this.rect.width;
                                x = f
                            } else {
                                m = f;
                                v = 0;
                                g = f;
                                x = this.rect.height
                            }
                            _ = l(n[a], t);
                            y.push({
                                type: "line",
                                stroke: _,
                                strokeWidth: 1,
                                strokeDasharray: (null === (b = n[a]) || void 0 === b || null === (M = b.style) || void 0 === M ? void 0 : M.lineType) ? n[a].style.lineType.split(" ") : void 0,
                                shape: {
                                    x1: m,
                                    y1: v,
                                    x2: g,
                                    y2: x
                                }
                            })
                        }
                    }
                    this.renderer.shapes = y;
                    this.renderer.render()
                },
                _updateProperties: function e() {
                    if (!this._data) return;
                    var t = this._data;
                    var i = t.length;
                    var a;
                    var n;
                    for (a = 0; a < i; a++)
                        if (void 0 !== t[a])
                            for (n = 0; n < t[a].length; n++) this._transitionProperties["value".concat(a).concat(n)] = t[a][n].refLineExpr.value;
                    this._super()
                }
            });
            t["a"] = d
        },
        "9Bsw": function(e, t, i) {
            "use strict";
            var a = i("TmNk");
            var n = i.n(a);
            var s = i("sWge");
            var r = i("6uJb");
            var o = i("oxue");

            function l() {
                this.titles = {}
            }
            l.prototype.getDimensionTitle = c;
            l.prototype.getMeasureTitle = u;
            l.prototype.resetTitles = d;
            var h = l;

            function c(e, t, i) {
                x(this);
                return p.call(this, e, t, i, true)
            }

            function u(e, t, i) {
                x(this);
                return p.call(this, e, t, i, false)
            }

            function d() {
                this.titles = {}
            }

            function p(e, t, i, a) {
                var n = f(e, this.titles);
                if (n) return n.promise;
                n = m(e, this.titles);
                n.promise = v(e, t, i, a);
                return n.promise
            }

            function f(e, t) {
                var i = g(e);
                return t[i]
            }

            function m(e, t) {
                var i = g(e);
                var a = {
                    id: i,
                    promise: null
                };
                t[i] = a;
                return a
            }

            function v(e, t, i, a) {
                var l = "H" === e.qDef.qGrouping;
                var h = !!e.qLibraryId;
                if (l) return s["a"].when(e.qData.title);
                if (h) {
                    var c = a ? t.getDimensionList : t.getMeasureList;
                    return c.call(t).then((function(t) {
                        var n = a ? o["a"].findLibraryDimension : o["a"].findLibraryMeasure;
                        var s = n(e.qLibraryId, t);
                        var l = s && s.qData.labelExpression;
                        if (!s) return r["default"].get(a ? "Object.ErrorMessage.MissingDimension" : "Object.ErrorMessage.MissingMeasure");
                        if (!i && l) return l;
                        return s.qData.title
                    }))
                }
                var u = e.qDef.qLabelExpression;
                var d = !!u;
                if (d) {
                    if (i) return s["a"].when(u);
                    return t.evaluate(u)
                }
                var p;
                if (a) {
                    var f = e.qDef.qFieldLabels[0];
                    p = f || e.qDef.qFieldDefs[0]
                } else p = e.qDef.qLabel || n.a.measureBase.getExpression(e);
                return s["a"].when(p)
            }

            function g(e) {
                return e.qDef.cId
            }

            function x(e) {
                if (!e) throw new Error("AlternativeTitleRetriever: Called without a context")
            }
            var _ = {
                create: b
            };
            var y = t["a"] = _;

            function b() {
                return new h
            }
        },
        AFKu: function(e, t, i) {
            "use strict";
            var a = i("mIEi");
            var n = i("ZrpC");

            function s(e) {
                s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                };
                return s(e)
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    "value" in a && (a.writable = true);
                    Object.defineProperty(e, a.key, a)
                }
            }

            function l(e, t, i) {
                t && o(e.prototype, t);
                i && o(e, i);
                return e
            }

            function h(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: true,
                        configurable: true
                    }
                });
                t && c(e, t)
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function e(t, i) {
                    t.__proto__ = i;
                    return t
                };
                return c(e, t)
            }

            function u(e) {
                var t = f();
                return function i() {
                    var a = m(e),
                        n;
                    if (t) {
                        var s = m(this).constructor;
                        n = Reflect.construct(a, arguments, s)
                    } else n = a.apply(this, arguments);
                    return d(this, n)
                }
            }

            function d(e, t) {
                if (t && ("object" === s(t) || "function" === typeof t)) return t;
                return p(e)
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function f() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if ("function" === typeof Proxy) return true;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                    return true
                } catch (e) {
                    return false
                }
            }

            function m(e) {
                m = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return m(e)
            }

            function v(e, t, i, a, n) {
                var s = [];
                if ("left" === n) {
                    s.push({
                        x: e,
                        y: t + i / 2
                    });
                    s.push({
                        x: e,
                        y: t - i / 2
                    });
                    s.push({
                        x: e - a,
                        y: t
                    })
                } else if ("right" === n) {
                    s.push({
                        x: e,
                        y: t + i / 2
                    });
                    s.push({
                        x: e,
                        y: t - i / 2
                    });
                    s.push({
                        x: e + a,
                        y: t
                    })
                } else if ("up" === n) {
                    s.push({
                        x: e - i / 2,
                        y: t
                    });
                    s.push({
                        x: e + i / 2,
                        y: t
                    });
                    s.push({
                        x: e,
                        y: t - a
                    })
                } else if ("down" === n) {
                    s.push({
                        x: e - i / 2,
                        y: t
                    });
                    s.push({
                        x: e + i / 2,
                        y: t
                    });
                    s.push({
                        x: e,
                        y: t + a
                    })
                }
                return s
            }
            var g = function(e) {
                h(i, e);
                var t = u(i);

                function i(e) {
                    var a;
                    r(this, i);
                    a = t.call(this, e, {
                        name: "out-of-bounds-layer"
                    });
                    a._markerSize = 8;
                    return a
                }
                l(i, [{
                    key: "update",
                    value: function e(t, i) {
                        var a = this.renderer.stage;
                        var s = a.children;
                        var r = i.markerSize || this._markerSize;
                        var o = t ? t.length : 0;
                        for (var l = 0; l < o; l++) {
                            var h = s[l];
                            var c = t[l];
                            var u = c;
                            c.data && (u = c.data);
                            var d = i.axesSettings[i.measureToAxisIndex[u.measureIdx]];
                            var p = v(u.x, u.outOfRangeUp ? d.topCutoff + r : d.bottomCutoff - r, r, r, u.outOfRangeUp ? "up" : "down");
                            if (h) h.set(p);
                            else {
                                h = new n["a"](p);
                                a.addChild(h)
                            }
                            h.fill = i.style.outOfRange.color;
                            h.opacity = u.selected ? 1 : i.globalAlpha
                        }
                        o < s.length && a.removeChildren(s.slice(o - s.length))
                    }
                }]);
                return i
            }(a["a"]);
            t["a"] = g
        },
        BGgI: function(e, t, i) {
            "use strict";
            var a = i("qIEf");
            var n = i.n(a);
            var s = i("Oc2G");
            var r = i("nHjU");
            var o = i("3x6l");
            var l = i("7xSA");
            var h = i("tccY");
            var c = i("ohbW");
            var u = i("UV1h");
            var d = {
                NONE: 0,
                SPARSE: 1,
                NORMAL: 1,
                DENSE: 3
            };

            function p(e, t, i, a, n, s, r) {
                var o;
                var l;
                var h;
                var c;
                if (r) {
                    o = 0;
                    l = a;
                    h = e;
                    c = e
                } else {
                    o = e;
                    l = e;
                    h = 0;
                    c = n
                }
                return {
                    type: "line",
                    opacity: i,
                    strokeWidth: s,
                    shape: {
                        x1: o,
                        x2: l,
                        y1: h,
                        y2: c
                    },
                    stroke: t
                }
            }

            function f(e, t) {
                var i = e.ticks;
                var a = e.minorTicks;
                var n = i ? i.length : 0;
                var s = a ? a.length : 0;
                var r = e.getSpacingMode() === d.DENSE || e.isDimension;
                var o = e.getSpacingMode() === d.SPARSE ? 2 : 1;
                var l = t.rect.height;
                var h = t.rect.width;
                var c = t.style;
                var u;
                var f;
                var m;
                var v = [];
                var g;
                if (e.getSpacingMode() === d.NONE || !i) return [];
                for (g = 0; g < n; g += 1) {
                    f = i[g].position;
                    u = i[g].value;
                    m = i[g].opacity;
                    g % o !== 0 && 0 !== u || (0 === u ? v.push(p(f, c.zero.color, m, h, l, c.zero.width, e.isVertical())) : v.push(p(f, c.major.color, m, h, l, c.major.width, e.isVertical())))
                }
                if (r && a)
                    for (g = 0; g < s; g += 1) {
                        f = a[g].position;
                        v.push(p(f, c.minor.color, 1, h, l, c.minor.width, e.isVertical()))
                    }
                return v
            }

            function m(e) {
                return {
                    ticks: {
                        major: {
                            color: e.getStyle("line.major", "color")
                        },
                        minor: {
                            color: e.getStyle("line.minor", "color")
                        },
                        zero: {
                            color: e.getStyle("line.highContrast", "color")
                        }
                    }
                }
            }

            function v() {
                this.invalidateDisplay("Grid.setAxes")
            }
            var g = r["a"].extend("Grid", {
                init: function e() {
                    this._super.apply(this, Array.prototype.slice.call(arguments));
                    this._styleService = u["a"].initializeService("object.grid");
                    this._renderer = new c["a"](this.container);
                    this._renderer.edgeBleed = {
                        top: 1,
                        left: 1,
                        bottom: 0,
                        right: 0
                    };
                    this._$renderAreaWrap.addClass("qv-chart-component-grid");
                    this.renderers = {
                        gridlines: this._renderer
                    }
                },
                afterRenderLines: function e() {},
                setAxes: function e(t, i) {
                    if (this._primaryHorizontalAxis !== t) {
                        this._primaryHorizontalAxis && this._primaryHorizontalAxis.stopListen("changed", v, this);
                        this._primaryHorizontalAxis = t;
                        this._primaryHorizontalAxis && this._primaryHorizontalAxis.listen("changed", v, this)
                    }
                    if (this._primaryVerticalAxis !== i) {
                        this._primaryVerticalAxis && this._primaryVerticalAxis.stopListen("changed", v, this);
                        this._primaryVerticalAxis = i;
                        this._primaryVerticalAxis && this._primaryVerticalAxis.listen("changed", v, this)
                    }
                },
                hasValidData: function e() {
                    return this._super() && (this._primaryVerticalAxis || this._primaryHorizontalAxis)
                },
                paint: function e(t, i) {
                    this._super(t, i);
                    var a = [];
                    this._style = m(this._styleService);
                    if (this._primaryVerticalAxis) {
                        this._primaryVerticalAxis.updateNow();
                        a = f(this._primaryVerticalAxis, {
                            rect: this.rect,
                            style: this._style.ticks
                        })
                    }
                    if (this._primaryHorizontalAxis) {
                        this._primaryHorizontalAxis.updateNow();
                        a = a.concat(f(this._primaryHorizontalAxis, {
                            rect: this.rect,
                            style: this._style.ticks
                        }))
                    }
                    this.afterRenderLines(a);
                    this._renderer.shapes = a;
                    this._renderer.render();
                    return this
                },
                release: function e() {
                    this._super();
                    this._styleService = null;
                    this._primaryHorizontalAxis && this._primaryHorizontalAxis.stopListen("changed", null, this);
                    this._primaryVerticalAxis && this._primaryVerticalAxis.stopListen("changed", null, this)
                }
            });
            var x = g;
            var _ = s["a"].extend({
                init: function e(t, i, a, s, c) {
                    var u = n.a.extend(true, {
                        components: {
                            grid: {
                                show: true,
                                dock: "center",
                                showFlag: r["a"].prototype.ShowFlags.XSMALL,
                                clazz: x
                            },
                            refLines: {
                                clazz: o["a"]
                            },
                            colorLegend: {
                                show: true,
                                order: 4,
                                reductionOrder: 1,
                                dock: "right",
                                relevantSize: 126,
                                showFlag: r["a"].prototype.ShowFlags.MEDIUM
                            },
                            xAxis: {
                                show: true,
                                order: 1,
                                dock: "bottom",
                                relevantSize: 120,
                                showFlag: r["a"].prototype.ShowFlags.XSMALL,
                                clazz: l["a"]
                            },
                            yAxis: {
                                show: true,
                                order: 1,
                                dock: "left",
                                relevantSize: 90,
                                reductionOrder: 2,
                                showFlag: r["a"].prototype.ShowFlags.XSMALL,
                                clazz: l["a"]
                            },
                            yAxisTitle: {
                                show: true,
                                order: 1.1,
                                dock: "left",
                                relevantSize: 30,
                                reductionOrder: 1,
                                showFlag: r["a"].prototype.ShowFlags.SMALL,
                                clazz: h["a"]
                            },
                            xAxisTitle: {
                                show: true,
                                order: 1.1,
                                dock: "bottom",
                                relevantSize: 30,
                                reductionOrder: 1,
                                showFlag: r["a"].prototype.ShowFlags.SMALL,
                                clazz: h["a"]
                            }
                        }
                    }, a || {});
                    this._super(t, i, u, s, c)
                },
                getVerticalComponents: function e() {
                    var t = this._super();
                    if (this._data && this.components) {
                        if (this.components.xAxis && this.components.xAxis.isVertical() && this._data.xAxis) {
                            t.push({
                                comp: this.components.xAxis,
                                dock: this._data.xAxis.dock
                            });
                            this.components.xAxisTitle && t.push({
                                comp: this.components.xAxisTitle,
                                dock: this._data.xAxis.dock
                            })
                        }
                        if (this.components.yAxis && this.components.yAxis.isVertical() && this._data.yAxis) {
                            t.push({
                                comp: this.components.yAxis,
                                dock: this._data.yAxis.dock
                            });
                            this.components.yAxisTitle && t.push({
                                comp: this.components.yAxisTitle,
                                dock: this._data.yAxis.dock
                            })
                        }
                    }
                    return t
                },
                _updateData: function e(t, i) {
                    this._super.apply(this, [].slice.call(arguments));
                    this.updateDataArea(t, i);
                    this.updateAxis(t, i);
                    this.updateGrid(t, i);
                    this.updateRefLines(t, i);
                    this.updateVerticalComponentsDock()
                },
                updateDataArea: function e(t, i) {
                    var a;
                    var n;
                    for (a in i.axes) {
                        n = i.axes[a];
                        n.component.setDataIndices(n.dataIndices || [n.dataIndex || 0]);
                        n.component.setCurrentDataIndices(n.currentDataIndices || n.dataIndices || [n.dataIndex || 0])
                    }
                },
                setAxisDataRange: function e(t, i, a, n, s, r) {
                    var o;
                    var l;
                    if (null !== n && null !== s || null === n && null === s) {
                        o = a;
                        l = i
                    } else if (null !== n && n <= a) {
                        o = n - r;
                        l = i
                    } else if (null !== s && s >= i) {
                        o = a;
                        l = s + r
                    } else {
                        o = a;
                        l = i
                    }
                    t.setDataRange(o, l);
                    this.components.miniChart && this.components.miniChart.components.measureAxis.setDataRange(o, l)
                },
                updateAxis: function e(t, i) {
                    var a;
                    var n = i.axes;
                    var s = this.components.miniChart;
                    var r;
                    var o;
                    for (a in i.axes) {
                        r = n[a];
                        r.component.setTitle(r.title);
                        r.component.setShowStrategy(r.data.show);
                        r.component.setLabelMode(r.data.label);
                        r.component.setLockedInfo && r.component.setLockedInfo(t.qHyperCube.qDimensionInfo.map((function(e) {
                            return true === e.qLocked
                        })));
                        if (r.component.setPlotMin && !r.component.isDimension) {
                            o = this.getAxisOptions(r);
                            r.component.setPlotMin(o.min);
                            r.component.setPlotMax(o.max);
                            r.component.setTickMultiplier(r.data.spacing);
                            r.component.setLogScale(r.data.logarithmic);
                            if (s && s.components[a]) {
                                o = this.getAxisOptions(r);
                                s.components[a].setPlotMin(o.min);
                                s.components[a].setPlotMax(o.max)
                            }
                        }
                        r.component.isVertical() ? r.component.setDock("far" === r.data.dock ? "right" : "left") : r.component.setDock("far" === r.data.dock ? "top" : "bottom")
                    }
                    for (a in i.axisTitles) {
                        r = i.axisTitles[a];
                        r.component.setShowStrategy(r.data.show);
                        r.component.isVertical() ? r.component.setDock("far" === r.data.dock ? "right" : "left") : r.component.setDock("far" === r.data.dock ? "top" : "bottom")
                    }
                },
                getAxisOptions: function e(t) {
                    if (!t || !t.data) return;
                    if (t.data.autoMinMax) return {
                        min: null,
                        max: null
                    };
                    return {
                        min: ["min", "minMax"].includes(t.data.minMax) ? Number(t.data.min) : null,
                        max: ["max", "minMax"].includes(t.data.minMax) ? Number(t.data.max) : null
                    }
                },
                updateGrid: function e(t, i) {
                    if (!this.components.grid) return;
                    var a;
                    var n;
                    if (t.gridLine && "number" === typeof t.gridLine.spacing) {
                        n = t.gridLine.auto ? 2 : t.gridLine.spacing;
                        for (a in i.axes) i.axes[a].component.setSpacingMode && i.axes[a].component.setSpacingMode(n)
                    }
                },
                updateRefLines: function e(t, i) {
                    var a;
                    var n = i.refLineLabels;
                    var s = [];
                    var r = [];
                    for (a in n) {
                        if (!n[a].component) continue;
                        n[a].component.setData(n[a].data);
                        n[a].component.setAxis(n[a].axis);
                        n[a].component.setDock(n[a].axis.getOppositeDock());
                        r.push(n[a].axis);
                        s.push(n[a].data)
                    }
                    if (i.refLines && i.refLines.component) {
                        i.refLines.component.setAxes(r);
                        i.refLines.component.setData(s)
                    }
                }
            });
            var y = t["a"] = _
        },
        ByVn: function(e, t, i) {
            "use strict";
            var a = i("4nJ1");
            t["a"] = {
                migrateProperties: n,
                needToMigrateProperties: s
            };

            function n(e) {
                var t = a["a"].findValuesOfQProperty(e, "qHyperCubeDef");
                t && t.forEach((function(e) {
                    var t = e.qDimensions;
                    t && t.forEach((function(e) {
                        var t = e.qDef;
                        true === t.autoSort && t.qSortCriterias.forEach((function(e) {
                            e.qSortByNumeric = 1;
                            e.qSortByAscii = 1
                        }))
                    }))
                }));
                return e
            }

            function s(e) {
                var t = a["a"].findValuesOfQProperty(e, "qHyperCubeDef");
                return t.some((function(e) {
                    var t = e.qDimensions;
                    return t.some((function(e) {
                        var t = e.qDef;
                        return true === t.autoSort && t.qSortCriterias.some((function(e) {
                            return 1 !== e.qSortByNumeric || 1 !== e.qSortByAscii
                        }))
                    }))
                }))
            }
        },
        GULB: function(e, t, i) {
            "use strict";
            var a = i("Z9ZH");
            var n = i.n(a);
            var s = i("SOxp");
            var r = i("i7ks");
            var o = i("FJpR");
            var l = i("MoEg");
            var h = i("wkj2");
            var c = i("Nc9l");

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    "value" in a && (a.writable = true);
                    Object.defineProperty(e, a.key, a)
                }
            }

            function p(e, t, i) {
                t && d(e.prototype, t);
                i && d(e, i);
                return e
            }
            var f = function() {
                function e() {
                    u(this, e)
                }
                p(e, [{
                    key: "getProjectionType",
                    value: function e() {
                        return "Unit"
                    }
                }, {
                    key: "project",
                    value: function e(t) {
                        return t
                    }
                }, {
                    key: "invProject",
                    value: function e(t) {
                        return t
                    }
                }]);
                return e
            }();
            var m = f;
            var v = 22;
            var g = 1e-9;
            var x = .001;
            var _ = new o["a"](0, 0);
            var y = Math.log(2);

            function b(e) {
                if (this._originalProjectedDataCenterIsZeroPoint) return e;
                return new o["a"](e.x - this._originalProjectedDataCenter.x, e.y - this._originalProjectedDataCenter.y)
            }

            function M(e) {
                if (this._originalProjectedDataCenterIsZeroPoint) return e;
                return new o["a"](e.x + this._originalProjectedDataCenter.x, e.y + this._originalProjectedDataCenter.y)
            }

            function A(e, t) {
                var i = Math.pow(2, t + 8) / this._projectedDataSize;
                return new o["a"](e.x * i, e.y * i)
            }

            function D(e, t) {
                var i = Math.pow(2, t + 8) / this._projectedDataSize;
                return new o["a"](e.x / i, e.y / i)
            }

            function w() {
                if (!this._projection || !this._projectedDataBoundingBox) return;
                (!this._currentProjectedDataDataCenter || this._projectionChanged || this._currentDataCenterChanged) && (this._currentProjectedDataDataCenter = void 0 === this._currentDataCenter ? this._originalProjectedDataCenter : this._projection.project(this._currentDataCenter));
                this._transformMatrixForZoomLevel.identity();
                this._transformMatrixForZoomLevel.translate(this._viewportSize.x / 2, this._viewportSize.y / 2);
                this._mirrorYAxis && this._transformMatrixForZoomLevel.scale(1, -1);
                var e = Math.pow(2, this._zoomLevel + 8) / this._projectedDataSize;
                this._transformMatrixForZoomLevel.scale(e, e);
                this._transformMatrixForZoomLevel.translate(-this._originalProjectedDataCenter.x, -this._originalProjectedDataCenter.y);
                var t = this._transformMatrixForZoomLevel.transformPoint(this._originalProjectedDataCenter);
                var i = this._transformMatrixForZoomLevel.transformPoint(this._currentProjectedDataDataCenter);
                var a = t.x - i.x;
                var n = t.y - i.y;
                this._transformMatrix.identity();
                this._transformMatrix.translate(a, n);
                this._transformMatrix.multiply(this._transformMatrixForZoomLevel.elements);
                this._invTransformMatrix = this._transformMatrix.clone();
                this._invTransformMatrix.invert();
                this._projectionChanged = false;
                this._currentDataCenterChanged = false;
                this.enabledChangeEvent && this.fire("changed")
            }

            function S() {
                var e = {
                    x: this._boundingBox.x,
                    y: this._boundingBox.y
                };
                var t = {
                    x: this._boundingBox.x + this._boundingBox.width,
                    y: this._boundingBox.y + this._boundingBox.height
                };
                var i = this._projection.project(e);
                var a = this._projection.project(t);
                var n = Math.min(i.x, a.x);
                var s = Math.min(i.y, a.y);
                this._projectedDataBoundingBox = new l["a"](n, s, Math.abs(a.x - i.x), Math.abs(a.y - i.y));
                this._projectedDataSize = Math.max(this._projectedDataBoundingBox.width, this._projectedDataBoundingBox.height);
                this._originalProjectedDataCenter = this._projectedDataBoundingBox.getCenterPoint();
                this._originalProjectedDataCenterIsZeroPoint = 0 === this._originalProjectedDataCenter.x && 0 === this._originalProjectedDataCenter.y
            }
            var C = c["a"].extend("ViewportProjection", {
                init: function e() {
                    this._super();
                    this._fractionalZoomMode = true;
                    this._viewportSize = new o["a"](256, 256);
                    this._zoomLevel = 0;
                    this._maxZoomLevel = v;
                    this._minZoomLevel = 0;
                    this._translation = new o["a"](0, 0);
                    this._unitProjection = new m;
                    this._projection = this._unitProjection;
                    this._originalProjectedDataCenter = new o["a"](0, 0);
                    this._boundingBox = new l["a"](0, 0, 256, 256);
                    S.call(this);
                    this._originalProjectedDataCenterIsZeroPoint = true;
                    this._transformMatrixForZoomLevel = new h["a"];
                    this._transformMatrix = new h["a"];
                    this._invTransformMatrix = new h["a"];
                    this.enabledChangeEvent = true;
                    this._mirrorYAxis = false;
                    this.helpFunctions = {
                        translateProjectedDataCenterToZeroPoint: b,
                        invTranslateProjectedDataCenterToZeroPoint: M,
                        scaleProjectedDataToZoomLevel: A,
                        invScaleProjectedDataToZoomLevel: D,
                        updateProjectedDataBoundingBox: S
                    }
                },
                setProjection: function e(t) {
                    if (this._projection && t && this._projection.getProjectionType() === t.getProjectionType()) return false;
                    this._projection = t;
                    this._projection || (this._projection = this._unitProjection);
                    S.call(this);
                    this._projectionChanged = true;
                    w.call(this);
                    return true
                },
                getProjection: function e() {
                    return this._projection
                },
                getUnitProjection: function e() {
                    return this._unitProjection
                },
                setBoundingBox: function e(t) {
                    if (this._boundingBox && this._boundingBox.equal && this._boundingBox.equal(t)) return;
                    this._boundingBox = new l["a"](t.x, t.y, t.width, t.height);
                    S.call(this);
                    w.call(this)
                },
                getBoundingBox: function e() {
                    return this._boundingBox
                },
                setSize: function e(t) {
                    if (this._viewportSize && this._viewportSize.equal && this._viewportSize.equal(t)) return false;
                    this._viewportSize = new o["a"](t.x, t.y);
                    w.call(this);
                    return true
                },
                getSize: function e() {
                    return this._viewportSize
                },
                setZoomLevel: function e(t) {
                    if (Number.isNaN(+t)) return false;
                    this._fractionalZoomMode || (t = Math.round(t));
                    t = Math.max(Math.min(t, this._maxZoomLevel), this._minZoomLevel);
                    Math.abs(t - this._minZoomLevel) < x ? t = this._minZoomLevel : Math.abs(t - this._maxZoomLevel) < x && (t = this._maxZoomLevel);
                    if (Math.abs(this._zoomLevel - t) < x) return false;
                    this._zoomLevel = t;
                    w.call(this);
                    return true
                },
                getZoomLevel: function e() {
                    return this._zoomLevel
                },
                setDataCenter: function e(t) {
                    if (!t) return false;
                    if (this._currentDataCenter && this._currentDataCenter.closeTo && this._currentDataCenter.closeTo(t, g)) return false;
                    this._currentDataCenterChanged = true;
                    this._currentDataCenter = new o["a"](t.x, t.y);
                    w.call(this);
                    return true
                },
                getDataCenter: function e() {
                    return this._currentDataCenter
                },
                setFractionalZoomMode: function e(t) {
                    this._fractionalZoomMode = t
                },
                getFractionalZoomMode: function e() {
                    return this._fractionalZoomMode
                },
                project: function e(t) {
                    var i = this._projection.project(t);
                    var a = this.transform(i);
                    return a
                },
                fromDataRectToViewportRect: function e(t) {
                    var i = this.project(new o["a"](t.x, t.y));
                    var a = this.project(new o["a"](t.x + t.width, t.y + t.height));
                    var n = new l["a"](i.x, i.y, a.x - i.x, a.y - i.y);
                    return n
                },
                invProject: function e(t) {
                    var i = this.invTransform(t);
                    var a = this._projection.invProject(i);
                    return a
                },
                fromViewportRectToDataRect: function e(t) {
                    var i = this.invProject(new o["a"](t.x, t.y));
                    var a = this.invProject(new o["a"](t.x + t.width, t.y + t.height));
                    var n = new l["a"](i.x, i.y, a.x - i.x, a.y - i.y);
                    return n
                },
                getDataRectOfViewport: function e() {
                    var t = this.invProject(_);
                    var i = this.invProject(this._viewportSize);
                    var a = new l["a"](t.x, t.y, i.x - t.x, i.y - t.y);
                    return a
                },
                getDataRectOfViewportIfZoomOnADataRect: function e(t) {
                    var i = this.enabledChangeEvent;
                    this.enabledChangeEvent = false;
                    var a = this.getZoomLevel();
                    var n = this.getDataCenter();
                    this.zoomOnDataRectangle(t);
                    var s = this.getDataRectOfViewport();
                    this.setZoomLevel(a);
                    this.setDataCenter(n);
                    this.enabledChangeEvent = i;
                    return s
                },
                transform: function e(t) {
                    var i = this._transformMatrix.transformPoint(t);
                    return new o["a"](i.x, i.y)
                },
                invTransform: function e(t) {
                    var i = this._invTransformMatrix.transformPoint(t);
                    return new o["a"](i.x, i.y)
                },
                fromDataPointToPixel: function e(t, i) {
                    var a = Math.pow(2, i + 7);
                    var n = this._projection.project(t);
                    var s = b.call(this, n);
                    var r = A.apply(this, [s, i]);
                    var l = new o["a"](r.x + a, a - r.y);
                    return l
                },
                fromPixelToDataPoint: function e(t, i) {
                    var a = Math.pow(2, i + 7);
                    var n = new o["a"](t.x - a, a - t.y);
                    var s = D.apply(this, [n, i]);
                    var r = M.call(this, s);
                    var l = this._projection.invProject(r);
                    return l
                },
                calculateZoomLevelForDataRectangle: function e(t) {
                    if (!t) return;
                    var i = new o["a"](t.x, t.y);
                    var a = new o["a"](t.x + t.width, t.y + t.height);
                    var n = this.fromDataPointToPixel(i, 0);
                    var s = this.fromDataPointToPixel(a, 0);
                    var r = Math.abs(n.x - s.x);
                    var l = Math.abs(n.y - s.y);
                    var h = 0 === r ? Number.MAX_VALUE : this._viewportSize.x / r;
                    var c = 0 === l ? Number.MAX_VALUE : this._viewportSize.y / l;
                    var u = Math.min(h, c);
                    if (u === Number.MAX_VALUE) return 20;
                    var d = Math.log(u) / Math.LN2;
                    return d
                },
                calculateCenterPointForDataRectangle: function e(t) {
                    if (!t) return;
                    var i = new o["a"](t.x, t.y);
                    var a = new o["a"](t.x + t.width, t.y + t.height);
                    var n = this.fromDataPointToPixel(i, 0);
                    var s = this.fromDataPointToPixel(a, 0);
                    var r = new o["a"]((n.x + s.x) / 2, (n.y + s.y) / 2);
                    var l = this.fromPixelToDataPoint(r, 0);
                    return l
                },
                moveViewport: function e(t, i) {
                    this.setDataCenter(this.invProject(new o["a"](this._viewportSize.x / 2 - t, this._viewportSize.y / 2 - i)))
                },
                zoom: function e(t) {
                    t > 0 && this.setZoomLevel(this.getZoomLevel() + Math.log(t) / Math.LN2)
                },
                zoomOnPixel: function e(t, i) {
                    if (i > 0) {
                        var a = this.invTransform(t);
                        var n = Math.log(i) / Math.LN2;
                        this.setZoomLevel(this.getZoomLevel() + n);
                        var s = this.transform(a);
                        this.moveViewport(t.x - s.x, t.y - s.y)
                    }
                },
                zoomOnDataRectangle: function e(t, i) {
                    if (!t) return;
                    var a = this.calculateZoomLevelForDataRectangle(t);
                    this._fractionalZoomMode || (a = i ? Math.round(a) : Math.floor(a));
                    this.setZoomLevel(a);
                    var n = this.calculateCenterPointForDataRectangle(t);
                    this.setDataCenter(n)
                },
                setMaxZoomLevel: function e(t) {
                    this._maxZoomLevel = t
                },
                setMinZoomLevel: function e(t) {
                    this._minZoomLevel = t
                },
                getTransformMatrix: function e() {
                    return this._transformMatrix
                },
                setTransformMatrix: function e(t) {
                    this._invTransformMatrix = t.clone().invert();
                    var i = Math.abs(t.elements[0][0]);
                    var a = Math.log(i * this._projectedDataSize) / y - 8;
                    var n = this.invProject(new o["a"](this._viewportSize.x / 2, this._viewportSize.y / 2));
                    this.setZoomLevel(a);
                    this.setDataCenter(n)
                },
                getInvTransformMatrix: function e() {
                    return this._invTransformMatrix
                }
            });
            var q = C;
            var L = i("XJsW");
            var P = i("3J65");
            var k = 22;
            var O = 200;
            var T = 1e-6;

            function I(e) {
                e = Math.min(Math.max(e, this._minZoomLevel), this._maxZoomLevel);
                this._viewportProjection.setZoomLevel(e)
            }

            function R(e, t, i, a) {
                var n = new h["a"];
                var s = i / a;
                var r = t.x - e.x;
                var o = t.y - e.y;
                var l = this._localMatrix.clone().invert().transformPoint(e);
                n.translate(l.x, l.y);
                n.scale(s, s);
                n.translate(-l.x, -l.y);
                this._localMatrix = this._localMatrix.multiply(n);
                var c = this._localMatrix.elements;
                this._localMatrix.translate(r / c[0][0], o / c[1][1]);
                z.call(this);
                n.identity();
                var u = this._globalMatrix.clone().invert().transformPoint(e);
                n.translate(u.x, u.y);
                n.scale(s, s);
                n.translate(-u.x, -u.y);
                this._globalMatrix = this._globalMatrix.multiply(n);
                c = this._globalMatrix.elements;
                this._globalMatrix.translate(r / c[0][0], o / c[1][1])
            }

            function N(e) {
                if (!this._setTransformOrigin) {
                    var t = "top left";
                    e.style["-webkit-transform-origin"] = t;
                    e.style["-moz-transform-origin"] = t;
                    e.style["-o-transform-origin"] = t;
                    e.style["-ms-transform-origin"] = t;
                    e.style["transform-origin"] = t;
                    this._setTransformOrigin = true
                }
            }

            function z() {
                var e = this._localMatrix.elements;
                var t = "matrix(".concat(e[0][0], ",0,0,").concat(e[1][1], ",").concat(e[0][2], ",").concat(e[1][2], ")");
                this.helpFunctions.setTransform(this._$element[0], t)
            }

            function j(e, t) {
                this.helpFunctions.onInteractionStart();
                V.call(this, e, t)
            }

            function V(e, t) {
                if (this._disableZoomOnMouseWheel) return;
                this._disableZoomOnMouseWheel = true;
                var i = this;
                var a = new h["a"];
                var n;
                setTimeout((function() {
                    i._disableZoomOnMouseWheel = false
                }), i._mouseWheelTimeoutPeriod);
                if (this._zoomPanByWebkitTransform) {
                    this._zooming = true;
                    var s = this._localMatrix.clone().invert().transformPoint(e);
                    a.translate(s.x, s.y);
                    a.scale(t, t);
                    a.translate(-s.x, -s.y);
                    this._localMatrix = this._localMatrix.multiply(a);
                    z.call(this)
                } else U.call(this, e, t);
                if (!this._zoomCancelled) {
                    a.identity();
                    n = this._globalMatrix.clone().invert().transformPoint(e);
                    a.translate(n.x, n.y);
                    a.scale(t, t);
                    a.translate(-n.x, -n.y);
                    this._globalMatrix = this._globalMatrix.multiply(a);
                    this._updateCallback()
                }
                this._zoomCancelled = false
            }

            function E() {
                this._zooming = false;
                this.helpFunctions.onInteractionEnd()
            }

            function F(e, t) {
                this.helpFunctions.onInteractionStart();
                H.call(this, e, t)
            }

            function H(e, t) {
                var i;
                if (this._zoomPanByWebkitTransform) {
                    this._panning = true;
                    i = this._localMatrix.elements;
                    this._localMatrix.translate(e / i[0][0], t / i[1][1]);
                    z.call(this)
                } else W.call(this, e, t);
                i = this._globalMatrix.elements;
                this._globalMatrix.translate(e / i[0][0], t / i[1][1]);
                this._updateCallback()
            }

            function B() {
                this._panning = false;
                this.helpFunctions.onInteractionEnd()
            }

            function W(e, t) {
                this._viewportProjection.enabledChangeEvent = false;
                this.moveViewport(e, t);
                this._viewportProjection.enabledChangeEvent = true
            }

            function U(e, t) {
                this._viewportProjection.enabledChangeEvent = false;
                this.zoomOnPixel(e, t);
                this._viewportProjection.enabledChangeEvent = true
            }
            var Z = s["a"].extend("PanZoomController", {
                init: function e(t, i, a, s) {
                    var c = this;
                    this._minZoomLevel = -3;
                    this._maxZoomLevel = k;
                    this._interactionStarted = false;
                    this._zoomPanByWebkitTransform = false;
                    this._fractionalZoomMode = true;
                    this._defaultScale = Math.pow(2, .5);
                    this._invDefaultScale = 1 / this._defaultScale;
                    this._mouseWheelTimeoutPeriod = 50;
                    this._viewportProjection = s || new q;
                    this._viewportProjection.setMinZoomLevel(this._minZoomLevel);
                    this._viewportProjection.setMaxZoomLevel(this._maxZoomLevel);
                    this._localMatrix = new h["a"];
                    this._$element = t;
                    this._offset = t.offset();
                    this._startCallback = function() {
                        i.start && i.start(this._viewportProjection._transformMatrix)
                    };
                    this._updateCallback = function() {
                        i.update && i.update(this._viewportProjection._transformMatrix)
                    };
                    this._endCallback = function() {
                        i.end && i.end(this._viewportProjection._transformMatrix)
                    };
                    this._resetCallback = function() {
                        i.reset && i.reset(this._viewportProjection._transformMatrix)
                    };
                    this._enabled = true;
                    this._defaultBounds = this._viewportProjection.getBoundingBox();
                    this._dataBounds = a ? new l["a"](a.x, a.y, a.width, a.height) : this._defaultBounds;
                    this.helpFunctions = {
                        setTransform: function e(t, i) {
                            t.style["-webkit-transform"] = i;
                            t.style["-moz-transform"] = i;
                            t.style["-o-transform"] = i;
                            t.style["-ms-transform"] = i;
                            t.style.transform = i
                        },
                        onInteractionStart: function e() {
                            if (c._interactionStarted) return;
                            c._startCallback();
                            c.reset();
                            c._interactionStarted = true
                        },
                        onInteractionEnd: function e() {
                            if (c._zooming || c._panning || c._pinching || !c._interactionStarted) return;
                            c.helpFunctions.setTransform(c._$element[0], "matrix(1,0,0,1,0,0)");
                            c._viewportProjection.enabledChangeEvent = false;
                            c._viewportProjection.setTransformMatrix(c._globalMatrix);
                            c._endCallback();
                            c._viewportProjection.enabledChangeEvent = true;
                            c._interactionStarted = false
                        }
                    };
                    var u;
                    var d;
                    var p;
                    var f;
                    var m = false;
                    var v = this._$element[0];
                    var g = false;
                    this.container = v;
                    N.call(this, this._$element[0]);
                    var x = function e(t) {
                        var i = r["a"].getMouseWheelData(t.originalEvent);
                        var a = i.x - c._offset.left;
                        var n = i.y - c._offset.top;
                        var s = new o["a"](a, n);
                        var l = i.delta > 0 ? c._defaultScale : c._invDefaultScale;
                        g ? V.call(c, s, l) : j.call(c, s, l);
                        g = true;
                        null !== f && clearTimeout(f);
                        f = setTimeout((function() {
                            f = null;
                            E.call(c);
                            g = false
                        }), 250)
                    };
                    var _ = function e(t, i) {
                        if (2 === i.pagePoints.length) {
                            this.pinch = {
                                start: {},
                                current: {}
                            };
                            this.pinch.start.point1 = i.pagePoints[0];
                            this.pinch.start.point2 = i.pagePoints[1];
                            i.centerPoint = new o["a"]((this.pinch.start.point1.x + this.pinch.start.point2.x) / 2, (this.pinch.start.point1.y + this.pinch.start.point2.y) / 2);
                            i.scale = 1;
                            d = {};
                            d.x = (this.pinch.start.point1.x + this.pinch.start.point2.x) / 2 - c._offset.left;
                            d.y = (this.pinch.start.point1.y + this.pinch.start.point2.y) / 2 - c._offset.top;
                            p = {
                                x: i.centerPoint.x - c._offset.left,
                                y: i.centerPoint.y - c._offset.top
                            };
                            c.helpFunctions.onInteractionStart();
                            u = i.scale;
                            d = p
                        } else c.onPan("start", t, i);
                        n.a.preventGestures(this.gestureHandler)
                    };
                    var y = function e(t, i) {
                        if (2 === i.pagePoints.length)
                            if (this.pinch.start.point2) {
                                i.centerPoint || (i.centerPoint = new o["a"]((this.pinch.start.point1.x + this.pinch.start.point2.x) / 2, (this.pinch.start.point1.y + this.pinch.start.point2.y) / 2));
                                this.pinch.current.point1 = i.pagePoints[0];
                                this.pinch.current.point2 = i.pagePoints[1];
                                this.startDistance = this.pinch.start.point2.distanceTo(this.pinch.start.point1);
                                this.lastDistance = this.currentDistance;
                                this.currentDistance = this.pinch.current.point2.distanceTo(this.pinch.current.point1);
                                this.pinchLength = Math.abs(this.startDistance - this.currentDistance);
                                this.scale = this.currentDistance / this.startDistance;
                                i.scale = this.scale;
                                i.delta = this.currentDistance - this.lastDistance;
                                i.centerPoint.x = (this.pinch.current.point1.x + this.pinch.current.point2.x) / 2;
                                i.centerPoint.y = (this.pinch.current.point1.y + this.pinch.current.point2.y) / 2;
                                p = {
                                    x: i.centerPoint.x - c._offset.left,
                                    y: i.centerPoint.y - c._offset.top
                                };
                                c._pinching = true;
                                if (c._zoomPanByWebkitTransform) {
                                    R.call(c, d, p, i.scale, u);
                                    u = i.scale
                                } else {
                                    if (Math.abs(i.scale - u) > .1) {
                                        V.call(c, p, i.scale - u + 1);
                                        u = i.scale
                                    }
                                    H.call(c, p.x - d.x, p.y - d.y)
                                }
                                d = p
                            } else this.pinch.start.point2 = i.pagePoints[1];
                        else c.onPan("update", t, i);
                        n.a.preventGestures(this.gestureHandler)
                    };
                    var b = function e(t, i) {
                        c._pinching = false;
                        this._zoomPanByWebkitTransform || (this._zooming = false);
                        c.onPan("end", t, i)
                    };
                    var M = r["a"].throttle((function(e) {
                        x(e)
                    }), 20);
                    this._eventHandlers = L["a"].extend({
                        preventDefault: true,
                        mousewheel: function e(t) {
                            M(t)
                        },
                        swipe: {
                            start: function e(t, i) {
                                _.call(this, t, i)
                            },
                            update: function e(t, i) {
                                y.call(this, t, i)
                            },
                            end: function e(t, i) {
                                b.call(this, t, i)
                            }
                        },
                        swipetwo: {
                            start: function e(t, i) {
                                _.call(this, t, i)
                            },
                            update: function e(t, i) {
                                y.call(this, t, i)
                            },
                            end: function e(t, i) {
                                b.call(this, t, i)
                            }
                        },
                        tapthree: {
                            end: function e() {
                                c.zoomOnDataBounds();
                                P["a"].preventGestures(this)
                            }
                        },
                        wheelswipe: {
                            start: function e(t) {
                                c._panX = t.pageX;
                                c._panY = t.pageY;
                                m = false
                            },
                            update: function e(t) {
                                var i = t.pageX;
                                var a = t.pageY;
                                var n = i - c._panX;
                                var s = a - c._panY;
                                var r = m;
                                !m && (Math.abs(n) > 3 || Math.abs(s) > 3) && (m = true);
                                if (m) {
                                    c._panX = i;
                                    c._panY = a;
                                    r ? H.call(c, n, s) : F.call(c, n, s)
                                }
                            },
                            end: function e() {
                                m ? B.call(c) : c.zoomOnDataBounds();
                                m = false
                            }
                        },
                        active: function e() {
                            return c._enabled
                        }
                    })
                },
                reset: function e() {
                    this._localMatrix.identity();
                    this._globalMatrix = this._viewportProjection.getTransformMatrix().clone();
                    this._zoomPanByWebkitTransform && this.helpFunctions.setTransform(this._$element[0], "matrix(1,0,0,1,0,0)")
                },
                setOffset: function e(t) {
                    this._offset = t
                },
                navigate: function e(t, i) {
                    var a = this;
                    var n;
                    switch (t) {
                        case "resetZoom":
                            a.zoomOnDataBounds();
                            break;
                        case "zoomIn":
                            n = a.getZoomLevel();
                            if (void 0 === n || null === n || n === a._maxZoomLevel) return;
                            j.call(a, {
                                x: this._$element.width() / 2,
                                y: this._$element.height() / 2
                            }, a._defaultScale);
                            E.call(a);
                            break;
                        case "zoomOut":
                            n = a.getZoomLevel();
                            if (void 0 === n || null === n || n === a._minZoomLevel) return;
                            j.call(a, {
                                x: this._$element.width() / 2,
                                y: this._$element.height() / 2
                            }, a._invDefaultScale);
                            E.call(a);
                            break;
                        case "navUp":
                            F.call(a, 0, O);
                            B.call(a);
                            break;
                        case "navDown":
                            F.call(a, 0, -O);
                            B.call(a);
                            break;
                        case "navLeft":
                            F.call(a, O, 0);
                            B.call(a);
                            break;
                        case "navRight":
                            F.call(a, -O, 0);
                            B.call(a);
                            break;
                        case "jumpTo":
                            F.call(a, i.x, i.y);
                            B.call(a);
                            break;
                        case "startAt":
                            F.call(a, i.x, i.y);
                            break;
                        case "moveTo":
                            H.call(a, i.x, i.y);
                            break;
                        case "endAt":
                            B.call(a);
                            break;
                        default:
                            break
                    }
                },
                onPan: function e(t, i, a) {
                    var n = this;
                    switch (t) {
                        case "start":
                            F.call(n, a.swipe.deltaX, a.swipe.deltaY);
                            break;
                        case "update":
                            H.call(n, a.swipe.curDeltaX, a.swipe.curDeltaY);
                            break;
                        case "end":
                            B.call(n);
                            break;
                        default:
                            break
                    }
                },
                on: function e() {
                    if (this._on) return;
                    this._on = true;
                    if (arguments.length) throw new Error("PanZoomController.on(): arguments has been deprecated");
                    P["a"].addInteraction(this._eventHandlers, this._$element[0], 2, ["tapthree", "swipe", "swipetwo", "wheelswipe", "mousewheel"])
                },
                off: function e() {
                    this._on && P["a"].removeInteraction(this._eventHandlers);
                    this._on = false
                },
                setMaxZoomLevel: function e(t) {
                    this._maxZoomLevel = t;
                    this._viewportProjection && this._viewportProjection.setMaxZoomLevel(t)
                },
                setMinZoomLevel: function e(t) {
                    this._minZoomLevel = t;
                    this._viewportProjection && this._viewportProjection.setMinZoomLevel(t)
                },
                setCenter: function e(t) {
                    this._viewportProjection && this._viewportProjection.setDataCenter(t)
                },
                getCenter: function e() {
                    if (this._viewportProjection) return this._viewportProjection.getDataCenter();
                    return null
                },
                setZoomLevel: function e(t) {
                    if (Number.isNaN(+t) || !Number.isFinite(+t)) return;
                    Math.abs(t - Math.round(t)) < T && (t = Math.round(t));
                    I.call(this, t)
                },
                getZoomLevel: function e() {
                    if (this._viewportProjection) return this._viewportProjection.getZoomLevel();
                    return 0
                },
                moveViewport: function e(t, i) {
                    var a = this._viewportProjection.getSize();
                    this.setCenter(this._viewportProjection.invProject(new o["a"](a.x / 2 - t, a.y / 2 - i)))
                },
                zoom: function e(t) {
                    if (t > 0) {
                        var i = Math.log(t) / Math.LN2;
                        Math.abs(i - Math.round(i)) < T && (i = Math.round(i));
                        this.setZoomLevel(this.getZoomLevel() + i)
                    }
                },
                zoomOnPixel: function e(t, i) {
                    var a = this.getZoomLevel();
                    if (a <= this._minZoomLevel && i <= 1 || a >= this._maxZoomLevel && i >= 1) {
                        this._zoomCancelled = true;
                        return
                    }
                    var n = Math.pow(2, this._minZoomLevel - a);
                    var s = Math.pow(2, this._maxZoomLevel - a);
                    i = Math.min(Math.max(i, n), s);
                    this._viewportProjection.zoomOnPixel(t, i)
                },
                zoomOnDataRectangle: function e(t, i) {
                    this._viewportProjection.zoomOnDataRectangle(t, i)
                },
                zoomOnViewportRectangle: function e(t, i) {
                    var a = this._viewportProjection.fromViewportRectToDataRect(t);
                    this.zoomOnDataRectangle(a, i)
                },
                setBounds: function e(t, i, a, n) {
                    if (Number.isNaN(+t) || Number.isNaN(+i) || Number.isNaN(+a) || Number.isNaN(+n)) return;
                    this._dataBounds = new l["a"](t, i, a, n)
                },
                setBoundsRect: function e(t) {
                    if (!t || this._dataBounds && this._dataBounds.equal(t)) return;
                    this._dataBounds = t.clone()
                },
                zoomOnDataBounds: function e() {
                    var t = this._dataBounds && !this._dataBounds.hasNaN() ? this._dataBounds : this._defaultBounds;
                    if (t) {
                        this.zoomOnDataRectangle(t, false);
                        this._resetCallback();
                        this._viewportProjection.fire("resetZoomFinished");
                        return true
                    }
                    return false
                },
                setFractionalZoomMode: function e(t) {
                    this._fractionalZoomMode = t;
                    this._defaultScale = this._fractionalZoomMode ? Math.pow(2, .5) : 2;
                    this._invDefaultScale = 1 / this._defaultScale;
                    this._mouseWheelTimeoutPeriod = this._fractionalZoomMode ? 50 : 100;
                    this._viewportProjection && this._viewportProjection.setFractionalZoomMode(t)
                },
                getFractionalZoomMode: function e() {
                    return this._fractionalZoomMode
                },
                setZoomPanByWebkitTransform: function e(t) {
                    this._zoomPanByWebkitTransform = t
                },
                getZoomPanByWebkitTransform: function e() {
                    return this._zoomPanByWebkitTransform
                },
                release: function e() {
                    this._viewportProjection = null;
                    this._$element = null
                }
            });
            Object.defineProperties(Z.prototype, {
                enabled: {
                    set: function e(t) {
                        this._enabled = t
                    },
                    get: function e() {
                        return this._enabled
                    }
                }
            });
            var G = t["a"] = Z
        },
        IUcm: function(e, t, i) {
            "use strict";
            var a = i("qIEf");
            var n = i.n(a);
            var s = i("4nJ1");
            var r = i("BGgI");
            var o = i("bPi8");
            var l = i("7xSA");
            var h = i("HBwF");
            var c = 25569;
            var u = 86400;
            var d = 1440;
            var p = {
                dateToQlikTimestamp: function e(t) {
                    return t.getTime() / 1e3 / 86400 - t.getTimezoneOffset() / 60 / 24 + c
                },
                getUnixDate: function e(t) {
                    return new Date(1899, 11, 30 + t)
                },
                calculateTicks: function e(t, i, a, n, s, r) {
                    var o = this.getUnixDate(i);
                    var l = o.getFullYear();
                    var h = o.getMonth();
                    var c = o.getDate();
                    var p = a - i;
                    var f = n - a;
                    var m = t / f;
                    var v = m / 1440;
                    var g = m / u;
                    var x = 366 * m;
                    var _ = 3 * m * 30;
                    var y = s.second / g;
                    var b = s.minute / v;
                    var M = s.date / _;
                    var A = s.year / x;
                    var D;
                    var w = 0;
                    var S;
                    var C = 0;
                    var q = null;
                    var L = null;
                    var P = null;
                    var k = null;
                    var O = null;
                    var T = null;
                    var I = {
                        plotMin: a,
                        plotMax: n,
                        tickMin: 0,
                        tickMax: 0,
                        mainTickValues: [],
                        mainDates: [],
                        secondaryTickValues: [],
                        secondaryDates: []
                    };
                    if (y < 1) {
                        q = 1;
                        C = 1 / u
                    } else if (y < 2) {
                        q = 2;
                        C = 1 / u * 2
                    } else if (y < 5) {
                        q = 5;
                        C = 1 / u * 5
                    } else if (y < 10) {
                        q = 10;
                        C = 1 / u * 10
                    } else if (y < 30) {
                        q = 30;
                        C = 1 / u * 30
                    } else if (b < 1) {
                        L = 1;
                        C = 1 / d
                    } else if (b < 2) {
                        L = 2;
                        C = 1 / d * 2
                    } else if (b < 5) {
                        L = 5;
                        C = 1 / d * 5
                    } else if (b < 10) {
                        L = 10;
                        C = 1 / d * 10
                    } else if (b < 30) {
                        L = 30;
                        C = 1 / d * 30
                    } else if (b < 60) {
                        P = 1;
                        C = 1 / 24
                    } else if (b < 120) {
                        P = 2;
                        C = 2 / 24
                    } else if (b < 360) {
                        P = 6;
                        C = .25
                    } else if (b < 720) {
                        P = 12;
                        C = .5
                    } else if (M < 1 / 90) {
                        k = 1;
                        C = 1
                    } else if (M < 2 / 90) {
                        k = 2;
                        C = 2
                    } else if (M < 7 / 90) {
                        k = 7;
                        C = 7
                    } else if (M < 31 / 90) {
                        O = 1;
                        C = 31
                    } else if (M < 1) {
                        O = 3;
                        C = 90
                    } else if (A < 1) {
                        T = 1;
                        C = 366
                    } else if (A < 2) {
                        T = 2;
                        C = 732
                    } else if (A < 5) {
                        T = 5;
                        C = 1826.25
                    } else {
                        T = 10;
                        C = 3652.5
                    }
                    S = Math.floor((p + i % 1) / C);
                    while (w < n) {
                        D = T ? new Date(l + S * T, 0, 1) : O ? new Date(l, h + S * O, 1) : k ? new Date(l, h, c + S * k) : P ? new Date(l, h, c, 0 + S * P) : L ? new Date(l, h, c, 0, 0 + S * L) : new Date(l, h, c, 0, 0, 0 + S * q);
                        w = this.dateToQlikTimestamp(D);
                        I.secondaryDates.push(D);
                        I.secondaryTickValues.push(w);
                        var R = Math.floor(w);
                        if (!r && !T && !O && !k && I.mainTickValues[I.mainTickValues.length - 1] !== R) {
                            I.mainDates.push(this.getUnixDate(R));
                            I.mainTickValues.push(R)
                        }
                        S++
                    }
                    I.tickSpacing = C;
                    I.tickMinValue = I.secondaryTickValues[0];
                    I.tickMaxValue = I.secondaryTickValues[I.secondaryTickValues.length - 1];
                    return I
                }
            };
            var f = p;

            function m(e) {
                m = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                };
                return m(e)
            }

            function v(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    "value" in a && (a.writable = true);
                    Object.defineProperty(e, a.key, a)
                }
            }

            function x(e, t, i) {
                t && g(e.prototype, t);
                i && g(e, i);
                return e
            }

            function _(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: true,
                        configurable: true
                    }
                });
                t && y(e, t)
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function e(t, i) {
                    t.__proto__ = i;
                    return t
                };
                return y(e, t)
            }

            function b(e) {
                var t = D();
                return function i() {
                    var a = w(e),
                        n;
                    if (t) {
                        var s = w(this).constructor;
                        n = Reflect.construct(a, arguments, s)
                    } else n = a.apply(this, arguments);
                    return M(this, n)
                }
            }

            function M(e, t) {
                if (t && ("object" === m(t) || "function" === typeof t)) return t;
                return A(e)
            }

            function A(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function D() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if ("function" === typeof Proxy) return true;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                    return true
                } catch (e) {
                    return false
                }
            }

            function w(e) {
                w = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return w(e)
            }
            var S = function(e) {
                _(i, e);
                var t = b(i);

                function i() {
                    var e;
                    v(this, i);
                    e = t.call(this);
                    e.mainDates = [];
                    e.secondaryDates = [];
                    return e
                }
                x(i, [{
                    key: "calculateTicks",
                    value: function e(t, i) {
                        var a = Number.isNaN(+this._realDataMin) ? this._dataMin : this._realDataMin;
                        var n = f.calculateTicks(this._calculationSize, a, this._explicitPlotMin, this._explicitPlotMax, t, i);
                        this._mergeResult(n);
                        if (0 === this.secondaryValues.length && !Number.isNaN(+this.plotMin)) {
                            this.secondaryValues = [this.plotMin];
                            this.secondaryDates = [f.getUnixDate(this.plotMin)]
                        }
                        0 === this._tickSpacing && (this._tickSpacing = 1);
                        if (this._showExplicitMinMax) {
                            var s = this.secondaryValues[0];
                            var r = this.secondaryDates[0];
                            this.secondaryValues[0] = n.plotMin;
                            this.secondaryDates[0] = f.getUnixDate(n.plotMin);
                            if (s - n.plotMin >= n.tickSpacing / 2) {
                                this.secondaryValues.splice(1, 0, s);
                                this.secondaryDates.splice(1, 0, r)
                            }
                            var o = n.mainTickValues[n.mainTickValues.length - 1];
                            if (n.plotMax - o <= n.tickSpacing / 2) {
                                this.secondaryValues[n.mainTickValues.length - 1] = n.plotMax;
                                this.secondaryDates[n.secondaryDates.length - 1] = f.getUnixDate(n.plotMax)
                            } else {
                                this.secondaryValues.push(n.plotMax);
                                this.secondaryDates.push(f.getUnixDate(n.plotMax))
                            }
                        }
                    }
                }, {
                    key: "_mergeResult",
                    value: function e(t) {
                        this._tickSpacing = t.tickSpacing;
                        this.plotMin = t.plotMin;
                        this.plotMax = t.plotMax;
                        this.plotRange = this.plotMax - this.plotMin;
                        this.tickMin = t.tickMinValue;
                        this.tickMax = t.tickMaxValue;
                        this.mainValues = t.mainTickValues;
                        this.mainDates = t.mainDates;
                        this.secondaryValues = t.secondaryTickValues;
                        this.secondaryDates = t.secondaryDates
                    }
                }, {
                    key: "getValues",
                    value: function e() {
                        return {
                            mainValues: this.mainValues,
                            mainDates: this.mainDates,
                            secondaryValues: this.secondaryValues,
                            secondaryDates: this.secondaryDates
                        }
                    }
                }]);
                return i
            }(h["a"]);
            var C = S;
            var q = i("hpzB");
            var L = 1;
            var P = 30;
            var k = 150;
            var O = 5;
            var T = 80;
            var I = 60;
            var R = {
                YEAR: 1,
                DATE: 2,
                MINUTE: 3,
                SECOND: 4
            };

            function N() {
                var e = this._scale.getValues();
                var t = e.secondaryValues;
                var i = e.secondaryDates;
                var a = [];
                var n;
                for (n = 0; n < t.length; n++) a.push({
                    position: 0,
                    value: t[n],
                    opacity: 1,
                    label: t[n]
                });
                var s = this._getLabels(a, true);
                s.labelsBetweenTicks = true;
                s.align = this.yMirrorMode ? "right" : "left";
                s.dates = i;
                this._levels.splice(1);
                this._levels.unshift(s)
            }

            function z(e, t, i, a) {
                var n = i.length * a;
                var s = 0;
                var r = e._formatter;
                var o = e._renderer;
                var l = e._style.label.font;
                var h = 0;
                for (var c = 0; c < i.length; c++) {
                    if (t[c] < P) s++;
                    else if (t[c] < k && r) {
                        h = o.getTextWidth(r.formatValue(i[c]), l);
                        h > t[c] - 2 * e._labelPadding && s++
                    }
                    if (s > n) return false
                }
                return true
            }

            function j(e, t) {
                var i;
                var a = function a() {
                    var n = e[i];
                    var s = z(t, n.widths, n.labels, .1);
                    if (s) return "break";
                    var r = 1.1;
                    var o = n.widths.map((function(e) {
                        return e * r
                    }));
                    var l = z(t, o, n.labels, .1);
                    if (l) {
                        ++i;
                        return "break"
                    }
                };
                for (i = 0; i < e.length; ++i) {
                    var n = a();
                    if ("break" === n) break
                }
                t.indicators = i > 0 && i < e.length ? e[i - 1] : null;
                if (t.indicators) {
                    var s = q["a"].getAvgTickWidth(t.indicators.positions) || t._plotSize;
                    var r = q["a"].getAvgTickWidth(e[i].positions) || t._plotSize;
                    s < O || r < T ? t.indicators = null : t._snapTicksAvgWidth = s
                }
                return e.slice(i, i + 2)
            }

            function V(e, t) {
                var i = e.map((function(e) {
                    var i = e.qTicks;
                    var a = [];
                    var n = [];
                    var s = [];
                    var r = [];
                    var o = [];
                    var l = [];
                    var h;
                    var c;
                    var u = true;
                    i.forEach((function(e) {
                        h = e.qStart;
                        a.push(h);
                        r.push(t.isLabelSelected(e.qStart, e.qEnd) ? 1 : t._globalAlpha);
                        o.push(e.qText);
                        l.push(e.qualifiedText);
                        c = t.getPositionOfValue(h);
                        n.push(Math.abs(c - t.getPositionOfValue(e.qEnd)));
                        c = q["a"].roundToHalf(c);
                        s.push(c);
                        e.qStart !== e.qEnd - 1 && (u = false)
                    }));
                    if (i.length > 0) {
                        h = i[i.length - 1].qEnd;
                        a.push(h);
                        c = t.getPositionOfValue(h);
                        c = q["a"].roundToHalf(c);
                        s.push(c)
                    }
                    return {
                        align: t.yMirrorMode ? "right" : "left",
                        labelsBetweenTicks: true,
                        values: a,
                        widths: n,
                        positions: s,
                        opacities: r,
                        labels: o,
                        qualifiedLabels: l[0] ? l : null,
                        labelMode: L,
                        labelSpace: t._wantedLabelSpacePerLevel,
                        dayLevel: u,
                        rangeLabels: true,
                        explicitLabels: true
                    }
                }));
                i = j(i, t);
                return i
            }

            function E(e) {
                var t;
                var i;
                var a = [];
                var n;
                var s;
                var r;
                for (t = 0; t < e.length; t++) {
                    s = e[t].qTicks;
                    for (i = 0; i < e.length; i++) {
                        r = e[i].qTicks;
                        if (t === i || !s[0] || !r[0] || "string" === typeof s[0].qualifiedText || "string" === typeof r[0].qualifiedText) continue;
                        if (s.length === r.length) {
                            n = s.every((function(e, t) {
                                return e.qStart === r[t].qStart && e.qEnd === r[t].qEnd
                            }));
                            if (n)
                                if (e[t].qTags.includes("$qualified")) {
                                    r.forEach((function(e, t) {
                                        e.qualifiedText = s[t].qText
                                    }));
                                    a.push(t)
                                } else {
                                    s.forEach((function(e, t) {
                                        e.qualifiedText = r[t].qText
                                    }));
                                    a.push(i)
                                }
                        }
                    }
                }
                a.sort((function(e, t) {
                    return t - e
                }));
                a.forEach((function(t) {
                    e.splice(t, 1)
                }))
            }

            function F() {
                for (var e = 0; e < this._levels.length; ++e) {
                    var t = this._levels[e];
                    for (var i = 0; i < t.values.length; ++i) {
                        var a = t.values[i];
                        var n = this.getPositionOfValue(a);
                        t.positions[i] = q["a"].roundToHalf(n);
                        if (i < t.values.length - 1) {
                            var s = this.isLabelSelected(a, t.values[i + 1]);
                            t.opacities[i] = s ? 1 : this._globalAlpha
                        }
                    }
                }
            }

            function H() {
                if (!this._formatter.localeInfo) return;
                this._levelFormattingPatterns = [];
                this._labelGranularity === R.YEAR ? this._levelFormattingPatterns.push("YYYY") : this._labelGranularity === R.DATE ? this._levelFormattingPatterns.push(this._formatter.localeInfo.qDateFmt) : this._labelGranularity === R.MINUTE ? this._levelFormattingPatterns.push(this._timeformatPatterns.minuteLevel) : this._labelGranularity === R.SECOND && this._levelFormattingPatterns.push(this._timeformatPatterns.secondLevel);
                this._levelFormattingPatterns.push(this._formatter.localeInfo.qDateFmt)
            }

            function B(e, t) {
                var i = t / e;
                var a = 3 * i * 30;
                var n = i / 2;
                var s = i / 24 / 60 / 2;
                s > this._approxLabelWidths.second ? this._labelGranularity = R.SECOND : n > this._approxLabelWidths.minute ? this._labelGranularity = R.MINUTE : a > this._approxLabelWidths.date ? this._labelGranularity = R.DATE : this._labelGranularity = R.YEAR
            }
            var W = l["a"].extend("TimeAxis", {
                init: function e() {
                    this._super.apply(this, [].slice.call(arguments));
                    this._approxLabelWidths = {
                        year: I,
                        date: I,
                        minute: I,
                        second: I
                    };
                    this._levelFormattingPatterns = ["YYYY", "YYYY-mm-yy"];
                    this._labelGranularity = R.YEAR;
                    this._timeformatPatterns = {
                        minuteLevel: "hh:mm",
                        secondLevel: "hh:mm:ss"
                    }
                },
                _initScales: function e() {
                    this._scale = new C
                },
                _generateExplicitLabels: function e() {
                    var t = this;
                    var i = false;
                    if (this._explicitLabels.length) {
                        this._levels = V(this._explicitLabels, this);
                        if (this._levels.length) {
                            this._calculationSize / (this._scaleDetails.explicitPlotMax - this._scaleDetails.explicitPlotMin) / 2 > this._approxLabelWidths.minute && N.call(this);
                            i = true;
                            if (this._levels.length > 1) {
                                this._levels[1].qualifiedLabels && (this._levels[1].labels = this._levels[1].qualifiedLabels);
                                this._levels[1].outOfSyncWithLevelBelow = !this._levels[1].dayLevel && !this._levels[1].values.every((function(e) {
                                    return e < t._scale._dataMin || e > t._scale._dataMax || t._levels[0].values.indexOf(e) > -1
                                }))
                            }
                            this.ticks = q["a"].getTicks(this._levels[0].values, this._padding, this._plotSize);
                            this.minorTicks = [];
                            if (this._levels.length > 1) {
                                this.minorTicks = this.ticks.filter((function(e) {
                                    return -1 === this._levels[1].values.indexOf(e.value)
                                }), this);
                                this.ticks = this.ticks.filter((function(e) {
                                    return -1 !== this._levels[1].values.indexOf(e.value)
                                }), this)
                            }
                        }
                    }
                    return i
                },
                calculatePreliminaryLabelSpace: function e() {
                    var t = this._super.apply(this, arguments);
                    t.relevantLabelSize *= 2;
                    return t
                },
                calculateLabelSpace: function e() {
                    var t = this._super.apply(this, arguments);
                    t.relevantLabelSize *= 2;
                    return t
                },
                _initLevels: function e() {
                    if (this.useExplicitLabels) {
                        F.call(this);
                        this._levels[0].formatPattern = this._levelFormattingPatterns[0]
                    } else {
                        this._levels = [this._getLabels(this.minorTicks, true)];
                        this._levels[0].labelsBetweenTicks = true;
                        this._levels[0].align = this.yMirrorMode ? "right" : "left";
                        this._levels[0].dates = this._minorTickDates;
                        this._levels[0].formatPattern = this._levelFormattingPatterns[0];
                        if (this.ticks.length) {
                            this._levels.push(this._getLabels(this.ticks, true));
                            this._levels[1].labelsBetweenTicks = true;
                            this._levels[1].align = this.yMirrorMode ? "right" : "left";
                            this._levels[1].dates = this._tickDates;
                            this._levels[1].formatPattern = this._levelFormattingPatterns[1]
                        }
                    }
                },
                _calculateScale: function e(t) {
                    if (0 === t) return;
                    var i = this._scaleDetails;
                    var a = Number.isNaN(+i.realDataMin) ? i.dataMin : i.realDataMin;
                    var n = Number.isNaN(+i.realDataMax) ? i.dataMax : i.realDataMax;
                    var s = Number.isNaN(+i.explicitPlotMin) || null === i.explicitPlotMin ? a : i.explicitPlotMin;
                    var r = Number.isNaN(+i.explicitPlotMax) || null === i.explicitPlotMax ? n : i.explicitPlotMax;
                    var o;
                    o = this.isRadial() ? 96 : Math.max(I, this._getApproximateLabelWidth(s, r, this._levelFormattingPatterns[0]) + this._labelPadding);
                    var l = this.isVertical() ? 4 * this._fontHeight : o;
                    var h = Math.max(2, t / l / i.tickMultiplier + 1);
                    l = t / (h - 1);
                    i.usedDataMin = a;
                    i.usedDataMax = n;
                    i.minTickSpacingInPixel = l;
                    i.plotSize = this._plotSize;
                    i.calculationSize = "undefined" !== typeof t ? t : this._calculationSize;
                    i.fontHeight = this._fontHeight;
                    i.showExplicitMinMax = false;
                    Object.keys(i).forEach((function(e) {
                        this._scale["_".concat(e)] = i[e]
                    }), this);
                    this._scale.calculateTicks(this._approxLabelWidths, "T" === this._formatter.type)
                },
                _generateTickObjects: function e(t, i) {
                    this.useExplicitLabels = this._generateExplicitLabels();
                    if (!this.useExplicitLabels) {
                        var a = t.getValues();
                        this.ticks = q["a"].getTicks(a.mainValues, this._padding, i);
                        this.minorTicks = q["a"].getTicks(a.secondaryValues, this._padding, i);
                        this._tickDates = a.mainDates;
                        this._minorTickDates = a.secondaryDates
                    }
                },
                _updateTickFormatting: function e(t, i) {
                    var a;
                    var n;
                    var s;
                    var r;
                    for (a = 0; a < t.length; a++)
                        if (!t[a].explicitLabels) {
                            s = t[a].dates && t[a].values.length !== t[a].dates.length;
                            r = i._dateFormatter && t[a].dates && t[a].dates.length && !s;
                            for (n = 0; n < t[a].values.length; n++) t[a].labels[n] = r ? i._dateFormatter.format(t[a].dates[n], t[a].formatPattern) : i.formatValue(t[a].values[n])
                        }
                },
                formatValue: function e(t) {
                    if (this._discrete || !this._formatter) return "".concat(t);
                    var i = "YYYY" === this._levels[0].formatPattern ? void 0 : this._levels[0].formatPattern;
                    return this._formatter.formatValue(t, i)
                },
                setLabels: function e(t) {
                    this._explicitLabels = s["a"].extend(true, [], t).reverse();
                    E(this._explicitLabels)
                },
                updateFormatter: function e() {
                    this._super();
                    if (!this._formatter.localeInfo) return;
                    var t = /t+/gi.test(this._formatter.localeInfo.qTimestampFmt);
                    this._timeformatPatterns.minuteLevel = t ? "h:mm tt" : "hh:mm";
                    this._timeformatPatterns.secondLevel = t ? "h:mm:ss tt" : "hh:mm:ss";
                    var i = 41000.2343433;
                    this._approxLabelWidths = {
                        year: Math.max(I, this._renderer.getTextWidth(this._formatter.formatValue(i, "YYYY"), this._style.label.font) + this._labelPadding + 20),
                        date: Math.max(I, this._renderer.getTextWidth(this._formatter.formatValue(i, this._formatter.localeInfo.qDateFmt), this._style.label.font) + this._labelPadding + 20),
                        minute: Math.max(I, this._renderer.getTextWidth(this._formatter.formatValue(i, this._timeformatPatterns.minuteLevel), this._style.label.font) + this._labelPadding + 20),
                        second: Math.max(I, this._renderer.getTextWidth(this._formatter.formatValue(i, this._timeformatPatterns.secondLevel), this._style.label.font) + this._labelPadding + 20)
                    }
                },
                _updateScaleAndTicks: function e() {
                    if (this._scaleDetails.calculationSize) {
                        B.call(this, this._scaleDetails.explicitPlotMax - this._scaleDetails.explicitPlotMin, this._scaleDetails.calculationSize);
                        H.call(this)
                    }
                    this._super()
                }
            });
            var U = W;
            var Z = i("nHjU");
            var G = i("Z9ZH");
            var Y = i.n(G);
            var X = i("MoEg");
            var $ = i("GF7R");
            var K = i("UV1h");
            var J = ".scrollarea";

            function Q(e) {
                var t = this;
                var i = this.isVertical();
                var a = {
                    size: i ? "height" : "width",
                    pos: i ? "y" : "x",
                    coord: i ? "pageY" : "pageX"
                };
                var n = new X["a"](0, 0, 0, 0);
                var s = t._$renderAreaWrap.offset();
                n.x = s.left;
                n.y = s.top;
                n.width = t._$renderAreaWrap.width();
                n.height = t._$renderAreaWrap.height();
                this.fire("scrollStart");
                var r = t.scrollRect[a.size] * n[a.size];
                var o = e.points[0][a.pos] - n[a.pos];
                this.yMirrorMode && !i && (o = n.width - o);
                var l = o - r / 2;
                t.scrollRect[a.pos] = Math.max(0, Math.min(n[a.size] * (1 - t.scrollRect[a.size]), l)) / n[a.size];
                t.setOffset(t.scrollRect[a.pos] * t.fullState.max)
            }

            function ee(e) {
                var t = this;
                var i = this.isVertical();
                var a = {
                    size: i ? "height" : "width",
                    pos: i ? "y" : "x",
                    coord: i ? "pageY" : "pageX"
                };
                var n = this.yMirrorMode && !i;
                var s = t._$renderAreaWrap.offset();
                this._containerRect = new X["a"](0, 0, 0, 0);
                this._containerRect.x = s.left;
                this._containerRect.y = s.top;
                this._containerRect.width = t._$renderAreaWrap.width();
                this._containerRect.height = t._$renderAreaWrap.height();
                t.scrollRect[a.size] = t.viewState.range / t.fullState.max;
                this._rp = e.points[0][a.pos] - this._containerRect[a.pos] - t.scrollRect[a.pos] * this._containerRect[a.size];
                n && (this._rp = t.scrollRect[a.size] * this._containerRect[a.size] - this._rp);
                t.startScrollPos = t.scrollRect[a.pos];
                t.startScrollSize = t.scrollRect[a.size];
                if (this._rp < 0) {
                    t.scrollRect[a.pos] = Math.max(0, t.scrollRect[a.pos] - this._rp / this._containerRect[a.size]);
                    this._rp = 0
                } else if (this._rp / this._containerRect[a.size] > t.scrollRect[a.size]) {
                    t.scrollRect[a.pos] = Math.min(1, this._rp / this._containerRect[a.size]) - t.scrollRect[a.size];
                    this._rp = t.scrollRect[a.size] * this._containerRect[a.size]
                }
                this.fire("scrollStart")
            }

            function te(e) {
                var t = this;
                var i = this.options;
                var a = this.isVertical();
                var n = "function" === typeof i.onScroll ? i.onScroll : function() {};
                var s = {
                    size: a ? "height" : "width",
                    pos: a ? "y" : "x",
                    coord: a ? "pageY" : "pageX"
                };
                var r = e.points[0][s.pos] - this._containerRect[s.pos];
                var o = this.yMirrorMode && !a;
                var l = 1e-5;
                if (this.allowResize) {
                    var h = (r - this._rp) / this._containerRect[s.size] - t.startScrollPos;
                    var c = t.startScrollPos;
                    var u = c + t.startScrollSize;
                    if (/start/.test(e.relatedTarget.className)) {
                        e.relatedTarget.classList.add("active");
                        c = Math.max(0, Math.min(u - l, c + h))
                    } else if (/end/.test(e.relatedTarget.className)) {
                        e.relatedTarget.classList.add("active");
                        u = Math.min(1, Math.max(c + l, u + h))
                    } else {
                        c = Math.min(1 - t.startScrollSize, Math.max(0, c + h));
                        u = Math.min(1, Math.max(0 + t.startScrollSize, u + h))
                    }
                    t.setViewRange((u - c) * t.fullState.max);
                    o ? t.setOffset((1 - u) * t.fullState.max) : t.setOffset(c * t.fullState.max);
                    t.fire("offsetChanged")
                } else {
                    o && (r = this.rect.width - r);
                    t.scrollRect[s.pos] = Math.max(0, Math.min(this._containerRect[s.size] * (1 - t.scrollRect[s.size]), r - this._rp)) / this._containerRect[s.size];
                    t.setOffset(t.scrollRect[s.pos] * t.fullState.max)
                }
                n()
            }

            function ie() {
                if (!this.miniChart) return;
                var e = this;
                Y()(this.miniChart.container).tap({
                    id: J,
                    end: function t(i, a) {
                        Q.call(e, a)
                    }
                });
                Y()(this.miniChart.container).swipe({
                    id: J,
                    options: {
                        radiusThreshold: 1
                    },
                    start: function t(i, a) {
                        ee.call(e, a)
                    },
                    update: function t(i, a) {
                        te.call(e, a)
                    },
                    end: function e(t, i) {
                        i.relatedTarget.classList.remove("active")
                    }
                })
            }

            function ae() {
                if (!this.miniChart) return;
                n()(this.miniChart.container).off(J);
                Y()(this.miniChart.container).off("*", J)
            }

            function ne() {
                this.miniChart && (this._internalUseMiniChart ? this.miniChart.showComponent() : this.miniChart.hideComponent())
            }

            function se(e, t) {
                var i = this.viewState.min;
                var a = this._relativeOffset ? this._explicitOffset * (this.fullState.max - this.viewState.range) : this._explicitOffset || 0;
                this.viewState.min = Math.max(0, Math.min(a || 0, (this.fullState.max || 0) - (this.viewState.range || 0)));
                if (this.viewState.min !== i) {
                    this.invalidateDisplay(e);
                    t && this.fire("offsetChanged")
                }
            }

            function re(e, t, i) {
                var a = Array.isArray(e) ? e : [e];
                a.forEach((function(e) {
                    i.forEach((function(t) {
                        e.style[t] = ""
                    }));
                    e.className = t
                }))
            }
            var oe = Z["a"].extend("ScrollArea", {
                init: function e() {
                    this._super.apply(this, Array.prototype.slice.call(arguments));
                    this._useMiniChart = true;
                    this._internalUseMiniChart = true;
                    this._miniChartThreshold = .5;
                    this._miniChartMinimunNumberOfBars = 3;
                    this.scrollRect = new X["a"](0, 0, 0, 0);
                    this.fullState = {
                        min: 0,
                        max: 20
                    };
                    this.viewState = {
                        min: 0,
                        range: 10
                    };
                    this.allowResize = false;
                    this._$renderAreaWrap.addClass("qv-chart-component-scroll-area");
                    this.before = document.createElement("div");
                    this.bar = document.createElement("div");
                    this.after = document.createElement("div");
                    this.before.style.position = "absolute";
                    this.bar.style.position = "absolute";
                    this.after.style.position = "absolute";
                    this.before.style.backgroundColor = "rgba(0,0,0,0.1)";
                    this.after.style.backgroundColor = "rgba(0,0,0,0.1)";
                    this.bar.style.marginTop = "-1px";
                    n()(this.before).attr("tid", "component.scrollArea.before");
                    n()(this.bar).attr("tid", "component.scrollArea.bar");
                    n()(this.after).attr("tid", "component.scrollArea.after");
                    n()(this.bar).append('<div class="q-resize-handle q-resize-handle-start">');
                    n()(this.bar).append('<div class="q-resize-handle q-resize-handle-end">');
                    this.container.appendChild(this.before);
                    this.container.appendChild(this.after);
                    this.container.appendChild(this.bar);
                    this._styleService = K["a"].initializeService("object.".concat(this.options.parentType));
                    this.before.style.backgroundColor = this._styleService.getStyle("", "color");
                    this.after.style.backgroundColor = this._styleService.getStyle("", "color");
                    this.before.style.opacity = .1;
                    this.after.style.opacity = .1
                },
                on: function e() {
                    var t = this;
                    this._super();
                    Y()(this.container).tap({
                        id: J,
                        end: function e(i, a) {
                            Q.call(t, a)
                        }
                    });
                    Y()(this.container).swipe({
                        id: J,
                        options: {
                            radiusThreshold: 1
                        },
                        start: function e(i, a) {
                            ee.call(t, a)
                        },
                        update: function e(i, a) {
                            te.call(t, a)
                        },
                        end: function e(t, i) {
                            i.relatedTarget.classList.remove("active")
                        }
                    });
                    ie.call(this);
                    this._on && this.allowResize && this.container.classList.add("q-allow-resize")
                },
                off: function e() {
                    this._super();
                    n()(this.container).off(J);
                    Y()(this.container).off("*", J);
                    ae.call(this);
                    this.container.classList.remove("q-allow-resize")
                },
                setAllowResize: function e(t) {
                    this.allowResize = t;
                    this.container.classList[t && this._on ? "add" : "remove"]("q-allow-resize")
                },
                calculateRelevantSize: function e() {
                    var t = Y.a.utils.touch ? 32 : 16;
                    var i;
                    if (this.miniChart && this._useMiniChart) {
                        this.miniChart.calculateRelevantSize();
                        i = this.miniChart.relevantSize;
                        this._internalUseMiniChart = true;
                        ne.apply(this)
                    }
                    this.relevantSize = this._internalUseMiniChart ? i || 16 : t
                },
                insertAdjacentTo: function e() {
                    this._super.apply(this, [].slice.apply(arguments));
                    this.miniChart && this.miniChart.setRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height)
                },
                setRect: function e() {
                    this._super.apply(this, [].slice.apply(arguments));
                    this.miniChart && this.miniChart.setRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height)
                },
                setDock: function e(t) {
                    this._super(t);
                    this.miniChart && this.miniChart.setDock(t)
                },
                getOffset: function e() {
                    return this.viewState.min
                },
                setRelativeOffset: function e(t) {
                    this._explicitOffset = t;
                    this._relativeOffset = true;
                    se.call(this, "ScrollArea.setOffset", true)
                },
                setOffset: function e(t) {
                    this._explicitOffset = t;
                    this._relativeOffset = false;
                    se.call(this, "ScrollArea.setOffset")
                },
                setMiniChart: function e(t) {
                    this.miniChart && ae.call(this);
                    this.miniChart = t;
                    this.miniChart.setDock(this.options.dock);
                    ne.apply(this);
                    this._on && ie.call(this);
                    this.invalidateDisplay("ScrollArea.setMiniChart")
                },
                setUseMiniChart: function e(t) {
                    this._useMiniChart = t;
                    this._internalUseMiniChart = t;
                    ne.apply(this);
                    this.invalidateDisplay("ScrollArea.setUseMiniChart")
                },
                getUseMiniChart: function e() {
                    return this._useMiniChart
                },
                setViewRange: function e(t) {
                    this.viewState.range = t;
                    se.call(this, "ScrollArea.setViewRange", true);
                    this.invalidateDisplay("ScrollArea.setViewRange")
                },
                getViewRange: function e() {
                    return this.viewState.range
                },
                setSpaces: function e(t) {
                    this._spaces = t
                },
                setDataRange: function e(t) {
                    this.dataRange = t;
                    this.invalidateDisplay("ScrollArea.setDataRange")
                },
                getDataRange: function e() {
                    return this.dataRange
                },
                setFullRange: function e(t) {
                    this.fullState.max = t;
                    se.apply(this, ["ScrollArea.setFullRange", true]);
                    this.invalidateDisplay("ScrollArea.setFullRange")
                },
                getFullRange: function e() {
                    return this.fullState.max
                },
                isVisible: function e(t) {
                    return this._super(t) && (this.viewState.range < this.fullState.max || this.allowResize)
                },
                setOuterRect: function e(t, i, a, n) {
                    this._super(t, i, a, n);
                    this.miniChart && this.miniChart.setOuterRect(t, i, a, n)
                },
                setLayoutToContainerRatios: function e(t, i) {
                    this._super(t, i);
                    this.miniChart && this.miniChart.setLayoutToContainerRatios(t, i)
                },
                setContainerRect: function e(t, i, a, n) {
                    this._super(t, i, a, n);
                    this.miniChart && this.miniChart.setContainerRect(t, i, a, n)
                },
                updateSize: function e() {
                    this._super();
                    var t = this._styleService.getStyle("", "color");
                    if (this.miniChart && this._internalUseMiniChart && this.miniChart.isVisible()) {
                        this.before.style.display = "block";
                        this.bar.style.border = "1px solid ".concat($["a"].toRGBA(t, .4));
                        this.bar.style.backgroundColor = "transparent";
                        this.after.style.display = "block";
                        if (this.isVertical()) re.apply(this, [
                            [this.before, this.bar, this.after], "qv-chart-scrollable-mini-chart-vertical", ["width", "left"]
                        ]);
                        else {
                            re.apply(this, [
                                [this.before, this.after], "qv-chart-scrollable-mini-chart-horizontal", ["height", "top"]
                            ]);
                            re.apply(this, [this.bar, "qv-chart-scrollable-mini-chart-bar-horizontal", ["height", "top"]])
                        }
                    } else {
                        this.before.style.display = "none";
                        this.bar.style.backgroundColor = $["a"].toRGBA(t, .2);
                        this.bar.style.boxShadow = "none";
                        this.bar.style.border = "none";
                        this.after.style.display = "none";
                        this.isVertical() ? re.apply(this, [this.bar, "qv-chart-scrollable-vertical", ["width", "left"]]) : re.apply(this, [this.bar, "qv-chart-scrollable-horizontal", ["height", "top"]])
                    }
                },
                paint: function e(t, i) {
                    var a;
                    this.before.style.backgroundColor = this._styleService.getStyle("", "color");
                    this.after.style.backgroundColor = this._styleService.getStyle("", "color");
                    this.before.style.opacity = .1;
                    this.after.style.opacity = .1;
                    this.container.style.display = "block";
                    this._super(t, i);
                    this.scrollRect[this.isVertical() ? "height" : "width"] = this.viewState.range / this.fullState.max;
                    this.scrollRect[this.isVertical() ? "y" : "x"] = this.viewState.min / this.fullState.max;
                    this.yMirrorMode && !this.isVertical() && (this.scrollRect.x = 1 - this.scrollRect.width - this.scrollRect.x);
                    a = this.scrollRect[this.isVertical() ? "height" : "width"] * this.rect[this.isVertical() ? "height" : "width"];
                    a = a < 1 ? 1 : a;
                    a = 100 * a / this.rect[this.isVertical() ? "height" : "width"];
                    if (this.isVertical()) {
                        n()(this.before).css({
                            height: "".concat(100 * this.scrollRect.y, "%"),
                            top: "0%"
                        });
                        n()(this.bar).css({
                            top: "".concat(100 * this.scrollRect.y, "%"),
                            height: "".concat(a, "%")
                        });
                        n()(this.after).css({
                            top: "".concat(100 * this.scrollRect.y + a, "%"),
                            height: "".concat(100 - (100 * this.scrollRect.y + a), "%")
                        })
                    } else {
                        n()(this.before).css({
                            width: "".concat(100 * this.scrollRect.x, "%"),
                            left: "0%"
                        });
                        n()(this.bar).css({
                            left: "".concat(100 * this.scrollRect.x, "%"),
                            width: "".concat(a, "%")
                        });
                        n()(this.after).css({
                            left: "".concat(100 * this.scrollRect.x + a, "%"),
                            width: "".concat(100 - (100 * this.scrollRect.x + a), "%")
                        })
                    }
                },
                clear: function e() {
                    this.container.style.display = "none"
                }
            });
            Object.defineProperty(oe.prototype, "className", {
                value: "ScrollArea"
            });
            var le = oe;
            var he = i("QLJv");
            var ce = i("/D2Q");
            var ue = i("xnZp");
            var de = i("iTPj");
            var pe = {
                getFocusRange: function e(t, i, a, n) {
                    var s = {};
                    var r;
                    var o;
                    var l = i < 1 ? 0 : i - 1;
                    var h = t.length - a - 1;
                    if (n < 2) s[t[0][1].qElemNumber] = {
                        lower: null,
                        upper: null
                    };
                    else
                        for (o = 0; o < t.length; o++) s[t[o][1]] || (s[t[o][1].qElemNumber] = {
                            lower: null,
                            upper: null
                        });
                    for (o = i - 1; o >= 0; o--) {
                        r = s[t[o][1].qElemNumber];
                        r && !r.lower && (r.lower = o)
                    }
                    for (o = t.length - a; o < t.length; o++) {
                        r = s[t[o][1].qElemNumber];
                        r && !r.upper && (r.upper = o)
                    }
                    Object.keys(s).forEach((function(e) {
                        s[e].lower < l && (l = s[e].lower);
                        s[e].upper > h && (h = s[e].upper)
                    }));
                    return {
                        lower: l,
                        upper: h
                    }
                },
                getFullContinuousRange: function e(t) {
                    var i = t.qHyperCube.qDimensionInfo[0].qMin;
                    var a = t.qHyperCube.qDimensionInfo[0].qMax;
                    if (a < i || "NaN" === a) {
                        i = "NaN";
                        a = "NaN"
                    } else if (i === a) {
                        i -= .5;
                        a += .5
                    }
                    return {
                        min: i,
                        max: a
                    }
                },
                addContinuousDataToLayout: function e(t, i) {
                    t = s["a"].extend({}, t);
                    t.qHyperCube = s["a"].extend({}, t.qHyperCube, {
                        qMode: "S"
                    });
                    t.qHyperCube.qDataPages = i.qDataPages;
                    t.qHyperCube.qAxisData = i.qAxisData;
                    return t
                }
            };
            var fe = i("ZYaI");
            var me = i("i7ks");
            var ve = i("RM7h");
            var ge = i("sWge");
            var xe = i("d4GZ");
            var _e = i("+GbC");
            var ye = i("FJpR");
            var be = i("3J65");
            var Me = i("XJsW");
            var Ae = 3;
            var De = Me["a"].extend("PanScrollController", {
                init: function e(t, i, a) {
                    _e["a"].mixin(this);
                    this.notification("PanStart");
                    this.notification("PanUpdate");
                    this.notification("PanWheel");
                    this.notification("PanEnd");
                    this._$dataAreaContainer = t;
                    this._$fullContainer = i;
                    var s = this;
                    this._options = n.a.extend(true, {
                        preventDefault: true
                    }, a);

                    function r(e, t) {
                        s._panning = true;
                        s._panX = t.points[0].x;
                        s._panY = t.points[0].y;
                        s.PanStart.emit()
                    }

                    function o(e) {
                        s._panning = true;
                        s._panX = e.pageX;
                        s._panY = e.pageY;
                        s.PanStart.emit()
                    }

                    function l(e, t) {
                        if (!s._panning) {
                            s._panning = true;
                            s._panX = t.points[0].x;
                            s._panY = t.points[0].y
                        }
                        var i = t.swipe && t.swipe.currentPoint ? t.swipe.currentPoint : new ye["a"](e.pageX, e.pageY);
                        var a = new ye["a"](i.x - s._panX, i.y - s._panY);
                        s._panX = i.x;
                        s._panY = i.y;
                        s.PanUpdate.emit(a)
                    }

                    function h() {
                        s._panning = false;
                        s.PanEnd.emit()
                    }

                    function c(e) {
                        var t = me["a"].getMouseWheelData(e.originalEvent);
                        if (!t.delta) return;
                        var i = t.delta > 0 ? Ae : -Ae;
                        s.PanWheel.emit(i)
                    }
                    this._eventHandlers = {
                        preventDefault: true,
                        swipe: {
                            start: r,
                            update: l,
                            end: h
                        },
                        swipetwo: {
                            start: r,
                            update: l,
                            end: h
                        },
                        mousewheel: me["a"].throttle(c, 20),
                        wheelswipe: {
                            start: o,
                            update: l,
                            end: h
                        },
                        exclusive: function e() {
                            return false
                        },
                        active: function e() {
                            return true
                        }
                    }
                },
                on: function e() {
                    if (this._isOn) return;
                    be["a"].addInteraction(this._eventHandlers, this._$dataAreaContainer, 2, ["swipe", "swipetwo", "mousewheel", "wheelswipe"]);
                    this._isOn = true
                },
                off: function e() {
                    if (!this._isOn) return;
                    be["a"].removeInteraction(this._eventHandlers);
                    this._isOn = false
                }
            });
            var we = De;
            var Se = i("GULB");
            var Ce = i("I+mr");
            var qe = i("TLJm");
            var Le = {
                NONE: 0,
                ONE_DIM: 1,
                TWO_DIM: 2
            };
            var Pe = 1e-6;

            function ke(e) {
                var t = this.components.scrollArea.getOffset() - e / (this.components.dimensionAxis._discreteSpacing || 28);
                t = t < 0 ? 0 : t;
                this.components.scrollArea.setOffset(t)
            }

            function Oe() {
                if (this._disableZoom) return;
                var e = this._panZoomController._viewportProjection;
                var t = this._activeDimAxis.getDataMin();
                var i = this._activeDimAxis.getDataMax();
                var a = i - t;
                var n = this._activeDimAxis.getPlotSize();
                e.setSize({
                    x: n,
                    y: 1
                });
                e.setBoundingBox(new X["a"](t, 0, i - t, 1));
                this._panZoomController.setOffset(this._panZoomController._$element.offset());
                var s = this.components.scrollArea.getOffset();
                var r = this.components.scrollArea.getViewRange();
                this.yMirrorMode && (s = a - r - s);
                var o = e.getTransformMatrix();
                o.identity();
                o.scale(n / r, 1);
                o.translate(-s, 0);
                e.setTransformMatrix(o);
                Ne(this.selections)
            }

            function Te(e, t) {
                var i = this.components.scrollArea.getOffset();
                var a = this.components.scrollArea.getViewRange();
                var n = Math.abs(e - i) > Pe || Math.abs(t - a) > Pe;
                if (n) {
                    this.components.scrollArea.setViewRange(t);
                    this.components.scrollArea.setOffset(e);
                    this.components.scrollArea.fire("offsetChanged")
                }
            }

            function Ie() {
                if (this._disableZoom) return;
                var e = this._panZoomController._viewportProjection;
                var t = this._activeDimAxis.getPlotSize();
                var i = this._activeDimAxis.getDataMin();
                var a = this._activeDimAxis.getDataMax();
                var n = a - i;
                var s = e.invTransform({
                    x: 0,
                    y: 0
                }).x;
                var r = e.invTransform({
                    x: t,
                    y: 0
                }).x;
                var o = Math.min(r - s, n);
                var l = Math.min(Math.max(s, 0), n - o);
                this.yMirrorMode && (l = n - o - l);
                Te.call(this, l, o)
            }

            function Re() {
                var e = this._activeDimAxis.getDataMin();
                var t = this._activeDimAxis.getDataMax();
                Te.call(this, 0, t - e)
            }

            function Ne(e, t) {
                var i = e && e.getActiveType();
                i && "range.discrete" === i.getActiveMode() && i.cancel(true);
                t && t.clearSelection()
            }

            function ze(e, t, i, a) {
                var n = this;
                var s = [];
                var r = [];
                Object.keys(this.components).forEach((function(e) {
                    n.components[e] instanceof o["a"] || n.components[e].isDimension ? s.push(n.components[e]) : n.components[e] instanceof l["a"] && !n.components[e].isStacked && r.push(n.components[e])
                }));
                var h = ["top", "bottom"].includes(this._activeDimAxis.dock) ? "x" : "y";
                var c = "x" === h ? "y" : "x";
                this.selections.types.range.setComponent(h, s);
                this.tooltips.setComponent(h, s);
                this.selections.types.range.setComponent(c, r);
                if (i && (e > 1 || t > 1)) {
                    this.selections.types.range.setComponent(c, []);
                    "byMeasure" === a ? this.selections.types.colorLegend.removeComponent("colorLegend", this.components.colorLegend) : this.selections.types.colorLegend.setComponent("colorLegend", this.components.colorLegend)
                } else this.selections.types.colorLegend.setComponent("colorLegend", this.components.colorLegend)
            }

            function je() {
                if (!this._isPagingTransitionEnabled) return;
                this.components.measureAxis.setDataRangeTransition(false);
                this.components.measureAxis.stopListen("endTransition", Ve, this);
                this.components.measureAxis.stopListen("startTransition", Ee, this);
                clearTimeout(this._pagingTransitionTimer);
                delete this.components.measureAxis.setDataRange;
                this._isPagingTransitionEnabled = false
            }

            function Ve() {
                this.components.refLineLabels && this.layout();
                for (var e in this.components) this.components[e].invalidateDisplay("ScrollableChart.onAxisTransitionEnded")
            }

            function Ee() {
                this._visibleRefLines = this.components.refLineLabels.isVisible()
            }

            function Fe() {
                if (this._isPagingTransitionEnabled || this.isDimensionContinuous) return;
                this._isPagingTransitionEnabled = true;
                var e = this;
                var t = this.components.measureAxis;
                var i = t.setDataRange;
                t.listen("endTransition", Ve, this);
                t.listen("startTransition", Ee, this);
                this._pagingTransitionTimer = null;
                this.components.measureAxis.setDataRange = function(a, n) {
                    clearTimeout(e._pagingTransitionTimer);
                    e._pagingTransitionTimer = setTimeout((function() {
                        var s;
                        t.setDataRangeTransition(true);
                        i.apply(t, [a, n]);
                        e.layout();
                        for (s in e.components) e.components[s].invalidateDisplay()
                    }), 500)
                }
            }

            function He() {
                var e = this.components.scrollArea;
                var t = this.yMirrorMode;
                var i = this._scrollableHint;
                var a = [];
                this._scrollAffordance || (this._scrollAffordance = {
                    canIncrease: false,
                    canDecrease: false,
                    yMirrorMode: t
                });
                var n = e.getOffset();
                var s = e.getViewRange();
                var r = e.fullState.max;
                var o = n > Pe;
                var l = n + s < r - Pe;
                if (o === this._scrollAffordance.canDecrease && l === this._scrollAffordance.canIncrease && t === this._scrollAffordance.yMirrorMode) return;
                this._scrollAffordance.canIncrease = l;
                this._scrollAffordance.canDecrease = o;
                this._scrollAffordance.yMirrorMode = t;
                o && a.push(e.isVertical() ? "up" : this.yMirrorMode ? "right" : "left");
                l && a.push(e.isVertical() ? "down" : this.yMirrorMode ? "left" : "right");
                this.yMirrorMode && a.reverse();
                i.attr("class", (function(e, t) {
                    return t.replace(/\bqv-chart-scrollable-\S+/g, "")
                }));
                i.addClass("qv-chart-scrollable-".concat(a.join("-")))
            }

            function Be() {
                var e = this;
                this._debounceUpdateHandle = {};
                this._debouncedUpdate = me["a"].debounce((function() {
                    var t = this._activeDimAxis.getPlotMin();
                    var i = this._activeDimAxis.getPlotMax();
                    e.updateFocusedContinuousData(t, i).then((function() {
                        e.partialUpdate(e._data)
                    }))
                }), 400, this._debounceUpdateHandle);
                this._changeWatchers.push(de["a"].bindSetter((function() {
                    if (e.isDimensionContinuous) {
                        var t = e._activeDimAxis.getDataMin() + e.components.scrollArea.getOffset();
                        var i = t + e.components.scrollArea.getViewRange();
                        e._activeDimAxis.setPlotMin(t);
                        e._activeDimAxis.setPlotMax(i);
                        e._activeDimAxis.invalidateDisplay();
                        e.components.dataArea.invalidateDisplay();
                        e.components.grid.invalidateDisplay();
                        e._debouncedUpdate()
                    }
                }), this.components.scrollArea, "offset"))
            }

            function We(e, t, i, a) {
                var n;
                var s;
                for (var r = 0; r < i.length; r++)
                    for (var o = 0; o < a.length; o++)
                        if (i[r].qName === a[o].qName) {
                            n = a[o].qTicks.filter((function(t) {
                                return t.qEnd + 1 < e
                            }));
                            s = a[o].qTicks.filter((function(e) {
                                return e.qStart + 1 > t
                            }));
                            i[r].qTicks = n.concat(i[r].qTicks, s);
                            break
                        }
            }

            function Ue(e, t) {
                return e && t.length > 1 ? Ce["a"].getDimensionSize(t[1]) : fe["a"].maxNumberOfLines
            }
            var Ze = r["a"].extend("ScrollableChart", {
                init: function e(t, i, a, s, r) {
                    var h = this;
                    var c = this;
                    var u = n.a.extend(true, {
                        providers: {
                            colorMap: {
                                clazz: ue["a"],
                                multiDimScheme: "last"
                            }
                        },
                        components: {
                            refLines: {
                                sortKey: 5,
                                show: true,
                                dock: "center",
                                showFlag: Z["a"].prototype.ShowFlags.SPARK
                            },
                            dataArea: {
                                sortKey: 10,
                                show: true,
                                dock: "center",
                                showFlag: Z["a"].prototype.ShowFlags.SPARK
                            },
                            miniChart: {
                                show: true,
                                clazz: he["a"],
                                components: {
                                    dimensionAxis: {
                                        show: false,
                                        clazz: o["a"]
                                    },
                                    measureAxis: {
                                        show: false
                                    },
                                    dataArea: {
                                        isMini: true,
                                        show: true
                                    },
                                    continuousAxis: {
                                        show: false,
                                        clazz: l["a"],
                                        dock: "bottom"
                                    }
                                }
                            },
                            xAxis: {
                                clazz: o["a"],
                                reductionOrder: 10,
                                shrinkToFitThreshold: .85,
                                showFlag: {
                                    whenVertical: {
                                        vertical: Z["a"].prototype.ShowFlags.XSMALL,
                                        horizontal: Z["a"].prototype.ShowFlags.SMALL
                                    },
                                    whenHorizontal: {
                                        vertical: Z["a"].prototype.ShowFlags.SMALL,
                                        horizontal: Z["a"].prototype.ShowFlags.XSMALL
                                    }
                                },
                                titleShowFlag: {
                                    whenVertical: {
                                        vertical: Z["a"].prototype.ShowFlags.XSMALL,
                                        horizontal: Z["a"].prototype.ShowFlags.MEDIUM
                                    },
                                    whenHorizontal: {
                                        vertical: Z["a"].prototype.ShowFlags.MEDIUM,
                                        horizontal: Z["a"].prototype.ShowFlags.XSMALL
                                    }
                                }
                            },
                            xAxisTitle: {
                                showFlag: {
                                    whenVertical: {
                                        vertical: Z["a"].prototype.ShowFlags.XSMALL,
                                        horizontal: Z["a"].prototype.ShowFlags.MEDIUM
                                    },
                                    whenHorizontal: {
                                        vertical: Z["a"].prototype.ShowFlags.MEDIUM,
                                        horizontal: Z["a"].prototype.ShowFlags.XSMALL
                                    }
                                },
                                reductionOrder: 1
                            },
                            timeAxis: {
                                show: true,
                                isDimension: true,
                                order: 1,
                                dock: "bottom",
                                relevantSize: 90,
                                reductionOrder: 2,
                                clazz: U,
                                showFlag: {
                                    whenHorizontal: {
                                        vertical: Z["a"].prototype.ShowFlags.SMALL,
                                        horizontal: Z["a"].prototype.ShowFlags.XSMALL
                                    },
                                    whenVertical: {
                                        vertical: Z["a"].prototype.ShowFlags.XSMALL,
                                        horizontal: Z["a"].prototype.ShowFlags.SMALL
                                    }
                                }
                            },
                            continuousAxis: {
                                show: true,
                                isDimension: true,
                                order: 1,
                                dock: "bottom",
                                relevantSize: 90,
                                reductionOrder: 2,
                                clazz: l["a"],
                                showFlag: {
                                    whenHorizontal: {
                                        vertical: Z["a"].prototype.ShowFlags.SMALL,
                                        horizontal: Z["a"].prototype.ShowFlags.XSMALL
                                    },
                                    whenVertical: {
                                        vertical: Z["a"].prototype.ShowFlags.XSMALL,
                                        horizontal: Z["a"].prototype.ShowFlags.SMALL
                                    }
                                }
                            },
                            scrollArea: {
                                sortKey: 2,
                                show: true,
                                dock: "bottom",
                                order: 2,
                                relevantSize: 20,
                                reductionOrder: 10.1,
                                showFlag: Z["a"].prototype.ShowFlags.XSMALL,
                                clazz: le
                            },
                            refLineLabels: {
                                show: true,
                                dock: "right",
                                order: 3,
                                reductionOrder: 3,
                                showFlag: {
                                    whenVertical: {
                                        vertical: Z["a"].prototype.ShowFlags.XSMALL,
                                        horizontal: Z["a"].prototype.ShowFlags.SMALL
                                    },
                                    whenHorizontal: {
                                        vertical: Z["a"].prototype.ShowFlags.MEDIUM,
                                        horizontal: Z["a"].prototype.ShowFlags.XSMALL
                                    }
                                },
                                clazz: ce["a"]
                            }
                        }
                    }, a || {});
                    this._super(t, i, u, s, r);
                    this._scrollableHint = n()("<div class='qv-chart-scrollable'>").appendTo(this.components.dataArea.container);
                    this._changeWatchers = this._changeWatchers || [];
                    this._pagingInfo = new X["a"](0, 0, 0, 0);
                    this.components.measureAxis = this.components.yAxis;
                    this.components.dimensionAxis = this.components.xAxis;
                    this.components.dimensionAxisTitle = this.components.xAxisTitle;
                    this.components.measureAxisTitle = this.components.yAxisTitle;
                    delete this.components.xAxisTitle;
                    delete this.components.yAxisTitle;
                    delete this.components.xAxis;
                    delete this.components.yAxis;
                    this.components.dimensionAxisTitle.setType("dimension");
                    this.components.dimensionAxisTitle.listen("drill-up", (function(e, t, i) {
                        c.backendApi.drillUp(t, i)
                    }));
                    this.components.dimensionAxisTitle.setModel(t.ext.model);
                    this.components.measureAxisTitle.setType("measure");
                    this.components.measureAxisTitle.setModel(t.ext.model);
                    this.components.scrollArea.listen("scrollStart", (function() {
                        Ne(h.selections, h.tooltips)
                    }));
                    this._showLegend = false;
                    this.scrollMultiplicator = 1;
                    this.components.dataArea.setMinorAxis(this.components.measureAxis);
                    this.components.dataArea.setMajorAxis(this.components.dimensionAxis);
                    this.components.dataArea.setTimeAxis(this.components.timeAxis);
                    this.components.dataArea.setContinuousAxis(this.components.continuousAxis);
                    this._setActiveDimensionAxis(t.layout);
                    this.components.grid.setAxes(this.components.dimensionAxis, this.components.measureAxis);
                    this.components.dimensionAxis.setMinDiscreteUnitSize(28);
                    this._changeWatchers.push(de["a"].bindProperty(this.components.dataArea, "dimensionTree", this._chartContext, "dimensionTree"));
                    this._changeWatchers.push(de["a"].bindProperty(this.providers.colorMap, "dimensionTree", this._chartContext, "dimensionTree"));
                    this._changeWatchers.push(de["a"].bindSetter((function() {
                        c.isDimensionContinuous || c.components.dimensionAxis.setOffset(c.components.scrollArea.getOffset());
                        c.moreData = c.components.scrollArea.viewState.range < c.components.scrollArea.fullState.max;
                        c.checkScrollToggle()
                    }), this.components.scrollArea, "offset"));
                    this._changeWatchers.push(de["a"].bindSetter((function(e) {
                        c.isDimensionContinuous || null === e || c.components.scrollArea.setFullRange(e)
                    }), this.components.dimensionAxis, "numDiscreteUnits"));
                    this._changeWatchers.push(de["a"].bindSetter((function(e) {
                        c.isDimensionContinuous || c.components.scrollArea.setViewRange(c._pagingMode === Le.TWO_DIM ? e / 2 : e)
                    }), this.components.dimensionAxis, "numDiscreteUnitsInView"));
                    [this.components.timeAxis, this.components.continuousAxis].forEach((function(e) {
                        e && e.listen("rendered", (function() {
                            var e = c.selections && c.selections.getActiveType && c.selections.getActiveType();
                            if (e && "range.dimension" === e.getActiveMode()) {
                                e.refreshContainer();
                                e.updateRangeProjection();
                                e.updateRangeDisplay()
                            }
                        }))
                    }));
                    (this.components.timeAxis || this.components.continuousAxis) && Be.call(this, this.components.continuousAxis);
                    this._changeWatchers.push(de["a"].bindSetter((function() {
                        false !== c._checkPage && c.checkPage();
                        He.call(c)
                    }), this.components.dimensionAxis, "offset"));
                    this._scrollController = new we(this.components.dataArea.container, this.container, this.components.scrollArea);
                    this.panStartFn = function() {
                        Ne(c.selections)
                    };
                    this.panUpdateFn = function(e) {
                        var t = c.components.scrollArea.isHorizontal() ? "x" : "y";
                        c.yMirrorMode && (e.x = -e.x);
                        ke.call(c, e[t])
                    };
                    this.panWheelFn = function(e) {
                        Ne(c.selections);
                        ke.call(c, e * c.components.dimensionAxis._discreteSpacing)
                    };
                    this._scrollController.PanStart.bind(this.panStartFn);
                    this._scrollController.PanUpdate.bind(this.panUpdateFn);
                    this._scrollController.PanWheel.bind(this.panWheelFn);
                    this._panZoomController = new Se["a"](n()(this.components.dataArea.container), {
                        start: function e() {
                            Oe.call(c)
                        },
                        update: function e() {
                            Ie.call(c)
                        },
                        end: function e() {
                            Ie.call(c)
                        },
                        reset: function e() {
                            Re.call(c)
                        }
                    });
                    this._panZoomController.setZoomPanByWebkitTransform(false);
                    this.isDimensionContinuous && this._panZoomController.setMaxZoomLevel(27)
                },
                setYMirrorMode: function e(t) {
                    this._super(t);
                    this.updateVerticalComponentsDock()
                },
                getVerticalComponents: function e() {
                    var t = this._super();
                    var i;
                    if (this._data && this.components) {
                        if (this.components.dimensionAxis && this.components.dimensionAxis.isVertical() && this._data.dimensionAxis) {
                            t.push({
                                comp: this.components.dimensionAxis,
                                dock: this._data.dimensionAxis.dock
                            });
                            this.components.dimensionAxisTitle && t.push({
                                comp: this.components.dimensionAxisTitle,
                                dock: this._data.dimensionAxis.dock
                            })
                        }
                        if (this.components.measureAxis && this.components.measureAxis.isVertical() && this._data.measureAxis) {
                            i = this._data.measureAxes && this._data.measureAxes[0] ? this._data.measureAxes[0].dock : this._data.measureAxis.dock;
                            t.push({
                                comp: this.components.measureAxis,
                                dock: i
                            });
                            this.components.measureAxisTitle && t.push({
                                comp: this.components.measureAxisTitle,
                                dock: i
                            })
                        }
                        this.components.refLineLabels && this.components.refLineLabels.isVertical() && this._data.measureAxis && t.push({
                            comp: this.components.refLineLabels,
                            dock: "far" === this._data.measureAxis.dock ? "near" : "far"
                        });
                        this.components.scrollArea && this.components.scrollArea.isVertical() && t.push({
                            comp: this.components.scrollArea,
                            dock: "far"
                        })
                    }
                    return t
                },
                initSelections: function e() {
                    this.selections._disableSelections = this.options._disableSelections;
                    this.selections.types.dataArea.setComponent("dataArea", this.components.dataArea);
                    this.selections.types.colorLegend.setComponent("colorLegend", this.components.colorLegend);
                    if (!this.options._disableSelections) {
                        this.selections.types.range.setComponent("dataArea", this.components.dataArea);
                        this.selections.Activated.bind(this.onSelection.Activated.bind(this));
                        this.selections.Lasso.bind(this.onToggleLasso.bind(this));
                        this.selections.Deactivated.bind(this.onSelection.Deactivated.bind(this));
                        this.selections.SelectRange.bind(this.onSelection.SelectRange.bind(this));
                        this.selections.SelectAttributeDim.bind(this.onSelection.SelectAttributeDim.bind(this));
                        this.selections.ToggleShape.bind(this.onSelection.ToggleShape.bind(this));
                        this.selections.Confirm.bind(this.onSelection.Confirm.bind(this));
                        this.selections.Cancel.bind(this.onSelection.Cancel.bind(this));
                        this.selections.Clear.bind(this.onSelection.Clear.bind(this));
                        this.selections.SelectWhileLocked.bind(this.selectWhileLocked.bind(this));
                        this.selections.SelectWhileSingleSelect.bind(this.selectWhileSingleSelect.bind(this))
                    }
                },
                initTooltips: function e() {
                    this.tooltips.setComponent("dataArea", this.components.dataArea)
                },
                getSnapshotSize: function e() {
                    var t = 0;
                    var i = 0;
                    if (this.rect) {
                        t = this.rect.width;
                        i = this.rect.height
                    }
                    var a = this.getSnapshotChartData();
                    !a.hasMiniChart && this.components.scrollArea.isVisible() && (this.components.scrollArea.isVertical() ? t -= this.components.scrollArea.rect.width : i -= this.components.scrollArea.rect.height);
                    return {
                        w: t,
                        h: i
                    }
                },
                getSnapshotChartData: function e(t) {
                    var i = n.a.extend(true, this._super() || {}, {
                        scrollOffset: t && t.ignoreReducedData ? 0 : this.components.scrollArea.getOffset(),
                        discreteSpacing: this.components.dimensionAxis.getDiscreteSpacing(),
                        axisInnerOffset: t && t.ignoreReducedData ? 0 : this.components.dimensionAxis.getInnerOffset(),
                        hasMiniChart: this.components.miniChart && !!this.components.miniChart.isVisible(),
                        viewRange: this.components.scrollArea.getViewRange()
                    });
                    t && t.ignoreReducedData && this.components.measureAxis.isStacked && (i.dataRanges = [{
                        min: this.components.measureAxis.getPlotMin(),
                        max: this.components.measureAxis.getPlotMax()
                    }]);
                    return i
                },
                setSnapshotData: function e(t, i) {
                    this._super(t, i);
                    var a = Object(ge["a"])();
                    var s;
                    if (!i || !i.ignoreReducedData) {
                        if (this.isDimensionContinuous) {
                            t.qHyperCube.qDataPages = this._data.qHyperCube.qDataPages;
                            t.qHyperCube.qAxisData = this._data.qHyperCube.qAxisData
                        }
                        if (this.components.miniChart.isVisible()) this.components.miniChart.getReducedDataHypercube().then((function(e) {
                            t.reducedHyperCube = e;
                            a.resolve(t)
                        }));
                        else {
                            delete t.reducedHyperCube;
                            a.resolve(t)
                        }
                        return a.promise
                    }
                    delete t.reducedHyperCube;
                    if (this.isDimensionContinuous) {
                        s = t.qHyperCube;
                        s.qDataPages = [n.a.extend(true, {}, this._data.qHyperCube.qDataPages[0])];
                        this._upperFocusIndex ? s.qDataPages[0].qMatrix = s.qDataPages[0].qMatrix.slice(this._lowerFocusIndex, this._upperFocusIndex + 1) : s.qDataPages[0].qMatrix = s.qDataPages[0].qMatrix;
                        s.qAxisData = this._cachedFocusAxisData;
                        s.qDimensionInfo[0].qMin = this._activeDimAxis.getPlotMin();
                        s.qDimensionInfo[0].qMax = this._activeDimAxis.getPlotMax();
                        a.resolve(t);
                        return a.promise
                    }

                    function r() {
                        var e = this.components.scrollArea;
                        var i = e.getOffset() / this.scrollMultiplicator;
                        var a = Math.round(i);
                        var n = this.components.dimensionAxis._discreteSpacing;
                        var s = e.getViewRange() / this.scrollMultiplicator;
                        var r = Math.round(s - (a - i));
                        var o = Math.min(8, n / 2);
                        var l = this._pagingInfo.y;
                        Number.isNaN(+r) && (r = 10);
                        if (this._data.barGrouping && "grouped" === this._data.barGrouping.grouping && this._data.qHyperCube.qMeasureInfo.length > 1) {
                            a = Math.floor(i);
                            r = Math.ceil(s - (a - i));
                            t.snapshotData.content.chartData.scrollOffset = e.getOffset() % this.scrollMultiplicator;
                            var h = (Math.ceil(i) - i) * n * this.scrollMultiplicator - n / 2;
                            a = h < o ? Math.ceil(i) : Math.floor(i);
                            r = Math.round(i + s);
                            var c = i + s;
                            var u = (c - Math.floor(c)) * n * this.scrollMultiplicator - n / 2;
                            c = u < o ? Math.floor(c) : Math.ceil(c);
                            r = c - a
                        } else if (this._data.barGrouping && "grouped" === this._data.barGrouping.grouping && this._data.qHyperCube.qDimensionInfo.length > 1) {
                            var d = this.components.dataArea._tree;
                            a = Math.max(Math.round(i - .5), l);
                            r = Math.round(this.components.dimensionAxis.getNumDiscreteUnitsInView() - (a - (i - .5)));
                            if (d) {
                                var p = 0;
                                var f = 0;
                                var m = 0;
                                var v = l;
                                var g;
                                if (l !== a) {
                                    for (p = 0; p < d.children.length && v < a; p++, v++) {
                                        g = d.children[p];
                                        for (f = 0; f < g.children.length && v < a; f++, ++v) m++
                                    }
                                    a = l + m;
                                    p = Math.max(0, p - 1);
                                    f = Math.max(0, f - 1)
                                }
                                m = 0;
                                v = 0;
                                for (; p < d.children.length && v < r; p++, v++) {
                                    g = d.children[p];
                                    for (f; f < g.children.length && v < r; f++, ++v) m++;
                                    f = 0
                                }
                                r = m
                            } else r *= 2
                        }
                        return {
                            qTop: a,
                            qLeft: 0,
                            qWidth: this._data.qHyperCube.qSize.qcx,
                            qHeight: r || 0
                        }
                    }
                    s = t.qHyperCube;
                    this.providers.colorMap && this.providers.colorMap.getColorDataInfo() && (t.color.persistent = !!this.providers.colorMap.getColorDataInfo().persistentColors);
                    if ("K" === s.qMode) {
                        var o = new xe["a"];
                        o.store(s.qStackedDataPages);
                        var l = o.get([r.call(this)]);
                        s.qSize.qcy = l[0].qArea.qHeight;
                        if (l[0] && l[0].qData[0]) {
                            l[0].qData[0].qDown = 0;
                            l[0].qData[0].qUp = 0
                        }
                        s.qStackedDataPages = l;
                        a.resolve(t)
                    } else this.backendApi.getData([r.call(this)]).then((function(e) {
                        "S" === s.qMode ? s.qDataPages = e : s.qStackedDataPages = e;
                        s.qSize.qcy = e[0].qArea.qHeight;
                        if (s.qDimensionInfo[0].qStateCounts) {
                            s.qDimensionInfo[0].qStateCounts.qOption = s.qSize.qcy;
                            s.qDimensionInfo[0].qStateCounts.qSelected = 0
                        }
                        a.resolve(t)
                    }));
                    return a.promise
                },
                getViewState: function e() {
                    return n.a.extend(true, this._super() || {}, {
                        scrollOffset: this.components.scrollArea.getOffset(),
                        axisInnerOffset: this.components.dimensionAxis.getInnerOffset(),
                        viewRange: this.components.scrollArea.getViewRange()
                    })
                },
                checkPage: function e(t) {
                    if (!this.isValid(this._data) || !this._pagingMode) return false;
                    var i = this.components.scrollArea;
                    var a = Math.floor(i.getOffset() / this.scrollMultiplicator);
                    var n = this._pagingInfo.y;
                    var s = this._pagingInfo.height;
                    var r = this._pagingMode === Le.TWO_DIM ? 0 : 20;
                    var o = Math.ceil(i.getViewRange() / this.scrollMultiplicator);
                    Number.isNaN(+o) && (o = 500);
                    this._pagingMode === Le.TWO_DIM && (o *= 2);
                    if (a + o > n + s || Math.max(0, a) < n) return this.pageData(Math.floor(Math.max(0, a - r)), o + 2 * r, t);
                    return
                },
                pageData: function e(t, i, a) {
                    if ("function" !== typeof this.backendApi.getReducedData) return false;
                    var n = Object(ge["a"])();
                    if (this._data.qHyperCube) {
                        var s = this;
                        var r;
                        r = "K" === this._data.qHyperCube.qMode ? this._data.qHyperCube.qStackedDataPages[0] && this._data.qHyperCube.qStackedDataPages[0].qData && this._data.qHyperCube.qStackedDataPages[0].qData.length > 0 : this._data.qHyperCube.qDataPages[0] && this._data.qHyperCube.qDataPages[0].qMatrix.length > 0;
                        if (i <= 0) {
                            "S" === s._data.qHyperCube.qMode ? s._data.qHyperCube.qDataPages = [] : s._data.qHyperCube.qStackedDataPages = [];
                            s._pagingInfo.set(t, 0, this._data.qHyperCube.qSize.qcx, i)
                        } else this.backendApi.getData([{
                            qTop: t,
                            qLeft: 0,
                            qWidth: this._data.qHyperCube.qSize.qcx,
                            qHeight: i
                        }]).then((function(e) {
                            if ("S" === s._data.qHyperCube.qMode) {
                                s._data.qHyperCube.qDataPages = e;
                                var o = e[0].qArea;
                                s._pagingInfo.set(o.qLeft, o.qTop, o.qWidth, o.qHeight)
                            } else {
                                s._data.qHyperCube.qStackedDataPages = e;
                                s._pagingInfo.set(0, t, s._data.qHyperCube.qSize.qcx, i)
                            }
                            if (a || !r) {
                                s._chartContext.refresh(s._data);
                                s.paint(s._data).then((function() {
                                    n.resolve()
                                }))
                            } else s.partialUpdate(s._data).then((function() {
                                n.resolve()
                            }))
                        })).catch((function(e) {
                            false
                        }))
                    } else n.resolve();
                    return n.promise
                },
                partialUpdate: function e(t) {
                    var i = this;
                    var a;
                    var n;
                    var s;
                    var r;
                    var o = [];
                    Fe.call(this);
                    n = t.qHyperCube.qStackedDataPages.length > 0 ? this._pagingInfo.y : t.qHyperCube.qDataPages[0].qArea.qTop;
                    this.components.dimensionAxis.setInnerOffset(n * this.scrollMultiplicator);
                    return this.providers.colorMap.setData(t).then((function() {
                        i._chartContext.refresh(t);
                        for (a in i.components) "miniChart" !== a && a.indexOf("AxisTitle") < 0 && i.components[a].invalidateProperties("ScrollableChart.partialUpdate");
                        i.components.dataArea.updateNow(["properties"]);
                        s = i.components.dataArea.getMajorAxisData();
                        r = i.components.dataArea.getMinorAxisData();
                        !r || i._readStoredData && i.getSnapshotStoredChartData().dataRanges || i.components.measureAxis.setDataRange(r.min, r.max);
                        i.components.dimensionAxis.setDataRange(s.data, s.info);
                        i.components.dimensionAxis.updateLevels();
                        i.components.colorLegend.invalidateProperties("ScrollableChart.partialUpdate");
                        i.components.colorLegend.updateNow(["properties"]);
                        i.isDimensionContinuous && i.layout();
                        o.push(i.components.colorLegend.invalidateDisplay("ScrollableChart.partialUpdate"));
                        o.push(i.components.dataArea.invalidateDisplay("ScrollableChart.partialUpdate"));
                        if (i.isDimensionContinuous) {
                            o.push(i.components.timeAxis.invalidateDisplay("ScrollableChart.partialUpdate"));
                            o.push(i.components.continuousAxis.invalidateDisplay("ScrollableChart.partialUpdate"));
                            o.push(i.components.measureAxis.invalidateDisplay("ScrollableChart.partialUpdate"))
                        } else o.push(i.components.dimensionAxis.invalidateDisplay("ScrollableChart.partialUpdate"));
                        return ge["a"].all(o)
                    }))
                },
                getApproriateNrOfBins: function e(t, i) {
                    var a = 4;
                    var n = t.qHyperCube.qMeasureInfo.length;
                    var s = n || 1;
                    var r = a + 2 * (s - 1);
                    if (i) return Math.ceil(fe["a"].maxNumberOfDataPoints);
                    if (t.qHyperCube.qDimensionInfo.length > 1) {
                        s = Math.max(1, Math.min(fe["a"].maxNumberOfLines, Ce["a"].getDimensionSize(t.qHyperCube.qDimensionInfo[1])));
                        r = 4
                    }
                    return Math.ceil(fe["a"].maxNumberOfDataPoints / (s * r))
                },
                getHyperCubeContinousData: function e(t) {
                    if (t.qStart > t.qEnd || Number.isNaN(+t.qStart) || Number.isNaN(+t.qEnd)) return ge["a"].resolve({
                        qAxisData: {
                            qAxis: []
                        },
                        qDataPages: [{
                            qMatrix: [],
                            qTails: false,
                            qArea: {
                                qLeft: 0,
                                qTop: 0,
                                qRight: 0,
                                qBottom: 0
                            }
                        }]
                    });
                    var i = this;
                    return this.backendApi.getHyperCubeContinousData(t, false).then((function(e) {
                        if (i.cancelPromises) return ge["a"].reject();
                        return e
                    }))
                },
                getFullContinousData: function e(t, i, a) {
                    var n = this;
                    var r = t.qHyperCube.qSize.qcy * t.qHyperCube.qMeasureInfo.length;
                    var o = r < fe["a"].maxNumberOfDataPoints;
                    var l = t.qHyperCube.qDimensionInfo;
                    var h = Ue(o, l);
                    return this.getHyperCubeContinousData({
                        qStart: i,
                        qEnd: a,
                        qNbrPoints: this.getApproriateNrOfBins(t, o),
                        qMaxNbrTicks: 300,
                        qMaxNumberLines: h
                    }).then((function(e) {
                        n._cachedContinousMatrix = e.qDataPages[0].qMatrix;
                        t.qHyperCube.qDimensionInfo[0].qIsCyclic || (n._cachedContinousAxisData = e.qAxisData);
                        n._cachedFocusAxisData = s["a"].extend(true, {}, e.qAxisData);
                        n._lowerFocusIndex = null;
                        n._upperFocusIndex = null;
                        return e
                    })).catch((function(e) {
                        e.code === qe["a"].LocalizedErrorCode.LOCERR_GENERIC_INVALID_PARAMETERS && "Start and End are outside data range" === e.parameter && (e.isHandled = true);
                        throw e
                    }))
                },
                getFocusedContinousData: function e(t, i, a) {
                    var n = this;
                    var r = a.qHyperCube.qSize.qcy * a.qHyperCube.qMeasureInfo.length;
                    var o = r < fe["a"].maxNumberOfDataPoints;
                    var l = a.qHyperCube.qDimensionInfo;
                    var h = Ue(o, l);
                    return this.getHyperCubeContinousData({
                        qStart: t,
                        qEnd: i,
                        qNbrPoints: this.getApproriateNrOfBins(a, o),
                        qMaxNbrTicks: 300,
                        qMaxNumberLines: h
                    }).then((function(e) {
                        if (n._cachedContinousMatrix && !n._readStoredData) {
                            if (e.qDataPages[0] && e.qDataPages[0].qMatrix.length) {
                                t = Math.min(t, e.qDataPages[0].qMatrix[0][0].qNum);
                                i = Math.max(i, e.qDataPages[0].qMatrix[e.qDataPages[0].qMatrix.length - 1][0].qNum)
                            }
                            var a = n._cachedContinousMatrix.filter((function(e) {
                                return e[0].qNum < t
                            }));
                            var r = n._cachedContinousMatrix.filter((function(e) {
                                return e[0].qNum > i
                            }));
                            e.qDataPages[0].qMatrix = a.concat(e.qDataPages[0].qMatrix, r);
                            var o = pe.getFocusRange(e.qDataPages[0].qMatrix, a.length, r.length, n._data.qHyperCube.qDimensionInfo.length);
                            n._lowerFocusIndex = o.lower;
                            n._upperFocusIndex = o.upper
                        }
                        if (n._cachedContinousAxisData && !n._readStoredData) {
                            n._cachedFocusAxisData = s["a"].extend(true, {}, e.qAxisData);
                            We(t, i, e.qAxisData.qAxis, n._cachedContinousAxisData.qAxis)
                        }
                        return e
                    }))
                },
                updateFocusedContinuousData: function e(t, i) {
                    var a = this;
                    var n = this._data;
                    return this.getFocusedContinousData(t, i, n).then((function(e) {
                        n.qHyperCube.qDataPages = e.qDataPages;
                        n.qHyperCube.qAxisData = e.qAxisData;
                        var t = 0 === n.qHyperCube.qDataPages[0].qMatrix.length;
                        a._activeDimAxis.setLabels(t ? [] : n.qHyperCube.qAxisData.qAxis);
                        var i = a._activeDimAxis.getUseTransition();
                        a._activeDimAxis.setUseTransition(false);
                        a._activeDimAxis.updateSize();
                        a._activeDimAxis.setUseTransition(i)
                    }))
                },
                _preUpdateData: function e(t) {
                    var i = this;
                    var a = this._super;
                    var s = pe.getFullContinuousRange(t);
                    var r = s.min;
                    var o = s.max;
                    if (i.isDimensionContinuous) return i.getFullContinousData(t, r, o).then((function(e) {
                        if (!i.isDimensionContinuous) return t;
                        t = pe.addContinuousDataToLayout(t, e);
                        i._activeDimAxis.setDataRange(r, o);
                        i.components.scrollArea.setFullRange(o - r);
                        i.components.scrollArea.setViewRange(o - r);
                        i._activeDimAxis.setPlotMin(r);
                        i._activeDimAxis.setPlotMax(o);
                        me["a"].cancelDebounce(i._debounceUpdateHandle);
                        return a.call(i, t).then((function(e) {
                            var t = n.a.extend(true, {}, e);
                            i.components.miniChart.setData(t, true);
                            return e
                        }))
                    }));
                    return this._super(t)
                },
                _updateData: function e(t) {
                    this._super.apply(this, [].slice.call(arguments));
                    this._pagingInfo.set(0, 0, 0, 0);
                    if (this.isValid(t)) {
                        var i;
                        var a = t.qHyperCube.qStackedDataPages[t.qHyperCube.qStackedDataPages.length - 1];
                        i = a && a.qData ? a.qData.length ? {
                            qLeft: 0,
                            qTop: 0,
                            qWidth: t.qHyperCube.qSize.qcx,
                            qHeight: a.qData[0].qSubNodes.length
                        } : a.qArea : t.qHyperCube.qDataPages[0].qArea;
                        this._pagingInfo.set(i.qLeft, i.qTop, i.qWidth, i.qHeight);
                        this.components.dimensionAxis.setInnerOffset(i.qTop * this.scrollMultiplicator)
                    }
                },
                updateGrid: function e(t, i) {
                    this._super(t, i);
                    this.components.grid.setAxes(this._activeDimAxis, this.components.measureAxis)
                },
                _setActiveDimensionAxis: function e(t) {
                    var i = this.isDimensionContinuous;
                    var a = fe["a"].isTimeDimension(i, t.qHyperCube.qDimensionInfo[0]);
                    var n;
                    if (a) {
                        this._activeDimAxis = this.components.timeAxis;
                        n = "continuousAxis"
                    } else if (i) {
                        this._activeDimAxis = this.components.continuousAxis;
                        n = "continuousAxis"
                    } else {
                        this._activeDimAxis = this.components.dimensionAxis;
                        n = "dimensionAxis"
                    }
                    this.components.miniChart && this.components.miniChart.setActiveDimensionAxis(n);
                    this.components.dataArea && this.components.dataArea.setActiveDimensionAxis(this._activeDimAxis)
                },
                updateAxis: function e(t) {
                    this._super.apply(this, [].slice.call(arguments));
                    this._readStoredData && this.options.hideChartScrollWithoutMiniChart && !this.components.scrollArea.getUseMiniChart() ? this.components.scrollArea.hideComponent() : this.components.scrollArea.showComponent();
                    if (this.selections) {
                        var i = "S" !== t.qHyperCube.qMode || this.isDimensionContinuous && t.qHyperCube.qDimensionInfo.length > 1;
                        ze.apply(this, [t.qHyperCube.qDimensionInfo.length, t.qHyperCube.qMeasureInfo.length, i, t.color ? t.color.mode : null])
                    }
                    this.tooltips && this.tooltips.setComponent(["top", "bottom"].includes(this.components.dimensionAxis.dock) ? "y" : "x", this.components.dimensionAxis);
                    this._updateMinDiscreteUnitSize(this.components.dimensionAxis)
                },
                shouldShowMiniChart: function e() {
                    return Ce["a"].getDimensionSize(this._data.qHyperCube.qDimensionInfo[0]) > 1 && false !== this._data.showMiniChartForContinuousAxis
                },
                shouldDisableZoom: function e() {
                    return Ce["a"].getDimensionSize(this._data.qHyperCube.qDimensionInfo[0]) <= 1
                },
                updateTimeAxis: function e() {
                    if (this.isDimensionContinuous) {
                        this._disableZoom = this.shouldDisableZoom();
                        if (fe["a"].isTimeDimension(true, this._data.qHyperCube.qDimensionInfo[0])) {
                            this.components.timeAxis.showComponent();
                            this.components.continuousAxis.hideComponent();
                            this.components.timeAxis.setLabels(this._data.qHyperCube.qAxisData ? this._data.qHyperCube.qAxisData.qAxis : null)
                        } else {
                            this.components.continuousAxis.showComponent();
                            this.components.timeAxis.hideComponent()
                        }
                        fe["a"].hasTimeTag(this._data.qHyperCube.qDimensionInfo[0]) ? this._activeDimAxis.dimensionFormatter = new ve["a"](this.backendApi.localeInfo, this.backendApi.localeInfo.qDateFmt, null, null, "TS") : this._activeDimAxis.dimensionFormatter = this.chartFormatter.getFormattersForMeasures(this._data.qHyperCube.qDimensionInfo, [0])[0];
                        this.shouldShowMiniChart() ? this.components.scrollArea.showComponent() : this.components.scrollArea.hideComponent();
                        this.components.dimensionAxis.hideComponent()
                    } else {
                        this.components.dimensionAxis.showComponent();
                        this.components.dimensionAxis.setOffset(this.components.scrollArea.getOffset());
                        this.components.timeAxis.hideComponent();
                        this.components.continuousAxis.hideComponent()
                    }
                },
                _disablePagingTransitions: function e() {
                    je.call(this)
                },
                _enablePagingTransitions: function e() {
                    Fe.call(this)
                },
                _postResize: function e() {
                    this._super();
                    if (!this.components.dimensionAxis) return;
                    this._updateMinDiscreteUnitSize(this.components.dimensionAxis)
                },
                _updateMinDiscreteUnitSize: function e(t) {
                    var i = this._data.qHyperCube.qSize.qcy;
                    var a = this._data.qHyperCube;
                    var n = "S" === a.qMode ? "qDataPages" : "qStackedDataPages";
                    var s = a[n] && a[n][0] ? a[n][0].qArea.qHeight : 0;
                    if (s >= i && false === this.options.components.scrollArea.show) {
                        t.setMinDiscreteUnitSize(null);
                        return
                    }!t.isVisible(this._layoutMode) || "title" === this._data.dimensionAxis.show || "all" === this._data.dimensionAxis.show && "none" === this._data.dimensionAxis.label ? this._layoutMode === Z["a"].prototype.ShowFlags.SPARK ? t.setMinDiscreteUnitSize(7) : t.setMinDiscreteUnitSize(20) : t.setMinDiscreteUnitSize(28)
                },
                layout: function e() {
                    var t;
                    if (false === this.options.components.scrollArea.show) {
                        var i = this.components.dimensionAxis;
                        i._hideMyLabels = false;
                        t = function e() {
                            if (i._discreteSpacing * (i._groupSize || 1) < 20) {
                                i._hideMyLabels = true;
                                return true
                            }
                            return
                        }
                    }
                    this._super(this.components.dimensionAxis.isVertical() ? "vertical" : "horizontal", t);
                    He.call(this)
                },
                setIsDimensionContinuous: function e(t) {
                    if (this.isDimensionContinuous === t) return;
                    this.isDimensionContinuous = t;
                    this.components.scrollArea.setAllowResize(t);
                    this.checkScrollToggle()
                },
                checkScrollToggle: function e() {
                    if (this._navigation && this._on)
                        if (this.isDimensionContinuous) {
                            this._scrollController.off();
                            this._panZoomController.on()
                        } else {
                            this._panZoomController.off();
                            this.moreData ? this._scrollController.on() : this._scrollController.off()
                        }
                },
                on: function e() {
                    if (this._on) return;
                    this._super();
                    this.checkScrollToggle()
                },
                off: function e() {
                    if (!this._on) return;
                    if (this._navigation) {
                        this._scrollController.off();
                        this._panZoomController.off()
                    }
                    this._super()
                },
                destroy: function e() {
                    this._super();
                    this.cancelPromises = true;
                    this._disablePagingTransitions();
                    this.components.scrollArea.stopListen("scrollStart");
                    this.components.dimensionAxisTitle.stopListen("drill-up");
                    this._panZoomController.release();
                    this.components.timeAxis && this.components.timeAxis.stopListen("rendered");
                    this.components.continuousAxis && this.components.continuousAxis.stopListen("rendered");
                    this._scrollController.PanStart.unbind(this.panStartFn);
                    this._scrollController.PanUpdate.unbind(this.panUpdateFn);
                    this._scrollController.PanWheel.unbind(this.panWheelFn)
                }
            });
            var Ge = t["a"] = Ze
        },
        USFI: function(e, t, i) {
            "use strict";
            var a = i("9Bsw");

            function n() {
                this.alternativeTitleRetriever = a["a"].create();
                this.cache = {}
            }
            n.prototype.getDimensionTitle = r;
            n.prototype.getCachedDimensionTitle = o;
            n.prototype.getMeasureTitle = l;
            n.prototype.getCachedMeasureTitle = h;
            n.prototype.resetTitles = c;
            var s = n;

            function r(e, t, i) {
                var a = this;
                return this.alternativeTitleRetriever.getDimensionTitle(e, t, i).then((function(t) {
                    d(a.cache, e.qDef.cId, t);
                    return t
                }))
            }

            function o(e) {
                return u(this.cache, e.qDef.cId)
            }

            function l(e, t, i) {
                var a = this;
                return this.alternativeTitleRetriever.getMeasureTitle(e, t, i).then((function(t) {
                    d(a.cache, e.qDef.cId, t);
                    return t
                }))
            }

            function h(e) {
                return u(this.cache, e.qDef.cId)
            }

            function c() {
                this.alternativeTitleRetriever.resetTitles()
            }

            function u(e, t) {
                return e[t] || ""
            }

            function d(e, t, i) {
                e[t] = i
            }
            var p = {
                create: m
            };
            var f = t["a"] = p;

            function m() {
                return new s
            }
        },
        e4OJ: function(e, t, i) {
            "use strict";
            var a = i("4nJ1");

            function n(e, t) {
                var i = t.length;
                var a;
                var n;
                var s;
                var r;
                var o;
                if (e) {
                    n = !e.autoMinMax && ("min" === e.minMax || "minMax" === e.minMax) && null !== e.min && !Number.isNaN(+e.min);
                    s = !e.autoMinMax && ("max" === e.minMax || "minMax" === e.minMax) && null !== e.max && !Number.isNaN(+e.max)
                }
                r = Number.MAX_VALUE;
                o = -Number.MAX_VALUE;
                for (a = 0; a < i; a++) {
                    r = Math.min(r, t[a].qMin);
                    o = Math.max(o, t[a].qMax);
                    if (r <= 0 && o >= 0) return true
                }
                r = n ? e.min : r;
                o = s ? e.max : o;
                return r <= 0 && o >= 0
            }
            var s = {
                applyDisclaimerAttributes: function e(t, i, s, r, o) {
                    i || (i = {});
                    var l = a["a"].extend({
                        limitedData: false,
                        hasNegativeOrZeroData: false,
                        onlyNegativeOrZero: false,
                        onlyNanData: false,
                        onlyNullColor: false,
                        hasDataRangeIncludingZero: false
                    }, i);
                    a["a"].extend(i, l);
                    i.noDataExist = o.qHyperCube.qSize.qcy * o.qHyperCube.qSize.qcx === 0;
                    if (i.noDataExist) {
                        s.toggleClass("qv-viz-with-disclaimer", false);
                        return i
                    }
                    t = t || {};
                    t.overlay = t.overlay || false;
                    t.supportNegative = void 0 === t.supportNegative || t.supportNegative;
                    t.supportRangeOverZero = void 0 === t.supportRangeOverZero || t.supportRangeOverZero;
                    var h = a["a"].getValue(o, "qHyperCube.qDataPages.0.qArea.qWidth", 0) && a["a"].getValue(o, "qHyperCube.qDataPages.0.qArea.qHeight", 0);
                    h && true !== t.explicitLimitedData ? i.limitedData = !t.paging && o.qHyperCube.qSize.qcy > o.qHyperCube.qDataPages[0].qMatrix.length : i.limitedData = true === t.explicitLimitedData;
                    i.hasNegativeOrZeroData = !t.supportNegative && o.qHyperCube.qMeasureInfo.some((function(e) {
                        return e.qMin <= 0
                    }));
                    i.onlyNegativeOrZero = !t.supportNegative && o.qHyperCube.qMeasureInfo.every((function(e) {
                        return e.qMax <= 0 && e.qMax >= e.qMin
                    })) || 0 === o.qHyperCube.qSize.qcy;
                    i.onlyNanData = o.qHyperCube.qMeasureInfo.every((function(e) {
                        return e.qMax < e.qMin || "NaN" === e.qMax
                    }));
                    i.hasDataRangeIncludingZero = !t.supportRangeOverZero && n(o.measureAxis, o.qHyperCube.qMeasureInfo, o.lineType);
                    if (i.onlyNegativeOrZero && t.overlay || !(i.limitedData || i.hasNegativeOrZeroData && !t.supportNegative || i.hasDataRangeIncludingZero || i.onlyNullColor)) {
                        s.toggleClass("qv-viz-with-disclaimer", false);
                        r.options.showDisclaimerStar = false
                    } else {
                        s.toggleClass("qv-viz-with-disclaimer", t.bottom);
                        r.options.showDisclaimerStar = true
                    }
                    return i
                }
            };
            t["a"] = s
        },
        e5Is: function(e, t, i) {
            "use strict";
            var a = i("mIEi");
            var n = i("T7lR");
            var s = i("GF7R");

            function r(e) {
                r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                };
                return r(e)
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    "value" in a && (a.writable = true);
                    Object.defineProperty(e, a.key, a)
                }
            }

            function h(e, t, i) {
                t && l(e.prototype, t);
                i && l(e, i);
                return e
            }

            function c(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: true,
                        configurable: true
                    }
                });
                t && u(e, t)
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function e(t, i) {
                    t.__proto__ = i;
                    return t
                };
                return u(e, t)
            }

            function d(e) {
                var t = m();
                return function i() {
                    var a = v(e),
                        n;
                    if (t) {
                        var s = v(this).constructor;
                        n = Reflect.construct(a, arguments, s)
                    } else n = a.apply(this, arguments);
                    return p(this, n)
                }
            }

            function p(e, t) {
                if (t && ("object" === r(t) || "function" === typeof t)) return t;
                return f(e)
            }

            function f(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function m() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if ("function" === typeof Proxy) return true;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                    return true
                } catch (e) {
                    return false
                }
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return v(e)
            }
            var g = function(e) {
                c(i, e);
                var t = d(i);

                function i(e) {
                    var a;
                    o(this, i);
                    a = t.call(this, e);
                    a.ranges = [];
                    a.color = s["a"].toRGBA("#52cc52", .2);
                    return a
                }
                h(i, [{
                    key: "setRanges",
                    value: function e(t) {
                        this.ranges = t
                    }
                }, {
                    key: "update",
                    value: function e(t) {
                        var i = this;
                        var a = this.ranges.map((function(e) {
                            var a = t.getPositionOfValue(e.min);
                            var s = t.getPositionOfValue(e.max);
                            var r = new n["a"](a, 0, s - a, i.rect.height);
                            r.fill = i.color;
                            return r
                        }));
                        this.renderer.stage.removeChildren();
                        if (a.length) {
                            this.renderer.stage.addChildren(a);
                            this.show()
                        } else this.hide()
                    }
                }]);
                return i
            }(a["a"]);
            t["a"] = g
        },
        gapF: function(e, t, i) {
            "use strict";
            var a = i("4nJ1");
            var n = i("n7pR");
            var s = i("zjn0");

            function r(e, t) {
                var i;
                var s = "undefined" !== typeof t.paletteColor ? n["a"].Theme.resolveColor(t.paletteColor) : "transparent";
                var r = {
                    value: 0,
                    line: {
                        stroke: s,
                        strokeDasharray: null === t || void 0 === t || null === (i = t.style) || void 0 === i ? void 0 : i.lineType
                    }
                };
                return a["a"].extend(true, r, e || {})
            }

            function o(e, t) {
                var i = t && t.chartID;
                var s = n["a"].getStyle(i, "referenceLine.label.name", "color");
                var r = n["a"].getFontSize(i, "referenceLine.label.name", "fontSize");
                var o = n["a"].getStyle(i, "referenceLine.label.name", "fontFamily");
                t.paletteColor ? s = n["a"].Theme.resolveColor(t.paletteColor) : s || (s = "transparent");
                var l = {
                    value: 0,
                    line: {
                        stroke: "transparent"
                    },
                    label: {
                        align: "center",
                        vAlign: "middle",
                        text: "",
                        fill: s,
                        fontFamily: o,
                        fontSize: r,
                        maxWidthPx: 135
                    }
                };
                return a["a"].extend(true, l, e || {})
            }
            var l = function e(t) {
                return t && false !== t.show && 0 !== t.show && "0" !== t.show && void 0 !== t.refLineExpr
            };

            function h(e) {
                var t = e.refLine,
                    i = e.label,
                    a = e.valueString;
                if (false !== t.showValue) {
                    if (false !== t.showLabel) return "".concat(i, " ").concat(s["a"].lrm, "(").concat(a, ")").concat(s["a"].lrm);
                    return "".concat(s["a"].lrm, "(").concat(a, ")").concat(s["a"].lrm)
                }
                if (false !== t.showLabel) return i;
                return ""
            }
            t["a"] = {
                lineSettings: r,
                lineLabelSettings: o,
                isVisible: l,
                getRefLineTitle: h
            }
        },
        mIEi: function(e, t, i) {
            "use strict";
            var a = i("plXO");
            var n = i("sWge");

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    "value" in a && (a.writable = true);
                    Object.defineProperty(e, a.key, a)
                }
            }

            function o(e, t, i) {
                t && r(e.prototype, t);
                i && r(e, i);
                return e
            }
            var l = function() {
                function e(t, i) {
                    s(this, e);
                    this.wrapper = document.createElement("div");
                    this.wrapper.style.position = "absolute";
                    this.renderer = new a["a"](this.wrapper, i);
                    this.minorAxis = null;
                    this.majorAxis = null;
                    t.appendChild(this.wrapper)
                }
                o(e, [{
                    key: "update",
                    value: function e() {}
                }, {
                    key: "release",
                    value: function e() {
                        this.wrapper && this.wrapper.parentNode && this.wrapper.parentNode.removeChild(this.wrapper);
                        this.wrapper = null;
                        this.renderer.release();
                        this.minorAxis = null;
                        this.majorAxis = null
                    }
                }, {
                    key: "show",
                    value: function e() {
                        this.wrapper.style.display = "block"
                    }
                }, {
                    key: "hide",
                    value: function e() {
                        this.wrapper.style.display = "none"
                    }
                }, {
                    key: "render",
                    value: function e() {
                        if ("none" !== this.wrapper.style.display) return this.renderer.render();
                        return n["a"].resolve()
                    }
                }, {
                    key: "clear",
                    value: function e() {
                        this.renderer.clear()
                    }
                }]);
                return e
            }();
            t["a"] = l
        },
        n7pR: function(e, t, i) {
            "use strict";
            var a = i("GF7R");
            var n = i("UV1h");
            var s = {
                Theme: n["a"],
                TRANSPARENT_BLACK: "rgba( 0,0,0,0.2 )",
                TRANSPARENT_WHITE: "rgba( 255,255,255,0.7 )",
                LIGHT_GREY: "#ccc",
                DARK_GREY: "#666",
                BLACK: "#000",
                WHITE: "#fff",
                getInverse: function e(t) {
                    var i = new a["a"](t);
                    var n = i.getAlpha();
                    if (0 === n) return this.BLACK;
                    return i.isDark() ? this.WHITE : this.BLACK
                },
                getContrastingGrey: function e(t) {
                    var i = new a["a"](t);
                    var n = i.getAlpha();
                    if (0 === n) return this.DARK_GREY;
                    return a["a"].getBestContrast(i, new a["a"](s.LIGHT_GREY), new a["a"](s.DARK_GREY))
                },
                getBestContrast: function e(t, i, n) {
                    return a["a"].getBestContrast(new a["a"](t), new a["a"](i), new a["a"](n))
                },
                getContrastingTransparent: function e(t) {
                    var i = new a["a"](t);
                    var n = i.getAlpha();
                    if (0 === n || "none" === t) return this.TRANSPARENT_BLACK;
                    return i.isDark() ? this.TRANSPARENT_WHITE : this.TRANSPARENT_BLACK
                },
                getStyle: function e(t, i, a) {
                    t = t || "";
                    this["".concat(t, "StyleService")] || (this["".concat(t, "StyleService")] = n["a"].initializeService("object.".concat(t)));
                    return this["".concat(t, "StyleService")].getStyle(i, a)
                },
                getFontSize: function e(t, i, a) {
                    t = t || "";
                    this["".concat(t, "StyleService")] || (this["".concat(t, "StyleService")] = n["a"].initializeService("object.".concat(t)));
                    var s = this["".concat(t, "StyleService")];
                    return s.scaleFontSize(s.getStyle(i, "fontSize"), a)
                }
            };
            t["a"] = s
        },
        qU3k: function(e, t, i) {
            "use strict";
            var a = i("mWu2");
            var n = i("2Hli");
            var s = i("gl1R");
            var r = i("oxue");
            var o = i("fwzx");
            var l = i("KBmc");
            var h = i("6uJb");
            var c = '<li class="em-item lui-list__item" qva-activate="alternativeItemClicked($event,item,alternative);">\n\t<i ng-if="alternative.hasIcon" class="em-item-icon lui-icon lui-icon--tick lui-list__aside" ng-class="{\'em-invisible\': !alternative.selected}"></i>\n\t<span class="lui-list__text lui-list__text--ellipsis" qva-direction x-dir-text="{{alternative.title()}}"  title="{{alternative.title()}}">{{alternative.title()}}&nbsp;</span>\n</li>';
            var u = i("USFI");
            var d = i("BcSl");

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    "value" in a && (a.writable = true);
                    Object.defineProperty(e, a.key, a)
                }
            }

            function m(e, t, i) {
                t && f(e.prototype, t);
                i && f(e, i);
                return e
            }
            a["default"].directive("hypercubeDataItem", [function() {
                return {
                    restrict: "A",
                    template: c,
                    replace: true
                }
            }]);
            var v = function() {
                function e(t, i, a) {
                    p(this, e);
                    this._props = t;
                    this._app = i;
                    this._hyperCubePath = a;
                    this.libraryTitles = {};
                    this.cachingAlternativeTitleRetriever = u["a"].create()
                }
                m(e, [{
                    key: "setProperties",
                    value: function e(t) {
                        this._props = t;
                        this.cachingAlternativeTitleRetriever.resetTitles()
                    }
                }, {
                    key: "updateAlternativeItem",
                    value: function e(t, i, a, s, r) {
                        var h = n["a"].getValue(this._props, s, []);
                        var c = n["a"].getValue(this._props, a, []);
                        var u = h[i.index];
                        if (i.selected) return;
                        i.original && (u = n["a"].getValue(this._props, a, [])[i.index]);
                        u.qAttributeExpressions = o["a"].moveById(t.data.qAttributeExpressions, u.qAttributeExpressions, o["a"].IDMAP.COLOR_BY_EXPRESSION);
                        var p = [d["a"].CUSTOM.EXPRESSION, d["a"].CUSTOM.TITLE, d["a"].CUSTOM.DESCRIPTION, d["a"].CUSTOM.IMAGES];
                        p.forEach((function(e) {
                            u.qAttributeExpressions = o["a"].moveAllById(t.data.qAttributeExpressions, u.qAttributeExpressions, e, "cId")
                        }));
                        var f;
                        var m;
                        var v;
                        var g;
                        if (r)
                            for (f = 0; f < r.length; f++) {
                                g = r[f];
                                m = n["a"].getValue(c[t.index], g.path, []);
                                v = n["a"].getValue(h[i.index], g.path, []);
                                m && m.hasOwnProperty(g.property) && v && v.hasOwnProperty(g.property) && (v[g.property] = m[g.property])
                            }
                        h.splice(i.index, 1, c[t.index]);
                        c.splice(t.index, 1, u);
                        l["a"].colorByUpdater(this._props, "qHyperCubeDef.")
                    }
                }, {
                    key: "getDimensionOptions",
                    value: function e(t, i, a, n, r) {
                        var o = this;
                        return t.concat(i).filter((function(e) {
                            return e.qDef.cId === a.qDef.cId || !s["a"].getDimensionLayout(e.qDef.cId, n, o._hyperCubePath)
                        })).map((function(e) {
                            var n = o.cachingAlternativeTitleRetriever.getCachedDimensionTitle(e);
                            o.cachingAlternativeTitleRetriever.getDimensionTitle(e, o._app).then((function(e) {
                                n = e
                            }));
                            return {
                                id: e.qDef.cId,
                                index: -1 !== t.indexOf(e) ? t.indexOf(e) : i.indexOf(e),
                                original: -1 !== t.indexOf(e),
                                ref: "dimensions",
                                selected: e.qDef.cId === a.qDef.cId,
                                hasIcon: r,
                                title: function e() {
                                    return n
                                }
                            }
                        }))
                    }
                }, {
                    key: "getMeasureOptions",
                    value: function e(t, i, a, n, r) {
                        var o = this;
                        return t.concat(i).filter((function(e) {
                            return e.qDef.cId === a.qDef.cId || !s["a"].getMeasureLayout(e.qDef.cId, n, o._hyperCubePath)
                        })).map((function(e) {
                            var n = o.cachingAlternativeTitleRetriever.getCachedMeasureTitle(e);
                            o.cachingAlternativeTitleRetriever.getMeasureTitle(e, o._app).then((function(e) {
                                n = e
                            }));
                            return {
                                id: e.qDef.cId,
                                index: -1 !== t.indexOf(e) ? t.indexOf(e) : i.indexOf(e),
                                original: -1 !== t.indexOf(e),
                                ref: "measures",
                                selected: e.qDef.cId === a.qDef.cId,
                                hasIcon: r,
                                title: function e() {
                                    return n
                                }
                            }
                        }))
                    }
                }, {
                    key: "getTitle",
                    value: function e(t, i) {
                        var a = t.qLibraryId;
                        var n = this;
                        var s = h["default"].get(i ? "Object.ErrorMessage.MissingDimension" : "Object.ErrorMessage.MissingMeasure");

                        function o() {
                            if (i) return n._app.getDimensionList().then((function(e) {
                                return r["a"].findLibraryDimension(a, e)
                            }));
                            return n._app.getMeasureList().then((function(e) {
                                return r["a"].findLibraryMeasure(a, e)
                            }))
                        }
                        if (a) {
                            if ("undefined" !== typeof this.libraryTitles[a]) {
                                if (null === this.libraryTitles[a]) return s;
                                if ("string" !== typeof this.libraryTitles[a]) return "";
                                return this.libraryTitles[a]
                            }
                            this.libraryTitles[a] = o().then((function(e) {
                                if (e) {
                                    n.libraryTitles[a] = e.qData.title;
                                    return n.libraryTitles[a]
                                }
                                n.libraryTitles[a] = null;
                                return s
                            }));
                            return this.libraryTitles[a]
                        }
                        return i ? t.qDef.qFieldLabels[0] || t.qDef.qFieldDefs[0] : t.qDef.qLabel || t.qDef.qDef
                    }
                }]);
                return e
            }();
            var g = t["a"] = v
        },
        tccY: function(e, t, i) {
            "use strict";
            var a = i("mWu2");
            var n = i("6uJb");
            var s = i("sWge");
            var r = i("Hk9t");
            var o = i("ohbW");
            var l = i("plXO");
            var h = {
                hasAlternatives: d,
                getTitlesApproxWidth: f
            };

            function c(e, t, i) {
                var a = [];
                var n = "dimension" === t ? e.qDimensionInfo : e.qMeasureInfo;
                var s = false;
                var r;
                var o;
                var l;
                if (!t) return;
                for (l = 0; l < n.length; l++) {
                    r = n[l];
                    s = r.qGroupFallbackTitles && r.qGroupFallbackTitles.length > 1;
                    o = s ? r.qGroupFallbackTitles.slice(0, r.qGroupPos + 1) : [r.qFallbackTitle];
                    a.push({
                        labels: o,
                        label: o[o.length - 1],
                        locked: r.qLocked && i,
                        isDrill: s && i,
                        currentDrillDownLevels: r.qGroupPos,
                        wrapperStyle: {},
                        index: l
                    })
                }
                return a
            }

            function u(e, t) {
                if (!(e && e.getProperties)) return s["a"].resolve();
                var i = "dimension" === t ? "qDimensions" : "qMeasures";
                var a = e.getProperties().then((function(t) {
                    if (t.qExtendsId) return e.app.getObject(t.qExtendsId).then((function(e) {
                        return e.getProperties()
                    }));
                    return t
                }));
                return a.then((function(e) {
                    return h.hasAlternatives(e.qHyperCubeDef && e.qHyperCubeDef.qLayoutExclude, i)
                }))
            }

            function d(e, t) {
                return e && e.qHyperCubeDef && e.qHyperCubeDef[t].length > 0
            }

            function p(e, t, i, a) {
                if (!t.width()) return;
                if ("top-to-bottom" === i || "bottom-to-top" === i) {
                    e.width = t.height();
                    e.height = t.width();
                    if ("top-to-bottom" === i) {
                        e.marginTop = -e.width + e.height;
                        e.marginLeft = e.height
                    } else {
                        e.marginTop = e.width + e.height;
                        e.marginLeft = 0
                    }
                } else {
                    e.width = t.width();
                    e.height = t.height();
                    e.marginLeft = 0;
                    e.marginTop = 0
                }
                var n = a ? a.map((function(e) {
                    return e.label
                })) : [];
                var s = h.getTitlesApproxWidth(n, e.font);
                if (s > e.width) {
                    e.justifyContent = "flex-start";
                    e.minWidth = 70
                } else {
                    e.justifyContent = "center";
                    e.minWidth = "auto"
                }
            }

            function f(e, t) {
                var i = 0;
                e.forEach((function(e) {
                    "string" === typeof e && (i += l["a"].getTextWidth(e, t))
                }));
                return i || null
            }
            var m = {
                getTitleDataFromHyperCube: c,
                modelHasAlternatives: u,
                setWrapperStyle: p,
                getTitlesApproxWidth: f,
                hasAlternatives: d
            };
            var v = '<div ng-show="visible"\n     class="qva-chart-data-title">\n     <div class="qva-chart-data-title-rotate" ng-style="fontStyle" ng-class="direction" qva-direction x-dir-setting="{{options.direction}}">\n          <div class="qva-chart-data-title-align ellips-text">\n               <div class="qva-chart-data-title-wrapper ellips-text" ng-repeat-start="titleData in titles" ng-style="titleData.wrapperStyle" >\n                    <qva-breadcrumb-bar ng-if="titleData.isDrill" data="titleData" model="model" disabled="disabled || object.selectionsApi.active" type="type" dock="dock" column-index="$index" options="options"></qva-breadcrumb-bar>\n                    <qva-default-data-title ng-if="!titleData.isDrill" data="titleData" model="model" disabled="disabled || object.selectionsApi.active" type="type" dock="dock" options="options"></qva-default-data-title>\n               </div>\n               <span ng-repeat-end ng-if="!$last">, &nbsp;</span>\n          </div>\n\n     </div>\n</div>\n';
            var g = '<div class="default-data-title-wrapper ellips-text">\n     <qva-simple-data-title ng-if="!data.hasAlternatives" label="data.label" locked="data.locked" options="options"></qva-simple-data-title>\n     <qva-dropdown-data-title ng-if="data.hasAlternatives" data="data" model="model" disabled="disabled" type="type" dock="dock" options="options"></qva-dropdown-data-title>\n</div>';
            var x = '<div class="chart-data-title ellips-text" qva-direction x-dir-text="{{label}}" x-dir-setting="{{options.direction}}" >\n     <i ng-if="locked" class="lui-icon lui-icon--lock" title="{{lockedTooltip}}"></i>\n     <span class="chart-data-title-label" title="{{label}}" qva-direction x-dir-text="{{label}}" x-dir-setting="{{options.direction}}">{{label}}</span>\n</div>';
            var _ = i("UV1h");
            var y = i("4nJ1");
            var b = '<div class="qva-dropdown-data-title">\n     <div class="dropdown-data-title-wrapper" ng-class="{\'interactive\' : !disabled, \'active\': isMenuOpen}" qva-activate="openAlternativePopover()" qva-outside-ignore-for="{{\'dataTitle-\' + $id}}">\n          <qva-simple-data-title locked="data.locked" label="data.label" options="options"></qva-simple-data-title>\n          <span class="dropdown-arrow"></span>\n     </div>\n</div>';
            var M = '<lui-popover class="qva-alternative-data-picker"\n\t\t\t\t\t  align-to="alignTo"\n\t\t\t\t\t  position="position"\n\t\t\t\t\t  collision="\'flip fit\'"\n\t\t\t\t\t  height="\'auto\'"\n\t\t\t\t\t  on-close-view="closePopover();"\n\t\t\t\t\t  qva-outside-ignore-for="{{qvaOutsideIgnoreFor}}">\n\t<div class="em-section-content em-alternative-data qva-alternative-data-picker-list" qva-direction x-dir-setting="{{options.direction}}">\n\t\t<div hypercube-data-item ng-repeat="alternative in item.alternatives" item="item"></div>\n\t</div>\n</lui-popover>\n';
            var A = i("qYY7");
            var D = i("rQnm");
            var w = i("qU3k");
            var S = i("2Hli");
            var C = i("wIyQ");
            var q = i("a7yF");
            var L;
            var P = {
                template: M,
                controller: ["$scope", function(e) {
                    e.position || (e.position = "right");
                    var t = new w["a"](e.args.effectiveProperties, e.args.model.app);
                    var i = new D["a"](e.args.model);
                    e.alternativeItemClicked = function(a, n, s) {
                        a.stopPropagation();
                        t.updateAlternativeItem(n, s, e.definition.items[s.ref].ref, e.definition.items[s.ref].alternativeRef, [{
                            path: "qDef",
                            property: "series"
                        }]);
                        i.saveSoftProperties(e.args.prevEffectiveProperties, e.args.effectiveProperties);
                        e.closePopover()
                    }
                }],
                scope: {
                    alignTo: "=",
                    position: "=",
                    args: "=",
                    definition: "=",
                    item: "=",
                    type: "=",
                    closePopover: "=",
                    qvaOutsideIgnoreFor: "=",
                    options: "="
                }
            };

            function k(e) {
                var t = {
                    left: "right",
                    right: "left",
                    top: "bottom",
                    bottom: "top"
                };
                return t[e]
            }
            a["default"].directive("qvaDropdownDataTitle", [function() {
                return {
                    replace: true,
                    template: b,
                    restrict: "E",
                    scope: {
                        model: "=",
                        type: "=",
                        data: "=",
                        disabled: "=",
                        dock: "=",
                        options: "="
                    },
                    link: function e(t, i) {
                        var n = a["default"].getService("$cacheFactory");
                        var r = n.get("em-object");
                        var o = {};
                        var l = t.model;
                        var h = new w["a"](null, l.app);
                        t.closePopover = function() {
                            if (!t.isMenuOpen) return;
                            t.isMenuOpen = false;
                            if (L) {
                                L.close();
                                L = null
                            }
                        };
                        t.openAlternativePopover = function() {
                            var e = k(t.dock);
                            if (t.disabled) return;
                            if (t.isMenuOpen) {
                                t.closePopover();
                                return
                            }
                            t.isMenuOpen = true;
                            L = a["default"].getService("luiPopover").show({
                                template: P.template,
                                controller: P.controller,
                                input: t.popoverSettings,
                                alignTo: i[0],
                                dock: e,
                                variant: "inverse",
                                closeOnOutside: true,
                                closeOnEscape: true,
                                outsideIgnore: "dataTitle-".concat(t.$id)
                            });
                            L.closed.then((function() {
                                t.isMenuOpen = false
                            }))
                        };
                        t.refreshItems = function() {
                            s["a"].all({
                                effectiveProperties: l.getEffectiveProperties(),
                                properties: l.getProperties().then((function(e) {
                                    if (e.qExtendsId) return l.app.getObject(e.qExtendsId).then((function(e) {
                                        return e.getProperties()
                                    }));
                                    return e
                                })),
                                layout: l.getLayout()
                            }).then((function(e) {
                                if (t.destroyed) return;
                                o.args = {
                                    layout: e.layout,
                                    model: l,
                                    properties: e.properties,
                                    effectiveProperties: y["a"].extend(true, {}, e.effectiveProperties),
                                    prevEffectiveProperties: y["a"].extend(true, {}, e.effectiveProperties),
                                    cache: r
                                };
                                o.data = e.effectiveProperties;
                                o.definition = A["a"].data;
                                o.item = t.getAlternativeItem(o);
                                t.popoverSettings = {
                                    args: o.args,
                                    item: o.item,
                                    type: o.type,
                                    definition: o.definition,
                                    closePopover: t.closePopover,
                                    qvaOutsideIgnoreFor: "dataTitle-".concat(t.$id),
                                    options: t.options
                                };
                                t.isMenuOpen && t.closePopover()
                            }))
                        };
                        t.refreshItems();
                        t.$on("datachanged", (function() {
                            t.refreshItems()
                        }));
                        t.getAlternativeItem = function(e) {
                            var i;
                            var a;
                            var n;
                            var s = t.data.index;
                            var r;
                            if ("dimension" === t.type) {
                                r = e.data.qHyperCubeDef.qDimensions[s];
                                n = h.getDimensionOptions;
                                a = "dimensions"
                            } else {
                                r = e.data.qHyperCubeDef.qMeasures[s];
                                n = h.getMeasureOptions;
                                a = "measures"
                            }
                            if (!r) return;
                            i = S["a"].getValue(e.data, e.definition.items[a].alternativeRef, []);
                            var o = S["a"].getValue(e.data, e.definition.items[a].ref, []);
                            i = n.call(h, o, i, r, e.args.layout, true);
                            return {
                                alternatives: i,
                                index: Number.isNaN(+t.data.index) ? 0 : t.data.index,
                                data: r
                            }
                        };
                        C["a"].on("end", t.closePopover);
                        t.$on("$destroy", (function() {
                            C["a"].off("end", t.closePopover);
                            t.destroyed = true;
                            t.closePopover()
                        }))
                    }
                }
            }]);
            var O = i("GF7R");
            var T = '<div class="qv-breadcrumb">\n\t<div class="qv-breadcrumb-container">\n\t\t<span class="lui-icon lui-icon--drill-down" title="{{drillDownTooltip}}"></span>\n\t\t\t<span class="crumb-item" ng-repeat="label in data.labels track by $index">\n\n\t\t\t\t<div ng-style="getCrumbStyle(hoverIndex === $index, $last, disabled)"\n\t\t\t\t\t ng-mouseover="hoverIndex = $index"\n\t\t\t\t\t ng-mouseout="hoverIndex = -1"\n\t\t\t\t\t ng-class="{\'crumb-button\' : !$last, \'disabled\' : disabled}"\n\t\t\t\t\t qva-activate="onClick($event, $index, $last)">\n\n\t\t\t\t\t<div ng-if="!$last" class="chart-data-title" >\n\t\t\t\t\t\t<span qva-direction x-dir-text="{{label}}" class="chart-data-title-label" title="{{label}}">{{label}}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<qva-default-data-title ng-if="$last" data="data" model="model" disabled="disabled" type="type" direction="direction" dock="dock" options="options"></qva-default-data-title>\n\n\t\t\t\t\t<span class="lui-icon lui-icon--triangle-left" ng-if="!$last"></span>\n\t\t\t\t\t<span class="lui-icon lui-icon--triangle-right" ng-if="!$last"></span>\n\t\t\t\t</div>\n\t\t\t</span>\n\t</div>\n</div>';
            var I = i("Z9ZH");
            var R = {};

            function N(e) {
                var t = _["a"].initializeService("object.".concat(e.options.parentType || ""));
                var i = t.getStyle("", "backgroundColor");
                var a = t.getStyle("axis.title", "color");
                var n = t.getStyle("axis.title.disabled", "color");
                R.crumbColor = {
                    color: a
                };
                R.crumbButtonColor = {
                    color: n
                };
                R.crumbButtonHoverColor = {
                    color: a
                };
                R.crumbButtonLockedColor = {
                    color: a
                };
                R.crumbButtonDisabledColor = {
                    color: n
                };
                var s = O["a"].toRGBA(i, 0);
                var r = O["a"].toRGBA(i, 1);
                e.faderStyle = {
                    background: "linear-gradient(to right, ".concat(r, ", ").concat(s, ")")
                }
            }
            a["default"].directive("qvaBreadcrumbBar", [function() {
                return {
                    template: T,
                    restrict: "E",
                    replace: true,
                    scope: {
                        data: "=",
                        type: "=?",
                        model: "=?",
                        disabled: "=?",
                        dock: "=?",
                        columnIndex: "=",
                        options: "="
                    },
                    link: function e(t, i) {
                        t.hoverIndex = -1;
                        t.height = i.width();
                        t.singleLabelMode = true;
                        t.onClick = function(e, i, a) {
                            if (!t.disabled && !a) {
                                t.$emit("drill-up", t.columnIndex, i);
                                e.stopImmediatePropagation()
                            }
                        };
                        t.drillDownTooltip = n["default"].get("Tooltip.dimensions.drilldown");
                        t.getCrumbStyle = function(e, t, i) {
                            if (i) return R.crumbButtonDisabledColor;
                            if (t) return {};
                            if (e) return R.crumbButtonHoverColor;
                            return R.crumbButtonColor
                        };
                        N(t)
                    }
                }
            }]);
            var z = 3;
            a["default"].directive("qvaSimpleDataTitle", [function() {
                return {
                    replace: true,
                    template: x,
                    restrict: "E",
                    scope: {
                        label: "=",
                        locked: "=?",
                        options: "="
                    },
                    link: function e(t) {
                        t.lockedTooltip = n["default"].get("Tooltip.selections.locked")
                    }
                }
            }]);
            a["default"].directive("qvaDefaultDataTitle", [function() {
                return {
                    replace: true,
                    template: g,
                    restrict: "E",
                    scope: {
                        data: "=",
                        type: "=?",
                        model: "=?",
                        disabled: "=?",
                        dock: "=?",
                        options: "="
                    }
                }
            }]);

            function j(e) {
                this.relevantSize = this._titleFontHeight + z + (e ? this._extraSizeWhenAlternatives : 0)
            }

            function V(e, t, i, a) {
                var n = e.getStyle(t, "fontSize");
                var s = e.getStyle(t, "fontFamily");
                var r = e.scaleFontSize(n, i);
                var o = parseInt(r, 10) * a;
                return "normal ".concat(o, "px ").concat(s)
            }

            function E() {
                this._innerScope.options.parentType = this.options.parentType;
                var e = _["a"].initializeService("object.".concat(this.options.parentType));
                var t = e.layoutMap[this._layoutMode] || "medium";
                var i = "full" === t ? this._layoutMode : "medium";
                var a = V(e, "axis.title", i, this._innerScope.fontScale);
                this._innerScope.fontStyle.font = a;
                this._innerScope.fontStyle.color = e.getStyle("axis.title", "color");
                this._titleFontHeight = o["a"].getFontHeight(a)
            }
            var F = r["a"].extend("DataTitle", {
                init: function e() {
                    var t = Array.prototype.slice.call(arguments);
                    var i = this;
                    t.push(v);
                    this._super.apply(this, t);
                    this._showTitle = true;
                    this._innerScope.fontScale = 1;
                    this._currentDrillDownLevels = [];
                    this._innerScope.disabled = true;
                    this._selectionsEnabled = true;
                    this._innerScope.fontStyle = {
                        font: "12px 'QlikView Sans', sans-serif"
                    };
                    E.call(this);
                    this._extraSizeWhenAlternatives = 10;
                    this.drillUpRef = this._innerScope.$on("drill-up", (function(e, t, a) {
                        i._currentDrillDownLevels[t] - a > 0 && i.fire("drill-up", [e, t, i._currentDrillDownLevels[t] - a])
                    }))
                },
                calculateRelevantSize: function e() {
                    this._super();
                    E.call(this);
                    j.call(this, this._hasAlternatives)
                },
                setShowStrategy: function e(t) {
                    this._showTitle = ["all", "title"].includes(t)
                },
                setDock: function e(t) {
                    this._super(t);
                    this._innerScope.direction = "right" === t ? "top-to-bottom" : "left" === t ? "bottom-to-top" : "";
                    this._innerScope.dock = t
                },
                setType: function e(t) {
                    this._innerScope.type = t
                },
                setModel: function e(t) {
                    this._innerScope.model = t
                },
                setSelectionsEnabled: function e(t) {
                    this._selectionsEnabled = t;
                    this._changed = true;
                    this.invalidateProperties("dataTitle.setSelectionsEnabled")
                },
                setData: function e(t) {
                    this._super(t);
                    if (!t) return s["a"].resolve();
                    var i = this;
                    var a = this._innerScope.model;
                    if (!a || a.layout && !!a.layout.snapshotData) {
                        i._changed = true;
                        return s["a"].resolve()
                    }
                    return m.modelHasAlternatives(this._innerScope.model, this._innerScope.type).then((function(e) {
                        i._hasAlternatives = e;
                        i._changed = true;
                        return i.invalidateProperties("dataTitle.setData")
                    }))
                },
                _updateProperties: function e() {
                    this._super();
                    if (this._changed && this._data) {
                        var t = this._data;
                        if (t.qHyperCube && this._innerScope.type) {
                            t = m.getTitleDataFromHyperCube(t.qHyperCube, this._innerScope.type, this._selectionsEnabled);
                            this._currentDrillDownLevels = t.map((function(e) {
                                return e.currentDrillDownLevels
                            }))
                        }
                        if (!this._innerScope) return;
                        t.forEach((function(e) {
                            e.hasAlternatives = this._hasAlternatives
                        }), this);
                        this._innerScope.titles = t;
                        this._innerScope.$broadcast("datachanged");
                        m.setWrapperStyle(this._innerScope.fontStyle, this._innerContainer, this._innerScope.direction, this._innerScope.titles)
                    }
                    this._changed = false
                },
                isVisible: function e() {
                    return this._super.apply(this, arguments) && this._showTitle
                },
                on: function e() {
                    this._innerScope.disabled = false
                },
                off: function e() {
                    this._innerScope.disabled = true
                },
                paint: function e() {
                    this._innerScope.visible = true;
                    this._innerScope.fontScale = this.chartScale;
                    E.call(this);
                    this._innerScope.$digest();
                    m.setWrapperStyle(this._innerScope.fontStyle, this._innerContainer, this._innerScope.direction, this._innerScope.titles)
                },
                release: function e() {
                    this._super();
                    this.drillUpRef()
                },
                clear: function e() {
                    this._super();
                    this._innerScope.visible = false
                }
            });
            var H = t["a"] = F
        },
        wntQ: function(e, t, i) {
            "use strict";
            var a = i("nHjU");
            var n = i("WoAn");
            var s = i("4nJ1");
            var r = i("hpzB");

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    "value" in a && (a.writable = true);
                    Object.defineProperty(e, a.key, a)
                }
            }

            function h(e, t, i) {
                t && l(e.prototype, t);
                i && l(e, i);
                return e
            }
            var c = {
                LINE: "line",
                AREA: "area",
                STACKED: "stackedArea"
            };
            var u = {
                GAP: "gap",
                CONNECT: "connect",
                ZERO: "zero"
            };

            function d(e, t, i, a) {
                return i < e || a > t
            }

            function p(e) {
                return e.color.byMeasureDef && e.color.byMeasureDef.activeMeasureIndex >= 0 && 1 === e.qHyperCube.qMeasureInfo.length
            }
            var f = function() {
                function e() {
                    o(this, e);
                    this._lineObjectSettings = []
                }
                h(e, [{
                    key: "update",
                    value: function e(t, i) {
                        this._updateLineObjectsSettings(t, s["a"].extend({
                            selections: this._getSelected(t, i.numDimensions)
                        }, i))
                    }
                }, {
                    key: "getLineObjectsSettings",
                    value: function e() {
                        return this._lineObjectSettings
                    }
                }, {
                    key: "getPointsOutOfRange",
                    value: function e() {
                        return this._outOfRange.points
                    }
                }, {
                    key: "_updateLineObjectsSettings",
                    value: function e(t, i) {
                        var a = t ? t.length : 0;
                        this._outOfRange = {
                            up: {},
                            down: {},
                            points: []
                        };
                        this._lineObjectSettings = [];
                        for (var n = 0; n < a; n++) {
                            var r = t[n];
                            var o = i.minorAxes[i.measureToAxisIndex[r.measureIdx]];
                            var l = i.axesSettings[i.measureToAxisIndex[r.measureIdx]];
                            var h = this._getColorSettings(i.colorMap, l, o);
                            var c = [];
                            this._updateLinePoints(t[n].points, c, this._outOfRange, s["a"].extend({
                                majorAxis: i.majorAxis,
                                minorAxis: o,
                                measureIdx: r.measureIdx,
                                axisSettings: l,
                                isLineSelected: i.selections.lines.indexOf(n) >= 0
                            }, i));
                            var u = s["a"].extend({
                                info: t.info,
                                colors: h,
                                clippings: this._getClippings(o, i.rect),
                                idx: t.idx,
                                points: c
                            }, i);
                            this._lineObjectSettings.push(u)
                        }
                    }
                }, {
                    key: "_updateLinePoints",
                    value: function e(t, i, a, n) {
                        var s = .5;
                        var o = t ? t.length : 0;
                        var l = 1 === o;
                        var h = n.yMirrorMode;
                        var p = n.rect.width;
                        var f = n.rect.height;
                        var m = 0;
                        for (var v = 0; v < o; v++) {
                            if (!t[v]) continue;
                            var g = t[v];
                            var x = g.idx;
                            var _ = {
                                x: n.isNumeric ? n.numericAxis.getPositionOfValue(g.dimValue) : n.majorAxis.getPositionOfValue(x, 0),
                                y: n.minorAxis.zeroPos
                            };
                            var y = g.cacheCircle;
                            if (y) {
                                y.cx = _.x;
                                y.cy = _.y
                            }
                            if (l && (_.x < 0 || _.x > p)) continue;
                            if (g.isNaN && !g.hasRightNeighbour && "number" !== typeof g.nearestRightNeighbour) break;
                            if (g.isNaN && n.lineType === c.STACKED && n.nullMode === u.CONNECT && true !== g.isInterpolationOffset);
                            else if (g.isNaN && true !== g.isInterpolationOffset) {
                                i.push(false);
                                continue
                            }
                            var b = g.hasRightNeighbour ? t[v + 1].idx : g.nearestRightNeighbour;
                            var M = "undefined" !== typeof b ? n.isNumeric ? t[b] ? n.numericAxis.getPositionOfValue(t[b].dimValue) : NaN : n.majorAxis.getPositionOfValue(b, 0) : NaN;
                            if (!h && d(0, p, M, m) || h && d(0, p, m, M)) {
                                i.push(false);
                                continue
                            }
                            var A = g.cacheItem && g.cacheItem.selected;
                            var D = !A && n.isLineSelected && n.selections.synqronize && this._isSelectedIndirectly(x, n.selections.lines, n.selections.points);
                            var w = n.minorAxis.getPositionOfValue(g.aggregated.end);
                            _.y = r["a"].roundToHalf(w) + s;
                            _.y < -1e5 && (_.y = -1e5);
                            _.y > f + 1e5 && (_.y = f + 1e5);
                            if (y) {
                                y.r = Math.max(n.style.dataPoints.size.normal / 2, 8);
                                y.cy = Math.max(n.axisSettings.topCutoff, Math.min(n.axisSettings.bottomCutoff, _.y))
                            }
                            g.isNaN || (m = _.x);
                            var S = void 0;
                            var C = g.cacheItem && (g.cacheItem.parent ? [g.cacheItem.parent.id, g.cacheItem.id] : g.cacheItem.id);
                            var q = n.colorMap.getColor(C, g.aggregated.end, n.measureIdx, g.rowIndex).toRGBA();
                            if (l) S = true;
                            else {
                                S = !g.hasLeftNeighbour && !g.hasRightNeighbour && n.nullMode === u.GAP;
                                S && n.isNumeric && (S = (0 === v || t[v - 1]) && (v === o - 1 || t[v + 1]))
                            }
                            var L = {
                                size: A ? n.style.dataPoints.size.selected : n.style.dataPoints.size.normal,
                                selected: A || D,
                                selectedIndirectly: D,
                                text: g.cacheItem ? g.cacheItem.getDimensions()[0] : "",
                                measureIdx: g.measureIdx,
                                label: g.label,
                                value: g.aggregated.end,
                                isNaN: g.isNaN,
                                isInterpolationOffset: g.isInterpolationOffset,
                                color: q,
                                outOfRangeUp: w < n.axisSettings.topCutoff,
                                outOfRangeDown: w > n.axisSettings.bottomCutoff,
                                outOfDimensionBounds: _.x < 0 || _.x > p,
                                outOfBounds: _.x < 0 || _.x > p || g.aggregated.end > n.axisSettings.plotMax || g.aggregated.end < n.axisSettings.plotMin,
                                dataIndex: x,
                                isSingle: S,
                                hidden: g.hidePoint,
                                x: _.x,
                                y: _.y,
                                y1: 0 === g.aggregated.start ? n.axisSettings.areaStartBase : n.minorAxis.getPositionOfValue(g.aggregated.start),
                                cacheItem: g.cacheItem,
                                isNull: g.cacheItem && -2 === g.cacheItem.id
                            };
                            if (L.outOfRangeUp || L.outOfRangeDown)
                                if (L.outOfRangeUp && !a.up[L.x]) {
                                    a.points.push(L);
                                    a.up[L.x] = true
                                } else if (L.outOfRangeDown && !a.down[L.x]) {
                                a.points.push(L);
                                a.down[L.x] = true
                            }
                            i[x] = L
                        }
                    }
                }, {
                    key: "_getSelected",
                    value: function e(t, i) {
                        var a = [];
                        var n = [];
                        if (i)
                            for (var s = 0; s < t.length; s++) {
                                var r = t[s].points;
                                for (var o = 0; o < r.length; o++) {
                                    if (!r[o]) continue;
                                    if (r[o].cacheItem && r[o].cacheItem.selected)
                                        if (-1 === a.indexOf(s)) {
                                            a.push(s);
                                            n[s] = [r[o].idx]
                                        } else n[s].push(r[o].idx)
                                }
                            }
                        return {
                            lines: a,
                            points: n,
                            synqronize: a.length > 1
                        }
                    }
                }, {
                    key: "_isSelectedIndirectly",
                    value: function e(t, i, a) {
                        var n = i ? i.length : 0;
                        var s = false;
                        for (var r = 0; r < n; r++) {
                            var o = a[i[r]];
                            for (var l = 0; l < o.length; l++)
                                if (t === o[l]) {
                                    s = true;
                                    break
                                }
                        }
                        return s
                    }
                }, {
                    key: "_getMeasureGradient",
                    value: function e(t, i, a) {
                        var n = {
                            gradient: {
                                colors: [],
                                limits: [],
                                x0: 0,
                                x1: 0,
                                y0: t.posMin,
                                y1: t.posMax
                            }
                        };
                        i.getColorMapping().slice().reverse().forEach((function(e) {
                            n.gradient.colors.push(e.grad[1].toRGBA());
                            n.gradient.colors.push(e.grad[0].toRGBA());
                            n.gradient.limits.push(Math.min(1, Math.max(0, a.getNormalizedValue(e.id[1]))));
                            n.gradient.limits.push(Math.min(1, Math.max(0, a.getNormalizedValue(e.id[0]))))
                        }));
                        return n
                    }
                }, {
                    key: "_getClippings",
                    value: function e(t, i) {
                        var a = t.getPadding();
                        var n = a.top - 1;
                        var s = t.rect.height - a.top - a.bottom + 2;
                        return {
                            areaClip: {
                                x: 0,
                                y: n,
                                width: i.width,
                                height: s
                            },
                            lineClip: {
                                x: 0,
                                y: n,
                                width: i.width,
                                height: s
                            }
                        }
                    }
                }, {
                    key: "_getColorSettings",
                    value: function e(t, i, a) {
                        var n = .3;
                        var s = false;
                        var r = false;
                        if (t.mode && t.mode === t.MEASURE && !Number.isNaN(+i.posMin) && p(t._data)) {
                            n = .6;
                            r = this._getMeasureGradient(i, t, a)
                        } else if (t.mode && t.mode === t.EXPRESSION || t.mode === t.MEASURE && !Number.isNaN(+i.posMin)) {
                            s = true;
                            n = .6
                        }
                        return {
                            isExpression: s,
                            areaAlpha: n,
                            varyingPointColors: s,
                            gradient: r
                        }
                    }
                }]);
                return e
            }();
            var m = f;
            var v = i("mIEi");
            var g = i("Q5XB");
            var x = i("NWoE");
            var _ = i("ZrpC");
            var y = i("T7lR");

            function b(e) {
                switch (e) {
                    case "diamond":
                    case "triangle":
                        return new _["a"];
                    case "circle":
                        return new x["a"];
                    case "line":
                        return new y["a"];
                    default:
                        return new y["a"]
                }
            }

            function M(e, t, i, a, n) {
                var s = a;
                switch (n) {
                    case "circle":
                        e.set(t, i, .5 * s);
                        break;
                    case "diamond":
                        e.set([{
                            x: t,
                            y: i - s / 2
                        }, {
                            x: t - s / 2,
                            y: i
                        }, {
                            x: t,
                            y: i + s / 2
                        }, {
                            x: t + s / 2,
                            y: i
                        }]);
                        break;
                    case "triangle":
                        e.set([{
                            x: t,
                            y: i - s / 2
                        }, {
                            x: t - s / 2,
                            y: i + s / 2
                        }, {
                            x: t + s / 2,
                            y: i + s / 2
                        }]);
                        break;
                    default:
                        s = a;
                        e.set(t - s / 2, i - s / 2, s, s)
                }
            }
            var A = g["a"].extend("Points", {
                init: function e(t) {
                    this._super();
                    this._symbol = t || "circle"
                },
                update: function e(t) {
                    var i;
                    var a;
                    var n;
                    var s = t.points ? t.points : [];
                    var r = 0;
                    var o = false;
                    var l = s ? s.length : 0;
                    for (a = 0; a < l; a++) {
                        n = s[a];
                        if (!n || n.outOfDimensionBounds || n.isNaN) continue;
                        i = this._children[r++];
                        if (!i) {
                            i = b(this._symbol);
                            this.addChild(i)
                        }
                        M(i, n.x, n.y, n.size, this._symbol);
                        i.fill = n.selectedIndirectly ? "white" : n.color;
                        i.stroke = n.selectedIndirectly ? n.color : !!n.selected && "white";
                        i.opacity = n.selected || n.selectedIndirectly ? 1 : t.globalAlpha;
                        i.strokeWidth = 1.5;
                        i.visible = !n.outOfBounds && !n.isNaN && !n.hidden && (t.showDataPoints || n.isSingle || n.keep || n.selected);
                        i.visible && !o && (o = i.true);
                        i.data.outOfBounds = n.outOfBounds;
                        i.data.value = n.value;
                        i.data.label = n.label;
                        i.data.dataIndex = n.dataIndex;
                        i.data.text = n.text
                    }
                    r < this._children.length && this.removeChildren(this._children.slice(r - this._children.length));
                    this.visible = o;
                    this._selectedSize = t.style.dataPoints.size.selected;
                    return this
                },
                getFromRange: function e(t, i, a) {
                    return this.children.filter((function(e) {
                        if (a) return e.cx >= t && e.cx <= i && e.visible;
                        return e.cx >= t && e.cx < i && e.visible
                    })).map((function(e) {
                        var t = new x["a"](e.cx, e.cy, .5 * this._selectedSize);
                        t.fill = e.fill;
                        t.stroke = "white";
                        t.opacity = 1;
                        t.strokeWidth = 1.5;
                        return t
                    }), this)
                }
            });
            var D = A;
            var w = i("djNn");
            var S = {
                GAP: "gap",
                CONNECT: "connect",
                ZERO: "zero"
            };

            function C(e, t) {
                var i = new _["a"](e);
                i.opacity = t.opacity;
                i.close = false;
                i.stroke = t.stroke;
                i.strokeWidth = t.strokeWidth;
                i.lineJoin = t.lineJoin;
                i.lineCap = t.lineCap;
                return i
            }

            function q(e) {
                var t = [];
                var i = e._polygons[0].points;
                if (!i || i.length < 2) return t;
                e.data.selected = i[0].selected && i[1].selected;
                var a = null;
                var n = i.length - 1;
                for (var s = 1; s < i.length; s++)
                    if (i[s - 1].selected && i[s].selected) {
                        a = s - 1;
                        break
                    } if (null !== a) {
                    for (var r = a; r < i.length; r++)
                        if (!i[r].selected) {
                            n = r - 1;
                            break
                        } var o = i.slice(0, a + 1);
                    var l = i.slice(a, n + 1);
                    var h = i.slice(n);
                    var c;
                    if (o && o.length > 1) {
                        c = C(o, e);
                        t.push(c)
                    }
                    if (l && l.length > 1) {
                        c = C(l, e);
                        c.data.selected = true;
                        t.push(c)
                    }
                    if (h && h.length > 1) {
                        c = C(h, e);
                        t = t.concat(q(c))
                    }
                } else t.push(e);
                return t
            }

            function L(e) {
                var t = [];
                for (var i = 0; i < e.length; i++) t = t.concat(q(e[i]));
                return t
            }

            function P(e, t, i, a) {
                var n;
                var s;
                var r = [];
                var o = t ? t.length : 0;
                var l = [];
                for (var h = 0; h < o; h++) {
                    s = t[h];
                    if (!s || s.isNaN && true !== s.isInterpolationOffset) {
                        if ((void 0 !== s || !e.isNumeric) && i === S.GAP && n && r.length) {
                            n.set(r);
                            l.push(n);
                            n = null;
                            r = []
                        }
                        continue
                    }
                    if (!n) {
                        n = new _["a"];
                        n.close = false;
                        n.stroke = a || s.color || "#333333";
                        n.lineJoin = "round";
                        n.lineCap = "round";
                        n.opacity = 1;
                        r = [];
                        s.isNull && !a && t[h + 1] && (n.stroke = t[h + 1].color || "#333333");
                        if (s.hidden && !a)
                            for (var c = 1; c < o - h; ++c)
                                if (t[h + c] && !t[h + c].hidden) {
                                    n.stroke = t[h + c].color || "#333333";
                                    break
                                }
                    }
                    r.push({
                        x: s.x,
                        y: s.y,
                        selected: s.selected,
                        dataIndex: s.dataIndex,
                        y_: s.y1
                    })
                }
                if (n && r.length > 1) {
                    n.set(r);
                    l.push(n)
                }
                l = L(l);
                o = l.length;
                for (var u = 0; u < o; u++) {
                    l[u].strokeWidth = e.style.line.width * (l[u].data.selected ? 2 : 1);
                    l[u].opacity = l[u].data.selected ? 1 : e.globalAlpha
                }
                return l
            }

            function k(e, t, i, a) {
                var n = t ? t.length : 0;
                var s = e.interpolateVaryingColors;
                var r = [];
                var o = null;
                var l;
                var h;
                var c;
                var u;
                for (var d = 0; d < n; d++) {
                    l = t[d];
                    if (!l || l.isNaN && true !== l.isInterpolationOffset) {
                        void 0 === l && e.isNumeric || i !== S.GAP || (h = null);
                        continue
                    }
                    if (h) {
                        o = new a(h.x, h.y, l.x, l.y);
                        o.data.selected = h.selected && l.selected;
                        o.data.y1_ = h.y1;
                        o.data.y2_ = l.y1;
                        if (l.hidden || h.hidden) {
                            for (var p = d; p >= 0; p--)
                                if (!t[p].hidden) {
                                    c = t[p].color;
                                    break
                                } if (void 0 === c)
                                for (var f = d; f < n; f++)
                                    if (!t[f].hidden) {
                                        c = t[f].color;
                                        break
                                    } u = c
                        } else {
                            c = h.color;
                            u = l.color
                        }
                        h.color !== l.color ? o.stroke = {
                            gradient: {
                                x0: h.x,
                                y0: 0,
                                x1: l.x,
                                y1: 0,
                                limits: s ? [0, 1] : [0, .5, .5, 1],
                                colors: s ? [c || "#333333", u || "#333333"] : [c || "#333333", c || "#333333", u || "#333333", u || "#333333"]
                            }
                        } : o.stroke = u || "#333333";
                        o.opacity = o.data.selected ? 1 : e.globalAlpha;
                        o.strokeWidth = e.style.line.width * (o.data.selected ? 2 : 1);
                        r.push(o);
                        h = l
                    } else h = l
                }
                return r
            }
            var O = g["a"].extend("PolyLine", {
                init: function e() {
                    this._super();
                    this.lineJoin = "round";
                    this.lineCap = "round"
                },
                update: function e(t) {
                    this.clip = t.clippings.lineClip;
                    this.removeChildren();
                    t.colors.varyingPointColors ? this.addChildren(O.getLines(t, t.points, t.nullMode, w["a"])) : this.addChildren(P.call(this, t, t.points, t.nullMode, t.colors.gradient))
                },
                getLineInRange: function e(t, i) {
                    var a = new O;
                    this.children.forEach((function(e) {
                        var n = e.getPartialFromRange(t, i);
                        if (!n) return;
                        n.stroke = e.stroke;
                        n.strokeWidth = 3;
                        n.close = e.close;
                        a.addChildren([n])
                    }));
                    return a
                }
            });
            O.getLines = k;
            var T = O;

            function I(e) {
                return {
                    x: e.x,
                    y: e.y_
                }
            }

            function R(e, t) {
                var i;
                var a;
                var n = [];
                var s;
                var r;
                var o;
                var l = t ? t.length : 0;
                for (i = 0; i < l; i++) {
                    if (t[i] instanceof _["a"]) {
                        s = t[i]._polygons[0].points;
                        a = new _["a"](s.concat(s.map(I).reverse()));
                        a.fill = e.colors.gradient || t[i].stroke;
                        a.opacity = e.colors.areaAlpha * (t[i].data.selected ? 1 : e.globalAlpha)
                    } else if (t[i] instanceof w["a"]) {
                        r = Math.floor(t[i].x1);
                        o = Math.floor(t[i].x2);
                        s = [{
                            x: r,
                            y: t[i].y1
                        }, {
                            x: r,
                            y: t[i].data.y1_
                        }, {
                            x: o,
                            y: t[i].data.y2_
                        }, {
                            x: o,
                            y: t[i].y2
                        }];
                        a = new _["a"](s);
                        t[i].stroke.gradient ? a.fill = {
                            gradient: {
                                colors: t[i].stroke.gradient.colors,
                                limits: t[i].stroke.gradient.limits,
                                x0: t[i].stroke.gradient.x0,
                                x1: t[i].stroke.gradient.x1,
                                y0: 0,
                                y1: 0
                            }
                        } : t[i].stroke ? a.fill = t[i].stroke || "#eeeeee" : a.fill = e.colors.gradient || "#eeeeee";
                        a.opacity = e.colors.areaAlpha * (t[i].data.selected ? 1 : e.globalAlpha)
                    }
                    a && n.push(a)
                }
                return n
            }
            var N = g["a"].extend("PolyArea", {
                getAreaFromSegments: function e(t) {
                    var i = new g["a"];
                    i.addChildren(R(this.__data, t));
                    return i
                },
                update: function e(t, i) {
                    this.__data = t;
                    this.clip = t.clippings.areaClip;
                    this.removeChildren();
                    this.addChildren(R(t, i))
                }
            });
            var z = N;
            var j = g["a"].extend("LineObject", {
                init: function e(t, i) {
                    this._super();
                    this.data.label = t.info.label;
                    if (i.showArea) {
                        this._areaLayer = new z;
                        this.addChild(this._areaLayer)
                    }
                    this._lineLayer = new T;
                    this.addChild(this._lineLayer);
                    this._pointLayer = new D("circle");
                    this.addChild(this._pointLayer)
                },
                update: function e(t) {
                    this._pointLayer.update(t);
                    this._lineLayer.update(t);
                    this.visible = this._pointLayer.visible || this._lineLayer.visible;
                    if (this._areaLayer) {
                        this._areaLayer.update(t, this._lineLayer.children);
                        this._areaLayer.visible && (this.visible = true)
                    }
                },
                getLinesInRange: function e(t, i, a) {
                    var n = new g["a"];
                    var s = this._lineLayer.getLineInRange(t, i);
                    if (this._areaLayer) {
                        var r = this._areaLayer.getAreaFromSegments(s.children);
                        n.addChildren([r])
                    }
                    n.addChildren([s]);
                    n.addChildren(this._pointLayer.getFromRange(t, i, a));
                    return n
                }
            });
            var V = j;

            function E(e) {
                E = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                };
                return E(e)
            }

            function F(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function H(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    "value" in a && (a.writable = true);
                    Object.defineProperty(e, a.key, a)
                }
            }

            function B(e, t, i) {
                t && H(e.prototype, t);
                i && H(e, i);
                return e
            }

            function W(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: true,
                        configurable: true
                    }
                });
                t && U(e, t)
            }

            function U(e, t) {
                U = Object.setPrototypeOf || function e(t, i) {
                    t.__proto__ = i;
                    return t
                };
                return U(e, t)
            }

            function Z(e) {
                var t = X();
                return function i() {
                    var a = $(e),
                        n;
                    if (t) {
                        var s = $(this).constructor;
                        n = Reflect.construct(a, arguments, s)
                    } else n = a.apply(this, arguments);
                    return G(this, n)
                }
            }

            function G(e, t) {
                if (t && ("object" === E(t) || "function" === typeof t)) return t;
                return Y(e)
            }

            function Y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function X() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if ("function" === typeof Proxy) return true;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                    return true
                } catch (e) {
                    return false
                }
            }

            function $(e) {
                $ = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return $(e)
            }
            var K = function(e) {
                W(i, e);
                var t = Z(i);

                function i(e) {
                    F(this, i);
                    return t.call(this, e, {
                        name: "line-objects-layer"
                    })
                }
                B(i, [{
                    key: "updateInstances",
                    value: function e(t, i) {
                        var a = t ? t.length : 0;
                        var n = [];
                        this.renderer.stage.removeChildren();
                        for (var s = 0; s < a; s++) n.push(new V(t[s], {
                            showArea: i.showArea
                        }));
                        this.renderer.stage.addChildren(n);
                        this._lineObjects = n
                    }
                }, {
                    key: "getLineObjects",
                    value: function e() {
                        return this._lineObjects
                    }
                }, {
                    key: "getPolyLinesInRange",
                    value: function e(t, i, a) {
                        return this._lineObjects.map((function(e) {
                            return e.getLinesInRange(t, i, a)
                        }))
                    }
                }, {
                    key: "update",
                    value: function e(t) {
                        var i = this._lineObjects ? this._lineObjects.length : 0;
                        for (var a = 0; a < i; a++) this._lineObjects[a].update(t[a])
                    }
                }]);
                return i
            }(v["a"]);
            var J = K;
            var Q = i("AFKu");
            var ee = i("ohbW");
            var te = i("x/4K");

            function ie(e) {
                ie = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                };
                return ie(e)
            }

            function ae(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function ne(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    "value" in a && (a.writable = true);
                    Object.defineProperty(e, a.key, a)
                }
            }

            function se(e, t, i) {
                t && ne(e.prototype, t);
                i && ne(e, i);
                return e
            }

            function re(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: true,
                        configurable: true
                    }
                });
                t && oe(e, t)
            }

            function oe(e, t) {
                oe = Object.setPrototypeOf || function e(t, i) {
                    t.__proto__ = i;
                    return t
                };
                return oe(e, t)
            }

            function le(e) {
                var t = ue();
                return function i() {
                    var a = de(e),
                        n;
                    if (t) {
                        var s = de(this).constructor;
                        n = Reflect.construct(a, arguments, s)
                    } else n = a.apply(this, arguments);
                    return he(this, n)
                }
            }

            function he(e, t) {
                if (t && ("object" === ie(t) || "function" === typeof t)) return t;
                return ce(e)
            }

            function ce(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ue() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if ("function" === typeof Proxy) return true;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                    return true
                } catch (e) {
                    return false
                }
            }

            function de(e) {
                de = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return de(e)
            }
            var pe = {
                LINE: "line",
                AREA: "area",
                STACKED: "stackedArea"
            };

            function fe() {
                var e;
                var t;
                var i;
                var a;
                var n;
                var s;
                var r;
                var o;
                var l;
                var h = {};
                var c;
                var u = this.combinedMeasuresFormatter;
                this._allDataLineObjectsLength = this._allDataLineObjects ? this._allDataLineObjects.length : 0;
                this._dataLabelsOfLines = new Array(this._allDataLineObjectsLength);
                this._allDataPointLabels = [];
                for (e = 0; e < this._allDataLineObjectsLength; e++) {
                    this._dataLabelsOfLines[e] = [];
                    i = this._allDataLineObjects[e];
                    s = i.find("Points [visible='true']");
                    n = s ? s.length : 0;
                    for (t = 0; t < n; t++) {
                        r = s[t].getLocalBoundingRect();
                        o = r.x + r.width / 2;
                        l = r.y + r.height / 2;
                        c = "".concat(o, ";").concat(l);
                        if (c in h) continue;
                        h[c] = true;
                        a = {
                            text: this._lineType === pe.STACKED && this._allDataLineObjectsLength > 1 ? u.formatValue(s[t].value) : s[t].data.label,
                            x0: o,
                            y0: l,
                            align: "center",
                            font: this._style.dataPoints.font,
                            maxWidth: 512,
                            maxNumLines: 1,
                            line: e
                        };
                        this._dataLabelsOfLines[e].push(a);
                        this._allDataPointLabels.push(a)
                    }
                }
                this._numAllDataPointLabels = this._allDataPointLabels.length
            }

            function me() {
                var e;
                for (e = 0; e < this._numAllDataPointLabels; e++) this._allDataPointLabels[e].size = ee["a"].measureTextObject({
                    type: "text",
                    shape: this._allDataPointLabels[e]
                })
            }

            function ve() {
                me.call(this);
                var e;
                var t;
                var i;
                var a;
                var n;
                var s;
                var r;
                var o = this._discreteSpacing / 2;
                var l = "leftDx";
                var h = "leftDy";
                var c = "rightDx";
                var u = "rightDy";
                var d = 1;
                if (this.yMirrorMode) {
                    l = "rightDx";
                    h = "rightDy";
                    c = "leftDx";
                    u = "leftDy";
                    d = -1
                }
                for (e = 0; e < this._allDataLineObjectsLength; e++) {
                    a = this._dataLabelsOfLines[e];
                    i = a.length;
                    if (0 === i) continue;
                    if (1 === i) {
                        n = a[0];
                        n[l] = o;
                        n[h] = 0;
                        n[c] = o;
                        n[u] = 0;
                        continue
                    }
                    n = a[0];
                    n.priority = 6;
                    r = a[1];
                    n[l] = o;
                    n[h] = 0;
                    n[c] = (r.x0 - n.x0) * d;
                    n[u] = n.y0 - r.y0;
                    for (t = 1; t < i - 1; t++) {
                        n = a[t];
                        s = a[t - 1];
                        r = a[t + 1];
                        n[l] = s[c];
                        n[h] = -s[u];
                        n[c] = (r.x0 - n.x0) * d;
                        n[u] = n.y0 - r.y0;
                        s.y0 < n.y0 ? n.y0 < r.y0 ? n.priority = 1 : n.y0 === r.y0 ? n.priority = 2 : n.priority = 3 : s.y0 === n.y0 ? n.y0 < r.y0 ? n.priority = 2 : n.y0 === r.y0 ? n.priority = 0 : n.priority = 2 : n.y0 < r.y0 ? n.priority = 4 : n.y0 === r.y0 ? n.priority = 2 : n.priority = 1
                    }
                    n = a[i - 1];
                    s = a[i - 2];
                    n[l] = s[c];
                    n[h] = -s[u];
                    n[c] = o;
                    n[u] = 0;
                    n.priority = 5
                }
            }

            function ge() {
                void 0 !== this._usedDataMax && this._usedDataMax === this._usedDataMin ? this._allDataPointLabels.sort((function(e, t) {
                    return e.x0 < t.x0 ? -1 : 1
                })) : this._allDataPointLabels.sort((function(e, t) {
                    if (e.priority > t.priority) return -1;
                    if (e.priority === t.priority) {
                        if (6 === e.priority) return e.x0 === t.x0 ? e.y0 > t.y0 ? 1 : -1 : e.x0 > t.x0 ? 1 : -1;
                        if (5 === e.priority) return e.x0 === t.x0 ? e.y0 > t.y0 ? 1 : -1 : e.x0 > t.x0 ? -1 : 1;
                        if (4 === e.priority) return e.y0 > t.y0 ? 1 : -1;
                        if (3 === e.priority) return e.y0 > t.y0 ? -1 : 1;
                        if (e.y0 === t.y0) return e.x0 > t.x0 ? -1 : 1;
                        return e.y0 < t.y0 ? -1 : 1
                    }
                    return 1
                }))
            }

            function xe() {
                var e;
                var t;
                var i;
                var a;
                var n;
                var s;
                var r = [];
                var o;
                for (e = 0; e < this._allDataLineObjectsLength; e++) {
                    i = this._allDataLineObjects[e];
                    a = i.find("PolyLine [stroke]");
                    n = a ? a.length : 0;
                    for (t = 0; t < n; t++) {
                        s = a[t];
                        o = s.getLocalPoints();
                        r.push(o)
                    }
                }
                return r
            }

            function _e(e, t) {
                if (e.minX2 > t.maxX2 || e.maxX2 < t.minX2 || e.minY2 > t.maxY2 || e.maxY2 < t.minY2) return false;
                return true
            }

            function ye(e) {
                var t = this._allDataPointLabels[e];
                var i = 0;
                var a = this.rect.width;
                var n = 0;
                var s = this.rect.height;
                return t.x0 >= i && t.x0 <= a && t.minX >= i && t.maxX <= a && t.minY >= n && t.maxY <= s
            }

            function be(e) {
                return !te["a"].checkPolylinesIntersectingRectDefinedByMaxMin(this._polylines, this._allDataPointLabels[e])
            }

            function Me(e) {
                var t = this._allDataPointLabels[e];
                var i = (t.minX + t.maxX) / 2;
                var a = (t.minY + t.maxY) / 2;
                var n = Math.pow(i - t.x0, 2) + Math.pow(a - t.y0, 2);
                var s;
                var r;
                for (r = 0; r < this._numAllDataPointLabels; r++) {
                    s = this._allDataPointLabels[r];
                    if (r !== e && n >= Math.pow(i - s.x0, 2) + Math.pow(a - s.y0, 2)) return false
                }
                return true
            }

            function Ae(e) {
                var t;
                var i = this._allDataPointLabels[e];
                for (t = 0; t < e; t++)
                    if (this._allDataPointLabels[t].status && _e(i, this._allDataPointLabels[t])) return false;
                return true
            }

            function De(e) {
                if (!ye.call(this, e)) return false;
                if (!Me.call(this, e)) return false;
                if (!be.call(this, e)) return false;
                return Ae.call(this, e)
            }

            function we(e) {
                var t = this._dataLabelHorizontalGap / 2;
                var i = this._dataLabelVerticalGap / 2;
                var a = e.size.width / 2;
                var n = a + t;
                e.minX = e.x - a;
                e.maxX = e.x + a;
                e.minX2 = e.x - n;
                e.maxX2 = e.x + n;
                var s = e.size.height;
                if ("top" === e.baseline) {
                    e.minY = e.y;
                    e.maxY = e.y + s;
                    e.maxY2 = e.maxY + i;
                    e.minY2 = e.minY - i
                }
                if ("bottom" === e.baseline) {
                    e.maxY = e.y;
                    e.minY = e.y - s;
                    e.maxY2 = e.maxY + i;
                    e.minY2 = e.minY - i
                }
                if ("middle" === e.baseline) {
                    e.maxY = e.y + s / 2;
                    e.minY = e.y - s / 2;
                    e.maxY2 = e.maxY + i;
                    e.minY2 = e.minY - i
                }
            }

            function Se(e) {
                6 === e.priority && e.x - e.size.width / 2 < 0 && (e.x = e.size.width / 2 + 1);
                5 === e.priority && e.x + e.size.width / 2 > this.rect.width && (e.x = this.rect.width - e.size.width / 2 - 1)
            }

            function Ce(e) {
                e.baseline = "middle";
                e.x = e.x0 - e.size.width / 2 - this._dataLabelHorizontalGap;
                e.y = e.y0;
                return true
            }

            function qe(e) {
                e.baseline = "middle";
                e.x = e.x0 + e.size.width / 2 + this._dataLabelHorizontalGap;
                e.y = e.y0;
                return true
            }

            function Le(e) {
                e.baseline = "bottom";
                e.x = e.x0;
                e.y = e.y0 - this._dataLabelMargin;
                Se.call(this, e);
                return true
            }

            function Pe(e) {
                e.baseline = "top";
                e.x = e.x0;
                e.y = e.y0 + this._dataLabelMargin;
                Se.call(this, e);
                return true
            }

            function ke(e) {
                var t;
                var i;
                var a;
                var n;
                var s;
                var r = e.leftDx;
                var o = e.rightDx;
                var l = e.leftDy;
                var h = e.rightDy;
                var c = 1e-9;
                if (l > 0 || h > 0) {
                    l = Math.max(l, c);
                    h = Math.max(h, c);
                    t = e.size.width + 2 * this._horizontalDistanceFromLine;
                    a = t / (r / l + o / h);
                    if (a <= this._maxDataLabelMargin) {
                        e.baseline = "bottom";
                        a = Math.max(a, this._dataLabelMargin);
                        e.y = e.y0 - a;
                        n = a * r / l;
                        s = a * o / h;
                        i = t / 2;
                        n < i ? e.x = e.x0 + (i - n) : s < i && (e.x = e.x0 - (i - s));
                        return true
                    }
                }
                return false
            }

            function Oe(e) {
                var t;
                var i;
                var a;
                var n;
                var s;
                var r = e.leftDx;
                var o = e.rightDx;
                var l = -e.leftDy;
                var h = -e.rightDy;
                var c = 1e-9;
                if (l > 0 || h > 0) {
                    l = Math.max(l, c);
                    h = Math.max(h, c);
                    t = e.size.width + 2 * this._horizontalDistanceFromLine;
                    a = t / (r / l + o / h);
                    if (a <= this._maxDataLabelMargin) {
                        e.baseline = "top";
                        a = Math.max(a, this._dataLabelMargin);
                        e.y = e.y0 + a;
                        n = a * r / l;
                        s = a * o / h;
                        i = t / 2;
                        n < i ? e.x = e.x0 + (i - n) : s < i && (e.x = e.x0 - (i - s));
                        return true
                    }
                }
                return false
            }

            function Te(e) {
                var t = e.leftDx;
                var i = e.leftDy;
                e.baseline = "middle";
                var a = e.size.height / 2 + this._horizontalDistanceFromLine;
                var n = Math.abs(this._dataLabelHorizontalGap * i / t);
                e.x = e.x0 - e.size.width / 2 - this._dataLabelHorizontalGap;
                e.y = e.y0 + (n >= a ? 0 : i > 0 ? a - n : n - a);
                return true
            }

            function Ie(e) {
                var t = e.rightDx;
                var i = e.rightDy;
                e.baseline = "middle";
                var a = e.size.height / 2 + this._horizontalDistanceFromLine;
                var n = Math.abs(this._dataLabelHorizontalGap * i / t);
                e.x = e.x0 + e.size.width / 2 + this._dataLabelHorizontalGap;
                e.y = e.y0 + (n >= a ? 0 : i > 0 ? a - n : n - a);
                return true
            }

            function Re(e) {
                var t = 0;
                var i = this.rect.width;
                var a;
                var n;
                var s = 9;
                var r;
                var o;
                if (e.priority > 3) {
                    e.baseline = "middle";
                    if (e.x0 - t <= i - e.x0) {
                        e.x = e.x0 + s + e.size.width / 2;
                        e.y = e.y0
                    } else {
                        e.x = e.x0 - s - e.size.width / 2;
                        e.y = e.y0
                    }
                } else if (3 === e.priority) {
                    a = e.leftDy / e.leftDx;
                    n = e.rightDy / e.rightDx;
                    if (n >= a) {
                        r = (e.size.height / 2 + 1) / n;
                        if (r <= 2 * s) {
                            e.baseline = "middle";
                            e.y = e.y0;
                            e.x = e.x0 + Math.max(r, s) + e.size.width / 2
                        } else {
                            o = 2 * s * n - 1;
                            e.baseline = "top";
                            e.y = e.y0 - o;
                            e.x = e.x0 + 2 * s + e.size.width / 2
                        }
                    } else {
                        r = (e.size.height / 2 + 1) / a;
                        if (r <= 2 * s) {
                            e.baseline = "middle";
                            e.y = e.y0;
                            e.x = e.x0 - Math.max(r, s) - e.size.width / 2
                        } else {
                            o = 2 * s * a - 1;
                            e.baseline = "top";
                            e.y = e.y0 - o;
                            e.x = e.x0 - 2 * s - e.size.width / 2
                        }
                    }
                }
                return true
            }

            function Ne(e) {
                var t;
                if (e.rightDy <= 0) {
                    e.baseline = "bottom";
                    e.x = e.x0 + e.size.width / 2;
                    e.y = e.y0 + 1
                } else if (e.rightDy <= e.rightDx) {
                    e.baseline = "bottom";
                    e.x = e.x0 + e.size.width / 2;
                    e.y = e.y0 - e.size.width * Math.abs(e.rightDy / e.rightDx) - 1
                } else {
                    e.baseline = "top";
                    t = Math.max(0, e.size.height + 1 - this.rect.height + e.y0);
                    e.x = e.x0 + e.size.width / 2 + t * Math.abs(e.rightDx / e.rightDy);
                    e.y = e.y0 - t + 1
                }
                return true
            }

            function ze(e) {
                var t;
                if (e.leftDy <= 0) {
                    e.baseline = "bottom";
                    e.x = e.x0 - e.size.width / 2;
                    e.y = e.y0 + 1
                } else if (e.leftDy <= e.leftDx) {
                    e.baseline = "bottom";
                    e.x = e.x0 - e.size.width / 2;
                    e.y = e.y0 - e.size.width * Math.abs(e.leftDy / e.leftDx) - 1
                } else {
                    e.baseline = "top";
                    t = Math.max(0, e.size.height + 1 - this.rect.height + e.y0);
                    e.x = e.x0 - e.size.width / 2 - t * Math.abs(e.leftDx / e.leftDy);
                    e.y = e.y0 - t + 1
                }
                return true
            }

            function je(e, t) {
                var i = this._allDataPointLabels[t];
                if (!i.status && e.call(this, i)) {
                    we.call(this, i);
                    i.status = De.call(this, t)
                }
            }

            function Ve(e) {
                var t = this._allDataPointLabels[e];
                if (this._allDataLineObjectsLength > 1) {
                    6 === t.priority && je.apply(this, [Ce, e]);
                    5 === t.priority && je.apply(this, [qe, e]);
                    je.apply(this, [Le, e]);
                    je.apply(this, [Pe, e])
                } else {
                    je.apply(this, [Le, e]);
                    je.apply(this, [Pe, e]);
                    6 === t.priority && je.apply(this, [Ce, e]);
                    5 === t.priority && je.apply(this, [qe, e])
                }
                if (!t.status)
                    if (t.rightDy + Math.abs(t.rightDx) * t.leftDy / Math.abs(t.leftDx) >= 0) {
                        je.apply(this, [Oe, e]);
                        je.apply(this, [ke, e])
                    } else {
                        je.apply(this, [ke, e]);
                        je.apply(this, [Oe, e])
                    } if (!t.status)
                    if (t.rightDy + Math.abs(t.rightDx) * t.leftDy / Math.abs(t.leftDx) >= 0) {
                        je.apply(this, [Te, e]);
                        je.apply(this, [Ie, e])
                    } else {
                        je.apply(this, [Ie, e]);
                        je.apply(this, [Te, e])
                    } je.apply(this, [Re, e]);
                t.status || 6 !== t.priority || je.apply(this, [Ne, e]);
                t.status || 5 !== t.priority || je.apply(this, [ze, e])
            }

            function Ee() {
                var e;
                for (e = 0; e < this._numAllDataPointLabels; e++) Ve.call(this, e)
            }

            function Fe() {
                var e;
                var t;
                var i;
                var a = [];
                for (e = 0; e < this._numAllDataPointLabels; e++) {
                    t = this._allDataPointLabels[e];
                    if (t.status) {
                        i = {
                            type: "text",
                            fill: this._style.dataPoints.color,
                            shape: t
                        };
                        a.push(i)
                    }
                }
                this.renderer.shapes = a
            }
            var He = function(e) {
                re(i, e);
                var t = le(i);

                function i(e) {
                    var a;
                    ae(this, i);
                    a = t.call(this, e);
                    a.wrapper = document.createElement("div");
                    a.wrapper.style.position = "absolute";
                    a.renderer = new ee["a"](a.wrapper);
                    a.minorAxis = null;
                    a.majorAxis = null;
                    e.appendChild(a.wrapper);
                    a._dataLabelMargin = 6;
                    a._maxDataLabelMargin = 12;
                    a._dataLabelHorizontalGap = 6;
                    a._dataLabelVerticalGap = 3;
                    a._horizontalDistanceFromLine = 2;
                    return a
                }
                se(i, [{
                    key: "setYMirrorMode",
                    value: function e(t) {
                        this.yMirrorMode = t
                    }
                }, {
                    key: "update",
                    value: function e(t, i) {
                        this.combinedMeasuresFormatter = i.combinedMeasuresFormatter;
                        this._allDataLineObjects = t;
                        this._lineType = i.lineType;
                        this._discreteSpacing = i.majorAxis.getDiscreteSpacing();
                        this._style = i.style;
                        this.rect = i.rect;
                        this.renderer.shapes = [];
                        fe.call(this);
                        ve.call(this);
                        ge.call(this);
                        this._polylines = xe.call(this);
                        Ee.call(this);
                        Fe.call(this)
                    }
                }]);
                return i
            }(v["a"]);
            var Be = He;

            function We(e) {
                We = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                };
                return We(e)
            }

            function Ue(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Ze(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    "value" in a && (a.writable = true);
                    Object.defineProperty(e, a.key, a)
                }
            }

            function Ge(e, t, i) {
                t && Ze(e.prototype, t);
                i && Ze(e, i);
                return e
            }

            function Ye(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: true,
                        configurable: true
                    }
                });
                t && Xe(e, t)
            }

            function Xe(e, t) {
                Xe = Object.setPrototypeOf || function e(t, i) {
                    t.__proto__ = i;
                    return t
                };
                return Xe(e, t)
            }

            function $e(e) {
                var t = Qe();
                return function i() {
                    var a = et(e),
                        n;
                    if (t) {
                        var s = et(this).constructor;
                        n = Reflect.construct(a, arguments, s)
                    } else n = a.apply(this, arguments);
                    return Ke(this, n)
                }
            }

            function Ke(e, t) {
                if (t && ("object" === We(t) || "function" === typeof t)) return t;
                return Je(e)
            }

            function Je(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Qe() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if ("function" === typeof Proxy) return true;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                    return true
                } catch (e) {
                    return false
                }
            }

            function et(e) {
                et = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return et(e)
            }
            var tt = function(e) {
                Ye(i, e);
                var t = $e(i);

                function i(e) {
                    var a;
                    Ue(this, i);
                    a = t.call(this, e);
                    a.ranges = [];
                    return a
                }
                Ge(i, [{
                    key: "getLineObjects",
                    value: function e() {
                        return this._lineObjects
                    }
                }, {
                    key: "setRanges",
                    value: function e(t) {
                        this.ranges = t
                    }
                }, {
                    key: "update",
                    value: function e(t, i) {
                        var a = [];
                        this.ranges.forEach((function(e) {
                            var n = t.getPositionOfValue(e.min);
                            var s = t.getPositionOfValue(e.max);
                            a = a.concat(i.getPolyLinesInRange(n, s, e.maxIncluded))
                        }), this);
                        this.renderer.stage.removeChildren();
                        if (a.length) {
                            this.renderer.stage.addChildren(a);
                            this.show()
                        } else this.hide()
                    }
                }]);
                return i
            }(v["a"]);
            var it = tt;
            var at = i("e5Is");
            var nt = i("UV1h");
            var st = i("sWge");
            var rt = {
                LINE: "line",
                AREA: "area",
                STACKED: "stackedArea"
            };
            var ot = {
                GAP: "gap",
                CONNECT: "connect",
                ZERO: "zero"
            };

            function lt(e, t) {
                var i = e.layoutMap[t] || "medium";
                var a = e.getStyle("label.value", "fontSize");
                var n = e.getStyle("label.value", "fontFamily");
                return {
                    dataPoints: {
                        color: e.getStyle("label.value", "color"),
                        font: "normal ".concat(a, " ").concat(n),
                        size: {
                            normal: 6,
                            selected: 10
                        }
                    },
                    outOfRange: {
                        color: e.getStyle("outOfRange", "color")
                    },
                    line: {
                        width: "full" === i ? 2 : 1
                    }
                }
            }

            function ht() {
                if (!this._data || !this._tree) return [];
                var e = this._data.qHyperCube.qDimensionInfo;
                var t = e.length;
                var i = [];
                var a;
                var n = 0;
                this._tree.children.forEach((function(s) {
                    s.id = "".concat(e[0].cId, "_").concat(s.data.qElemNo);
                    a = {
                        label: s.data.qText || "",
                        cacheIndex: [],
                        id: s.id
                    };
                    i.push(a);
                    1 === t && (a.cacheIndex[0] = n++);
                    t > 1 && s.children.forEach((function(e) {
                        if (e.children[0] && e.children[0].isBranch) {
                            -2 !== e.data.qElemNo && a.cacheIndex.push(n);
                            n++
                        }
                    }), this)
                }), this);
                return {
                    data: i,
                    info: [{
                        qApprMaxGlyphCount: this._tree.data.qApprMaxGlyphCount
                    }],
                    groupSize: null
                }
            }

            function ct(e) {
                return !!e
            }

            function ut(e, t) {
                var i = Object.keys(e);
                var a = i.length;
                var n = i.map((function(t) {
                    return e[t].points
                }));
                var s = Math.max.apply(null, n.map((function(e) {
                    return e.length
                })));
                var r;
                for (var o = 0; o < s; ++o) {
                    var l = false;
                    var h = false;
                    for (r = 0; r < a; ++r) {
                        l = l || n[r][o];
                        h = h || !n[r][o]
                    }
                    if (!l || !h) continue;
                    for (r = 0; r < a; ++r) n[r][o] || (n[r][o] = {
                        idx: l.idx,
                        dimValue: l.dimValue,
                        measureIdx: l.measureIdx,
                        aggregated: {
                            start: 0,
                            end: 0
                        },
                        hasLeftNeighbour: !!n[r][o - 1] && !n[r][o - 1].isNaN,
                        hasRightNeighbour: !!n[r][o + 1] && !n[r][o + 1].isNaN,
                        isNaN: !t,
                        value: t ? 0 : NaN,
                        text: t ? "0" : "",
                        hidePoint: true,
                        color: null,
                        label: ""
                    })
                }
            }

            function dt(e) {
                var t;
                var i;
                var a;
                var n;
                var s;
                var r = e ? e.length : 0;
                for (t = 0; t < r; t++) {
                    s = e[t];
                    if (s && !s.hasRightNeighbour) {
                        for (i = t + 1; i < r; i++)
                            if (e[i] && !e[i].isNaN) {
                                s.nearestRightNeighbour = i;
                                break
                            } if (!s.isNaN) {
                            if (!Number.isNaN(+s.nearestRightNeighbour)) {
                                n = i - t;
                                for (a = 1; a < n; a++)
                                    if (e[t + a]) {
                                        e[t + a].nearestRightNeighbour = s.nearestRightNeighbour;
                                        e[t + a].nearestLeftNeighbour = t
                                    }
                            }
                            t = i - 1
                        }
                    }
                }
            }

            function pt(e) {
                var t;
                var i;
                var a;
                var n;
                var s;
                var r;
                var o;
                var l;
                var h;
                var c = e ? e.length : 0;
                var u = this.isDimensionContinuous;
                for (t = 0; t < c; t++) {
                    h = e[t];
                    if (h && !h.hasRightNeighbour && !h.isNaN && !Number.isNaN(+h.nearestRightNeighbour)) {
                        i = h.nearestRightNeighbour;
                        s = h.value;
                        r = e[i].value;
                        l = i - t;
                        o = u ? e[i].dimValue - h.dimValue : i - t;
                        for (a = 1; a < l; a++) {
                            n = (u ? e[t + a].dimValue - h.dimValue : a) / o;
                            e[t + a] && (e[t + a].interpolatedValue = s * (1 - n) + r * n)
                        }
                    }
                }
            }

            function ft(e, t) {
                var i;
                var a = [];
                var n;
                var s;
                var r;
                var o;
                var l = e ? e.length : 0;
                for (i = 0; i < l; i++) {
                    n = e[i].points;
                    Object.keys(n).forEach((function(e) {
                        var i = false;
                        o = n[e].idx;
                        a[o] || (a[o] = {
                            pos: 0,
                            neg: 0,
                            total: 0
                        });
                        r = n[e];
                        if (!r) return;
                        s = r.isNaN ? Number.isNaN(+r.interpolatedValue) ? 0 : r.interpolatedValue : r.value;
                        if (!Number.isNaN(+s)) {
                            if (t) {
                                0 === s ? r.hasLeftNeighbour && n[e - 1] ? i = n[e - 1].aggregated.end < 0 : r.hasRightNeighbour && n[e + 1] && (i = n[e + 1].aggregated.end < 0) : i = s < 0;
                                if (i) {
                                    r.aggregated.start = a[o].neg;
                                    a[o].neg += s;
                                    r.aggregated.end = a[o].neg
                                } else {
                                    r.aggregated.start = a[o].pos;
                                    a[o].pos += s;
                                    r.aggregated.end = a[o].pos
                                }
                            } else {
                                r.aggregated.start = a[o].total;
                                a[o].total += s;
                                a[o].pos = Math.max(a[o].pos, a[o].total);
                                a[o].neg = Math.min(a[o].neg, a[o].total);
                                r.aggregated.end = a[o].total
                            }
                            if ("number" === typeof r.interpolatedValue) {
                                r.interpolatedValue = r.aggregated.end;
                                r.isInterpolationOffset = true
                            }
                        }
                    }))
                }
                return {
                    pos: Math.max.apply(null, a.filter((function(e) {
                        return !!e
                    })).map((function(e) {
                        return e.pos
                    }))),
                    neg: Math.min.apply(null, a.filter((function(e) {
                        return !!e
                    })).map((function(e) {
                        return e.neg
                    })))
                }
            }
            var mt = a["a"].extend("LineArea", {
                init: function e() {
                    this._super.apply(this, arguments);
                    this._data = null;
                    this._layoutMode = null;
                    this._selectableShapes = [];
                    this._shapes = [];
                    this._generatedCacheItems = [];
                    this._showDataPoints = true;
                    this._colorMap = null;
                    this._showDataPoints = false;
                    this._lineType = rt.LINE;
                    this._nullMode = ot.GAP;
                    this._separateStacking = true;
                    this._globalAlpha = 1;
                    this._dataLabelMargin = 6;
                    this._maxDataLabelMargin = 12;
                    this._dataLabelHorizontalGap = 6;
                    this._dataLabelVerticalGap = 3;
                    this._horizontalDistanceFromLine = 2;
                    this.interpolateVaryingColors = true;
                    this._styleService = nt["a"].initializeService("object.lineChart");
                    this._lineObjectsModel = new m;
                    this._edgeBleed = 0;
                    this._lineLayer = new J(this.container);
                    this.layers = [this._lineLayer];
                    if (this.isMini) {
                        this._rangeSelectionLayer = new at["a"](this.container);
                        this.layers.push(this._rangeSelectionLayer)
                    } else {
                        this._oobLayer = new Q["a"](this.container);
                        this.layers.push(this._oobLayer);
                        this._labelLayer = new Be(this.container);
                        this.layers.push(this._labelLayer);
                        this._rangeSelectionLayer = new it(this.container);
                        this.layers.push(this._rangeSelectionLayer)
                    }
                },
                setYMirrorMode: function e(t) {
                    this.yMirrorMode = t;
                    this._labelLayer && this._labelLayer.setYMirrorMode(t)
                },
                preRender: function e() {},
                afterPaint: function e() {
                    return st["a"].resolve()
                },
                setColorMap: function e(t) {
                    this._colorMap = t
                },
                getColorMap: function e() {
                    return this._colorMap
                },
                setShowDataPoints: function e(t) {
                    this._showDataPoints = t
                },
                getShowDataPoints: function e() {
                    return this._showDataPoints
                },
                setMajorAxis: function e(t) {
                    this._majorAxis = t;
                    this._majorAxis.listen("changed", (function() {
                        this.invalidateDisplay()
                    }), this)
                },
                setMinorAxis: function e(t) {
                    this._minorAxis = t;
                    this._minorAxis.listen("changed", (function() {
                        this.invalidateDisplay()
                    }), this)
                },
                setTimeAxis: function e(t) {
                    this.timeAxis = t;
                    this.timeAxis.listen("changed", (function() {
                        this.invalidateDisplay()
                    }), this)
                },
                setContinuousAxis: function e(t) {
                    this.continuousAxis = t;
                    this.continuousAxis.listen("changed", (function() {
                        this.invalidateDisplay()
                    }), this)
                },
                setActiveDimensionAxis: function e(t) {
                    this._activeDimAxis = t
                },
                setSecondaryMinorAxis: function e(t) {
                    this._secondaryMinorAxis = t;
                    this._secondaryMinorAxis.listen("changed", (function() {
                        this.invalidateDisplay()
                    }), this)
                },
                setIsDimensionContinuous: function e(t) {
                    this.isDimensionContinuous = t;
                    this._edgeBleed = this.isDimensionContinuous ? 5 : 0
                },
                setDimensionTree: function e(t) {
                    this._tree = t;
                    this.invalidateProperties("linearea: setDimensionTree")
                },
                setLineType: function e(t) {
                    this._lineType = t
                },
                setNullMode: function e(t) {
                    this._nullMode = t
                },
                setSeparateStacking: function e(t) {
                    this._separateStacking = t
                },
                setShowDataPointLabels: function e(t) {
                    this._showDataPointLabels = t
                },
                getShowDataPointLabels: function e() {
                    return this._showDataPointLabels
                },
                freezeZOrdering: function e() {
                    this._zOrderFreezed = true
                },
                unFreezeZOrdering: function e() {
                    this._zOrderFreezed = false
                },
                setColorMappings: function e(t) {
                    this._colorMappings = t
                },
                _updateSize: function e() {
                    this.invalidateDisplay()
                },
                getCacheItems: function e() {
                    return this._cacheItems
                },
                setCacheItems: function e(t) {
                    this._cacheItems = t
                },
                getGeneratedCacheItems: function e() {
                    return this._generatedCacheItems || []
                },
                setMeasureIndices: function e(t) {
                    this._measureIndices = t
                },
                getMajorAxisData: function e() {
                    return this._majorAxisData
                },
                getMinorAxisData: function e() {
                    return this._minorAxisData
                },
                renderRangeSelections: function e() {
                    this._rangeSelectionLayer.update(this._activeDimAxis, this._lineLayer);
                    return this._rangeSelectionLayer.render()
                },
                updateRangeSelection: function e(t) {
                    this._rangeSelectionLayer.setRanges(t);
                    this.renderRangeSelections()
                },
                _updateProperties: function e() {
                    if (!this._data || !this._tree) return;
                    this._minorAxes = [this._minorAxis];
                    this._secondaryMinorAxis && this._minorAxes.push(this._secondaryMinorAxis);
                    this._majorAxisData = ht.call(this);
                    this._minorAxisData = null;
                    var t = [];
                    var i = this._data.qHyperCube.qDimensionInfo;
                    var a = i.length;
                    var s = this._measureIndices ? this._measureIndices.length : this._data.qHyperCube.qMeasureInfo.length;
                    var r = this._data.qHyperCube.qMeasureInfo;
                    var o = this._tree;
                    var l;
                    var h = this._shapes;
                    var c = o.children.length;
                    var u;
                    var d;
                    var p;
                    var f;
                    var m = 0;
                    var v = this._shapes.length;
                    var g = {};
                    var x = this.measureFormatters;
                    var _;
                    var y;
                    var b = this.selectionIdentifier ? this.selectionIdentifier : "dataArea";
                    var M = this._minorAxes;
                    var A = [];
                    var D = [];
                    if (this._measureIndices) D = this._measureIndices;
                    else if (s > 0 && s < 20)
                        while (D.length < s) D.push(D.slice(-1)[0] + 1 || 0);
                    D.forEach((function(e) {
                        A[e] = M.filter((function(t) {
                            return !t._dataIndices || t._dataIndices.indexOf(e) >= 0
                        }))[0]
                    }));
                    this._measureToAxis = A;
                    this._measureToAxisIndex = A.map((function(e) {
                        return M.indexOf(e)
                    }));
                    this._polysData = [];
                    if (c && D || D.length) {
                        o.children.forEach((function(e, s) {
                            e.id = "".concat(i[0].cId, "_").concat(e.data.qElemNo);
                            e.children.forEach((function(o, c) {
                                if (a > 1) {
                                    l = "".concat(e.id, ";").concat(i[1].cId, "_").concat(o.data.qElemNo);
                                    var M = "X".concat(o.data.qElemNo);
                                    y = g[M];
                                    if (!y) {
                                        g[M] = {
                                            info: {
                                                label: o.data.qText
                                            },
                                            points: [],
                                            values: [],
                                            measureIdx: a > 1 ? 0 : c
                                        };
                                        y = g[M]
                                    }
                                    o = o.children[0];
                                    _ = x[0]
                                } else {
                                    if (this._measureIndices && this._measureIndices.indexOf(c) < 0) return;
                                    l = e.id;
                                    y = g[c];
                                    if (!y) {
                                        g[c] = {
                                            info: {
                                                label: r[c].qFallbackTitle
                                            },
                                            measureIdx: c,
                                            points: [],
                                            values: []
                                        };
                                        y = g[c]
                                    }
                                    _ = x[c]
                                }
                                d = o ? o.children[0] : void 0;
                                if (!d) return;
                                u = void 0 !== d.data.qValue ? d.data.qValue : d.data.qNum;
                                f = Number.isNaN(+u);
                                if (this._nullMode === ot.ZERO && f) {
                                    u = 0;
                                    f = false
                                }
                                o.chartData = {
                                    value: u,
                                    isNaN: f,
                                    idx: s,
                                    measureIdx: a > 1 ? 0 : c,
                                    hasLeftNeighbour: !!y.points[s - 1] && !y.points[s - 1].isNaN,
                                    hasRightNeighbour: false,
                                    color: null,
                                    text: d.data.qText,
                                    label: d.data.qText ? _ && ("U" === _.type || Number.isNaN(+d.data.qNum)) ? _.formatValue(u) : d.data.qText : "",
                                    rowIndex: o.data.rowIndex,
                                    dimValue: e.data.qNum,
                                    id: l,
                                    aggregated: {}
                                };
                                if (!o.chartData.isNaN) {
                                    o.chartData.aggregated.start = 0;
                                    o.chartData.aggregated.end = u;
                                    y.values.push(u)
                                }
                                y.points[s] = o.chartData;
                                y.points[s - 1] && (y.points[s - 1].hasRightNeighbour = !o.chartData.isNaN);
                                o.chartData.shapeIndex = m++;
                                v < m && h.push(new n["a"](NaN, NaN, NaN));
                                o.chartData.cacheCircle = h[o.chartData.shapeIndex];
                                p = o.parent;
                                if (p.cacheItem) {
                                    t.indexOf(p.cacheItem) < 0 && t.push(p.cacheItem);
                                    o.chartData.cacheItem = p.cacheItem;
                                    p.cacheItem.addShape(b, o.chartData.cacheCircle, true);
                                    p.cacheItem.calculateTooltipPosition = true
                                }
                            }), this)
                        }), this);
                        var w = [];
                        var S = s > 1 || a > 1;
                        var C = (this._nullMode === ot.CONNECT || this.isDimensionContinuous) && this._lineType === rt.STACKED && S;
                        var q = this._nullMode === ot.ZERO && S && !this.isDimensionContinuous;
                        (C || q) && ut.call(this, g, q);
                        Object.keys(g).forEach((function(e) {
                            (C || this._nullMode !== ot.ZERO) && dt.call(this, g[e].points);
                            C && pt.call(this, g[e].points);
                            this.isDimensionContinuous || (g[e].points = g[e].points.filter(ct));
                            w.push(g[e])
                        }), this);
                        this._polysData = w;
                        if (this._zOrderFreezed) {
                            var L = this._sortedOrder;
                            this._polysData.forEach((function(e, t) {
                                e.idx = t
                            }));
                            this._polysData.sort((function(e, t) {
                                return L.indexOf(e.idx) - L.indexOf(t.idx)
                            }))
                        } else {
                            if (this._lineType === rt.AREA) {
                                this._polysData.forEach((function(e, t) {
                                    e.idx = t;
                                    e.values.sort((function(e, t) {
                                        return t - e
                                    }));
                                    e.absMedian = Math.abs(e.values[Math.floor(e.values.length / 2)])
                                }));
                                this._polysData.sort((function(e, t) {
                                    return t.absMedian - e.absMedian
                                }))
                            } else this._polysData.forEach((function(e, t) {
                                e.idx = t
                            }));
                            this._sortedOrder = this._polysData.map((function(e) {
                                return e.idx
                            }))
                        }
                        if (this._lineType === rt.STACKED && (s > 1 || a > 1)) {
                            var P = ft.apply(this, [w, this._separateStacking]);
                            this._minorAxisData = {
                                min: P.neg >= 0 ? 0 : P.neg,
                                max: P.pos < 0 ? 0 : P.pos
                            }
                        }
                    }
                    this._shapes.length > m && (this._shapes = this._shapes.slice(0, m));
                    this.setSelectableShapes(t);
                    this._lineLayer.updateInstances(this._polysData, {
                        showArea: [rt.AREA, rt.STACKED].includes(this._lineType)
                    })
                },
                hasValidData: function e() {
                    return this._super() && this._majorAxis && this._minorAxis && this._data && this._tree
                },
                updateSize: function e() {
                    this._super();
                    this.layers.forEach((function(e) {
                        e.rect = this.rect;
                        e.renderer.setDimensions(0, -1, this.rect.width, this.rect.height + 1);
                        e.renderer.setDimensionsToContainerRatio(this.layoutToContainerRatios.x, this.layoutToContainerRatios.y)
                    }), this);
                    this._style = lt(this._styleService, this._layoutMode)
                },
                preRelevantSizeCalculation: function e() {
                    this.perpendicularlyRelevantSpacing = {
                        left: this._edgeBleed,
                        right: this._edgeBleed,
                        top: 1,
                        bottom: this._edgeBleed
                    }
                },
                release: function e() {
                    this.layers.forEach((function(e) {
                        e.release()
                    }));
                    this._super();
                    this._majorAxis && this._majorAxis.stopListen("changed", null, this);
                    this._minorAxis && this._minorAxis.stopListen("changed", null, this);
                    this._secondaryMinorAxis && this._secondaryMinorAxis.stopListen("changed", null, this);
                    this.timeAxis && this.timeAxis.stopListen("changed", null, this);
                    this.continuousAxis && this.continuousAxis.stopListen("changed", null, this)
                },
                beforeLayerUpdates: function e() {},
                paint: function e() {
                    this._majorAxis.updateNow();
                    this._minorAxis.updateNow();
                    this._activeDimAxis && this._activeDimAxis.updateNow();
                    var t = {
                        numDimensions: this._data.qHyperCube.qDimensionInfo.length,
                        showDataPoints: this._showDataPoints && this._layoutMode > this.ShowFlags.SPARK,
                        nullMode: this._nullMode,
                        globalAlpha: this._globalAlpha,
                        majorAxis: this._majorAxis,
                        minorAxes: this._minorAxes,
                        numericAxis: this._activeDimAxis,
                        isNumeric: this.isDimensionContinuous,
                        measureToAxisIndex: this._measureToAxisIndex,
                        axesSettings: this._minorAxes.map(this._getAxisDetails),
                        combinedMeasuresFormatter: this.combinedMeasuresFormatter,
                        interpolateVaryingColors: this.interpolateVaryingColors,
                        colorMap: this._colorMap,
                        rect: this.rect,
                        style: this._style,
                        markerSize: Math.min(8, this._majorAxis.getDiscreteSpacing() / 2),
                        yMirrorMode: this.yMirrorMode
                    };
                    var i = this;
                    var a = [];
                    this._lineObjectsModel.update(this._polysData, t);
                    this.beforeLayerUpdates(this._lineObjectsModel.getLineObjectsSettings());
                    this._lineLayer.renderer.edgeBleed = {
                        left: this._edgeBleed,
                        right: this._edgeBleed,
                        top: 1,
                        bottom: this._edgeBleed
                    };
                    this._lineLayer.update(this._lineObjectsModel.getLineObjectsSettings());
                    this.preRender(this._lineLayer._lineObjects);
                    a.push(this._lineLayer.render());
                    if (this._oobLayer) {
                        this._oobLayer.renderer.edgeBleed = {
                            left: this._edgeBleed,
                            right: this._edgeBleed,
                            top: 0,
                            bottom: this._edgeBleed
                        };
                        this._oobLayer.update(this._lineObjectsModel.getPointsOutOfRange(), t);
                        a.push(this._oobLayer.render())
                    }
                    if (this._labelLayer)
                        if (this._layoutMode > this.ShowFlags.XSMALL && this._showDataPointLabels && this._showDataPoints) {
                            this._labelLayer.renderer.edgeBleed = {
                                left: this._edgeBleed,
                                right: this._edgeBleed,
                                top: 0,
                                bottom: this._edgeBleed
                            };
                            this._labelLayer.update(this._lineLayer.getLineObjects(), t);
                            this._labelLayer.show();
                            a.push(this._labelLayer.render())
                        } else this._labelLayer.hide();
                    this._rangeSelectionLayer && a.push(this.renderRangeSelections());
                    return st["a"].all(a).then((function() {
                        return i.afterPaint(t.axesSettings[0].topCutoff, t.axesSettings[0].bottomCutoff)
                    }))
                },
                clear: function e() {
                    this._super();
                    this.layers.forEach((function(e) {
                        e.clear()
                    }))
                },
                _getAxisDetails: function e(t) {
                    var i = t.getPlotMin();
                    var a = t.getPlotMax();
                    var n = a - i;
                    var s = t.getPadding();
                    var r = s.top;
                    var o = t.rect.height - s.bottom;
                    var l = 0;
                    l = i > 0 ? o : a < 0 ? r : Math.ceil(t.getPositionOfValue(0) + 1e-5);
                    return {
                        plotMin: i,
                        plotMax: a,
                        posMin: t.getPositionOfValue(i),
                        posMax: t.getPositionOfValue(a),
                        plotRange: n,
                        topCutoff: r,
                        bottomCutoff: o,
                        areaStartBase: l,
                        zeroPos: Math.floor(t.getPositionOfValue(0)) - .5
                    }
                }
            });
            var vt = t["a"] = mt
        }
    }
]);
