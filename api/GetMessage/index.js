module.exports = async function (context, req) {
  const date = "2024-08-27T15:11:17.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

