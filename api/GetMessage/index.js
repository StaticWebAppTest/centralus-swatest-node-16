module.exports = async function (context, req) {
  const date = "2024-02-22T00:40:53.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

