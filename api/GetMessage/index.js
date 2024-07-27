module.exports = async function (context, req) {
  const date = "2024-07-27T16:12:32.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

