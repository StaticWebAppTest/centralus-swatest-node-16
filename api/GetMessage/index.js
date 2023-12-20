module.exports = async function (context, req) {
  const date = "2023-12-20T00:35:55.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

