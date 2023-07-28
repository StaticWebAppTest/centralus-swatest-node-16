module.exports = async function (context, req) {
  const date = "2023-07-28T01:58:20.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

