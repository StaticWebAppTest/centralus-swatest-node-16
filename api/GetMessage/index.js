module.exports = async function (context, req) {
  const date = "2022-07-05T17:18:48.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

