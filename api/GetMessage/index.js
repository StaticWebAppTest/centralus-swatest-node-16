module.exports = async function (context, req) {
  const date = "2025-01-25T21:09:28.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

