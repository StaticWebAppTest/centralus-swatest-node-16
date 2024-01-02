module.exports = async function (context, req) {
  const date = "2024-01-02T19:07:17.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

