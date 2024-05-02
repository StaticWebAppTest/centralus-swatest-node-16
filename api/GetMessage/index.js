module.exports = async function (context, req) {
  const date = "2024-05-02T01:46:53.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

