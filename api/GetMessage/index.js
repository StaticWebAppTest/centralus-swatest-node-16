module.exports = async function (context, req) {
  const date = "2024-04-04T12:16:35.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

