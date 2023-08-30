module.exports = async function (context, req) {
  const date = "2023-08-30T00:39:42.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

