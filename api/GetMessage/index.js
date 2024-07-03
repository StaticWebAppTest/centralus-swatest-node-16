module.exports = async function (context, req) {
  const date = "2024-07-03T10:11:48.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

