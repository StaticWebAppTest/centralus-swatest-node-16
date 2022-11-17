module.exports = async function (context, req) {
  const date = "2022-11-17T03:38:35.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

