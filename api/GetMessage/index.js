module.exports = async function (context, req) {
  const date = "2024-03-16T22:08:26.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

