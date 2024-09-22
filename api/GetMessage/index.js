module.exports = async function (context, req) {
  const date = "2024-09-22T13:14:56.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

