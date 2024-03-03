module.exports = async function (context, req) {
  const date = "2024-03-03T08:12:00.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

