module.exports = async function (context, req) {
  const date = "2024-11-08T10:12:22.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

