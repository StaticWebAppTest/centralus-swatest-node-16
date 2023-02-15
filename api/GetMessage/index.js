module.exports = async function (context, req) {
  const date = "2023-02-15T00:53:27.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

