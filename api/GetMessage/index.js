module.exports = async function (context, req) {
  const date = "2024-06-22T02:25:03.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

