module.exports = async function (context, req) {
  const date = "2025-02-14T15:12:25.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

