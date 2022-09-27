module.exports = async function (context, req) {
  const date = "2022-09-27T12:27:46.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

