module.exports = async function (context, req) {
  const date = "2024-03-25T08:13:29.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

