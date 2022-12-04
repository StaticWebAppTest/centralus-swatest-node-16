module.exports = async function (context, req) {
  const date = "2022-12-04T20:09:40.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

