module.exports = async function (context, req) {
  const date = "2024-06-20T06:14:12.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

