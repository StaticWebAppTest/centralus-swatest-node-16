module.exports = async function (context, req) {
  const date = "2025-01-19T07:10:14.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

