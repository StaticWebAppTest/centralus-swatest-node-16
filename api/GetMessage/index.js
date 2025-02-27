module.exports = async function (context, req) {
  const date = "2025-02-27T08:16:04.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

