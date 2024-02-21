module.exports = async function (context, req) {
  const date = "2024-02-21T17:08:13.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

