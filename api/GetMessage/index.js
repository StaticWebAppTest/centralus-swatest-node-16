module.exports = async function (context, req) {
  const date = "2025-06-27T08:18:43.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

