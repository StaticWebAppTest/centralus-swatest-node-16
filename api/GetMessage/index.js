module.exports = async function (context, req) {
  const date = "2023-02-05T05:08:27.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

