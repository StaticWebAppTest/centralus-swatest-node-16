module.exports = async function (context, req) {
  const date = "2024-12-07T09:11:49.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

