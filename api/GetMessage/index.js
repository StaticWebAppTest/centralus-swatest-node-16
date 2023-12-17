module.exports = async function (context, req) {
  const date = "2023-12-17T17:07:58.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

