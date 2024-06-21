module.exports = async function (context, req) {
  const date = "2024-06-21T19:07:59.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

