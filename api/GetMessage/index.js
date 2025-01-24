module.exports = async function (context, req) {
  const date = "2025-01-24T03:13:44.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

