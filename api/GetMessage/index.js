module.exports = async function (context, req) {
  const date = "2025-02-28T07:12:17.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

