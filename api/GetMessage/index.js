module.exports = async function (context, req) {
  const date = "2024-09-15T16:13:35.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

