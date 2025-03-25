module.exports = async function (context, req) {
  const date = "2025-03-25T10:13:37.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

