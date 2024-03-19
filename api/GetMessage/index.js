module.exports = async function (context, req) {
  const date = "2024-03-19T02:15:36.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

