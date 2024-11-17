module.exports = async function (context, req) {
  const date = "2024-11-17T20:12:23.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

