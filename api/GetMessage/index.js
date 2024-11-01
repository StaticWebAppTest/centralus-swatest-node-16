module.exports = async function (context, req) {
  const date = "2024-11-01T16:13:52.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

