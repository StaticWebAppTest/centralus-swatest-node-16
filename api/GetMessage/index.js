module.exports = async function (context, req) {
  const date = "2024-01-22T15:10:19.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

