module.exports = async function (context, req) {
  const date = "2025-12-08T21:12:23.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

