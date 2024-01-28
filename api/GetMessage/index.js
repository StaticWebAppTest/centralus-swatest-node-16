module.exports = async function (context, req) {
  const date = "2024-01-28T21:08:48.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

