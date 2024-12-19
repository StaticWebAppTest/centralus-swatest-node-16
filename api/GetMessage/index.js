module.exports = async function (context, req) {
  const date = "2024-12-19T03:24:22.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

