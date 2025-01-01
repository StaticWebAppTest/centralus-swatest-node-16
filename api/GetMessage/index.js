module.exports = async function (context, req) {
  const date = "2025-01-01T21:11:09.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

