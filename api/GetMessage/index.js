module.exports = async function (context, req) {
  const date = "2024-04-17T00:42:51.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

