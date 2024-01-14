module.exports = async function (context, req) {
  const date = "2024-01-14T23:09:17.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

