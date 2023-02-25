module.exports = async function (context, req) {
  const date = "2023-02-25T00:53:41.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

