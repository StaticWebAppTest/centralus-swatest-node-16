module.exports = async function (context, req) {
  const date = "2024-02-05T12:16:10.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

