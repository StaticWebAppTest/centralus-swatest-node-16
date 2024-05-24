module.exports = async function (context, req) {
  const date = "2024-05-24T15:11:05.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

