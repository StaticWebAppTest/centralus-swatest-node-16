module.exports = async function (context, req) {
  const date = "2024-01-20T03:09:50.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

