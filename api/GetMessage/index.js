module.exports = async function (context, req) {
  const date = "2023-10-27T01:41:48.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

