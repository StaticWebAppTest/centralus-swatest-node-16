module.exports = async function (context, req) {
  const date = "2025-01-10T02:19:40.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

