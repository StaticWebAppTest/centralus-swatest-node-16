module.exports = async function (context, req) {
  const date = "2023-08-25T00:39:24.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

