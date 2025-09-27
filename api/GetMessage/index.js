module.exports = async function (context, req) {
  const date = "2025-09-27T17:09:23.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

