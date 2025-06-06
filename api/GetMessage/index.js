module.exports = async function (context, req) {
  const date = "2025-06-06T06:20:27.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

