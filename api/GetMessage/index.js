module.exports = async function (context, req) {
  const date = "2025-02-03T11:09:27.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

