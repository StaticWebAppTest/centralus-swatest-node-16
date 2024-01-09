module.exports = async function (context, req) {
  const date = "2024-01-09T16:11:52.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

