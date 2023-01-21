module.exports = async function (context, req) {
  const date = "2023-01-21T09:08:42.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

