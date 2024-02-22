module.exports = async function (context, req) {
  const date = "2024-02-22T10:09:16.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

