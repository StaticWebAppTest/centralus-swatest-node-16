module.exports = async function (context, req) {
  const date = "2024-01-27T16:10:05.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

