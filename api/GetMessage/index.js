module.exports = async function (context, req) {
  const date = "2024-04-27T04:10:45.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

