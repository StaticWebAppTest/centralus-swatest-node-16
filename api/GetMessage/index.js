module.exports = async function (context, req) {
  const date = "2024-09-11T02:08:00.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

