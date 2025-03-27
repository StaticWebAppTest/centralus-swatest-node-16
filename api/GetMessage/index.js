module.exports = async function (context, req) {
  const date = "2025-03-27T13:22:18.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

