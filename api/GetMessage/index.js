module.exports = async function (context, req) {
  const date = "2024-08-05T23:12:01.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

