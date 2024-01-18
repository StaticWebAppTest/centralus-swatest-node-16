module.exports = async function (context, req) {
  const date = "2024-01-18T20:09:53.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

