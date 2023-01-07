module.exports = async function (context, req) {
  const date = "2023-01-07T07:08:25.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

