module.exports = async function (context, req) {
  const date = "2024-04-28T16:10:26.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

