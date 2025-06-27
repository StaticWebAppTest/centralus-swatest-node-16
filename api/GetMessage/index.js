module.exports = async function (context, req) {
  const date = "2025-06-27T10:15:08.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

