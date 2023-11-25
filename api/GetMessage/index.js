module.exports = async function (context, req) {
  const date = "2023-11-25T01:43:43.743Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

