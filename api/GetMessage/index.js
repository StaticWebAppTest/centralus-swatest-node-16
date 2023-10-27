module.exports = async function (context, req) {
  const date = "2023-10-27T06:11:57.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

