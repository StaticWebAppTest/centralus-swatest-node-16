module.exports = async function (context, req) {
  const date = "2023-05-02T19:07:39.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

