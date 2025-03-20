module.exports = async function (context, req) {
  const date = "2025-03-20T21:11:42.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

