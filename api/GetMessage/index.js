module.exports = async function (context, req) {
  const date = "2024-01-31T04:10:54.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

