module.exports = async function (context, req) {
  const date = "2025-06-13T03:13:15.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

