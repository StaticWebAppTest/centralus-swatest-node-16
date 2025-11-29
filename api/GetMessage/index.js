module.exports = async function (context, req) {
  const date = "2025-11-29T15:12:39.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

