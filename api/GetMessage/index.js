module.exports = async function (context, req) {
  const date = "2023-08-26T10:07:52.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

