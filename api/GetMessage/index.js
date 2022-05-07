module.exports = async function (context, req) {
  const date = "2022-05-07T04:12:50.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

