module.exports = async function (context, req) {
  const date = "2024-01-08T08:13:12.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

