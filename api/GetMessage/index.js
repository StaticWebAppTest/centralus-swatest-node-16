module.exports = async function (context, req) {
  const date = "2023-05-30T13:12:02.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

