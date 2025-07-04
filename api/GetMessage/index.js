module.exports = async function (context, req) {
  const date = "2025-07-04T08:18:55.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

