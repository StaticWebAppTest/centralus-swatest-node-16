module.exports = async function (context, req) {
  const date = "2022-12-28T13:13:47.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

