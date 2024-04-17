module.exports = async function (context, req) {
  const date = "2024-04-17T04:12:24.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

