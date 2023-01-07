module.exports = async function (context, req) {
  const date = "2023-01-07T22:07:59.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

