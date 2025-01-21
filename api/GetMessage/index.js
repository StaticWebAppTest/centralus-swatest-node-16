module.exports = async function (context, req) {
  const date = "2025-01-21T07:11:21.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

