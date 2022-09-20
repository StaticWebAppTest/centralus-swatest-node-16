module.exports = async function (context, req) {
  const date = "2022-09-20T01:11:25.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

