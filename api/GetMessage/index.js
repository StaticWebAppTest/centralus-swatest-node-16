module.exports = async function (context, req) {
  const date = "2025-03-15T06:16:01.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

