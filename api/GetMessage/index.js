module.exports = async function (context, req) {
  const date = "2023-01-20T00:52:01.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

