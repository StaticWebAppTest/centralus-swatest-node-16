module.exports = async function (context, req) {
  const date = "2025-12-20T10:13:48.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

