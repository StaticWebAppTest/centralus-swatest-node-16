module.exports = async function (context, req) {
  const date = "2025-03-14T19:10:23.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

