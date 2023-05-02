module.exports = async function (context, req) {
  const date = "2023-05-02T00:48:33.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

