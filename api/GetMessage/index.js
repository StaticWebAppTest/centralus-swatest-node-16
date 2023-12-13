module.exports = async function (context, req) {
  const date = "2023-12-13T00:43:33.014Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

