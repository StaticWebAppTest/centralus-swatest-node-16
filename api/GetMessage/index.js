module.exports = async function (context, req) {
  const date = "2023-12-06T18:12:01.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

