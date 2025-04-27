module.exports = async function (context, req) {
  const date = "2025-04-27T19:10:44.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

