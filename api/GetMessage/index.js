module.exports = async function (context, req) {
  const date = "2024-01-03T17:08:33.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

