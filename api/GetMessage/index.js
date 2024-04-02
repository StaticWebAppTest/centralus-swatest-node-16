module.exports = async function (context, req) {
  const date = "2024-04-02T15:08:53.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

