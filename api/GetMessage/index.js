module.exports = async function (context, req) {
  const date = "2023-03-05T19:07:28.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

