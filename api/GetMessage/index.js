module.exports = async function (context, req) {
  const date = "2025-05-28T01:06:32.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

