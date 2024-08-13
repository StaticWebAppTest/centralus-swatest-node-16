module.exports = async function (context, req) {
  const date = "2024-08-13T10:12:11.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

