module.exports = async function (context, req) {
  const date = "2023-03-14T18:14:40.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

