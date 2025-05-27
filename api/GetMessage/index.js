module.exports = async function (context, req) {
  const date = "2025-05-27T03:06:26.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

