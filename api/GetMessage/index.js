module.exports = async function (context, req) {
  const date = "2025-10-03T10:13:27.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

