module.exports = async function (context, req) {
  const date = "2024-02-19T19:07:49.735Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

