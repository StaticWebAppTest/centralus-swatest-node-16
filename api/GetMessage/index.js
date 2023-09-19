module.exports = async function (context, req) {
  const date = "2023-09-19T00:40:42.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

