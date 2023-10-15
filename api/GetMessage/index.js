module.exports = async function (context, req) {
  const date = "2023-10-15T00:44:11.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

