module.exports = async function (context, req) {
  const date = "2024-08-30T04:13:39.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

