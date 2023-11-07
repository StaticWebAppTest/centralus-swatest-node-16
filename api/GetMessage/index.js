module.exports = async function (context, req) {
  const date = "2023-11-07T01:47:58.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

