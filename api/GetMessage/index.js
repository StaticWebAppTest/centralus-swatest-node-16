module.exports = async function (context, req) {
  const date = "2023-12-25T00:43:38.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

