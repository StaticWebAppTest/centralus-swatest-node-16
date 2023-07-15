module.exports = async function (context, req) {
  const date = "2023-07-15T19:07:14.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

