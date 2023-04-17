module.exports = async function (context, req) {
  const date = "2023-04-17T08:12:15.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

