module.exports = async function (context, req) {
  const date = "2024-08-13T08:13:39.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

