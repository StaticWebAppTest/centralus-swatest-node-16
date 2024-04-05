module.exports = async function (context, req) {
  const date = "2024-04-05T13:10:17.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

