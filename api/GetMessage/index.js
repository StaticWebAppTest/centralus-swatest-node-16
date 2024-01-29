module.exports = async function (context, req) {
  const date = "2024-01-29T03:09:10.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

