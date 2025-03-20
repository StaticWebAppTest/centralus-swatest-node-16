module.exports = async function (context, req) {
  const date = "2025-03-20T10:13:24.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

