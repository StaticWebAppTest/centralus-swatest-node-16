module.exports = async function (context, req) {
  const date = "2024-11-02T20:12:28.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

