module.exports = async function (context, req) {
  const date = "2023-02-02T02:16:43.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

