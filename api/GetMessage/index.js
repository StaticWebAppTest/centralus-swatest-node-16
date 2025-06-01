module.exports = async function (context, req) {
  const date = "2025-06-01T10:13:40.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

