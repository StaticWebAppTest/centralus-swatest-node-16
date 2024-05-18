module.exports = async function (context, req) {
  const date = "2024-05-18T02:22:55.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

