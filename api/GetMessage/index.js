module.exports = async function (context, req) {
  const date = "2022-10-15T01:15:25.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

