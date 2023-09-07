module.exports = async function (context, req) {
  const date = "2023-09-07T01:41:46.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

