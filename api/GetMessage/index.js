module.exports = async function (context, req) {
  const date = "2022-11-24T05:09:47.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

