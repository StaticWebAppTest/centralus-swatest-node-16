module.exports = async function (context, req) {
  const date = "2024-09-14T11:08:26.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

