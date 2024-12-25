module.exports = async function (context, req) {
  const date = "2024-12-25T05:11:41.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

