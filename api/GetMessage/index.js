module.exports = async function (context, req) {
  const date = "2025-12-01T16:20:13.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

