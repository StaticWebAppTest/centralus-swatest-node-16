module.exports = async function (context, req) {
  const date = "2024-01-31T16:11:00.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

