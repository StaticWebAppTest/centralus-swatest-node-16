module.exports = async function (context, req) {
  const date = "2024-12-27T19:08:54.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

