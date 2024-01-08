module.exports = async function (context, req) {
  const date = "2024-01-08T00:44:59.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

