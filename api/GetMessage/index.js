module.exports = async function (context, req) {
  const date = "2023-06-02T00:55:34.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

