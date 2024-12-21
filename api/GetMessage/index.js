module.exports = async function (context, req) {
  const date = "2024-12-21T03:14:18.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

