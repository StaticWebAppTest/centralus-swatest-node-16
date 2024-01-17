module.exports = async function (context, req) {
  const date = "2024-01-17T00:44:31.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

