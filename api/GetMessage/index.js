module.exports = async function (context, req) {
  const date = "2025-02-03T02:12:39.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

