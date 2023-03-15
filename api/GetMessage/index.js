module.exports = async function (context, req) {
  const date = "2023-03-15T03:10:24.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

