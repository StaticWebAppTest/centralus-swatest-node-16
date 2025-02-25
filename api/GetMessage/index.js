module.exports = async function (context, req) {
  const date = "2025-02-25T10:13:12.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

