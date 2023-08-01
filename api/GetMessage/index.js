module.exports = async function (context, req) {
  const date = "2023-08-01T22:07:51.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

