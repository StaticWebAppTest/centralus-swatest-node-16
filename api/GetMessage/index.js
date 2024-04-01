module.exports = async function (context, req) {
  const date = "2024-04-01T19:07:03.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

