module.exports = async function (context, req) {
  const date = "2024-01-17T02:24:49.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

