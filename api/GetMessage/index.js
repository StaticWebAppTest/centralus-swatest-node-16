module.exports = async function (context, req) {
  const date = "2024-08-31T13:13:22.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

