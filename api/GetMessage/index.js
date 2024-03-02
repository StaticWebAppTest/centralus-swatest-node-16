module.exports = async function (context, req) {
  const date = "2024-03-02T00:40:05.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

