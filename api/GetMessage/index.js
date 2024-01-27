module.exports = async function (context, req) {
  const date = "2024-01-27T19:07:21.066Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

