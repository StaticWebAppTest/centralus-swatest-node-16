module.exports = async function (context, req) {
  const date = "2022-06-29T21:10:08.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

