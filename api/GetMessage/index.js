module.exports = async function (context, req) {
  const date = "2023-08-23T23:08:29.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

