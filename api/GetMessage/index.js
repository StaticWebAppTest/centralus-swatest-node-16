module.exports = async function (context, req) {
  const date = "2025-12-03T08:20:09.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

