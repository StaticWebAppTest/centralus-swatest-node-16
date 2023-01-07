module.exports = async function (context, req) {
  const date = "2023-01-07T03:10:14.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

