module.exports = async function (context, req) {
  const date = "2024-06-14T09:10:46.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

