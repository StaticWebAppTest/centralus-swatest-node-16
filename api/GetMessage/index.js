module.exports = async function (context, req) {
  const date = "2024-01-25T21:07:53.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

