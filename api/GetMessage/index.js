module.exports = async function (context, req) {
  const date = "2024-09-05T23:11:50.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

