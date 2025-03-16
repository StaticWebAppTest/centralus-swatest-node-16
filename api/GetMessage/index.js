module.exports = async function (context, req) {
  const date = "2025-03-16T10:11:51.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

