module.exports = async function (context, req) {
  const date = "2024-01-14T12:15:52.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

