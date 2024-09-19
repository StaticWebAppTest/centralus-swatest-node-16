module.exports = async function (context, req) {
  const date = "2024-09-19T12:21:31.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

