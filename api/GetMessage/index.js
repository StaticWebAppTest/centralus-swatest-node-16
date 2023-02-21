module.exports = async function (context, req) {
  const date = "2023-02-21T00:55:28.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

