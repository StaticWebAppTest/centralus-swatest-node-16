module.exports = async function (context, req) {
  const date = "2024-12-03T06:18:37.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

