module.exports = async function (context, req) {
  const date = "2025-03-24T19:10:20.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

