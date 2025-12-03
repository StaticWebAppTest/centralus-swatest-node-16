module.exports = async function (context, req) {
  const date = "2025-12-03T09:18:20.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

