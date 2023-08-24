module.exports = async function (context, req) {
  const date = "2023-08-24T20:08:52.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

