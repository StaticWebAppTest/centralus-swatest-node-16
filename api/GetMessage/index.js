module.exports = async function (context, req) {
  const date = "2024-09-05T05:11:00.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

