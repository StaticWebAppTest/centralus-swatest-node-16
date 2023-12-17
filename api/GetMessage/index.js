module.exports = async function (context, req) {
  const date = "2023-12-17T23:08:58.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

