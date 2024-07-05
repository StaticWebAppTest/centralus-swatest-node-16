module.exports = async function (context, req) {
  const date = "2024-07-05T10:11:20.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

