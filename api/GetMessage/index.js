module.exports = async function (context, req) {
  const date = "2023-11-07T12:16:33.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

