module.exports = async function (context, req) {
  const date = "2025-01-19T15:10:53.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

