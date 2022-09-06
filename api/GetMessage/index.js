module.exports = async function (context, req) {
  const date = "2022-09-06T04:16:21.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

