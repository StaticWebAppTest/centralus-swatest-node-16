module.exports = async function (context, req) {
  const date = "2022-08-02T18:13:41.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

