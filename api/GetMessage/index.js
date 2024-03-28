module.exports = async function (context, req) {
  const date = "2024-03-28T02:19:25.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

