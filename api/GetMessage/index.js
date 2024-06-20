module.exports = async function (context, req) {
  const date = "2024-06-20T15:11:13.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

