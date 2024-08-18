module.exports = async function (context, req) {
  const date = "2024-08-18T17:08:25.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

