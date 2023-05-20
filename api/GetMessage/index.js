module.exports = async function (context, req) {
  const date = "2023-05-20T00:45:41.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

