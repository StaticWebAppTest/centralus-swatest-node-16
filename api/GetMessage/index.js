module.exports = async function (context, req) {
  const date = "2025-04-28T13:35:48.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

