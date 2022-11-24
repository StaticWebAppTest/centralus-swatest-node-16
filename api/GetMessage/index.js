module.exports = async function (context, req) {
  const date = "2022-11-24T12:21:01.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

