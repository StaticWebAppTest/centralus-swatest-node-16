module.exports = async function (context, req) {
  const date = "2024-01-14T04:11:23.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

