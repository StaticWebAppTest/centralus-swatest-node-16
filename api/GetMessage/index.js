module.exports = async function (context, req) {
  const date = "2024-01-17T06:12:45.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

