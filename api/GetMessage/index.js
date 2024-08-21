module.exports = async function (context, req) {
  const date = "2024-08-21T22:09:55.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

