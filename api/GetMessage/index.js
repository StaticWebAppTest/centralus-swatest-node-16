module.exports = async function (context, req) {
  const date = "2025-03-15T15:11:01.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

