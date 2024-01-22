module.exports = async function (context, req) {
  const date = "2024-01-22T19:07:40.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

