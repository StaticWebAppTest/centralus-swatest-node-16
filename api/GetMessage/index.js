module.exports = async function (context, req) {
  const date = "2023-02-10T17:09:18.040Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

