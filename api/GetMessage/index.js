module.exports = async function (context, req) {
  const date = "2022-09-13T10:13:24.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

