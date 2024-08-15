module.exports = async function (context, req) {
  const date = "2024-08-15T05:11:14.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

