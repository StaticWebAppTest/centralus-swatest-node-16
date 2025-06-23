module.exports = async function (context, req) {
  const date = "2025-06-23T17:13:08.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

