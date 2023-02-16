module.exports = async function (context, req) {
  const date = "2023-02-16T00:53:41.593Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

